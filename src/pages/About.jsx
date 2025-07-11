import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Users, Globe, TrendingUp, Award, Heart, Gem } from 'lucide-react';
import mufthiRizvi from '../assets/mufthi_rizvi.jpg';

const About = ({ language }) => {
  const translations = {
    en: {
      pageTitle: 'About Gemify & Co.',
      pageSubtitle: 'Discover the story behind our passion for exceptional gemstones',
      ourStory: 'Our Story',
      storyContent: `Founded in 2020 by renowned gemologist Mufthi Rizvi, Gemify & Co. emerged from a passion for connecting people with the extraordinary beauty and power of natural gemstones. What began as a personal quest to source the world's most exceptional gems has evolved into a trusted destination for collectors, investors, and jewelry enthusiasts worldwide.

Our journey started in the gem-rich regions of Sri Lanka, where Mufthi first discovered his fascination with the geological wonders that lie beneath the earth's surface. Through years of building relationships with ethical miners, master cutters, and fellow gemologists, we have established a network that spans across continents.

At Gemify & Co., we believe that every gemstone carries within it millions of years of Earth's history. Our mission is to honor that history while helping these natural treasures find their way to people who will appreciate and preserve their legacy for future generations.`,
      meetFounder: 'Meet Our Founder',
      founderName: 'Mufthi Rizvi',
      founderTitle: 'CEO and Founder',
      founderBio: `Mufthi Rizvi's journey into the world of gemstones began over a decade ago during his travels through the gem-rich regions of Southeast Asia. What started as curiosity about the geological formations he encountered evolved into a deep passion for understanding the intricate processes that create these natural masterpieces.

With formal training in gemology from prestigious institutions and years of hands-on experience working directly with miners and cutters in Sri Lanka, Myanmar, and Madagascar, Mufthi has developed an exceptional eye for quality and rarity.

"Every gemstone has witnessed millions of years of Earth's history. Our role is to honor that history while helping these treasures find their way to people who will appreciate and preserve their legacy for future generations."`,
      ourValues: 'Our Values',
      ethicalSourcing: 'Ethical Sourcing',
      ethicalDesc: 'We work exclusively with mines and suppliers who adhere to the highest ethical and environmental standards.',
      authenticity: 'Authenticity',
      authenticityDesc: 'Every gemstone comes with detailed certification and provenance documentation.',
      excellence: 'Excellence',
      excellenceDesc: 'We maintain the highest standards in every aspect of our business, from sourcing to customer service.',
      transparency: 'Transparency',
      transparencyDesc: 'We believe in complete transparency about our gemstones\' origins, treatments, and characteristics.',
      achievements: 'Our Achievements',
      yearsExperience: 'Years of Excellence',
      satisfiedCustomers: 'Satisfied Customers',
      countriesServed: 'Countries Served',
      customerSatisfaction: 'Customer Satisfaction',
      ourMission: 'Our Mission',
      missionText: 'To connect discerning collectors and enthusiasts with the world\'s most exceptional gemstones while maintaining the highest standards of ethics, authenticity, and excellence.',
      ourVision: 'Our Vision',
      visionText: 'To be the world\'s most trusted source for rare and exceptional gemstones, preserving the legacy of these natural treasures for future generations.'
    },
    es: {
      pageTitle: 'Acerca de Gemify & Co.',
      pageSubtitle: 'Descubre la historia detrás de nuestra pasión por las gemas excepcionales',
      ourStory: 'Nuestra Historia',
      storyContent: `Fundada en 2020 por el renombrado gemólogo Mufthi Rizvi, Gemify & Co. surgió de una pasión por conectar a las personas con la extraordinaria belleza y poder de las gemas naturales. Lo que comenzó como una búsqueda personal para obtener las gemas más excepcionales del mundo se ha convertido en un destino confiable para coleccionistas, inversores y entusiastas de la joyería en todo el mundo.

Nuestro viaje comenzó en las regiones ricas en gemas de Sri Lanka, donde Mufthi descubrió por primera vez su fascinación por las maravillas geológicas que yacen bajo la superficie de la Tierra. A través de años de construcción de relaciones con mineros éticos, cortadores maestros y compañeros gemólogos, hemos establecido una red que se extiende por continentes.

En Gemify & Co., creemos que cada gema lleva dentro de sí millones de años de la historia de la Tierra. Nuestra misión es honrar esa historia mientras ayudamos a estos tesoros naturales a encontrar su camino hacia personas que apreciarán y preservarán su legado para las generaciones futuras.`,
      meetFounder: 'Conoce a Nuestro Fundador',
      founderName: 'Mufthi Rizvi',
      founderTitle: 'CEO y Fundador',
      founderBio: `El viaje de Mufthi Rizvi al mundo de las gemas comenzó hace más de una década durante sus viajes por las regiones ricas en gemas del sudeste asiático. Lo que comenzó como curiosidad sobre las formaciones geológicas que encontró evolucionó hacia una profunda pasión por comprender los procesos intrincados que crean estas obras maestras naturales.

Con formación formal en gemología de instituciones prestigiosas y años de experiencia práctica trabajando directamente con mineros y cortadores en Sri Lanka, Myanmar y Madagascar, Mufthi ha desarrollado un ojo excepcional para la calidad y la rareza.

"Cada gema ha sido testigo de millones de años de la historia de la Tierra. Nuestro papel es honrar esa historia mientras ayudamos a estos tesoros a encontrar su camino hacia personas que apreciarán y preservarán su legado para las generaciones futuras."`,
      ourValues: 'Nuestros Valores',
      ethicalSourcing: 'Abastecimiento Ético',
      ethicalDesc: 'Trabajamos exclusivamente con minas y proveedores que se adhieren a los más altos estándares éticos y ambientales.',
      authenticity: 'Autenticidad',
      authenticityDesc: 'Cada gema viene con certificación detallada y documentación de procedencia.',
      excellence: 'Excelencia',
      excellenceDesc: 'Mantenemos los más altos estándares en todos los aspectos de nuestro negocio, desde el abastecimiento hasta el servicio al cliente.',
      transparency: 'Transparencia',
      transparencyDesc: 'Creemos en la transparencia completa sobre los orígenes, tratamientos y características de nuestras gemas.',
      achievements: 'Nuestros Logros',
      yearsExperience: 'Años de Excelencia',
      satisfiedCustomers: 'Clientes Satisfechos',
      countriesServed: 'Países Atendidos',
      customerSatisfaction: 'Satisfacción del Cliente',
      ourMission: 'Nuestra Misión',
      missionText: 'Conectar a coleccionistas exigentes y entusiastas con las gemas más excepcionales del mundo mientras mantenemos los más altos estándares de ética, autenticidad y excelencia.',
      ourVision: 'Nuestra Visión',
      visionText: 'Ser la fuente más confiable del mundo para gemas raras y excepcionales, preservando el legado de estos tesoros naturales para las generaciones futuras.'
    },
    fr: {
      pageTitle: 'À propos de Gemify & Co.',
      pageSubtitle: 'Découvrez l\'histoire derrière notre passion pour les gemmes exceptionnelles',
      ourStory: 'Notre Histoire',
      storyContent: `Fondée en 2020 par le gemmologue renommé Mufthi Rizvi, Gemify & Co. est née d'une passion pour connecter les gens avec la beauté extraordinaire et le pouvoir des gemmes naturelles. Ce qui a commencé comme une quête personnelle pour sourcer les gemmes les plus exceptionnelles du monde a évolué en une destination de confiance pour les collectionneurs, investisseurs et passionnés de bijoux du monde entier.

Notre voyage a commencé dans les régions riches en gemmes du Sri Lanka, où Mufthi a d'abord découvert sa fascination pour les merveilles géologiques qui se trouvent sous la surface de la Terre. À travers des années de construction de relations avec des mineurs éthiques, des maîtres tailleurs et des collègues gemmologues, nous avons établi un réseau qui s'étend sur les continents.

Chez Gemify & Co., nous croyons que chaque gemme porte en elle des millions d'années d'histoire de la Terre. Notre mission est d'honorer cette histoire tout en aidant ces trésors naturels à trouver leur chemin vers des personnes qui apprécieront et préserveront leur héritage pour les générations futures.`,
      meetFounder: 'Rencontrez Notre Fondateur',
      founderName: 'Mufthi Rizvi',
      founderTitle: 'CEO et Fondateur',
      founderBio: `Le voyage de Mufthi Rizvi dans le monde des gemmes a commencé il y a plus d'une décennie lors de ses voyages à travers les régions riches en gemmes de l'Asie du Sud-Est. Ce qui a commencé comme une curiosité sur les formations géologiques qu'il a rencontrées a évolué en une passion profonde pour comprendre les processus complexes qui créent ces chefs-d'œuvre naturels.

Avec une formation formelle en gemmologie d'institutions prestigieuses et des années d'expérience pratique travaillant directement avec des mineurs et des tailleurs au Sri Lanka, au Myanmar et à Madagascar, Mufthi a développé un œil exceptionnel pour la qualité et la rareté.

"Chaque gemme a été témoin de millions d'années d'histoire de la Terre. Notre rôle est d'honorer cette histoire tout en aidant ces trésors à trouver leur chemin vers des personnes qui apprécieront et préserveront leur héritage pour les générations futures."`,
      ourValues: 'Nos Valeurs',
      ethicalSourcing: 'Approvisionnement Éthique',
      ethicalDesc: 'Nous travaillons exclusivement avec des mines et des fournisseurs qui adhèrent aux plus hauts standards éthiques et environnementaux.',
      authenticity: 'Authenticité',
      authenticityDesc: 'Chaque gemme est accompagnée d\'une certification détaillée et d\'une documentation de provenance.',
      excellence: 'Excellence',
      excellenceDesc: 'Nous maintenons les plus hauts standards dans tous les aspects de notre entreprise, de l\'approvisionnement au service client.',
      transparency: 'Transparence',
      transparencyDesc: 'Nous croyons en la transparence complète sur les origines, traitements et caractéristiques de nos gemmes.',
      achievements: 'Nos Réalisations',
      yearsExperience: 'Années d\'Excellence',
      satisfiedCustomers: 'Clients Satisfaits',
      countriesServed: 'Pays Desservis',
      customerSatisfaction: 'Satisfaction Client',
      ourMission: 'Notre Mission',
      missionText: 'Connecter les collectionneurs exigeants et les passionnés avec les gemmes les plus exceptionnelles du monde tout en maintenant les plus hauts standards d\'éthique, d\'authenticité et d\'excellence.',
      ourVision: 'Notre Vision',
      visionText: 'Être la source la plus fiable au monde pour les gemmes rares et exceptionnelles, préservant l\'héritage de ces trésors naturels pour les générations futures.'
    },
    ar: {
      pageTitle: 'حول Gemify & Co.',
      pageSubtitle: 'اكتشف القصة وراء شغفنا بالأحجار الكريمة الاستثنائية',
      ourStory: 'قصتنا',
      storyContent: `تأسست في عام 2020 من قبل عالم الأحجار الكريمة المشهور مفتي رضوي، نشأت Gemify & Co. من شغف لربط الناس بالجمال الاستثنائي وقوة الأحجار الكريمة الطبيعية. ما بدأ كبحث شخصي للحصول على أكثر الأحجار الكريمة استثنائية في العالم تطور إلى وجهة موثوقة للجامعين والمستثمرين وعشاق المجوهرات في جميع أنحاء العالم.

بدأت رحلتنا في المناطق الغنية بالأحجار الكريمة في سريلانكا، حيث اكتشف مفتي لأول مرة افتتانه بالعجائب الجيولوجية التي تكمن تحت سطح الأرض. من خلال سنوات من بناء العلاقات مع عمال المناجم الأخلاقيين وقاطعي الأحجار الماهرين وزملاء علماء الأحجار الكريمة، أقمنا شبكة تمتد عبر القارات.

في Gemify & Co.، نؤمن أن كل حجر كريم يحمل في داخله ملايين السنين من تاريخ الأرض. مهمتنا هي تكريم هذا التاريخ بينما نساعد هذه الكنوز الطبيعية في العثور على طريقها إلى الأشخاص الذين سيقدرون ويحافظون على إرثها للأجيال القادمة.`,
      meetFounder: 'تعرف على مؤسسنا',
      founderName: 'مفتي رضوي',
      founderTitle: 'الرئيس التنفيذي والمؤسس',
      founderBio: `بدأت رحلة مفتي رضوي في عالم الأحجار الكريمة منذ أكثر من عقد خلال رحلاته عبر المناطق الغنية بالأحجار الكريمة في جنوب شرق آسيا. ما بدأ كفضول حول التكوينات الجيولوجية التي واجهها تطور إلى شغف عميق لفهم العمليات المعقدة التي تخلق هذه التحف الطبيعية.

مع التدريب الرسمي في علم الأحجار الكريمة من مؤسسات مرموقة وسنوات من الخبرة العملية في العمل مباشرة مع عمال المناجم والقاطعين في سريلانكا وميانمار ومدغشقر، طور مفتي عيناً استثنائية للجودة والندرة.

"كل حجر كريم شهد ملايين السنين من تاريخ الأرض. دورنا هو تكريم هذا التاريخ بينما نساعد هذه الكنوز في العثور على طريقها إلى الأشخاص الذين سيقدرون ويحافظون على إرثها للأجيال القادمة."`,
      ourValues: 'قيمنا',
      ethicalSourcing: 'المصادر الأخلاقية',
      ethicalDesc: 'نعمل حصرياً مع المناجم والموردين الذين يلتزمون بأعلى المعايير الأخلاقية والبيئية.',
      authenticity: 'الأصالة',
      authenticityDesc: 'كل حجر كريم يأتي مع شهادة مفصلة ووثائق المصدر.',
      excellence: 'التميز',
      excellenceDesc: 'نحافظ على أعلى المعايير في كل جانب من جوانب أعمالنا، من المصادر إلى خدمة العملاء.',
      transparency: 'الشفافية',
      transparencyDesc: 'نؤمن بالشفافية الكاملة حول أصول أحجارنا الكريمة ومعالجاتها وخصائصها.',
      achievements: 'إنجازاتنا',
      yearsExperience: 'سنوات من التميز',
      satisfiedCustomers: 'عملاء راضون',
      countriesServed: 'دول نخدمها',
      customerSatisfaction: 'رضا العملاء',
      ourMission: 'مهمتنا',
      missionText: 'ربط الجامعين المميزين والمتحمسين بأكثر الأحجار الكريمة استثنائية في العالم مع الحفاظ على أعلى معايير الأخلاق والأصالة والتميز.',
      ourVision: 'رؤيتنا',
      visionText: 'أن نكون المصدر الأكثر ثقة في العالم للأحجار الكريمة النادرة والاستثنائية، مع الحفاظ على إرث هذه الكنوز الطبيعية للأجيال القادمة.'
    }
  };

  const t = translations[language] || translations.en;

  const stats = [
    { number: '5', label: t.yearsExperience, icon: TrendingUp },
    { number: '500+', label: t.satisfiedCustomers, icon: Users },
    { number: '30+', label: t.countriesServed, icon: Globe },
    { number: '99.99%', label: t.customerSatisfaction, icon: Star }
  ];

  const values = [
    {
      icon: Heart,
      title: t.ethicalSourcing,
      description: t.ethicalDesc
    },
    {
      icon: Award,
      title: t.authenticity,
      description: t.authenticityDesc
    },
    {
      icon: Star,
      title: t.excellence,
      description: t.excellenceDesc
    },
    {
      icon: Gem,
      title: t.transparency,
      description: t.transparencyDesc
    }
  ];

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
            className="text-xl max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {t.pageSubtitle}
          </motion.p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-center mb-12">
              {t.ourStory}
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
              {t.storyContent.split('\n\n').map((paragraph, index) => (
                <p key={index} className="mb-6">
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Meet Our Founder */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-center mb-12">
              {t.meetFounder}
            </h2>
            
            <Card className="overflow-hidden">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                  <div className="text-center lg:text-left">
                    <img src={mufthiRizvi} alt="Mufthi Rizvi" className="w-32 h-32 rounded-full object-cover mx-auto lg:mx-0 mb-4" />
                    <h3 className="font-playfair text-2xl font-bold mb-2">{t.founderName}</h3>
                    <Badge variant="secondary" className="mb-4">{t.founderTitle}</Badge>
                  </div>
                  
                  <div className="lg:col-span-2">
                    <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
                      {t.founderBio.split('\n\n').map((paragraph, index) => (
                        <p key={index} className="mb-4">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">
              {t.ourValues}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full text-center hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-primary-gold rounded-full flex items-center justify-center mx-auto mb-4">
                      <value.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="font-playfair text-xl font-semibold mb-3">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardContent className="p-8">
                  <h3 className="font-playfair text-2xl font-bold mb-4 text-primary-gold">
                    {t.ourMission}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {t.missionText}
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardContent className="p-8">
                  <h3 className="font-playfair text-2xl font-bold mb-4 text-primary-gold">
                    {t.ourVision}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {t.visionText}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

