'use client';

import { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';

interface NewsletterFormData {
  email: string;
  prenom: string;
  nom: string;
  consentement: boolean;
}

export const FormulaireNewsletter = () => {
  const [formData, setFormData] = useState<NewsletterFormData>({
    email: '',
    prenom: '',
    nom: '',
    consentement: false
  });

  // Utilisation du hook officiel Formspree avec l'ID depuis .env.local
  const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID || '';
  const [state, handleSubmit] = useForm(formspreeId);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!formData.email || !formData.consentement) {
      return;
    }

    handleSubmit(e);
  };

  // Réinitialiser le formulaire après succès
  if (state.succeeded) {
    setTimeout(() => {
      setFormData({ email: '', prenom: '', nom: '', consentement: false });
    }, 100);
  }

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

      {state.succeeded ? (
        <div className="text-center p-6">
          <div className="text-green-600 text-5xl mb-4">✅</div>
          <h4 className="text-xl font-bold text-green-800 mb-2">Merci !</h4>
          <p className="text-green-700">
            Votre inscription a été enregistrée avec succès. Vous recevrez bientôt nos actualités !
          </p>
        </div>
      ) : (
        <form onSubmit={onSubmit} className="space-y-4">
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

        {/* Nom - Optionnel */}
        <div>
          <label htmlFor="nom" className="block text-sm font-medium text-gray-700 mb-1">
            Nom <span className="text-gray-400">(optionnel)</span>
          </label>
          <input
            type="text"
            id="nom"
            name="nom"
            value={formData.nom}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            placeholder="Votre nom"
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

        {/* Bouton de soumission */}
        <button
          type="submit"
          disabled={state.submitting || !formData.email || !formData.consentement}
          className={`w-full py-3 px-4 rounded-md font-medium transition-colors ${
            state.submitting || !formData.email || !formData.consentement
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
              : 'bg-primary text-white hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2'
          }`}
        >
          {state.submitting ? (
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

        {/* Validation Errors */}
        <ValidationError 
          prefix="Email" 
          field="email"
          errors={state.errors}
        />
        <ValidationError 
          prefix="Message" 
          field="message"
          errors={state.errors}
        />
      </form>
      )}

      {/* Informations RGPD */}
      <div className="mt-4 p-3 bg-gray-50 rounded-md">
        <p className="text-xs text-gray-600">
          <strong>🔒 Vos données sont protégées :</strong> Nous utilisons Formspree pour collecter vos données de manière sécurisée. 
          Vos informations sont directement envoyées dans nos contacts Google et ne sont jamais vendues. 
          Vous pouvez demander leur suppression à tout moment. Conformité RGPD garantie.
        </p>
      </div>
    </div>
  );
};
