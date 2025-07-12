import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, Calendar, MessageCircle, AlertCircle } from 'lucide-react';

const Contact = ({ language }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    inquiryType: '',
    message: '',
    newsletter: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [errors, setErrors] = useState({});

  const translations = {
    en: {
      pageTitle: 'Contact Us',
      pageSubtitle: 'Get in touch with our gemstone experts',
      getInTouch: 'Get In Touch',
      getInTouchDesc: 'Have questions about our gemstones or need expert advice? We\'re here to help.',
      contactForm: 'Contact Form',
      name: 'Full Name',
      email: 'Email Address',
      phone: 'Phone Number (Optional)',
      subject: 'Subject',
      inquiryType: 'Inquiry Type',
      message: 'Message',
      sendMessage: 'Send Message',
      sending: 'Sending...',
      contactInfo: 'Contact Information',
      emailLabel: 'Email',
      phoneLabel: 'Phone',
      addressLabel: 'Address',
      hoursLabel: 'Business Hours',
      appointmentOnly: 'By Appointment Only',
      businessHours: 'Monday - Saturday\n9:00 AM - 6:00 PM (Sri Lanka Time)',
      successMessage: 'Thank you for your message! We\'ll get back to you within 24 hours.',
      errorMessage: 'Failed to send message. Please try again or contact us directly.',
      sendAnother: 'Send Another Message',
      nameRequired: 'Name is required',
      emailRequired: 'Email is required',
      emailInvalid: 'Please enter a valid email address',
      subjectRequired: 'Subject is required',
      inquiryTypeRequired: 'Please select an inquiry type',
      messageRequired: 'Message is required',
      whatsappContact: 'Contact via WhatsApp',
      emailContact: 'Send Email',
      scheduleConsultation: 'Schedule Consultation',
      consultationDesc: 'Book a private consultation with our gemstone experts to discuss your specific needs and preferences.',
      inquiryTypes: {
        general: 'General Information',
        purchase: 'Purchase Inquiry',
        appraisal: 'Gemstone Appraisal',
        custom: 'Custom Jewelry Design',
        consultation: 'Private Consultation'
      },
      newsletterOptIn: 'Subscribe to our newsletter for exclusive offers and gemstone insights'
    },
    es: {
      pageTitle: 'Contáctanos',
      pageSubtitle: 'Ponte en contacto con nuestros expertos en gemas',
      getInTouch: 'Ponte en Contacto',
      getInTouchDesc: '¿Tienes preguntas sobre nuestras gemas o necesitas asesoramiento experto? Estamos aquí para ayudar.',
      contactForm: 'Formulario de Contacto',
      name: 'Nombre Completo',
      email: 'Correo Electrónico',
      phone: 'Número de Teléfono (Opcional)',
      subject: 'Asunto',
      inquiryType: 'Tipo de Consulta',
      message: 'Mensaje',
      sendMessage: 'Enviar Mensaje',
      sending: 'Enviando...',
      contactInfo: 'Información de Contacto',
      emailLabel: 'Correo',
      phoneLabel: 'Teléfono',
      addressLabel: 'Dirección',
      hoursLabel: 'Horario Comercial',
      appointmentOnly: 'Solo con Cita Previa',
      businessHours: 'Lunes - Sábado\n9:00 AM - 6:00 PM (Hora de Sri Lanka)',
      successMessage: '¡Gracias por tu mensaje! Te responderemos en 24 horas.',
      errorMessage: 'Error al enviar mensaje. Por favor intenta de nuevo o contáctanos directamente.',
      sendAnother: 'Enviar Otro Mensaje',
      nameRequired: 'El nombre es obligatorio',
      emailRequired: 'El correo electrónico es obligatorio',
      emailInvalid: 'Por favor ingresa un correo electrónico válido',
      subjectRequired: 'El asunto es obligatorio',
      inquiryTypeRequired: 'Por favor selecciona un tipo de consulta',
      messageRequired: 'El mensaje es obligatorio',
      whatsappContact: 'Contactar por WhatsApp',
      emailContact: 'Enviar Correo',
      scheduleConsultation: 'Programar Consulta',
      consultationDesc: 'Reserva una consulta privada con nuestros expertos en gemas para discutir tus necesidades y preferencias específicas.',
      inquiryTypes: {
        general: 'Información General',
        purchase: 'Consulta de Compra',
        appraisal: 'Evaluación de Gemas',
        custom: 'Diseño de Joyería Personalizada',
        consultation: 'Consulta Privada'
      },
      newsletterOptIn: 'Suscríbete a nuestro boletín para ofertas exclusivas e información sobre gemas'
    },
    fr: {
      pageTitle: 'Contactez-nous',
      pageSubtitle: 'Entrez en contact avec nos experts en gemmes',
      getInTouch: 'Entrez en Contact',
      getInTouchDesc: 'Vous avez des questions sur nos gemmes ou besoin de conseils d\'experts ? Nous sommes là pour vous aider.',
      contactForm: 'Formulaire de Contact',
      name: 'Nom Complet',
      email: 'Adresse Email',
      phone: 'Numéro de Téléphone (Optionnel)',
      subject: 'Sujet',
      inquiryType: 'Type de Demande',
      message: 'Message',
      sendMessage: 'Envoyer le Message',
      sending: 'Envoi en cours...',
      contactInfo: 'Informations de Contact',
      emailLabel: 'Email',
      phoneLabel: 'Téléphone',
      addressLabel: 'Adresse',
      hoursLabel: 'Heures d\'Ouverture',
      appointmentOnly: 'Sur Rendez-vous Uniquement',
      businessHours: 'Lundi - Samedi\n9:00 AM - 6:00 PM (Heure du Sri Lanka)',
      successMessage: 'Merci pour votre message ! Nous vous répondrons dans les 24 heures.',
      errorMessage: 'Échec de l\'envoi du message. Veuillez réessayer ou nous contacter directement.',
      sendAnother: 'Envoyer un Autre Message',
      nameRequired: 'Le nom est requis',
      emailRequired: 'L\'email est requis',
      emailInvalid: 'Veuillez entrer une adresse email valide',
      subjectRequired: 'Le sujet est requis',
      inquiryTypeRequired: 'Veuillez sélectionner un type de demande',
      messageRequired: 'Le message est requis',
      whatsappContact: 'Contacter via WhatsApp',
      emailContact: 'Envoyer un Email',
      scheduleConsultation: 'Programmer une Consultation',
      consultationDesc: 'Réservez une consultation privée avec nos experts en gemmes pour discuter de vos besoins et préférences spécifiques.',
      inquiryTypes: {
        general: 'Informations Générales',
        purchase: 'Demande d\'Achat',
        appraisal: 'Évaluation de Gemmes',
        custom: 'Conception de Bijoux Personnalisés',
        consultation: 'Consultation Privée'
      },
      newsletterOptIn: 'Abonnez-vous à notre newsletter pour des offres exclusives et des informations sur les gemmes'
    },
    ar: {
      pageTitle: 'اتصل بنا',
      pageSubtitle: 'تواصل مع خبراء الأحجار الكريمة لدينا',
      getInTouch: 'تواصل معنا',
      getInTouchDesc: 'هل لديك أسئلة حول أحجارنا الكريمة أو تحتاج إلى نصيحة خبير؟ نحن هنا للمساعدة.',
      contactForm: 'نموذج الاتصال',
      name: 'الاسم الكامل',
      email: 'عنوان البريد الإلكتروني',
      phone: 'رقم الهاتف (اختياري)',
      subject: 'الموضوع',
      inquiryType: 'نوع الاستفسار',
      message: 'الرسالة',
      sendMessage: 'إرسال الرسالة',
      sending: 'جاري الإرسال...',
      contactInfo: 'معلومات الاتصال',
      emailLabel: 'البريد الإلكتروني',
      phoneLabel: 'الهاتف',
      addressLabel: 'العنوان',
      hoursLabel: 'ساعات العمل',
      appointmentOnly: 'بموعد مسبق فقط',
      businessHours: 'الاثنين - السبت\n9:00 صباحاً - 6:00 مساءً (توقيت سريلانكا)',
      successMessage: 'شكراً لك على رسالتك! سنرد عليك خلال 24 ساعة.',
      errorMessage: 'فشل في إرسال الرسالة. يرجى المحاولة مرة أخرى أو الاتصال بنا مباشرة.',
      sendAnother: 'إرسال رسالة أخرى',
      nameRequired: 'الاسم مطلوب',
      emailRequired: 'البريد الإلكتروني مطلوب',
      emailInvalid: 'يرجى إدخال عنوان بريد إلكتروني صحيح',
      subjectRequired: 'الموضوع مطلوب',
      inquiryTypeRequired: 'يرجى اختيار نوع الاستفسار',
      messageRequired: 'الرسالة مطلوبة',
      whatsappContact: 'التواصل عبر واتساب',
      emailContact: 'إرسال بريد إلكتروني',
      scheduleConsultation: 'جدولة استشارة',
      consultationDesc: 'احجز استشارة خاصة مع خبراء الأحجار الكريمة لدينا لمناقشة احتياجاتك وتفضيلاتك المحددة.',
      inquiryTypes: {
        general: 'معلومات عامة',
        purchase: 'استفسار شراء',
        appraisal: 'تقييم الأحجار الكريمة',
        custom: 'تصميم مجوهرات مخصصة',
        consultation: 'استشارة خاصة'
      },
      newsletterOptIn: 'اشترك في نشرتنا الإخبارية للحصول على عروض حصرية ومعلومات عن الأحجار الكريمة'
    }
  };

  const t = translations[language] || translations.en;

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = t.nameRequired;
    }

    if (!formData.email.trim()) {
      newErrors.email = t.emailRequired;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = t.emailInvalid;
    }

    if (!formData.subject.trim()) {
      newErrors.subject = t.subjectRequired;
    }

    if (!formData.inquiryType) {
      newErrors.inquiryType = t.inquiryTypeRequired;
    }

    if (!formData.message.trim()) {
      newErrors.message = t.messageRequired;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitError('');
    
    try {
      // Enhanced form data with timestamp and additional details
      const submissionData = {
        ...formData,
        timestamp: new Date().toISOString(),
        language: language,
        userAgent: navigator.userAgent,
        referrer: document.referrer || 'Direct'
      };

      const response = await fetch('https://gemify-backend-kevj.onrender.com/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          inquiryType: '',
          message: '',
          newsletter: false
        });
      } else {
        const errorData = await response.json();
        console.error('Error sending message:', errorData.error);
        throw new Error(errorData.error || 'Failed to send message');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setSubmitError(t.errorMessage);
      
      // Fallback to mailto as backup
      const subject = encodeURIComponent(`[${formData.inquiryType}] ${formData.subject}`);
      const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nInquiry Type: ${formData.inquiryType}\n\nMessage:\n${formData.message}\n\nSubmitted: ${new Date().toLocaleString()}`);
      const mailtoUrl = `mailto:info@gemifyandco.com?subject=${subject}&body=${body}`;
      
      setTimeout(() => {
        window.open(mailtoUrl, '_blank');
      }, 2000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      inquiryType: '',
      message: '',
      newsletter: false
    });
    setIsSubmitted(false);
    setSubmitError('');
    setErrors({});
  };

  // Enhanced contact methods with proper email links
  const contactMethods = [
    {
      icon: Mail,
      label: t.emailLabel,
      value: 'info@gemifyandco.com',
      action: () => {
        const subject = encodeURIComponent('Gemstone Inquiry - Gemify & Co.');
        const body = encodeURIComponent('Hello,\n\nI am interested in learning more about your gemstone collection.\n\nBest regards,');
        window.open(`mailto:info@gemifyandco.com?subject=${subject}&body=${body}`, '_blank');
      },
      buttonText: t.emailContact,
      buttonClass: "contact-button-enhanced email-button-glow"
    },
    {
      icon: Phone,
      label: t.phoneLabel,
      value: '+94 74 206 8566',
      action: () => {
        const message = encodeURIComponent('Hello! I\'m interested in your luxury gemstone collection and would like to inquire about your services.');
        window.open(`https://wa.me/94742068566?text=${message}`, '_blank');
      },
      buttonText: t.whatsappContact,
      buttonClass: "contact-button-enhanced whatsapp-button-enhanced"
    },
    {
      icon: MapPin,
      label: t.addressLabel,
      value: t.appointmentOnly,
      action: null,
      buttonText: null
    },
    {
      icon: Clock,
      label: t.hoursLabel,
      value: t.businessHours,
      action: null,
      buttonText: null
    }
  ];

  return (
    <div className="min-h-screen bg-background page-transition">
      {/* Add enhanced styling */}
      <style jsx>{`
        .contact-button-enhanced {
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        
        .contact-button-enhanced:hover {
          transform: translateY(-2px);
        }
        
        .email-button-glow:hover {
          box-shadow: 0 4px 15px rgba(59, 130, 246, 0.3);
        }
        
        .whatsapp-button-enhanced {
          background: linear-gradient(135deg, #25D366 0%, #128C7E 100%);
          color: white;
          border: none;
        }
        
        .whatsapp-button-enhanced:hover {
          background: linear-gradient(135deg, #128C7E 0%, #25D366 100%);
          color: white;
          box-shadow: 0 4px 15px rgba(37, 211, 102, 0.3);
        }
        
        .contact-info-card {
          transition: all 0.3s ease;
          background: linear-gradient(135deg, #ffffff 0%, #fdfcf8 100%);
          border: 1px solid rgba(184, 134, 11, 0.1);
        }
        
        .contact-info-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
          border-color: rgba(184, 134, 11, 0.2);
        }
        
        .contact-method-icon {
          transition: all 0.3s ease;
        }
        
        .contact-info-card:hover .contact-method-icon {
          transform: scale(1.1);
        }
        
        .form-input-enhanced {
          transition: all 0.3s ease;
          border: 2px solid #e5e7eb;
        }
        
        .form-input-enhanced:focus {
          border-color: #B8860B;
          box-shadow: 0 0 0 3px rgba(184, 134, 11, 0.1);
        }
        
        .form-input-enhanced.error {
          border-color: #ef4444;
          box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
        }
      `}</style>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary-gold to-yellow-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            className="font-playfair text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {t.pageTitle}
          </motion.h1>
          <motion.p 
            className="text-xl max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {t.pageSubtitle}
          </motion.p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card className="contact-info-card">
                <CardHeader>
                  <CardTitle className="font-playfair text-2xl">
                    {isSubmitted ? t.successMessage : t.contactForm}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {isSubmitted ? (
                    <div className="text-center py-8">
                      <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                      <p className="text-muted-foreground mb-6">
                        {t.successMessage}
                      </p>
                      <Button onClick={resetForm} className="bg-primary-gold hover:bg-yellow-600">
                        {t.sendAnother}
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="name">{t.name} *</Label>
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            className={`form-input-enhanced ${errors.name ? 'error' : ''}`}
                            placeholder="Enter your full name"
                          />
                          {errors.name && (
                            <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                              <AlertCircle className="h-3 w-3" />
                              {errors.name}
                            </p>
                          )}
                        </div>
                        <div>
                          <Label htmlFor="email">{t.email} *</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className={`form-input-enhanced ${errors.email ? 'error' : ''}`}
                            placeholder="your@email.com"
                          />
                          {errors.email && (
                            <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                              <AlertCircle className="h-3 w-3" />
                              {errors.email}
                            </p>
                          )}
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="phone">{t.phone}</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="form-input-enhanced"
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>

                      <div>
                        <Label htmlFor="inquiryType">{t.inquiryType} *</Label>
                        <Select value={formData.inquiryType} onValueChange={(value) => setFormData(prev => ({ ...prev, inquiryType: value }))}>
                          <SelectTrigger className={`form-input-enhanced ${errors.inquiryType ? 'error' : ''}`}>
                            <SelectValue placeholder="Select inquiry type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="general">{t.inquiryTypes.general}</SelectItem>
                            <SelectItem value="purchase">{t.inquiryTypes.purchase}</SelectItem>
                            <SelectItem value="appraisal">{t.inquiryTypes.appraisal}</SelectItem>
                            <SelectItem value="custom">{t.inquiryTypes.custom}</SelectItem>
                            <SelectItem value="consultation">{t.inquiryTypes.consultation}</SelectItem>
                          </SelectContent>
                        </Select>
                        {errors.inquiryType && (
                          <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                            <AlertCircle className="h-3 w-3" />
                            {errors.inquiryType}
                          </p>
                        )}
                      </div>

                      <div>
                        <Label htmlFor="subject">{t.subject} *</Label>
                        <Input
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          className={`form-input-enhanced ${errors.subject ? 'error' : ''}`}
                          placeholder="Brief description of your inquiry"
                        />
                        {errors.subject && (
                          <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                            <AlertCircle className="h-3 w-3" />
                            {errors.subject}
                          </p>
                        )}
                      </div>

                      <div>
                        <Label htmlFor="message">{t.message} *</Label>
                        <Textarea
                          id="message"
                          name="message"
                          rows={5}
                          value={formData.message}
                          onChange={handleInputChange}
                          className={`form-input-enhanced ${errors.message ? 'error' : ''}`}
                          placeholder="Please provide details about your gemstone interests, budget, or specific requirements..."
                        />
                        {errors.message && (
                          <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                            <AlertCircle className="h-3 w-3" />
                            {errors.message}
                          </p>
                        )}
                      </div>

                      <div className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          id="newsletter"
                          name="newsletter"
                          checked={formData.newsletter}
                          onChange={handleInputChange}
                          className="rounded border-gray-300 text-primary-gold focus:ring-primary-gold"
                        />
                        <Label htmlFor="newsletter" className="text-sm text-muted-foreground">
                          {t.newsletterOptIn}
                        </Label>
                      </div>

                      {submitError && (
                        <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                          <p className="text-red-700 text-sm flex items-center gap-2">
                            <AlertCircle className="h-4 w-4" />
                            {submitError}
                          </p>
                        </div>
                      )}

                      <Button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="w-full bg-primary-gold hover:bg-yellow-600 text-white"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                            {t.sending}
                          </>
                        ) : (
                          <>
                            <Send className="h-4 w-4 mr-2" />
                            {t.sendMessage}
                          </>
                        )}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div>
                <h2 className="font-playfair text-2xl font-bold mb-4">{t.getInTouch}</h2>
                <p className="text-muted-foreground mb-8">{t.getInTouchDesc}</p>
              </div>

              <div className="space-y-6">
                {contactMethods.map((method, index) => (
                  <Card key={index} className="contact-info-card">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-primary-gold rounded-full flex items-center justify-center contact-method-icon">
                          <method.icon className="h-6 w-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold mb-1">{method.label}</h3>
                          <p className="text-muted-foreground text-sm whitespace-pre-line mb-3">
                            {method.value}
                          </p>
                          {method.action && method.buttonText && (
                            <Button 
                              variant="outline" 
                              size="sm"
                              onClick={method.action}
                              className={`border-primary-gold text-primary-gold hover:bg-primary-gold hover:text-white ${method.buttonClass}`}
                            >
                              {method.buttonText}
                            </Button>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}

                {/* Schedule Consultation - Fixed to match other cards */}
                <Card className="contact-info-card">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary-gold rounded-full flex items-center justify-center contact-method-icon">
                        <Calendar className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold mb-1">{t.scheduleConsultation}</h3>
                        <p className="text-muted-foreground text-sm mb-3">
                          {t.consultationDesc}
                        </p>
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => {
                            const message = encodeURIComponent('Hello! I would like to schedule a private consultation with your gemstone experts to discuss my specific needs and preferences.');
                            window.open(`https://wa.me/94742068566?text=${message}`, '_blank');
                          }}
                          className="border-primary-gold text-primary-gold hover:bg-primary-gold hover:text-white contact-button-enhanced"
                        >
                          <MessageCircle className="h-4 w-4 mr-2" />
                          {t.scheduleConsultation}
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
