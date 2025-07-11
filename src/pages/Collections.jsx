import React, { useState, useMemo, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Heart, Eye, Search, Filter, Star } from 'lucide-react';
import { useModal } from '../contexts/ModalContext';
import InquireModal from '../components/InquireModal';
import QuickViewModal from '../components/QuickViewModal';
import sapphire1 from '../assets/sapphire1.jpg';
import sapphire2 from '../assets/sapphire2.jpg';
import ruby1 from '../assets/ruby1.jpg';
import ruby2 from '../assets/ruby2.jpg';
import emerald1 from '../assets/emerald1.jpg';

const Collections = ({ language }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('name');
  const [filterType, setFilterType] = useState('all');
  const [filterOrigin, setFilterOrigin] = useState('all');
  const [showFavorites, setShowFavorites] = useState(false);
  const [likedProducts, setLikedProducts] = useState(() => {
    try {
      const savedFavorites = localStorage.getItem('gemify_favorites');
      return savedFavorites ? new Set(JSON.parse(savedFavorites)) : new Set();
    } catch (error) {
      return new Set();
    }
  });

  // Use modal system for consistent functionality
  const { openModal } = useModal();

  useEffect(() => {
    try {
      localStorage.setItem('gemify_favorites', JSON.stringify(Array.from(likedProducts)));
    } catch (error) {
      console.warn('Failed to save favorites to localStorage:', error);
    }
  }, [likedProducts]);

  const translations = {
    en: {
      pageTitle: 'Our Collections',
      pageSubtitle: 'Discover our exquisite collection of the world\'s finest gemstones',
      searchPlaceholder: 'Search gemstones...',
      sortBy: 'Sort By',
      sortName: 'Name (A-Z)',
      sortPriceLow: 'Price (Low to High)',
      sortPriceHigh: 'Price (High to Low)',
      sortCarat: 'Carat Weight',
      gemstoneType: 'Gemstone Type',
      allTypes: 'All Types',
      sapphire: 'Sapphire',
      ruby: 'Ruby',
      emerald: 'Emerald',
      origin: 'Origin',
      allOrigins: 'All Origins',
      kashmir: 'Kashmir',
      myanmar: 'Myanmar',
      sriLanka: 'Sri Lanka',
      madagascar: 'Madagascar',
      colombia: 'Colombia',
      viewDetails: 'Inquire',
      quickView: 'Quick View',
      addToWishlist: 'Add to Wishlist',
      removeFromWishlist: 'Remove from Wishlist',
      noResults: 'No gemstones found matching your criteria.',
      clearFilters: 'Clear Filters',
      premium: 'Premium',
      exclusive: 'Exclusive',
      rare: 'Rare',
      certified: 'Certified',
      favorites: 'Favorites',
      showAll: 'Show All'
    },
    es: {
      pageTitle: 'Nuestras Colecciones',
      pageSubtitle: 'Descubre nuestra exquisita colección de las mejores gemas del mundo',
      searchPlaceholder: 'Buscar gemas...',
      sortBy: 'Ordenar Por',
      sortName: 'Nombre (A-Z)',
      sortPriceLow: 'Precio (Menor a Mayor)',
      sortPriceHigh: 'Precio (Mayor a Menor)',
      sortCarat: 'Peso en Quilates',
      gemstoneType: 'Tipo de Gema',
      allTypes: 'Todos los Tipos',
      sapphire: 'Zafiro',
      ruby: 'Rubí',
      emerald: 'Esmeralda',
      origin: 'Origen',
      allOrigins: 'Todos los Orígenes',
      kashmir: 'Cachemira',
      myanmar: 'Myanmar',
      sriLanka: 'Sri Lanka',
      madagascar: 'Madagascar',
      colombia: 'Colombia',
      viewDetails: 'Consultar',
      quickView: 'Vista Rápida',
      addToWishlist: 'Agregar a Favoritos',
      removeFromWishlist: 'Quitar de Favoritos',
      noResults: 'No se encontraron gemas que coincidan con sus criterios.',
      clearFilters: 'Limpiar Filtros',
      premium: 'Premium',
      exclusive: 'Exclusivo',
      rare: 'Raro',
      certified: 'Certificado',
      favorites: 'Favoritos',
      showAll: 'Mostrar Todo'
    },
    fr: {
      pageTitle: 'Nos Collections',
      pageSubtitle: 'Découvrez notre collection exquise des plus belles gemmes du monde',
      searchPlaceholder: 'Rechercher des gemmes...',
      sortBy: 'Trier Par',
      sortName: 'Nom (A-Z)',
      sortPriceLow: 'Prix (Croissant)',
      sortPriceHigh: 'Prix (Décroissant)',
      sortCarat: 'Poids en Carats',
      gemstoneType: 'Type de Gemme',
      allTypes: 'Tous les Types',
      sapphire: 'Saphir',
      ruby: 'Rubis',
      emerald: 'Émeraude',
      origin: 'Origine',
      allOrigins: 'Toutes les Origines',
      kashmir: 'Cachemire',
      myanmar: 'Myanmar',
      sriLanka: 'Sri Lanka',
      madagascar: 'Madagascar',
      colombia: 'Colombie',
      viewDetails: 'Se Renseigner',
      quickView: 'Aperçu Rapide',
      addToWishlist: 'Ajouter aux Favoris',
      removeFromWishlist: 'Retirer des Favoris',
      noResults: 'Aucune gemme trouvée correspondant à vos critères.',
      clearFilters: 'Effacer les Filtres',
      premium: 'Premium',
      exclusive: 'Exclusif',
      rare: 'Rare',
      certified: 'Certifié',
      favorites: 'Favoris',
      showAll: 'Tout Afficher'
    },
    ar: {
      pageTitle: 'مجموعاتنا',
      pageSubtitle: 'اكتشف مجموعتنا الرائعة من أجود الأحجار الكريمة في العالم',
      searchPlaceholder: 'البحث عن الأحجار الكريمة...',
      sortBy: 'ترتيب حسب',
      sortName: 'الاسم (أ-ي)',
      sortPriceLow: 'السعر (من الأقل إلى الأعلى)',
      sortPriceHigh: 'السعر (من الأعلى إلى الأقل)',
      sortCarat: 'الوزن بالقيراط',
      gemstoneType: 'نوع الحجر الكريم',
      allTypes: 'جميع الأنواع',
      sapphire: 'ياقوت أزرق',
      ruby: 'ياقوت أحمر',
      emerald: 'زمرد',
      origin: 'المنشأ',
      allOrigins: 'جميع المناشئ',
      kashmir: 'كشمير',
      myanmar: 'ميانمار',
      sriLanka: 'سريلانكا',
      madagascar: 'مدغشقر',
      colombia: 'كولومبيا',
      viewDetails: 'استفسار',
      quickView: 'عرض سريع',
      addToWishlist: 'أضف إلى المفضلة',
      removeFromWishlist: 'إزالة من المفضلة',
      noResults: 'لم يتم العثور على أحجار كريمة تطابق معاييرك.',
      clearFilters: 'مسح المرشحات',
      premium: 'فاخر',
      exclusive: 'حصري',
      rare: 'نادر',
      certified: 'معتمد',
      favorites: 'المفضلة',
      showAll: 'عرض الكل'
    }
  };

  const t = translations[language] || translations.en;

  // Sample gemstone data
  const gemstones = [
    {
      id: 1,
      name: 'Kashmir Sapphire',
      type: 'sapphire',
      origin: 'kashmir',
      price: '$1,500+',
      carat: 2.5,
      clarity: 'VVS1',
      cut: 'Oval',
      treatment: 'None',
      image: sapphire1,
      description: 'Exceptional blue sapphire from Kashmir with unparalleled color and clarity.',
      badge: t.premium,
      rating: 5
    },
    {
      id: 2,
      name: 'Burmese Ruby',
      type: 'ruby',
      origin: 'myanmar',
      price: '$2,000+',
      carat: 1.8,
      clarity: 'VS1',
      cut: 'Cushion',
      treatment: 'Heat Only',
      image: ruby1,
      description: 'Legendary "pigeon\'s blood" red ruby from Myanmar\'s Mogok Valley.',
      badge: t.exclusive,
      rating: 5
    },
    {
      id: 3,
      name: 'Ceylon Sapphire',
      type: 'sapphire',
      origin: 'sriLanka',
      price: '$1,200+',
      carat: 3.2,
      clarity: 'VVS2',
      cut: 'Round',
      treatment: 'Heat Only',
      image: sapphire2,
      description: 'Beautiful blue sapphire from Sri Lanka with excellent transparency.',
      badge: t.certified,
      rating: 4
    },
    {
      id: 4,
      name: 'Madagascar Ruby',
      type: 'ruby',
      origin: 'madagascar',
      price: '$1,800+',
      carat: 2.1,
      clarity: 'VS2',
      cut: 'Emerald',
      treatment: 'Heat Only',
      image: ruby2,
      description: 'Vibrant red ruby from Madagascar with exceptional fire.',
      badge: t.rare,
      rating: 5
    },
    {
      id: 5,
      name: 'Colombian Emerald',
      type: 'emerald',
      origin: 'colombia',
      price: '$3,000+',
      carat: 2.0,
      clarity: 'VS1',
      cut: 'Emerald',
      treatment: 'Minor Oil',
      image: emerald1,
      description: 'Vivid green emerald from Colombia, known for its exceptional color and clarity.',
      badge: t.exclusive,
      rating: 5
    }
  ];

  // Filter and sort gemstones
  const filteredAndSortedGemstones = useMemo(() => {
    let filtered = gemstones.filter(gem => {
      const matchesSearch = gem.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           gem.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesType = filterType === 'all' || gem.type === filterType;
      const matchesOrigin = filterOrigin === 'all' || gem.origin === filterOrigin;
      
      return matchesSearch && matchesType && matchesOrigin;
    });

    // Apply favorites filter
    if (showFavorites) {
      filtered = filtered.filter(gem => likedProducts.has(gem.id));
    }

    // Sort the filtered results
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'priceLow':
          const priceA = parseFloat(a.price.replace(/[^0-9.]/g, ''));
          const priceB = parseFloat(b.price.replace(/[^0-9.]/g, ''));
          return priceA - priceB;
        case 'priceHigh':
          const priceAHigh = parseFloat(a.price.replace(/[^0-9.]/g, ''));
          const priceBHigh = parseFloat(b.price.replace(/[^0-9.]/g, ''));
          return priceBHigh - priceAHigh;
        case 'carat':
          return b.carat - a.carat;
        default:
          return 0;
      }
    });

    return filtered;
  }, [searchTerm, sortBy, filterType, filterOrigin, showFavorites, likedProducts]);

  const toggleWishlist = (gemId) => {
    setLikedProducts(prev => {
      const newSet = new Set(prev);
      if (newSet.has(gemId)) {
        newSet.delete(gemId);
      } else {
        newSet.add(gemId);
      }
      return newSet;
    });
  };

  const clearFilters = () => {
    setSearchTerm('');
    setSortBy('name');
    setFilterType('all');
    setFilterOrigin('all');
    setShowFavorites(false);
  };

  const openInquireModal = (gem) => {
    openModal('inquire', { product: gem, language });
  };

  const openQuickView = (gem) => {
    openModal('quickView', { product: gem, language });
  };

  return (
    <div className="min-h-screen bg-background page-transition">
      {/* Hero Section - Mobile Optimized */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-primary-gold to-yellow-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            className="font-playfair text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 lg:mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {t.pageTitle}
          </motion.h1>
          <motion.p 
            className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {t.pageSubtitle}
          </motion.p>
        </div>
      </section>

      {/* Filters and Search - Mobile Optimized */}
      <section className="py-6 sm:py-8 bg-muted/50 border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4 lg:space-y-0 lg:flex lg:items-center lg:justify-between lg:gap-4">
            {/* Search */}
            <div className="relative flex-1 max-w-md lg:max-w-sm">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder={t.searchPlaceholder}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 min-h-10 sm:min-h-11"
              />
            </div>

            {/* Filters - Mobile Optimized */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:items-center gap-3 lg:gap-4">
              {/* Sort By */}
              <div className="flex items-center gap-2">
                <label className="text-sm font-medium whitespace-nowrap">{t.sortBy}</label>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-full sm:w-36 lg:w-48 min-h-10">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="name">{t.sortName}</SelectItem>
                    <SelectItem value="priceLow">{t.sortPriceLow}</SelectItem>
                    <SelectItem value="priceHigh">{t.sortPriceHigh}</SelectItem>
                    <SelectItem value="carat">{t.sortCarat}</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Gemstone Type */}
              <div className="flex items-center gap-2">
                <label className="text-sm font-medium whitespace-nowrap">{t.gemstoneType}</label>
                <Select value={filterType} onValueChange={setFilterType}>
                  <SelectTrigger className="w-full sm:w-32 lg:w-40 min-h-10">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">{t.allTypes}</SelectItem>
                    <SelectItem value="sapphire">{t.sapphire}</SelectItem>
                    <SelectItem value="ruby">{t.ruby}</SelectItem>
                    <SelectItem value="emerald">{t.emerald}</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Origin */}
              <div className="flex items-center gap-2">
                <label className="text-sm font-medium whitespace-nowrap">{t.origin}</label>
                <Select value={filterOrigin} onValueChange={setFilterOrigin}>
                  <SelectTrigger className="w-full sm:w-32 lg:w-40 min-h-10">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">{t.allOrigins}</SelectItem>
                    <SelectItem value="kashmir">{t.kashmir}</SelectItem>
                    <SelectItem value="myanmar">{t.myanmar}</SelectItem>
                    <SelectItem value="sriLanka">{t.sriLanka}</SelectItem>
                    <SelectItem value="madagascar">{t.madagascar}</SelectItem>
                    <SelectItem value="colombia">{t.colombia}</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2 col-span-1 sm:col-span-2 lg:col-span-1">
                <Button
                  variant={showFavorites ? 'default' : 'outline'}
                  onClick={() => setShowFavorites(!showFavorites)}
                  className="flex-1 lg:flex-none flex items-center gap-2 min-h-10"
                >
                  <Heart className={`h-4 w-4 ${showFavorites ? 'fill-white' : ''}`} />
                  <span className="hidden sm:inline">{showFavorites ? t.showAll : t.favorites}</span>
                </Button>

                <Button 
                  variant="outline" 
                  onClick={clearFilters} 
                  className="flex-1 lg:flex-none flex items-center gap-2 min-h-10"
                >
                  <Filter className="h-4 w-4" />
                  <span className="hidden sm:inline">{t.clearFilters}</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gemstones Grid - Mobile Optimized */}
      <section className="py-8 sm:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {filteredAndSortedGemstones.length === 0 ? (
            <motion.div 
              className="text-center py-12 sm:py-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-4xl sm:text-6xl mb-4">💎</div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-2">{t.noResults}</h3>
              <Button onClick={clearFilters} className="mt-4">
                {t.clearFilters}
              </Button>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
              {filteredAndSortedGemstones.map((gem, index) => (
                <motion.div
                  key={gem.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="group overflow-hidden hover:shadow-xl transition-all duration-500 card-smooth h-full">
                    <div className="relative overflow-hidden">
                      <img 
                        src={gem.image} 
                        alt={gem.name}
                        className="w-full h-40 sm:h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <Badge className="absolute top-2 sm:top-3 left-2 sm:left-3 bg-primary-gold text-white text-xs">
                        {gem.badge}
                      </Badge>
                      <div className="absolute top-2 sm:top-3 right-2 sm:right-3 flex space-x-1 sm:space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Button
                          size="icon"
                          variant="secondary"
                          className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/90 hover:bg-white"
                          onClick={() => toggleWishlist(gem.id)}
                        >
                          <Heart 
                            className={`h-3 w-3 sm:h-4 sm:w-4 transition-colors duration-300 ${
                              likedProducts.has(gem.id) 
                                ? 'fill-red-500 text-red-500' 
                                : 'text-gray-600'
                            }`} 
                          />
                        </Button>
                        <Button
                          size="icon"
                          variant="secondary"
                          className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/90 hover:bg-white"
                          onClick={() => openQuickView(gem)}
                        >
                          <Eye className="h-3 w-3 sm:h-4 sm:w-4 text-gray-600" />
                        </Button>
                      </div>
                    </div>
                    
                    <CardContent className="p-3 sm:p-4 flex flex-col h-full">
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-playfair text-base sm:text-lg font-semibold truncate">
                            {gem.name}
                          </h3>
                          <div className="flex items-center ml-2">
                            {[...Array(gem.rating)].map((_, i) => (
                              <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>
                        </div>
                        
                        <p className="text-muted-foreground text-xs sm:text-sm mb-3 line-clamp-2">
                          {gem.description}
                        </p>
                        
                        <div className="flex items-center justify-between text-xs text-muted-foreground mb-3">
                          <span>{gem.carat} ct</span>
                          <span className="capitalize">{gem.origin.replace(/([A-Z])/g, ' $1').trim()}</span>
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <p className="text-lg sm:text-xl font-bold text-primary-gold">
                            {gem.price}
                          </p>
                        </div>
                        
                        <div className="flex flex-col gap-2">
                          <Button 
                            size="sm" 
                            className="w-full bg-primary-gold hover:bg-yellow-600 text-white gemstone-sparkle text-xs sm:text-sm min-h-8 sm:min-h-9"
                            onClick={() => openInquireModal(gem)}
                          >
                            {t.viewDetails}
                          </Button>
                          <Button 
                            size="sm" 
                            variant="outline"
                            className="w-full text-xs sm:text-sm min-h-8 sm:min-h-9"
                            onClick={() => openQuickView(gem)}
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
          )}
        </div>
      </section>
    </div>
  );
};

export default Collections;

