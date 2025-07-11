import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

const Privacy = ({ language }) => {
  const translations = {
    en: {
      pageTitle: 'Privacy Policy',
      pageSubtitle: 'How we collect, use, and protect your personal information',
      lastUpdated: 'Last updated: January 1, 2025',
      sections: {
        introduction: {
          title: 'Introduction',
          content: `At Gemify & Co., we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, make a purchase, or interact with our services.

By using our website and services, you consent to the collection and use of your information as described in this Privacy Policy. If you do not agree with the terms of this Privacy Policy, please do not access or use our services.`
        },
        informationCollection: {
          title: 'Information We Collect',
          content: `We collect information you provide directly to us, such as when you:
          
• Create an account or make a purchase
• Subscribe to our newsletter
• Contact us for customer support
• Participate in surveys or promotions
• Provide reviews or testimonials

This information may include your name, email address, phone number, shipping and billing addresses, payment information, and any other information you choose to provide.

We also automatically collect certain information when you visit our website, including your IP address, browser type, operating system, referring URLs, and information about your usage of our website through cookies and similar technologies.`
        },
        useOfInformation: {
          title: 'How We Use Your Information',
          content: `We use the information we collect to:

• Process and fulfill your orders
• Provide customer service and support
• Send you important information about your purchases
• Communicate with you about our products and services
• Improve our website and services
• Prevent fraud and enhance security
• Comply with legal obligations
• Send marketing communications (with your consent)

We may also use your information for other purposes with your consent or as permitted by law.`
        },
        informationSharing: {
          title: 'Information Sharing and Disclosure',
          content: `We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this Privacy Policy:

• Service Providers: We may share your information with trusted third-party service providers who assist us in operating our website, conducting our business, or serving you.
• Legal Requirements: We may disclose your information if required by law or in response to valid requests by public authorities.
• Business Transfers: In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.
• Protection of Rights: We may disclose your information to protect our rights, property, or safety, or that of our users or others.`
        },
        dataSecurity: {
          title: 'Data Security',
          content: `We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:

• Encryption of sensitive data
• Secure socket layer (SSL) technology
• Regular security assessments
• Access controls and authentication
• Employee training on data protection

However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.`
        },
        cookies: {
          title: 'Cookies and Tracking Technologies',
          content: `We use cookies and similar tracking technologies to enhance your experience on our website. Cookies are small data files stored on your device that help us:

• Remember your preferences
• Analyze website traffic and usage
• Provide personalized content
• Improve our services

You can control cookies through your browser settings, but disabling cookies may affect the functionality of our website.`
        },
        rights: {
          title: 'Your Rights and Choices',
          content: `Depending on your location, you may have certain rights regarding your personal information, including:

• Access: Request access to your personal information
• Correction: Request correction of inaccurate information
• Deletion: Request deletion of your personal information
• Portability: Request transfer of your information
• Objection: Object to certain processing of your information
• Withdrawal: Withdraw consent for processing

To exercise these rights, please contact us using the information provided below.`
        },
        retention: {
          title: 'Data Retention',
          content: `We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. When we no longer need your information, we will securely delete or anonymize it.`
        },
        international: {
          title: 'International Transfers',
          content: `Your information may be transferred to and processed in countries other than your country of residence. These countries may have different data protection laws. When we transfer your information internationally, we ensure appropriate safeguards are in place to protect your information.`
        },
        changes: {
          title: 'Changes to This Privacy Policy',
          content: `We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the updated Privacy Policy on our website and updating the "Last Updated" date.`
        },
        contact: {
          title: 'Contact Us',
          content: `If you have any questions about this Privacy Policy or our privacy practices, please contact us at:

Email: info@gemifyandco.com
Phone: +94 74 206 8566
Address: By Appointment Only

We are committed to resolving any privacy concerns you may have.`
        }
      }
    }
  };

  const t = translations[language] || translations.en;

  const sections = Object.entries(t.sections);

  return (
    <div className="min-h-screen bg-background">
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
            className="text-xl max-w-2xl mx-auto mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {t.pageSubtitle}
          </motion.p>
          <motion.p 
            className="text-sm opacity-90"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {t.lastUpdated}
          </motion.p>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {sections.map(([key, section], index) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="mb-8"
              >
                <Card>
                  <CardContent className="p-8">
                    <h2 className="font-playfair text-2xl font-bold mb-6 text-primary-gold">
                      {section.title}
                    </h2>
                    <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
                      {section.content.split('\n\n').map((paragraph, pIndex) => (
                        <p key={pIndex} className="mb-4 whitespace-pre-line">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;

