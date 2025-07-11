import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Heart, Eye, Award, Users, Globe, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';
import { useModal } from '../contexts/ModalContext';
import sapphire1 from '../assets/sapphire1.jpg';
import sapphire2 from '../assets/sapphire2.jpg';
import ruby1 from '../assets/ruby1.jpg';
import ruby2 from '../assets/ruby2.jpg';
import heroBg from '../assets/hero-bg.jpg';

const Home = ({ language }) => {
  const [likedProducts, setLikedProducts] = useState(() => {
    try {
      const savedFavorites = localStorage.getItem('gemify_favorites');
      return savedFavorites ? new Set(JSON.parse(savedFavorites)) : new Set();
    } catch (error) {
      return new Set();
    }
  });

  const { openModal } = useModal();

  const translations = {
    en: {
      heroTitle: 'Every Gem Tells A Story, Let Yours Shine',
      heroSubtitle: 'Discover the world\'s finest gemstones, carefully curated and ethically sourced from the most prestigious mines across the globe.',
      exploreCollection: 'Explore Our Collection',
      bookConsultation: 'Book Private Consultation',
      featuredProducts: 'Featured Products',
      featuredSubtitle: 'Discover our carefully curated collection of the world\'s finest gemstones',
      premiumSapphires: 'Premium Sapphires',
      sapphireDesc: 'Exceptional sapphires from Kashmir, Ceylon, and Madagascar featuring unparalleled color and clarity.',
      burmesesRubies: 'Burmese Rubies',
      rubyDesc: 'Legendary "pigeon\'s blood" red rubies from Myanmar\'s Mogok Valley, the finest rubies in the world.',
      startingFrom: 'Starting from',
      inquire: 'Inquire',
      quickView: 'Quick View',
      addToWishlist: 'Add to Wishlist',
      whyChoose: 'Why Choose Gemify & Co.',
      whyChooseSubtitle: 'Excellence in every aspect of our service and products',
      certifiedAuthentic: 'Certified Authentic',
      certifiedDesc: 'Every gemstone comes with professional certification and detailed provenance documentation.',
      premiumQuality: 'Premium Quality',
      qualityDesc: 'Hand-selected stones of exceptional beauty and rarity, sourced from the world\'s finest mines.',
      secureShipping: 'Secure Shipping',
      shippingDesc: 'Insured worldwide delivery with tracking and secure packaging for your peace of mind.',
      expertCuration: 'Expert Curation',
      curationDesc: 'Curated by gemologists with decades of experience and deep knowledge of precious stones.',
      stats: 'Our Achievements',
      yearsExperience: 'Years of Excellence',
      satisfiedCustomers: 'Satisfied Customers',
      countriesServed: 'Countries Served',
      customerSatisfaction: 'Customer Satisfaction'
    },
    es: {
      heroTitle: 'Cada Gema Cuenta Una Historia, Deja Que La Tuya Brille',
      heroSubtitle: 'Descubre las gemas más finas del mundo, cuidadosamente seleccionadas y obtenidas éticamente de las minas más prestigiosas del mundo.',
      exploreCollection: 'Explorar Nuestra Colección',
      bookConsultation: 'Reservar Consulta Privada',
      featuredProducts: 'Productos Destacados',
      featuredSubtitle: 'Descubre nuestra colección cuidadosamente seleccionada de las mejores gemas del mundo',
      premiumSapphires: 'Zafiros Premium',
      sapphireDesc: 'Zafiros excepcionales de Cachemira, Ceilán y Madagascar con color y claridad incomparables.',
      burmesesRubies: 'Rubíes Birmanos',
      rubyDesc: 'Legendarios rubíes rojos "sangre de paloma" del Valle Mogok de Myanmar, los mejores rubíes del mundo.',
      startingFrom: 'Desde',
      inquire: 'Consultar',
      quickView: 'Vista Rápida',
      addToWishlist: 'Agregar a Favoritos',
      whyChoose: 'Por Qué Elegir Gemify & Co.',
      whyChooseSubtitle: 'Excelencia en todos los aspectos de nuestro servicio y productos',
      certifiedAuthentic: 'Certificado Auténtico',
      certifiedDesc: 'Cada gema viene con certificación profesional y documentación detallada de procedencia.',
      premiumQuality: 'Calidad Premium',
      qualityDesc: 'Piedras seleccionadas a mano de belleza excepcional y rareza, obtenidas de las mejores minas del mundo.',
      secureShipping: 'Envío Seguro',
      shippingDesc: 'Entrega mundial asegurada con seguimiento y embalaje seguro para su tranquilidad.',
      expertCuration: 'Curación Experta',
      curationDesc: 'Curado por gemólogos con décadas de experiencia y profundo conocimiento de piedras preciosas.',
      stats: 'Nuestros Logros',
      yearsExperience: 'Años de Excelencia',
      satisfiedCustomers: 'Clientes Satisfechos',
      countriesServed: 'Países Atendidos',
      customerSatisfaction: 'Satisfacción del Cliente'
    },
    fr: {
      heroTitle: 'Chaque Gemme Raconte Une Histoire, Laissez La Vôtre Briller',
      heroSubtitle: 'Découvrez les plus belles gemmes du monde, soigneusement sélectionnées et obtenues de manière éthique dans les mines les plus prestigieuses du monde.',
      exploreCollection: 'Explorer Notre Collection',
      bookConsultation: 'Réserver Une Consultation Privée',
      featuredProducts: 'Produits Vedettes',
      featuredSubtitle: 'Découvrez notre collection soigneusement sélectionnée des plus belles gemmes du monde',
      premiumSapphires: 'Saphirs Premium',
      sapphireDesc: 'Saphirs exceptionnels du Cachemire, de Ceylan et de Madagascar avec une couleur et une clarté inégalées.',
      burmesesRubies: 'Rubis Birmans',
      rubyDesc: 'Légendaires rubis rouges "sang de pigeon" de la vallée de Mogok au Myanmar, les plus beaux rubis du monde.',
      startingFrom: 'À partir de',
      inquire: 'Se Renseigner',
      quickView: 'Aperçu Rapide',
      addToWishlist: 'Ajouter aux Favoris',
      whyChoose: 'Pourquoi Choisir Gemify & Co.',
      whyChooseSubtitle: 'Excellence dans tous les aspects de notre service et de nos produits',
      certifiedAuthentic: 'Certifié Authentique',
      certifiedDesc: 'Chaque gemme est accompagnée d\'une certification professionnelle et d\'une documentation détaillée de provenance.',
      premiumQuality: 'Qualité Premium',
      qualityDesc: 'Pierres sélectionnées à la main d\'une beauté exceptionnelle et de rareté, provenant des meilleures mines du monde.',
      secureShipping: 'Expédition Sécurisée',
      shippingDesc: 'Livraison mondiale assurée avec suivi et emballage sécurisé pour votre tranquillité d\'esprit.',
      expertCuration: 'Curation Experte',
      curationDesc: 'Curé par des gemmologues avec des décennies d\'expérience et une connaissance approfondie des pierres précieuses.',
      stats: 'Nos Réalisations',
      yearsExperience: 'Années d\'Excellence',
      satisfiedCustomers: 'Clients Satisfaits',
      countriesServed: 'Pays Desservis',
      customerSatisfaction: 'Satisfaction Client'
    },
    ar: {
      heroTitle: 'كل جوهرة تحكي قصة، دع قصتك تتألق',
      heroSubtitle: 'اكتشف أجود الأحجار الكريمة في العالم، المختارة بعناية والمصدرة بطريقة أخلاقية من أرقى المناجم عبر العالم.',
      exploreCollection: 'استكشف مجموعتنا',
      bookConsultation: 'احجز استشارة خاصة',
      featuredProducts: 'المنتجات المميزة',
      featuredSubtitle: 'اكتشف مجموعتنا المختارة بعناية من أجود الأحجار الكريمة في العالم',
      premiumSapphires: 'ياقوت أزرق فاخر',
      sapphireDesc: 'ياقوت استثنائي من كشمير وسيلان ومدغشقر يتميز بلون ووضوح لا مثيل لهما.',
      burmesesRubies: 'ياقوت بورمي',
      rubyDesc: 'ياقوت أحمر أسطوري "دم الحمام" من وادي موغوك في ميانمار، أجود الياقوت في العالم.',
      startingFrom: 'ابتداءً من',
      inquire: 'استفسار',
      quickView: 'عرض سريع',
      addToWishlist: 'أضف إلى المفضلة',
      whyChoose: 'لماذا تختار Gemify & Co.',
      whyChooseSubtitle: 'التميز في كل جانب من جوانب خدمتنا ومنتجاتنا',
      certifiedAuthentic: 'معتمد أصلي',
      certifiedDesc: 'كل حجر كريم يأتي مع شهادة مهنية ووثائق مفصلة عن المصدر.',
      premiumQuality: 'جودة فاخرة',
      qualityDesc: 'أحجار مختارة يدوياً ذات جمال استثنائي وندرة، مصدرها من أجود المناجم في العالم.',
      secureShipping: 'شحن آمن',
      shippingDesc: 'توصيل عالمي مؤمن مع تتبع وتغليف آمن لراحة بالك.',
      expertCuration: 'اختيار خبير',
      curationDesc: 'مختار من قبل علماء الأحجار الكريمة مع عقود من الخبرة والمعرفة العميقة بالأحجار الثمينة.',
      stats: 'إنجازاتنا',
      yearsExperience: 'سنوات من التميز',
      satisfiedCustomers: 'عملاء راضون',
      countriesServed: 'دول نخدمها',
      customerSatisfaction: 'رضا العملاء'
    }
  };

  const t = translations[language] || translations.en;

  const featuredProducts = [
    {
      id: 1,
      name: t.premiumSapphires,
      price: '$1,500+',
      images: [sapphire1, sapphire2],
      image: sapphire1,
      description: t.sapphireDesc,
      badge: 'Premium',
      category: 'Sapphire',
      carat: 2.5,
      clarity: 'VVS1',
      cut: 'Oval',
      origin: 'Kashmir',
      treatment: 'None',
      rating: 5,
      specifications: {
        weight: '2.45 carats',
        cut: 'Oval',
        clarity: 'VVS1',
        origin: 'Kashmir, India',
        treatment: 'No heat treatment'
      },
      certification: 'GIA (Gemological Institute of America)'
    },
    {
      id: 2,
      name: t.burmesesRubies,
      price: '$2,000+',
      images: [ruby1, ruby2],
      image: ruby1,
      description: t.rubyDesc,
      badge: 'Exclusive',
      category: 'Ruby',
      carat: 1.8,
      clarity: 'VS1',
      cut: 'Cushion',
      origin: 'Myanmar',
      treatment: 'Heat Only',
      rating: 5,
      specifications: {
        weight: '1.85 carats',
        cut: 'Cushion',
        clarity: 'VS1',
        origin: 'Mogok Valley, Myanmar',
        treatment: 'Traditional heat treatment'
      },
      certification: 'Gübelin Gem Lab'
    }
  ];

  const whyChooseFeatures = [
    {
      icon: Award,
      title: t.certifiedAuthentic,
      description: t.certifiedDesc
    },
    {
      icon: Star,
      title: t.premiumQuality,
      description: t.qualityDesc
    },
    {
      icon: Globe,
      title: t.secureShipping,
      description: t.shippingDesc
    },
    {
      icon: Users,
      title: t.expertCuration,
      description: t.curationDesc
    }
  ];

  const stats = [
    { number: '5', label: t.yearsExperience, icon: TrendingUp },
    { number: '500+', label: t.satisfiedCustomers, icon: Users },
    { number: '30+', label: t.countriesServed, icon: Globe },
    { number: '99.99%', label: t.customerSatisfaction, icon: Star }
  ];

  const toggleWishlist = (productId) => {
    setLikedProducts(prev => {
      const newSet = new Set(prev);
      if (newSet.has(productId)) {
        newSet.delete(productId);
      } else {
        newSet.add(productId);
      }
      
      // Save to localStorage
      try {
        localStorage.setItem('gemify_favorites', JSON.stringify(Array.from(newSet)));
      } catch (error) {
        console.warn('Failed to save favorites to localStorage:', error);
      }
      
      return newSet;
    });
  };

  const openWhatsAppInquiry = (product) => {
    const phoneNumber = '94742068566'; // WhatsApp number from the website
    const message = `Hello! I'm interested in the ${product.name} (${product.price}). Could you please provide more information about this gemstone?`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const openQuickView = (product) => {
    openModal('quickView', { product, language });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section - Fully Mobile Responsive */}
      <section 
        className="relative min-h-screen flex items-center justify-center text-white overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>
        
        <div className="relative z-10 text-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1 
            className="font-playfair text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            {t.heroTitle}
          </motion.h1>
          
          <motion.p 
            className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed px-2"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            {t.heroSubtitle}
          </motion.p>
          
          <motion.div 
            className="flex flex-col xs:flex-row gap-3 sm:gap-4 justify-center items-center max-w-lg mx-auto px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <Button 
              asChild 
              size="lg" 
              className="w-full xs:flex-1 sm:w-auto btn-primary min-h-12 sm:min-h-14 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-medium"
            >
              <Link to="/collections">{t.exploreCollection}</Link>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              size="lg" 
              className="w-full xs:flex-1 sm:w-auto btn-secondary min-h-12 sm:min-h-14 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-medium border-2 border-white text-white hover:bg-white hover:text-gray-900"
            >
              <Link to="/contact">{t.bookConsultation}</Link>
            </Button>
          </motion.div>
        </div>

        {/* Floating Gems Animation - Responsive */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 bg-primary-gold rounded-full opacity-20 floating-animation`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${4 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </section>

      {/* Featured Products - Enhanced Mobile Layout */}
      <section className="py-12 sm:py-16 lg:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-8 sm:mb-12 lg:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-playfair text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-foreground">
              {t.featuredProducts}
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg lg:text-xl max-w-3xl mx-auto px-2">
              {t.featuredSubtitle}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 max-w-7xl mx-auto">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-500 scale-on-hover h-full">
                  <div className="relative overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-56 sm:h-64 md:h-72 lg:h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <Badge className="absolute top-3 sm:top-4 left-3 sm:left-4 bg-primary-gold text-white text-xs sm:text-sm px-2 sm:px-3 py-1">
                      {product.badge}
                    </Badge>
                    <div className="absolute top-3 sm:top-4 right-3 sm:right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <Button
                        size="icon"
                        variant="secondary"
                        className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/90 hover:bg-white transition-all duration-300 hover:scale-110"
                        onClick={() => toggleWishlist(product.id)}
                      >
                        <Heart 
                          className={`h-4 w-4 sm:h-5 sm:w-5 transition-colors duration-300 ${
                            likedProducts.has(product.id) 
                              ? 'fill-red-500 text-red-500' 
                              : 'text-gray-600'
                          }`} 
                        />
                      </Button>
                      <Button
                        size="icon"
                        variant="secondary"
                        className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/90 hover:bg-white transition-all duration-300 hover:scale-110"
                        onClick={() => openQuickView(product)}
                      >
                        <Eye className="h-4 w-4 sm:h-5 sm:w-5 text-gray-600" />
                      </Button>
                    </div>
                  </div>
                  
                  <CardContent className="p-4 sm:p-6 lg:p-8 flex flex-col h-full">
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-3 sm:mb-4">
                        <h3 className="font-playfair text-lg sm:text-xl lg:text-2xl font-semibold leading-tight">
                          {product.name}
                        </h3>
                        <div className="flex items-center ml-3">
                          {[...Array(product.rating)].map((_, i) => (
                            <Star key={i} className="h-3 w-3 sm:h-4 sm:w-4 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground mb-4 sm:mb-6 text-sm sm:text-base lg:text-lg leading-relaxed">
                        {product.description}
                      </p>
                      
                      <div className="grid grid-cols-2 gap-2 mb-4 sm:mb-6 text-xs sm:text-sm text-muted-foreground">
                        <div className="flex items-center justify-between py-2 px-3 bg-muted/50 rounded">
                          <span>Weight:</span>
                          <span className="font-medium">{product.carat} ct</span>
                        </div>
                        <div className="flex items-center justify-between py-2 px-3 bg-muted/50 rounded">
                          <span>Origin:</span>
                          <span className="font-medium">{product.origin}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex flex-col xs:flex-row xs:items-center xs:justify-between gap-3">
                        <div>
                          <p className="text-xs sm:text-sm text-muted-foreground">{t.startingFrom}</p>
                          <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-primary-gold">{product.price}</p>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 xs:grid-cols-2 gap-2 sm:gap-3">
                        <Button 
                          className="w-full bg-primary-gold hover:bg-yellow-600 text-white gemstone-sparkle text-sm sm:text-base min-h-11 sm:min-h-12 font-medium transition-all duration-300 hover:scale-105"
                          onClick={() => openWhatsAppInquiry(product)}
                        >
                          {t.inquire}
                        </Button>
                        <Button 
                          variant="outline"
                          className="w-full text-sm sm:text-base min-h-11 sm:min-h-12 font-medium transition-all duration-300 hover:scale-105 border-2"
                          onClick={() => openQuickView(product)}
                        >
                          {t.quickView}
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us - Mobile Enhanced */}
      <section className="py-12 sm:py-16 lg:py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-8 sm:mb-12 lg:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-playfair text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
              {t.whyChoose}
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg lg:text-xl max-w-3xl mx-auto px-2">
              {t.whyChooseSubtitle}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {whyChooseFeatures.map((feature, index) => (
              <motion.div
                key={index}
                className="text-center group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full p-6 sm:p-8 hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                  <CardContent className="p-0 flex flex-col items-center text-center h-full">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-primary-gold rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="h-7 w-7 sm:h-8 sm:w-8 lg:h-10 lg:w-10 text-white" />
                    </div>
                    <h3 className="font-playfair text-lg sm:text-xl lg:text-2xl font-semibold mb-3 sm:mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-sm sm:text-base leading-relaxed flex-1">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section - Mobile Optimized */}
      <section className="py-12 sm:py-16 lg:py-20 bg-primary-gold text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-8 sm:mb-12 lg:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-playfair text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
              {t.stats}
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 lg:p-8 hover:bg-white/20 transition-all duration-300">
                  <stat.icon className="h-6 w-6 sm:h-8 sm:w-8 lg:h-10 lg:w-10 mx-auto mb-3 sm:mb-4" />
                  <div className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-2 sm:mb-3">{stat.number}</div>
                  <div className="text-xs sm:text-sm lg:text-base opacity-90 leading-relaxed px-1">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

