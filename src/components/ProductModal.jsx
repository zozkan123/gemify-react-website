import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { X, Star, Heart, ShoppingCart, Award, Gem, Shield, Truck, CheckCircle } from 'lucide-react';

const ProductModal = ({ product, isOpen, onClose, language }) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);

  const translations = {
    en: {
      closeModal: 'Close',
      addToCart: 'Add to Cart',
      addedToCart: 'Added to Cart!',
      quantity: 'Quantity',
      specifications: 'Specifications',
      certification: 'Certification',
      shipping: 'Shipping & Returns',
      authenticity: 'Authenticity Guarantee',
      weight: 'Weight',
      cut: 'Cut',
      clarity: 'Clarity',
      origin: 'Origin',
      treatment: 'Treatment',
      certifiedBy: 'Certified by',
      freeShipping: 'Free insured shipping worldwide',
      returns: '30-day return policy',
      authenticityDesc: 'Every gemstone comes with professional certification and detailed provenance documentation.',
      bookConsultation: 'Book Private Consultation',
      askQuestion: 'Ask a Question',
      shareProduct: 'Share Product'
    },
    es: {
      closeModal: 'Cerrar',
      addToCart: 'Agregar al Carrito',
      addedToCart: '¡Agregado al Carrito!',
      quantity: 'Cantidad',
      specifications: 'Especificaciones',
      certification: 'Certificación',
      shipping: 'Envío y Devoluciones',
      authenticity: 'Garantía de Autenticidad',
      weight: 'Peso',
      cut: 'Corte',
      clarity: 'Claridad',
      origin: 'Origen',
      treatment: 'Tratamiento',
      certifiedBy: 'Certificado por',
      freeShipping: 'Envío asegurado gratuito en todo el mundo',
      returns: 'Política de devolución de 30 días',
      authenticityDesc: 'Cada gema viene con certificación profesional y documentación detallada de procedencia.',
      bookConsultation: 'Reservar Consulta Privada',
      askQuestion: 'Hacer una Pregunta',
      shareProduct: 'Compartir Producto'
    },
    fr: {
      closeModal: 'Fermer',
      addToCart: 'Ajouter au Panier',
      addedToCart: 'Ajouté au Panier!',
      quantity: 'Quantité',
      specifications: 'Spécifications',
      certification: 'Certification',
      shipping: 'Expédition et Retours',
      authenticity: 'Garantie d\'Authenticité',
      weight: 'Poids',
      cut: 'Taille',
      clarity: 'Clarté',
      origin: 'Origine',
      treatment: 'Traitement',
      certifiedBy: 'Certifié par',
      freeShipping: 'Expédition assurée gratuite dans le monde entier',
      returns: 'Politique de retour de 30 jours',
      authenticityDesc: 'Chaque gemme est accompagnée d\'une certification professionnelle et d\'une documentation détaillée de provenance.',
      bookConsultation: 'Réserver une Consultation Privée',
      askQuestion: 'Poser une Question',
      shareProduct: 'Partager le Produit'
    },
    ar: {
      closeModal: 'إغلاق',
      addToCart: 'إضافة إلى السلة',
      addedToCart: 'تمت الإضافة إلى السلة!',
      quantity: 'الكمية',
      specifications: 'المواصفات',
      certification: 'الشهادة',
      shipping: 'الشحن والإرجاع',
      authenticity: 'ضمان الأصالة',
      weight: 'الوزن',
      cut: 'القطع',
      clarity: 'الوضوح',
      origin: 'المنشأ',
      treatment: 'المعالجة',
      certifiedBy: 'معتمد من',
      freeShipping: 'شحن مؤمن مجاني في جميع أنحاء العالم',
      returns: 'سياسة الإرجاع لمدة 30 يوماً',
      authenticityDesc: 'كل حجر كريم يأتي مع شهادة مهنية ووثائق مصدر مفصلة.',
      bookConsultation: 'حجز استشارة خاصة',
      askQuestion: 'طرح سؤال',
      shareProduct: 'مشاركة المنتج'
    }
  };

  const t = translations[language] || translations.en;

  const handleAddToCart = () => {
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  if (!product) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="bg-background rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-background border-b p-4 flex justify-between items-center">
              <h2 className="font-playfair text-2xl font-bold">{product.name}</h2>
              <Button variant="ghost" size="sm" onClick={onClose}>
                <X className="h-4 w-4" />
              </Button>
            </div>

            <div className="p-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Product Images */}
                <div className="space-y-4">
                  <div className="aspect-square rounded-lg overflow-hidden bg-muted">
                    <img
                      src={product.images[selectedImage]}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {product.images.length > 1 && (
                    <div className="flex gap-2">
                      {product.images.map((image, index) => (
                        <button
                          key={index}
                          onClick={() => setSelectedImage(index)}
                          className={`w-16 h-16 rounded-lg overflow-hidden border-2 ${
                            selectedImage === index ? 'border-primary-gold' : 'border-muted'
                          }`}
                        >
                          <img
                            src={image}
                            alt={`${product.name} ${index + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Product Details */}
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="secondary">{product.category}</Badge>
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        ))}
                        <span className="text-sm text-muted-foreground ml-1">(4.9)</span>
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-4">{product.description}</p>
                    <div className="text-3xl font-bold text-primary-gold mb-4">
                      ${product.price.toLocaleString()}
                    </div>
                  </div>

                  {/* Quantity and Add to Cart */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <label className="text-sm font-medium">{t.quantity}:</label>
                      <div className="flex items-center border rounded-lg">
                        <button
                          onClick={() => setQuantity(Math.max(1, quantity - 1))}
                          className="px-3 py-1 hover:bg-muted"
                        >
                          -
                        </button>
                        <span className="px-4 py-1 border-x">{quantity}</span>
                        <button
                          onClick={() => setQuantity(quantity + 1)}
                          className="px-3 py-1 hover:bg-muted"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <Button
                        onClick={handleAddToCart}
                        className="flex-1 bg-primary-gold hover:bg-primary-gold/90"
                        disabled={addedToCart}
                      >
                        {addedToCart ? (
                          <>
                            <CheckCircle className="h-4 w-4 mr-2" />
                            {t.addedToCart}
                          </>
                        ) : (
                          <>
                            <ShoppingCart className="h-4 w-4 mr-2" />
                            {t.addToCart}
                          </>
                        )}
                      </Button>
                      <Button variant="outline" size="icon">
                        <Heart className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  {/* Specifications */}
                  <Card>
                    <CardContent className="p-4">
                      <h3 className="font-semibold mb-3 flex items-center gap-2">
                        <Gem className="h-4 w-4" />
                        {t.specifications}
                      </h3>
                      <div className="grid grid-cols-2 gap-3 text-sm">
                        <div>
                          <span className="text-muted-foreground">{t.weight}:</span>
                          <span className="ml-2">{product.specifications.weight}</span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">{t.cut}:</span>
                          <span className="ml-2">{product.specifications.cut}</span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">{t.clarity}:</span>
                          <span className="ml-2">{product.specifications.clarity}</span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">{t.origin}:</span>
                          <span className="ml-2">{product.specifications.origin}</span>
                        </div>
                        <div className="col-span-2">
                          <span className="text-muted-foreground">{t.treatment}:</span>
                          <span className="ml-2">{product.specifications.treatment}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Certification */}
                  <Card>
                    <CardContent className="p-4">
                      <h3 className="font-semibold mb-3 flex items-center gap-2">
                        <Award className="h-4 w-4" />
                        {t.certification}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        {t.certifiedBy}: {product.certification}
                      </p>
                      <div className="flex items-center gap-2 text-sm text-green-600">
                        <Shield className="h-4 w-4" />
                        {t.authenticity}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Shipping */}
                  <Card>
                    <CardContent className="p-4">
                      <h3 className="font-semibold mb-3 flex items-center gap-2">
                        <Truck className="h-4 w-4" />
                        {t.shipping}
                      </h3>
                      <div className="space-y-2 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          {t.freeShipping}
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          {t.returns}
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <Button variant="outline" className="flex-1">
                      {t.bookConsultation}
                    </Button>
                    <Button variant="outline" className="flex-1">
                      {t.askQuestion}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProductModal;

