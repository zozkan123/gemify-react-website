import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

const Contact = ({ language }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const translations = {
    en: {
      pageTitle: 'Contact Us',
      pageSubtitle: 'Get in touch with our gemstone experts',
      getInTouch: 'Get In Touch',
      getInTouchDesc: 'Have questions about our gemstones or need expert advice? We\'re here to help.',
      contactForm: 'Contact Form',
      name: 'Name',
      email: 'Email',
      phone: 'Phone (Optional)',
      subject: 'Subject',
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
      sendAnother: 'Send Another Message',
      nameRequired: 'Name is required',
      emailRequired: 'Email is required',
      emailInvalid: 'Please enter a valid email address',
      subjectRequired: 'Subject is required',
      messageRequired: 'Message is required',
      whatsappContact: 'Contact via WhatsApp',
      emailContact: 'Send Email',
      scheduleConsultation: 'Schedule Consultation',
      consultationDesc: 'Book a private consultation with our gemstone experts to discuss your specific needs and preferences.'
    },
    es: {
      pageTitle: 'Contáctanos',
      pageSubtitle: 'Ponte en contacto con nuestros expertos en gemas',
      getInTouch: 'Ponte en Contacto',
      getInTouchDesc: '¿Tienes preguntas sobre nuestras gemas o necesitas asesoramiento experto? Estamos aquí para ayudar.',
      contactForm: 'Formulario de Contacto',
      name: 'Nombre',
      email: 'Correo Electrónico',
      phone: 'Teléfono (Opcional)',
      subject: 'Asunto',
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
      sendAnother: 'Enviar Otro Mensaje',
      nameRequired: 'El nombre es obligatorio',
      emailRequired: 'El correo electrónico es obligatorio',
      emailInvalid: 'Por favor ingresa un correo electrónico válido',
      subjectRequired: 'El asunto es obligatorio',
      messageRequired: 'El mensaje es obligatorio',
      whatsappContact: 'Contactar por WhatsApp',
      emailContact: 'Enviar Correo',
      scheduleConsultation: 'Programar Consulta',
      consultationDesc: 'Reserva una consulta privada con nuestros expertos en gemas para discutir tus necesidades y preferencias específicas.'
    },
    fr: {
      pageTitle: 'Contactez-nous',
      pageSubtitle: 'Entrez en contact avec nos experts en gemmes',
      getInTouch: 'Entrez en Contact',
      getInTouchDesc: 'Vous avez des questions sur nos gemmes ou besoin de conseils d\'experts ? Nous sommes là pour vous aider.',
      contactForm: 'Formulaire de Contact',
      name: 'Nom',
      email: 'Email',
      phone: 'Téléphone (Optionnel)',
      subject: 'Sujet',
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
      sendAnother: 'Envoyer un Autre Message',
      nameRequired: 'Le nom est requis',
      emailRequired: 'L\'email est requis',
      emailInvalid: 'Veuillez entrer une adresse email valide',
      subjectRequired: 'Le sujet est requis',
      messageRequired: 'Le message est requis',
      whatsappContact: 'Contacter via WhatsApp',
      emailContact: 'Envoyer un Email',
      scheduleConsultation: 'Programmer une Consultation',
      consultationDesc: 'Réservez une consultation privée avec nos experts en gemmes pour discuter de vos besoins et préférences spécifiques.'
    },
    ar: {
      pageTitle: 'اتصل بنا',
      pageSubtitle: 'تواصل مع خبراء الأحجار الكريمة لدينا',
      getInTouch: 'تواصل معنا',
      getInTouchDesc: 'هل لديك أسئلة حول أحجارنا الكريمة أو تحتاج إلى نصيحة خبير؟ نحن هنا للمساعدة.',
      contactForm: 'نموذج الاتصال',
      name: 'الاسم',
      email: 'البريد الإلكتروني',
      phone: 'الهاتف (اختياري)',
      subject: 'الموضوع',
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
      sendAnother: 'إرسال رسالة أخرى',
      nameRequired: 'الاسم مطلوب',
      emailRequired: 'البريد الإلكتروني مطلوب',
      emailInvalid: 'يرجى إدخال عنوان بريد إلكتروني صحيح',
      subjectRequired: 'الموضوع مطلوب',
      messageRequired: 'الرسالة مطلوبة',
      whatsappContact: 'التواصل عبر واتساب',
      emailContact: 'إرسال بريد إلكتروني',
      scheduleConsultation: 'جدولة استشارة',
      consultationDesc: 'احجز استشارة خاصة مع خبراء الأحجار الكريمة لدينا لمناقشة احتياجاتك وتفضيلاتك المحددة.'
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
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        const errorData = await response.json();
        console.error('Error sending message:', errorData.error);
        // You could set an error state here to show to the user
      }
    } catch (error) {
      console.error('Error sending message:', error);
      // You could set an error state here to show to the user
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
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
      message: ''
    });
    setIsSubmitted(false);
    setErrors({});
  };

  const contactMethods = [
    {
      icon: Phone,
      label: t.phoneLabel,
      value: '+94 74 206 8566',
      action: () => window.open("https://wa.me/94742068566"),
      buttonText: t.whatsappContact,
      buttonClass: "contact-button-enhanced email-button-glow"
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
              <Card>
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
                            className={`form-input-enhanced ${errors.name ? 'border-red-500' : ''}`}
                          />
                          {errors.name && (
                            <p className="text-red-500 text-sm mt-1">{errors.name}</p>
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
                            className={errors.email ? 'border-red-500' : ''}
                          />
                          {errors.email && (
                            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
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
                        />
                      </div>

                      <div>
                        <Label htmlFor="subject">{t.subject} *</Label>
                        <Input
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          className={errors.subject ? 'border-red-500' : ''}
                        />
                        {errors.subject && (
                          <p className="text-red-500 text-sm mt-1">{errors.subject}</p>
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
                          className={errors.message ? 'border-red-500' : ''}
                        />
                        {errors.message && (
                          <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                        )}
                      </div>

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
                  <Card key={index} className="p-6 text-center contact-method-card contact-info-card">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-primary-gold rounded-full flex items-center justify-center contact-icon-enhanced contact-method-icon">
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
                              className={`border-primary-gold text-primary-gold hover:bg-primary-gold hover:text-white whatsapp-button-enhanced ${method.buttonClass}`}
                            >
                              {method.buttonText}
                            </Button>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Schedule Consultation */}
              <Card className="bg-muted/50">
                <CardContent className="p-6">
                  <h3 className="font-playfair text-xl font-semibold mb-3">
                    {t.scheduleConsultation}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {t.consultationDesc}
                  </p>
                  <Button 
                    className="bg-primary-gold hover:bg-yellow-600 text-white"
                    onClick={() => window.open('https://wa.me/94742068566?text=I would like to schedule a consultation')}
                  >
                    {t.scheduleConsultation}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

