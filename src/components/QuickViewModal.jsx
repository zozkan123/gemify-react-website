import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Star, MapPin, Gem, Award, Truck, Shield, Heart, MessageCircle, Eye, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useModal } from '../contexts/ModalContext';
import { useNavigate } from 'react-router-dom';

const QuickViewModal = ({ isOpen, onClose, product, language }) => {
  const { openModal } = useModal();
  const navigate = useNavigate();

  if (!product) return null;

  const translations = {
    en: {
      quickView: 'Quick View',
      price: 'Price',
      carat: 'Carat Weight',
      origin: 'Origin',
      clarity: 'Clarity',
      cut: 'Cut',
      treatment: 'Treatment',
      certification: 'Certification',
      specifications: 'Specifications',
      features: 'Features',
      inquire: 'Inquire About This Gem',
      askQuestion: 'Ask a Question',
      addToWishlist: 'Add to Wishlist',
      contactExpert: 'Contact Expert',
      callNow: 'Call Now',
      freeShipping: 'Free Worldwide Shipping',
      insured: 'Fully Insured Delivery',
      certified: 'Certified Authentic',
      guarantee: '30-Day Return Guarantee',
      close: 'Close',
      startingPrice: 'Starting price - Final price upon inquiry',
      rating: 'Rating'
    },
    es: {
      quickView: 'Vista Rápida',
      price: 'Precio',
      carat: 'Peso en Quilates',
      origin: 'Origen',
      clarity: 'Claridad',
      cut: 'Corte',
      treatment: 'Tratamiento',
      certification: 'Certificación',
      specifications: 'Especificaciones',
      features: 'Características',
      inquire: 'Consultar sobre esta Gema',
      askQuestion: 'Hacer una Pregunta',
      addToWishlist: 'Añadir a Favoritos',
      contactExpert: 'Contactar Experto',
      callNow: 'Llamar Ahora',
      freeShipping: 'Envío Gratuito Mundial',
      insured: 'Entrega Totalmente Asegurada',
      certified: 'Certificado Auténtico',
      guarantee: 'Garantía de Devolución de 30 Días',
      close: 'Cerrar',
      startingPrice: 'Precio inicial - Precio final bajo consulta',
      rating: 'Calificación'
    },
    fr: {
      quickView: 'Aperçu Rapide',
      price: 'Prix',
      carat: 'Poids en Carats',
      origin: 'Origine',
      clarity: 'Clarté',
      cut: 'Taille',
      treatment: 'Traitement',
      certification: 'Certification',
      specifications: 'Spécifications',
      features: 'Caractéristiques',
      inquire: 'Se Renseigner sur cette Gemme',
      askQuestion: 'Poser une Question',
      addToWishlist: 'Ajouter aux Favoris',
      contactExpert: 'Contacter un Expert',
      callNow: 'Appeler Maintenant',
      freeShipping: 'Livraison Gratuite Mondiale',
      insured: 'Livraison Entièrement Assurée',
      certified: 'Certifié Authentique',
      guarantee: 'Garantie de Retour de 30 Jours',
      close: 'Fermer',
      startingPrice: 'Prix de départ - Prix final sur demande',
      rating: 'Note'
    },
    ar: {
      quickView: 'عرض سريع',
      price: 'السعر',
      carat: 'وزن القيراط',
      origin: 'المنشأ',
      clarity: 'الوضوح',
      cut: 'القطع',
      treatment: 'المعالجة',
      certification: 'الشهادة',
      specifications: 'المواصفات',
      features: 'الميزات',
      inquire: 'استفسار عن هذا الحجر',
      askQuestion: 'اسأل سؤال',
      addToWishlist: 'إضافة للمفضلة',
      contactExpert: 'اتصل بخبير',
      callNow: 'اتصل الآن',
      freeShipping: 'شحن مجاني عالمي',
      insured: 'توصيل مؤمن بالكامل',
      certified: 'مصدق أصلي',
      guarantee: 'ضمان إرجاع 30 يوم',
      close: 'إغلاق',
      startingPrice: 'السعر الابتدائي - السعر النهائي عند الاستفسار',
      rating: 'التقييم'
    }
  };

  const t = translations[language] || translations.en;

  const handleInquiry = () => {
    const phoneNumber = '94742068566'; // WhatsApp number from the website
    const message = `Hello! I'm interested in the ${product.name} (${product.price}). Could you please provide more information about this gemstone?`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleAskQuestion = () => {
    onClose(); // Close quick view
    navigate('/contact'); // Navigate to contact page
  };

  const handleCallNow = () => {
    window.open('tel:+94742068566', '_self');
  };

  const handleAddToWishlist = () => {
    // Get current favorites from localStorage
    try {
      const savedFavorites = localStorage.getItem('gemify_favorites');
      const currentFavorites = savedFavorites ? JSON.parse(savedFavorites) : [];
      
      // Add product to favorites if not already there
      if (!currentFavorites.includes(product.id)) {
        currentFavorites.push(product.id);
        localStorage.setItem('gemify_favorites', JSON.stringify(currentFavorites));
        
        // You could add a toast notification here
        console.log('Added to favorites:', product.name);
      }
    } catch (error) {
      console.warn('Failed to add to favorites:', error);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={(e) => e.target === e.currentTarget && onClose()}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", duration: 0.3 }}
            className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto modal-mobile-optimized"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="sticky top-0 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 p-4 sm:p-6 z-10">
              <div className="flex items-center justify-between">
                <h2 className="text-lg sm:text-xl md:text-2xl font-playfair font-bold text-gray-900 dark:text-white">
                  {t.quickView}
                </h2>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={onClose}
                  className="h-8 w-8 sm:h-10 sm:w-10 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 mobile-touch-target"
                  aria-label={t.close}
                >
                  <X className="h-4 w-4 sm:h-5 sm:w-5" />
                </Button>
              </div>
            </div>

            {/* Content */}
            <div className="p-4 sm:p-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
                {/* Image Section */}
                <div className="space-y-4">
                  <div className="aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  
                  {/* Features Grid - Mobile Optimized */}
                  <div className="grid grid-cols-2 gap-2 sm:gap-3">
                    <div className="flex items-center space-x-2 p-2 sm:p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                      <Truck className="h-3 w-3 sm:h-4 sm:w-4 text-green-600 flex-shrink-0" />
                      <span className="text-xs sm:text-sm font-medium text-green-700 dark:text-green-300 truncate">
                        {t.freeShipping}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2 p-2 sm:p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                      <Shield className="h-3 w-3 sm:h-4 sm:w-4 text-blue-600 flex-shrink-0" />
                      <span className="text-xs sm:text-sm font-medium text-blue-700 dark:text-blue-300 truncate">
                        {t.insured}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2 p-2 sm:p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                      <Award className="h-3 w-3 sm:h-4 sm:w-4 text-purple-600 flex-shrink-0" />
                      <span className="text-xs sm:text-sm font-medium text-purple-700 dark:text-purple-300 truncate">
                        {t.certified}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2 p-2 sm:p-3 bg-amber-50 dark:bg-amber-900/20 rounded-lg">
                      <Gem className="h-3 w-3 sm:h-4 sm:w-4 text-amber-600 flex-shrink-0" />
                      <span className="text-xs sm:text-sm font-medium text-amber-700 dark:text-amber-300 truncate">
                        {t.guarantee}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Details Section */}
                <div className="space-y-4 sm:space-y-6">
                  {/* Title and Rating */}
                  <div>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-playfair font-bold text-gray-900 dark:text-white mb-2 sm:mb-3">
                      {product.name}
                    </h3>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-3 sm:mb-4">
                      <div className="flex items-center space-x-1">
                        {[...Array(product.rating || 5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 fill-yellow-400 text-yellow-400" />
                        ))}
                        <span className="text-sm text-gray-600 dark:text-gray-400 ml-1">
                          ({product.rating || 5}/5)
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="h-4 w-4 text-gray-500 flex-shrink-0" />
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          {product.origin}
                        </span>
                        <Badge variant="secondary" className="text-xs">
                          {product.type}
                        </Badge>
                      </div>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="p-3 sm:p-4 bg-gradient-to-r from-amber-50 to-yellow-50 dark:from-amber-900/20 dark:to-yellow-900/20 rounded-xl">
                    <div className="text-2xl sm:text-3xl font-bold text-amber-700 dark:text-amber-300">
                      {product.price}
                    </div>
                    <div className="text-xs sm:text-sm text-amber-600 dark:text-amber-400 mt-1">
                      {t.startingPrice}
                    </div>
                  </div>

                  {/* Specifications */}
                  <div>
                    <h4 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      {t.specifications}
                    </h4>
                    <div className="grid grid-cols-2 gap-2 sm:gap-3">
                      <div className="p-2 sm:p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                        <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">{t.carat}</div>
                        <div className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">
                          {product.carat} ct
                        </div>
                      </div>
                      <div className="p-2 sm:p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                        <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">{t.clarity}</div>
                        <div className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">
                          {product.clarity}
                        </div>
                      </div>
                      <div className="p-2 sm:p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                        <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">{t.cut}</div>
                        <div className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">
                          {product.cut}
                        </div>
                      </div>
                      <div className="p-2 sm:p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                        <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">{t.treatment}</div>
                        <div className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">
                          {product.treatment}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons - Mobile Optimized */}
                  <div className="space-y-3">
                    {/* Primary Action */}
                    <Button 
                      onClick={handleInquiry}
                      className="w-full bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-700 hover:to-yellow-700 text-white font-semibold py-3 sm:py-4 rounded-lg transition-all duration-300 hover:scale-105 mobile-touch-target"
                    >
                      <Gem className="h-4 w-4 mr-2" />
                      {t.inquire}
                    </Button>
                    
                    {/* Secondary Actions */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <Button 
                        onClick={handleAskQuestion}
                        variant="outline"
                        className="w-full py-3 rounded-lg border-2 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors mobile-touch-target"
                      >
                        <MessageCircle className="h-4 w-4 mr-2" />
                        {t.askQuestion}
                      </Button>
                      
                      <Button 
                        onClick={handleCallNow}
                        variant="outline"
                        className="w-full py-3 rounded-lg border-2 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors mobile-touch-target"
                      >
                        <Phone className="h-4 w-4 mr-2" />
                        {t.callNow}
                      </Button>
                    </div>
                    
                    {/* Wishlist Button */}
                    <Button
                      onClick={handleAddToWishlist}
                      variant="ghost"
                      className="w-full py-3 text-gray-600 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors mobile-touch-target"
                    >
                      <Heart className="h-4 w-4 mr-2" />
                      {t.addToWishlist}
                    </Button>
                  </div>

                  {/* Product Description */}
                  {product.description && (
                    <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                      <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                        {product.description}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default QuickViewModal;

