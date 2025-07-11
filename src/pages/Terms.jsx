import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

const Terms = ({ language }) => {
  const translations = {
    en: {
      pageTitle: 'Terms of Service',
      pageSubtitle: 'Terms and conditions for using our services',
      lastUpdated: 'Last updated: January 1, 2025',
      sections: {
        acceptance: {
          title: 'Acceptance of Terms',
          content: `By accessing and using the Gemify & Co. website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.

These Terms of Service ("Terms") govern your use of our website located at gemifyandco.com (the "Service") operated by Gemify & Co. ("us", "we", or "our").

Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users and others who access or use the Service.`
        },
        description: {
          title: 'Description of Service',
          content: `Gemify & Co. provides an online platform for the sale of precious gemstones, jewelry, and related services. Our services include:

• Online catalog of gemstones and jewelry
• Gemstone authentication and certification services
• Custom jewelry design and creation
• Gemstone consultation and advisory services
• Educational content about gemstones

We reserve the right to modify, suspend, or discontinue any aspect of our services at any time without notice.`
        },
        userAccounts: {
          title: 'User Accounts',
          content: `When you create an account with us, you must provide information that is accurate, complete, and current at all times. You are responsible for safeguarding the password and for all activities that occur under your account.

You agree not to disclose your password to any third party and to take sole responsibility for activities and actions under your password, whether or not you have authorized such activities or actions.

You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.`
        },
        purchases: {
          title: 'Purchases and Payment',
          content: `All purchases are subject to product availability. We reserve the right to limit quantities and to refuse service to anyone at our sole discretion.

Prices for our products are subject to change without notice. We reserve the right to modify or discontinue any product at any time.

Payment must be received in full before shipment of products. We accept various forms of payment as indicated on our website.

All sales are final unless otherwise specified. Returns and exchanges are subject to our return policy.`
        },
        shipping: {
          title: 'Shipping and Delivery',
          content: `We ship worldwide with secure, insured delivery methods. Shipping costs and delivery times vary by location and are calculated at checkout.

Risk of loss and title for products purchased pass to you upon delivery to the carrier. We are not responsible for delays caused by customs, weather, or other factors beyond our control.

International customers are responsible for any customs duties, taxes, or fees imposed by their country.

We require signature confirmation for all high-value shipments to ensure secure delivery.`
        },
        authenticity: {
          title: 'Authenticity and Certification',
          content: `All gemstones sold by Gemify & Co. are guaranteed to be authentic and natural unless otherwise specified. Each gemstone comes with appropriate certification from recognized gemological laboratories.

We provide detailed information about any treatments or enhancements applied to our gemstones. This information is based on standard gemological testing and industry practices.

In the rare event that a gemstone is found to be misrepresented, we will provide a full refund or replacement, subject to verification by an independent gemological laboratory.`
        },
        intellectualProperty: {
          title: 'Intellectual Property Rights',
          content: `The Service and its original content, features, and functionality are and will remain the exclusive property of Gemify & Co. and its licensors. The Service is protected by copyright, trademark, and other laws.

You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the material on our Service without our prior written consent.

Our trademarks and trade dress may not be used in connection with any product or service without our prior written consent.`
        },
        userConduct: {
          title: 'User Conduct',
          content: `You agree not to use the Service:

• For any unlawful purpose or to solicit others to perform unlawful acts
• To violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances
• To infringe upon or violate our intellectual property rights or the intellectual property rights of others
• To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate
• To submit false or misleading information
• To upload or transmit viruses or any other type of malicious code
• To spam, phish, pharm, pretext, spider, crawl, or scrape
• For any obscene or immoral purpose or to interfere with or circumvent the security features of the Service`
        },
        limitation: {
          title: 'Limitation of Liability',
          content: `In no event shall Gemify & Co., nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of the Service.

Our total liability to you for any damages arising from or related to this agreement shall not exceed the amount you paid to us in the twelve (12) months preceding the event giving rise to the liability.

Some jurisdictions do not allow the exclusion of certain warranties or the limitation or exclusion of liability for consequential or incidental damages. Accordingly, some of the above limitations may not apply to you.`
        },
        indemnification: {
          title: 'Indemnification',
          content: `You agree to defend, indemnify, and hold harmless Gemify & Co. and its licensee and licensors, and their employees, contractors, agents, officers and directors, from and against any and all claims, damages, obligations, losses, liabilities, costs or debt, and expenses (including but not limited to attorney's fees).

This indemnification obligation will survive the termination of these Terms and your use of the Service.`
        },
        termination: {
          title: 'Termination',
          content: `We may terminate or suspend your account and bar access to the Service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of the Terms.

If you wish to terminate your account, you may simply discontinue using the Service.

All provisions of the Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity and limitations of liability.`
        },
        governing: {
          title: 'Governing Law',
          content: `These Terms shall be interpreted and governed by the laws of Sri Lanka, without regard to its conflict of law provisions.

Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.

If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect.`
        },
        changes: {
          title: 'Changes to Terms',
          content: `We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days notice prior to any new terms taking effect.

What constitutes a material change will be determined at our sole discretion. By continuing to access or use our Service after any revisions become effective, you agree to be bound by the revised terms.`
        },
        contact: {
          title: 'Contact Information',
          content: `If you have any questions about these Terms of Service, please contact us at:

Email: info@gemifyandco.com
Phone: +94 74 206 8566
Address: By Appointment Only

We are committed to addressing any concerns you may have regarding these terms.`
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

      {/* Terms Content */}
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

export default Terms;

