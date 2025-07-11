import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logo from '../assets/logo.jpg';

const Footer = ({ language }) => {
  const [email, setEmail] = useState('');
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [subscriptionMessage, setSubscriptionMessage] = useState('');

  const handleSubscription = async (e) => {
    e.preventDefault();
    
    if (!email.trim()) {
      setSubscriptionMessage('Please enter your email address');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setSubscriptionMessage('Please enter a valid email address');
      return;
    }

    setIsSubscribing(true);
    setSubscriptionMessage('');
    
    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          email,
          timestamp: new Date().toISOString()
        }),
      });

      if (response.ok) {
        setSubscriptionMessage('Successfully subscribed!');
        setEmail('');
      } else {
        const errorData = await response.json();
        setSubscriptionMessage(errorData.error || 'Failed to subscribe. Please try again.');
      }
    } catch (error) {
      console.error('Error subscribing:', error);
      setSubscriptionMessage('Failed to subscribe. Please try again.');
    } finally {
      setIsSubscribing(false);
    }
  };
  const translations = {
    en: {
      tagline: 'Every Gem Tells A Story, Let Yours Shine',
      quickLinks: 'Quick Links',
      home: 'Home',
      about: 'About',
      collections: 'Collections',
      blog: 'Blog',
      contact: 'Contact',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
      contactInfo: 'Contact Information',
      email: 'Email',
      phone: 'Phone',
      address: 'Address',
      hours: 'Business Hours',
      followUs: 'Follow Us',
      newsletter: 'Newsletter',
      newsletterText: 'Subscribe to our newsletter for the latest gemstone insights and exclusive offers.',
      subscribe: 'Subscribe',
      rights: 'All rights reserved.',
      appointmentOnly: 'By Appointment Only',
      businessHours: 'Monday - Saturday\n9:00 AM - 6:00 PM (Sri Lanka Time)'
    },
    es: {
      tagline: 'Cada Gema Cuenta Una Historia, Deja Que La Tuya Brille',
      quickLinks: 'Enlaces Rápidos',
      home: 'Inicio',
      about: 'Acerca de',
      collections: 'Colecciones',
      blog: 'Blog',
      contact: 'Contacto',
      privacy: 'Política de Privacidad',
      terms: 'Términos de Servicio',
      contactInfo: 'Información de Contacto',
      email: 'Correo',
      phone: 'Teléfono',
      address: 'Dirección',
      hours: 'Horario Comercial',
      followUs: 'Síguenos',
      newsletter: 'Boletín',
      newsletterText: 'Suscríbete a nuestro boletín para obtener las últimas ideas sobre gemas y ofertas exclusivas.',
      subscribe: 'Suscribirse',
      rights: 'Todos los derechos reservados.',
      appointmentOnly: 'Solo con Cita Previa',
      businessHours: 'Lunes - Sábado\n9:00 AM - 6:00 PM (Hora de Sri Lanka)'
    },
    fr: {
      tagline: 'Chaque Gemme Raconte Une Histoire, Laissez La Vôtre Briller',
      quickLinks: 'Liens Rapides',
      home: 'Accueil',
      about: 'À propos',
      collections: 'Collections',
      blog: 'Blog',
      contact: 'Contact',
      privacy: 'Politique de Confidentialité',
      terms: 'Conditions de Service',
      contactInfo: 'Informations de Contact',
      email: 'Email',
      phone: 'Téléphone',
      address: 'Adresse',
      hours: 'Heures d\'Ouverture',
      followUs: 'Suivez-nous',
      newsletter: 'Newsletter',
      newsletterText: 'Abonnez-vous à notre newsletter pour les dernières informations sur les gemmes et les offres exclusives.',
      subscribe: 'S\'abonner',
      rights: 'Tous droits réservés.',
      appointmentOnly: 'Sur Rendez-vous Uniquement',
      businessHours: 'Lundi - Samedi\n9:00 AM - 6:00 PM (Heure du Sri Lanka)'
    },
    ar: {
      tagline: 'كل جوهرة تحكي قصة، دع قصتك تتألق',
      quickLinks: 'روابط سريعة',
      home: 'الرئيسية',
      about: 'حول',
      collections: 'المجموعات',
      blog: 'المدونة',
      contact: 'اتصل',
      privacy: 'سياسة الخصوصية',
      terms: 'شروط الخدمة',
      contactInfo: 'معلومات الاتصال',
      email: 'البريد الإلكتروني',
      phone: 'الهاتف',
      address: 'العنوان',
      hours: 'ساعات العمل',
      followUs: 'تابعنا',
      newsletter: 'النشرة الإخبارية',
      newsletterText: 'اشترك في نشرتنا الإخبارية للحصول على أحدث رؤى الأحجار الكريمة والعروض الحصرية.',
      subscribe: 'اشتراك',
      rights: 'جميع الحقوق محفوظة.',
      appointmentOnly: 'بموعد مسبق فقط',
      businessHours: 'الاثنين - السبت\n9:00 صباحاً - 6:00 مساءً (توقيت سريلانكا)'
    }
  };

  const t = translations[language] || translations.en;

  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com/gemifyandco', label: 'Facebook' },
    { icon: Instagram, href: 'https://instagram.com/gemifyandco', label: 'Instagram' }
  ];

  const quickLinks = [
    { path: '/', label: t.home },
    { path: '/about', label: t.about },
    { path: '/collections', label: t.collections },
    { path: '/blog', label: t.blog },
    { path: '/contact', label: t.contact },
    { path: '/privacy', label: t.privacy },
    { path: '/terms', label: t.terms }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img src={logo} alt="Gemify & Co." className="h-10 w-auto" />
              <span className="font-playfair text-xl font-bold text-primary-gold">
                Gemify & Co.
              </span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              {t.tagline}
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-primary-gold rounded-full flex items-center justify-center hover:bg-yellow-600 transition-colors duration-300"
                >
                  <social.icon className="h-5 w-5 text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-playfair text-lg font-semibold text-primary-gold">
              {t.quickLinks}
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-primary-gold transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="font-playfair text-lg font-semibold text-primary-gold">
              {t.contactInfo}
            </h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-primary-gold mt-0.5" />
                <div>
                  <p className="text-sm text-gray-400">{t.email}</p>
                  <a 
                    href="mailto:info@gemifyandco.com"
                    className="text-sm text-gray-300 hover:text-primary-gold transition-colors"
                  >
                    info@gemifyandco.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-primary-gold mt-0.5" />
                <div>
                  <p className="text-sm text-gray-400">{t.phone}</p>
                  <a 
                    href="tel:+94742068566"
                    className="text-sm text-gray-300 hover:text-primary-gold transition-colors"
                  >
                    +94 74 206 8566
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary-gold mt-0.5" />
                <div>
                  <p className="text-sm text-gray-400">{t.address}</p>
                  <p className="text-sm text-gray-300">{t.appointmentOnly}</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-primary-gold mt-0.5" />
                <div>
                  <p className="text-sm text-gray-400">{t.hours}</p>
                  <p className="text-sm text-gray-300 whitespace-pre-line">{t.businessHours}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="font-playfair text-lg font-semibold text-primary-gold">
              {t.newsletter}
            </h3>
            <p className="text-gray-300 text-sm">
              {t.newsletterText}
            </p>
            <form onSubmit={handleSubscription} className="space-y-2">
              <div className="flex space-x-2">
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary-gold"
                />
                <Button 
                  type="submit"
                  disabled={isSubscribing}
                  className="bg-primary-gold hover:bg-yellow-600 text-white px-4 py-2 text-sm"
                >
                  {isSubscribing ? 'Subscribing...' : t.subscribe}
                </Button>
              </div>
              {subscriptionMessage && (
                <p className={`text-sm ${subscriptionMessage.includes('Successfully') ? 'text-green-400' : 'text-red-400'}`}>
                  {subscriptionMessage}
                </p>
              )}
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 Gemify & Co. {t.rights}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

