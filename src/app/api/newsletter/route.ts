import { NextRequest, NextResponse } from 'next/server';

interface NewsletterRequest {
  email: string;
  prenom?: string;
  consentement: boolean;
}

export async function POST(request: NextRequest) {
  try {
    const body: NewsletterRequest = await request.json();
    
    // Validation des données
    if (!body.email || !body.consentement) {
      return NextResponse.json(
        { error: 'Email et consentement RGPD requis' },
        { status: 400 }
      );
    }

    // Validation format email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: 'Format email invalide' },
        { status: 400 }
      );
    }

    // Vérification des variables d'environnement
    const apiKey = process.env.MAILCHIMP_API_KEY;
    const listId = process.env.MAILCHIMP_LIST_ID;
    const serverPrefix = process.env.MAILCHIMP_SERVER_PREFIX; // ex: us1, us2, etc.

    if (!apiKey || !listId || !serverPrefix) {
      console.error('Variables d\'environnement Mailchimp manquantes');
      return NextResponse.json(
        { error: 'Configuration serveur incomplète' },
        { status: 500 }
      );
    }

    // Préparation des données pour Mailchimp
    const mailchimpData = {
      email_address: body.email,
      status: 'pending', // Double opt-in obligatoire
      merge_fields: {
        FNAME: body.prenom || '', // Prénom optionnel
      },
      tags: ['LPCC-Website'], // Tag pour identifier la source
      timestamp_signup: new Date().toISOString(),
    };

    // Appel API Mailchimp
    const mailchimpUrl = `https://${serverPrefix}.api.mailchimp.com/3.0/lists/${listId}/members`;
    
    const response = await fetch(mailchimpUrl, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(mailchimpData),
    });

    const result = await response.json();

    if (response.ok) {
      // Inscription réussie
      return NextResponse.json({
        success: true,
        message: 'Inscription réussie ! Vérifiez votre email pour confirmer.',
      });
    } else {
      // Gestion des erreurs Mailchimp
      if (result.title === 'Member Exists') {
        return NextResponse.json({
          success: false,
          error: 'Cette adresse email est déjà inscrite à notre newsletter.',
        }, { status: 409 });
      }
      
      console.error('Erreur Mailchimp:', result);
      return NextResponse.json({
        success: false,
        error: 'Erreur lors de l\'inscription. Veuillez réessayer.',
      }, { status: 400 });
    }

  } catch (error) {
    console.error('Erreur API newsletter:', error);
    return NextResponse.json(
      { error: 'Erreur serveur interne' },
      { status: 500 }
    );
  }
}

// Méthode OPTIONS pour CORS si nécessaire
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}
