'use client';

import { useState } from 'react';

interface NewsletterFormData {
  email: string;
  prenom: string;
  consentement: boolean;
}

export const FormulaireNewsletter = () => {
  const [formData, setFormData] = useState<NewsletterFormData>({
    email: '',
    prenom: '',
    consentement: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.email || !formData.consentement) {
      setMessage({
        type: 'error',
        text: 'Veuillez renseigner votre email et accepter les conditions RGPD.'
      });
      return;
    }

    setIsSubmitting(true);
    setMessage(null);

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setMessage({
          type: 'success',
          text: 'Merci ! Vérifiez votre email pour confirmer votre inscription.'
        });
        setFormData({ email: '', prenom: '', consentement: false });
      } else {
        setMessage({
          type: 'error',
          text: result.error || 'Une erreur est survenue. Veuillez réessayer.'
        });
      }
    } catch (error) {
      setMessage({
        type: 'error',
        text: 'Erreur de connexion. Veuillez réessayer plus tard.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-primary mb-2">
          📧 Newsletter LPCC
        </h3>
        <p className="text-gray-600 text-sm">
          Restez informé(e) de nos actions contre le cancer
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Email - Obligatoire */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            placeholder="votre.email@exemple.com"
          />
        </div>

        {/* Prénom - Optionnel */}
        <div>
          <label htmlFor="prenom" className="block text-sm font-medium text-gray-700 mb-1">
            Prénom <span className="text-gray-400">(optionnel)</span>
          </label>
          <input
            type="text"
            id="prenom"
            name="prenom"
            value={formData.prenom}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            placeholder="Votre prénom"
          />
        </div>

        {/* Consentement RGPD - Obligatoire */}
        <div className="flex items-start space-x-3">
          <input
            type="checkbox"
            id="consentement"
            name="consentement"
            checked={formData.consentement}
            onChange={handleInputChange}
            required
            className="mt-1 h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
          />
          <label htmlFor="consentement" className="text-sm text-gray-700 leading-5">
            <span className="text-red-500">*</span> J'accepte de recevoir la newsletter de Lille Paris Contre le Cancer et que mes données soient traitées conformément à la{' '}
            <a href="/politique-confidentialite" className="text-primary hover:underline" target="_blank">
              politique de confidentialité
            </a>
            . Je peux me désinscrire à tout moment.
          </label>
        </div>

        {/* Message de retour */}
        {message && (
          <div className={`p-3 rounded-md text-sm ${
            message.type === 'success' 
              ? 'bg-green-50 text-green-800 border border-green-200' 
              : 'bg-red-50 text-red-800 border border-red-200'
          }`}>
            {message.text}
          </div>
        )}

        {/* Bouton de soumission */}
        <button
          type="submit"
          disabled={isSubmitting || !formData.email || !formData.consentement}
          className={`w-full py-3 px-4 rounded-md font-medium transition-colors ${
            isSubmitting || !formData.email || !formData.consentement
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
              : 'bg-primary text-white hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2'
          }`}
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Inscription...
            </span>
          ) : (
            "S'inscrire à la newsletter"
          )}
        </button>
      </form>

      {/* Informations RGPD */}
      <div className="mt-4 p-3 bg-gray-50 rounded-md">
        <p className="text-xs text-gray-600">
          <strong>🔒 Vos données sont protégées :</strong> Nous utilisons Mailchimp pour gérer notre newsletter. 
          Vos données ne sont jamais vendues et vous pouvez vous désinscrire à tout moment. 
          Conformité RGPD garantie.
        </p>
      </div>
    </div>
  );
};
