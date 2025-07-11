import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Star, Mail, Phone, MessageCircle } from 'lucide-react';

const InquireModal = ({ isOpen, onClose, product, language }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const translations = {
    en: {
      inquireAbout: 'Inquire About',
      productDetails: 'Product Details',
      price: 'Price',
      carat: 'Carat Weight',
      origin: 'Origin',
      rating: 'Rating',
      contactForm: 'Contact Form',
      name: 'Full Name',
      email: 'Email Address',
      phone: 'Phone Number (Optional)',
      message: 'Message',
      messagePlaceholder: 'I am interested in this gemstone. Please provide more information about availability, certification, and viewing arrangements.',
      sendInquiry: 'Send Inquiry',
      contactMethods: 'Contact Methods',
      emailUs: 'Email Us',
      callUs: 'Call Us',
      whatsapp: 'WhatsApp',
      closeModal: 'Close'
    },
    es: {
      inquireAbout: 'Consultar Sobre',
      productDetails: 'Detalles del Producto',
      price: 'Precio',
      carat: 'Peso en Quilates',
      origin: 'Origen',
      rating: 'Calificación',
      contactForm: 'Formulario de Contacto',
      name: 'Nombre Completo',
      email: 'Correo Electrónico',
      phone: 'Número de Teléfono (Opcional)',
      message: 'Mensaje',
      messagePlaceholder: 'Estoy interesado en esta gema. Por favor proporcione más información sobre disponibilidad, certificación y arreglos de visualización.',
      sendInquiry: 'Enviar Consulta',
      contactMethods: 'Métodos de Contacto',
      emailUs: 'Envíanos un Email',
      callUs: 'Llámanos',
      whatsapp: 'WhatsApp',
      closeModal: 'Cerrar'
    },
    fr: {
      inquireAbout: 'Se Renseigner Sur',
      productDetails: 'Détails du Produit',
      price: 'Prix',
      carat: 'Poids en Carats',
      origin: 'Origine',
      rating: 'Note',
      contactForm: 'Formulaire de Contact',
      name: 'Nom Complet',
      email: 'Adresse Email',
      phone: 'Numéro de Téléphone (Optionnel)',
      message: 'Message',
      messagePlaceholder: 'Je suis intéressé par cette gemme. Veuillez fournir plus d\'informations sur la disponibilité, la certification et les arrangements de visualisation.',
      sendInquiry: 'Envoyer la Demande',
      contactMethods: 'Méthodes de Contact',
      emailUs: 'Envoyez-nous un Email',
      callUs: 'Appelez-nous',
      whatsapp: 'WhatsApp',
      closeModal: 'Fermer'
    },
    ar: {
      inquireAbout: 'الاستفسار عن',
      productDetails: 'تفاصيل المنتج',
      price: 'السعر',
      carat: 'الوزن بالقيراط',
      origin: 'المنشأ',
      rating: 'التقييم',
      contactForm: 'نموذج الاتصال',
      name: 'الاسم الكامل',
      email: 'عنوان البريد الإلكتروني',
      phone: 'رقم الهاتف (اختياري)',
      message: 'الرسالة',
      messagePlaceholder: 'أنا مهتم بهذا الحجر الكريم. يرجى تقديم مزيد من المعلومات حول التوفر والشهادة وترتيبات المشاهدة.',
      sendInquiry: 'إرسال الاستفسار',
      contactMethods: 'طرق الاتصال',
      emailUs: 'راسلنا عبر البريد الإلكتروني',
      callUs: 'اتصل بنا',
      whatsapp: 'واتساب',
      closeModal: 'إغلاق'
    }
  };

  const t = translations[language] || translations.en;

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Create email content
    const subject = `Inquiry about ${product.name}`;
    const body = `Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Product: ${product.name}
Price: $${product.price.toLocaleString()}

Message:
${formData.message}`;
    
    // Open email client
    window.open(`mailto:info@gemifyandco.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`);
    
    // Reset form
    setFormData({ name: '', email: '', phone: '', message: '' });
    onClose();
  };

  if (!product) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white dark:bg-gray-800 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6">
              {/* Header */}
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {t.inquireAbout} {product.name}
                </h2>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
                  aria-label={t.closeModal}
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Product Details */}
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                    {t.productDetails}
                  </h3>
                  
                  <div className="mb-4">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-64 object-cover rounded-lg"
                    />
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="font-medium text-gray-700 dark:text-gray-300">{t.price}:</span>
                      <span className="text-xl font-bold text-primary-gold">${product.price.toLocaleString()}</span>
                    </div>
                    
                    <div className="flex justify-between">
                      <span className="font-medium text-gray-700 dark:text-gray-300">{t.carat}:</span>
                      <span className="text-gray-900 dark:text-white">{product.carat} ct</span>
                    </div>
                    
                    <div className="flex justify-between">
                      <span className="font-medium text-gray-700 dark:text-gray-300">{t.origin}:</span>
                      <span className="text-gray-900 dark:text-white">{product.origin}</span>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-gray-700 dark:text-gray-300">{t.rating}:</span>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < product.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  <p className="mt-4 text-gray-600 dark:text-gray-400">
                    {product.description}
                  </p>

                  {/* Contact Methods */}
                  <div className="mt-6">
                    <h4 className="font-semibold mb-3 text-gray-900 dark:text-white">{t.contactMethods}</h4>
                    <div className="space-y-2">
                      <a
                        href="mailto:info@gemifyandco.com"
                        className="flex items-center gap-2 text-primary-gold hover:text-primary-gold-dark transition-colors"
                      >
                        <Mail className="w-4 h-4" />
                        {t.emailUs}: info@gemifyandco.com
                      </a>
                      <a
                        href="tel:+94742068566"
                        className="flex items-center gap-2 text-primary-gold hover:text-primary-gold-dark transition-colors"
                      >
                        <Phone className="w-4 h-4" />
                        {t.callUs}: +94 74 206 8566
                      </a>
                      <a
                        href="https://wa.me/94742068566"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-primary-gold hover:text-primary-gold-dark transition-colors"
                      >
                        <MessageCircle className="w-4 h-4" />
                        {t.whatsapp}: +94 74 206 8566
                      </a>
                    </div>
                  </div>
                </div>

                {/* Contact Form */}
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                    {t.contactForm}
                  </h3>
                  
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        {t.name} *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-gold dark:bg-gray-700 dark:text-white"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        {t.email} *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-gold dark:bg-gray-700 dark:text-white"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        {t.phone}
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-gold dark:bg-gray-700 dark:text-white"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        {t.message} *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={4}
                        placeholder={t.messagePlaceholder}
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-gold dark:bg-gray-700 dark:text-white"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-primary-gold hover:bg-primary-gold-dark text-white font-semibold py-3 px-6 rounded-md transition-colors duration-200"
                    >
                      {t.sendInquiry}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default InquireModal;

