import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, User, ArrowRight, Search, ExternalLink } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { useNavigate } from 'react-router-dom';

// Blog images
import sapphireQualityImg from '../assets/blog/sapphire-quality.jpg';
import mogokRubyImg from '../assets/blog/mogok-ruby.jpg';
import gemstoneInvestmentImg from '../assets/blog/gemstone-investment.jpg';
import emeraldCareImg from '../assets/blog/emerald-care.jpg';
import gemstoneFormationImg from '../assets/blog/gemstone-formation.jpg';
import ethicalMiningImg from '../assets/blog/ethical-mining.jpg';

const Blog = ({ language }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPost, setSelectedPost] = useState(null);
  const navigate = useNavigate();

  const translations = {
    en: {
      pageTitle: 'Gemstone Insights',
      pageSubtitle: 'Expert knowledge and stories from the world of precious gemstones',
      searchPlaceholder: 'Search articles...',
      readMore: 'Read More',
      readFull: 'Read Full Article',
      backToBlog: 'Back to Blog',
      author: 'By',
      readTime: 'min read',
      noResults: 'No articles found matching your search.',
      relatedArticles: 'Related Articles',
      shareArticle: 'Share Article',
      categories: {
        education: 'Education',
        market: 'Market Insights',
        care: 'Gemstone Care',
        history: 'History & Culture',
        investment: 'Investment Guide',
        mining: 'Mining & Sourcing'
      }
    },
    es: {
      pageTitle: 'Perspectivas de Gemas',
      pageSubtitle: 'Conocimiento experto e historias del mundo de las gemas preciosas',
      searchPlaceholder: 'Buscar artículos...',
      readMore: 'Leer Más',
      readFull: 'Leer Artículo Completo',
      backToBlog: 'Volver al Blog',
      author: 'Por',
      readTime: 'min de lectura',
      noResults: 'No se encontraron artículos que coincidan con tu búsqueda.',
      relatedArticles: 'Artículos Relacionados',
      shareArticle: 'Compartir Artículo',
      categories: {
        education: 'Educación',
        market: 'Perspectivas del Mercado',
        care: 'Cuidado de Gemas',
        history: 'Historia y Cultura',
        investment: 'Guía de Inversión',
        mining: 'Minería y Abastecimiento'
      }
    },
    fr: {
      pageTitle: 'Perspectives sur les Gemmes',
      pageSubtitle: 'Connaissances d\'experts et histoires du monde des gemmes précieuses',
      searchPlaceholder: 'Rechercher des articles...',
      readMore: 'Lire Plus',
      readFull: 'Lire l\'Article Complet',
      backToBlog: 'Retour au Blog',
      author: 'Par',
      readTime: 'min de lecture',
      noResults: 'Aucun article trouvé correspondant à votre recherche.',
      relatedArticles: 'Articles Connexes',
      shareArticle: 'Partager l\'Article',
      categories: {
        education: 'Éducation',
        market: 'Perspectives du Marché',
        care: 'Soin des Gemmes',
        history: 'Histoire et Culture',
        investment: 'Guide d\'Investissement',
        mining: 'Exploitation Minière et Approvisionnement'
      }
    },
    ar: {
      pageTitle: 'رؤى الأحجار الكريمة',
      pageSubtitle: 'معرفة الخبراء وقصص من عالم الأحجار الكريمة الثمينة',
      searchPlaceholder: 'البحث في المقالات...',
      readMore: 'اقرأ المزيد',
      readFull: 'اقرأ المقال كاملاً',
      backToBlog: 'العودة إلى المدونة',
      author: 'بواسطة',
      readTime: 'دقيقة قراءة',
      noResults: 'لم يتم العثور على مقالات تطابق بحثك.',
      relatedArticles: 'مقالات ذات صلة',
      shareArticle: 'مشاركة المقال',
      categories: {
        education: 'التعليم',
        market: 'رؤى السوق',
        care: 'العناية بالأحجار الكريمة',
        history: 'التاريخ والثقافة',
        investment: 'دليل الاستثمار',
        mining: 'التعدين والمصادر'
      }
    }
  };

  const t = translations[language] || translations.en;

  const blogPosts = [
    {
      id: 1,
      title: 'Understanding Sapphire Quality: The 4 Cs Explained',
      excerpt: 'Learn how to evaluate sapphire quality using the traditional 4 Cs: Color, Clarity, Cut, and Carat weight. Discover what makes a sapphire truly exceptional and how to make informed purchasing decisions.',
      content: `When evaluating sapphires, gemologists use the traditional 4 Cs framework that has been the industry standard for decades. Understanding these criteria is essential for anyone looking to purchase or invest in these magnificent gemstones.

**Color: The Most Important Factor**

Color is by far the most important factor in determining a sapphire's value. The most prized sapphires exhibit a vivid, pure blue color with excellent saturation. The ideal blue sapphire displays what gemologists call "cornflower blue" or "royal blue" - a medium to medium-dark tone with strong saturation and no visible color zoning.

Kashmir sapphires, mined from the remote regions of the Himalayas, are considered the pinnacle of blue sapphire quality. These stones exhibit a unique velvety appearance due to microscopic inclusions that scatter light in a distinctive way. Ceylon (Sri Lankan) sapphires are also highly prized for their exceptional clarity and brilliant blue color.

**Clarity: Windows to Perfection**

Clarity refers to the absence of inclusions and blemishes within the gemstone. While most sapphires contain some inclusions, the finest specimens are eye-clean, meaning no inclusions are visible to the naked eye. Some inclusions, such as silk (fine needle-like inclusions), can actually enhance a sapphire's beauty by creating a soft, velvety appearance.

Interestingly, certain inclusions can increase a sapphire's value. Star sapphires, which display asterism (a star-like phenomenon), owe their beauty to oriented needle-like inclusions that create this optical effect.

**Cut: Maximizing Beauty and Brilliance**

The cut of a sapphire significantly impacts its beauty and value. A well-cut sapphire will maximize the stone's color, brilliance, and overall visual appeal. The most popular cuts for sapphires include oval, cushion, round, and emerald cuts.

Master gem cutters must consider the rough stone's natural characteristics when determining the optimal cut. The goal is to achieve the best possible color distribution while maximizing the stone's weight retention and minimizing visible inclusions.

**Carat Weight: Size and Rarity**

Larger sapphires are exponentially rarer than smaller ones, making carat weight a significant factor in determining value. However, it's important to note that a smaller, high-quality sapphire can be more valuable than a larger stone of inferior quality.

The relationship between size and price is not linear. A 2-carat sapphire of exceptional quality may cost significantly more than twice the price of a comparable 1-carat stone due to the rarity of larger, high-quality specimens.

**Beyond the 4 Cs: Additional Considerations**

Origin plays a crucial role in sapphire valuation. Sapphires from certain localities, such as Kashmir, Burma (Myanmar), and Ceylon (Sri Lanka), command premium prices due to their exceptional quality and historical significance.

Heat treatment is common in the sapphire industry and is generally accepted when properly disclosed. Unheated sapphires of fine quality are extremely rare and command significant premiums.

**Making Informed Decisions**

When purchasing a sapphire, always insist on a reputable gemological certificate from laboratories such as GIA, Gübelin, or SSEF. These certificates provide detailed information about the stone's characteristics, including any treatments.

Consider your intended use for the sapphire. Engagement rings require stones with excellent durability and beauty, while collector pieces might prioritize rarity and provenance.

**Investment Potential**

High-quality sapphires have shown strong appreciation over time, particularly those from prestigious origins. Kashmir sapphires, in particular, have set numerous auction records in recent years, demonstrating their enduring appeal to collectors and investors.

The key to successful sapphire investment lies in acquiring stones of exceptional quality with proper documentation. Focus on color, clarity, and origin, as these factors most significantly impact long-term value appreciation.`,
      category: 'education',
      author: 'Mufthi Rizvi',
      date: '2024-12-15',
      readTime: 12,
      image: sapphireQualityImg,
      tags: ['sapphire', 'quality', 'evaluation', 'investment']
    },
    {
      id: 2,
      title: 'The Legendary Rubies of Myanmar: A Journey to Mogok',
      excerpt: 'Explore the mystical Mogok Valley in Myanmar, home to the world\'s finest rubies. Discover the geological conditions that create these legendary gems and their cultural significance.',
      content: `The Mogok Valley in Myanmar has been producing the world's finest rubies for over 500 years, earning it the title "Valley of Rubies." This remote mountainous region, located about 200 kilometers north of Mandalay, represents the pinnacle of ruby mining and continues to yield stones of unparalleled beauty and quality.

**Geological Marvel**

The geological conditions in Mogok are unique and perfect for ruby formation. The valley sits at the intersection of the Indian and Eurasian tectonic plates, where intense geological pressure and heat over millions of years created the ideal environment for corundum crystallization.

The rubies form in marble deposits, which is relatively rare compared to other ruby-producing regions where the stones typically form in basalt. This marble host rock contributes to the exceptional clarity and color saturation that Mogok rubies are famous for.

**The Legendary "Pigeon's Blood" Color**

Mogok rubies are renowned for their exceptional color, particularly the legendary "pigeon's blood" red. This term, which originated in Burma, describes the finest red color in rubies - a pure, vivid red with a slight blue undertone and strong fluorescence that makes the stone appear to glow from within.

The term "pigeon's blood" is somewhat controversial in the modern gem trade, as it's subjective and can be interpreted differently. However, when applied to Mogok rubies, it represents the absolute pinnacle of ruby color quality.

**Mining Traditions and Techniques**

Ruby mining in Mogok has remained largely traditional, with many operations still using hand tools and time-honored techniques passed down through generations. The valley is dotted with small-scale mines, often family-owned operations that have been working the same areas for decades.

The mining process typically involves digging shafts and tunnels into the marble hillsides, following ruby-bearing veins. Miners use simple tools like picks, shovels, and baskets to extract the gem-bearing rock, which is then carefully sorted by hand.

**Cultural and Historical Significance**

Rubies have held special significance in Burmese culture for centuries. They were believed to protect warriors in battle and bring good fortune to their owners. The Burmese royal family accumulated vast collections of Mogok rubies, many of which are now in museums or private collections around the world.

The famous "Sunrise Ruby," a 25.59-carat Mogok ruby, sold for over $30 million at auction in 2015, setting a world record for any colored gemstone. This sale highlighted the exceptional value and desirability of top-quality Mogok rubies.

**Modern Challenges and Opportunities**

Political instability and international sanctions have affected Myanmar's ruby trade in recent years. However, this has also created opportunities for collectors and investors, as the supply of new Mogok rubies has become more limited, potentially increasing the value of existing stones.

The Myanmar government has implemented new mining regulations and licensing requirements, which may affect future production. These changes underscore the importance of provenance documentation for Mogok rubies.

**Identifying Mogok Rubies**

Mogok rubies often display certain characteristics that help gemologists identify their origin. These include specific inclusion patterns, fluorescence properties, and spectroscopic signatures. However, definitive origin determination requires advanced gemological testing and should only be performed by qualified laboratories.

The presence of calcite inclusions, blue color zoning, and strong red fluorescence under ultraviolet light are often indicators of Mogok origin, though these characteristics are not exclusive to the region.

**Investment Considerations**

Mogok rubies represent one of the strongest segments in the colored gemstone investment market. Their combination of beauty, rarity, and historical significance makes them highly sought after by collectors and investors worldwide.

When considering a Mogok ruby investment, focus on stones with excellent color, clarity, and proper documentation. Origin certificates from reputable laboratories are essential, as they significantly impact the stone's value and marketability.

**The Future of Mogok**

Despite political challenges, Mogok continues to produce exceptional rubies, though in smaller quantities than in previous decades. The valley's geological potential remains significant, and new mining techniques may unlock previously inaccessible deposits.

Conservation efforts are also becoming increasingly important, as sustainable mining practices help preserve this unique geological environment for future generations while maintaining the quality and reputation of Mogok rubies.

The legend of Mogok rubies continues to captivate gem enthusiasts worldwide, representing not just exceptional beauty but also a rich cultural heritage and geological wonder that has endured for centuries.`,
      category: 'history',
      author: 'Mufthi Rizvi',
      date: '2024-12-10',
      readTime: 15,
      image: mogokRubyImg,
      tags: ['ruby', 'Myanmar', 'Mogok', 'history', 'mining']
    },
    {
      id: 3,
      title: 'Gemstone Investment Guide: Building a Precious Portfolio',
      excerpt: 'Discover the fundamentals of gemstone investing, from market trends to portfolio diversification strategies. Learn how to identify investment-grade stones and maximize returns.',
      content: `The gemstone investment market has gained significant attention in recent years as investors seek alternative assets that combine beauty, rarity, and potential for appreciation. Unlike traditional investments, gemstones offer the unique advantage of being both a store of value and objects of beauty that can be enjoyed while they appreciate.

**Understanding the Gemstone Investment Market**

The global colored gemstone market has shown remarkable resilience and growth over the past decade. High-quality rubies, sapphires, and emeralds have consistently outperformed many traditional asset classes, with some exceptional stones appreciating by 10-15% annually.

Several factors drive gemstone values: rarity, beauty, durability, and market demand. The most investment-worthy gemstones combine all these characteristics, making them highly sought after by collectors and investors worldwide.

**The Big Three: Rubies, Sapphires, and Emeralds**

These three gemstone varieties represent the core of most serious gemstone investment portfolios. Each offers unique characteristics and market dynamics:

**Rubies** command the highest prices per carat among colored gemstones. Burmese rubies, particularly those from Mogok, have shown exceptional price appreciation. The record-breaking sale of the Sunrise Ruby demonstrated the investment potential of top-quality specimens.

**Sapphires** offer excellent investment potential, especially Kashmir and Padparadscha varieties. Blue sapphires from Kashmir have become increasingly rare, driving prices to new heights. Ceylon sapphires also represent solid investment opportunities due to their exceptional clarity and color.

**Emeralds** from Colombia, particularly those from Muzo and Chivor mines, are highly prized. The challenge with emerald investment lies in finding stones with good clarity, as most emeralds contain visible inclusions.

**Investment-Grade Criteria**

Not all gemstones are suitable for investment. Investment-grade stones must meet specific criteria:

**Size**: Generally, stones over 2 carats for rubies and sapphires, and over 3 carats for emeralds, are considered investment-grade. Larger stones are exponentially rarer and command premium prices.

**Quality**: Only the finest quality stones should be considered for investment. This means excellent color, good clarity (eye-clean for rubies and sapphires), and superior cut quality.

**Origin**: Provenance significantly impacts value. Stones from prestigious localities command premium prices and show better appreciation potential.

**Treatment**: Unheated rubies and sapphires, and emeralds with minimal oil treatment, are preferred for investment purposes.

**Certification**: Proper documentation from reputable laboratories is essential for investment stones.

**Market Trends and Timing**

The gemstone market has shown several notable trends in recent years:

**Increasing Scarcity**: Many traditional mining areas are becoming depleted, leading to increased scarcity of high-quality stones. This fundamental supply constraint supports long-term price appreciation.

**Growing Asian Demand**: Rising wealth in Asia, particularly China and India, has created new demand for high-quality gemstones. Cultural affinity for colored gemstones in these markets provides strong support for prices.

**Auction Results**: Regular auction sales provide transparent price discovery for the gemstone market. Record-breaking sales often set new benchmarks and influence market sentiment.

**Portfolio Allocation and Diversification**

Gemstone investments should typically represent 5-10% of a diversified investment portfolio. Within the gemstone allocation, consider diversifying across:

- Different gemstone varieties (rubies, sapphires, emeralds)
- Various origins (Burma, Kashmir, Colombia, etc.)
- Different sizes and price points
- Acquisition timing to average costs over market cycles

**Storage and Insurance**

Proper storage and insurance are crucial for gemstone investments. Consider:

- Bank safety deposit boxes for long-term storage
- Specialized gemstone storage facilities
- Comprehensive insurance coverage including appreciation clauses
- Regular appraisals to maintain accurate insurance values

**Liquidity Considerations**

Gemstones are less liquid than traditional investments. Selling investment-grade gemstones typically requires:

- Time to find qualified buyers
- Professional marketing through auction houses or dealers
- Proper documentation and certification
- Realistic pricing based on current market conditions

**Exit Strategies**

Successful gemstone investors plan their exit strategies from the beginning:

**Auction Houses**: For exceptional stones, major auction houses provide global exposure and transparent price discovery.

**Dealer Networks**: Established relationships with reputable dealers can facilitate private sales.

**Collector Markets**: Direct sales to collectors, particularly for stones with unique characteristics or provenance.

**Estate Planning**: Gemstones can be excellent vehicles for wealth transfer, combining investment value with emotional significance.

**Risk Management**

Like all investments, gemstones carry risks:

**Market Risk**: Gemstone values can fluctuate based on market conditions and fashion trends.

**Liquidity Risk**: Finding buyers for specific stones may take time and effort.

**Authentication Risk**: Ensuring proper identification and certification is crucial.

**Storage Risk**: Physical assets require secure storage and insurance.

**Future Outlook**

The long-term outlook for investment-grade gemstones remains positive, driven by:

- Continued scarcity of high-quality stones
- Growing global wealth and demand
- Increasing recognition of gemstones as alternative investments
- Cultural and emotional appeal that transcends market cycles

Successful gemstone investing requires patience, knowledge, and careful selection. Focus on quality over quantity, maintain proper documentation, and work with reputable professionals throughout the process.`,
      category: 'investment',
      author: 'Mufthi Rizvi',
      date: '2024-12-05',
      readTime: 18,
      image: gemstoneInvestmentImg,
      tags: ['investment', 'portfolio', 'market trends', 'strategy']
    },
    {
      id: 4,
      title: 'Caring for Your Precious Gemstones: A Complete Guide',
      excerpt: 'Learn essential care techniques to preserve the beauty and value of your gemstone collection. From cleaning methods to storage solutions, protect your investment.',
      content: `Proper care and maintenance of precious gemstones is essential for preserving their beauty, value, and longevity. Whether you own a single special piece or an extensive collection, understanding how to care for your gemstones will ensure they remain stunning for generations to come.

**Understanding Gemstone Hardness and Durability**

The Mohs scale of hardness is fundamental to understanding gemstone care. This scale, ranging from 1 (softest) to 10 (hardest), helps determine how resistant a gemstone is to scratching and abrasion.

**Corundum** (rubies and sapphires) ranks 9 on the Mohs scale, making them extremely durable and suitable for everyday wear. However, they can still be damaged by harder materials or sudden impacts.

**Emeralds**, while ranking 7.5-8 on the Mohs scale, are more fragile due to their typical inclusion patterns and internal fractures. They require more careful handling than rubies and sapphires.

**Daily Care Practices**

**Wearing Guidelines**: Remove gemstone jewelry before engaging in physical activities, household chores, or applying cosmetics, perfumes, and lotions. These substances can build up on gemstones and affect their brilliance.

**Impact Protection**: Even hard gemstones can chip or crack if subjected to sharp impacts. Be particularly careful when wearing rings, as hands are more likely to encounter hard surfaces.

**Chemical Exposure**: Avoid exposing gemstones to harsh chemicals, including household cleaners, chlorine, and acidic substances. These can damage both the gemstone and its setting.

**Cleaning Techniques by Gemstone Type**

**Rubies and Sapphires**: These durable gemstones can be cleaned with warm soapy water and a soft brush. For deeper cleaning, ultrasonic cleaners are generally safe for untreated stones, but avoid them for heavily included or treated specimens.

**Emeralds**: Due to their typical oil treatments and inclusion patterns, emeralds require gentler care. Clean only with lukewarm soapy water and a soft cloth. Never use ultrasonic or steam cleaners, as these can damage the stone or remove oil treatments.

**General Cleaning Process**:
1. Prepare a solution of warm water and mild dish soap
2. Soak the jewelry for 10-15 minutes
3. Gently brush with a soft toothbrush, paying attention to areas around the setting
4. Rinse thoroughly with clean water
5. Dry with a soft, lint-free cloth
6. Allow to air dry completely before storage

**Professional Cleaning and Maintenance**

Schedule professional cleaning and inspection at least once a year. Professional jewelers can:

- Deep clean gemstones using specialized equipment
- Check settings for loose stones or wear
- Re-oil emeralds if necessary
- Polish and refinish metal settings
- Identify potential problems before they become serious

**Storage Solutions**

**Individual Storage**: Store each piece separately to prevent scratching. Use soft pouches, individual compartments, or wrap pieces in soft cloth.

**Climate Control**: Maintain stable temperature and humidity levels. Extreme fluctuations can cause thermal shock in some gemstones.

**Security**: Use a quality safe or safety deposit box for valuable pieces. Consider insurance coverage that includes coverage for mysterious disappearance.

**Fabric Considerations**: Use acid-free tissue paper or cotton cloth for wrapping. Avoid materials that may contain sulfur or other reactive chemicals.

**Travel Care**

When traveling with gemstone jewelry:

- Use a dedicated jewelry travel case with individual compartments
- Carry valuable pieces in carry-on luggage, never in checked bags
- Consider leaving extremely valuable pieces at home or in secure storage
- Bring copies of insurance documentation and appraisals
- Take photographs of pieces before traveling for insurance purposes

**Specific Care for Treated Gemstones**

**Heat-Treated Stones**: Most heat-treated rubies and sapphires require no special care beyond normal precautions.

**Oil-Treated Emeralds**: Avoid exposure to heat, ultrasonic cleaners, and harsh chemicals that might remove or damage the oil treatment.

**Fracture-Filled Stones**: These require extremely gentle care, as the filling material may be damaged by heat, chemicals, or ultrasonic cleaning.

**Signs of Damage to Watch For**

Regular inspection can help identify problems early:

- Chips or cracks in the gemstone
- Loose stones in their settings
- Worn prongs or other setting components
- Dull or cloudy appearance
- Color changes (may indicate treatment issues)
- Scratches on the stone's surface

**Insurance and Documentation**

Maintain comprehensive records for your gemstone collection:

- Professional appraisals updated every 3-5 years
- Certificates from recognized gemological laboratories
- High-quality photographs from multiple angles
- Purchase receipts and provenance documentation
- Insurance policies with appropriate coverage levels

**Restoration and Re-cutting Considerations**

Sometimes damaged gemstones can be restored:

**Re-cutting**: Chips and scratches can often be polished out, though this reduces the stone's size and weight.

**Re-oiling**: Emeralds can be re-oiled to improve their appearance if the original treatment has deteriorated.

**Setting Repair**: Damaged settings can usually be repaired or replaced while preserving the gemstone.

**Environmental Considerations**

**Light Exposure**: While most gemstones are stable under normal lighting conditions, prolonged exposure to intense UV light should be avoided.

**Temperature Changes**: Rapid temperature changes can cause thermal shock. Allow jewelry to acclimate gradually when moving between extreme temperatures.

**Humidity**: Very low humidity can cause some organic materials in settings to become brittle, while high humidity may promote tarnishing of metal components.

**Long-term Preservation**

For heirloom pieces or investment stones:

- Document the stone's history and any treatments
- Maintain relationships with qualified gemologists and jewelers
- Consider periodic professional photography for documentation
- Update insurance coverage as values appreciate
- Plan for proper estate documentation and transfer

**Emergency Procedures**

If damage occurs:

- Stop wearing the piece immediately
- Collect any loose stones or fragments
- Photograph the damage for insurance purposes
- Consult a qualified jeweler or gemologist promptly
- Avoid attempting DIY repairs

Proper gemstone care is an investment in preserving beauty, value, and sentimental significance. With appropriate care, your precious gemstones can maintain their brilliance and continue to bring joy for generations to come.`,
      category: 'care',
      author: 'Mufthi Rizvi',
      date: '2024-11-28',
      readTime: 14,
      image: emeraldCareImg,
      tags: ['care', 'maintenance', 'cleaning', 'storage', 'preservation']
    },
    {
      id: 5,
      title: 'The Science Behind Gemstone Formation: Nature\'s Masterpieces',
      excerpt: 'Delve into the fascinating geological processes that create precious gemstones. Understand how millions of years of Earth\'s history culminate in these natural treasures.',
      content: `The formation of precious gemstones represents one of nature's most remarkable achievements, requiring specific geological conditions, immense time, and often extraordinary circumstances. Understanding these processes enhances our appreciation for these natural treasures and helps explain their rarity and value.

**The Fundamental Requirements**

Gemstone formation requires three critical elements: the right chemical composition, appropriate temperature and pressure conditions, and sufficient time for crystal growth. These conditions rarely occur together, which explains why gem-quality crystals are so rare compared to common minerals.

**Temperature and Pressure**: Most gemstones form under extreme conditions deep within the Earth's crust or mantle, where temperatures can exceed 1000°C and pressures reach thousands of times atmospheric pressure.

**Chemical Environment**: The presence of specific trace elements in precise concentrations determines both the formation and color of gemstones. Even minute amounts of chromium, iron, or titanium can dramatically affect a crystal's appearance.

**Time**: Crystal formation is typically measured in millions of years, allowing for the slow, orderly arrangement of atoms that creates the perfect internal structure necessary for gem quality.

**Corundum Formation: Rubies and Sapphires**

Corundum (Al₂O₃) forms under high-temperature, low-silica conditions in metamorphic environments. The process typically occurs when aluminum-rich rocks are subjected to intense heat and pressure during mountain-building events or contact metamorphism.

**Ruby Formation**: The red color in rubies comes from trace amounts of chromium substituting for aluminum in the crystal structure. The geological conditions that allow chromium to be present while maintaining the low-silica environment necessary for corundum formation are extremely rare, explaining ruby's scarcity.

**Sapphire Formation**: All non-red corundum varieties are classified as sapphires. Different trace elements create various colors: iron and titanium produce blue sapphires, iron alone creates yellow and green varieties, while vanadium can produce purple sapphires.

**The Kashmir Phenomenon**: The legendary Kashmir sapphires formed under unique conditions when the Indian subcontinent collided with Asia. The extreme pressures and temperatures of this tectonic event, combined with specific chemical conditions, created the distinctive velvety blue sapphires that are now virtually impossible to find.

**Emerald Genesis: A Tale of Unlikely Chemistry**

Emerald formation requires the unlikely combination of beryllium and chromium or vanadium - elements that rarely occur together in nature. This explains why emerald deposits are so rare and geographically limited.

**Colombian Emeralds**: The world's finest emeralds form in Colombia's sedimentary rocks through a unique process involving hydrothermal fluids. Ancient seawater trapped in sedimentary layers provided the beryllium, while organic matter in black shales contributed chromium and vanadium.

**Hydrothermal Process**: Hot, mineral-rich fluids circulating through fractured rocks deposit emerald crystals in veins and cavities. This process explains the typical inclusion patterns found in emeralds, as the crystals often trap fluid inclusions during formation.

**The Role of Tectonic Activity**: Most emerald deposits are associated with areas of significant tectonic activity, where the movement of crustal plates creates the fractures and fluid circulation necessary for emerald formation.

**Crystal Growth Mechanisms**

**Nucleation**: Crystal formation begins with nucleation, where atoms arrange themselves in the basic crystal structure. This initial step requires specific conditions and often occurs around existing mineral grains or impurities.

**Growth Phases**: Once nucleated, crystals grow through the systematic addition of atoms to the crystal faces. The rate of growth affects crystal quality - slower growth typically produces better-formed, more perfect crystals.

**Zoning**: Many gemstones display color zoning, where different parts of the crystal show varying colors or intensities. This occurs when the chemical environment changes during crystal growth, affecting the incorporation of trace elements.

**Inclusion Formation**: Inclusions form when foreign materials are trapped during crystal growth or when the host crystal undergoes changes after formation. These inclusions often provide valuable information about formation conditions and can help identify a gemstone's origin.

**Metamorphic Processes**

Many gemstones form during metamorphism, when existing rocks are transformed by heat and pressure without melting. This process can create new minerals or recrystallize existing ones into gem-quality specimens.

**Contact Metamorphism**: Occurs when rocks are heated by nearby magma intrusions. This process can create gemstones like garnets, spinels, and some sapphires.

**Regional Metamorphism**: Large-scale metamorphic events associated with mountain building can create extensive gemstone deposits. The Mogok region's ruby deposits formed through this process.

**Metasomatism**: Chemical alteration of rocks by circulating fluids can create unique gemstone deposits. This process is responsible for some emerald and ruby formations.

**Igneous Origins**

Some gemstones form directly from cooling magma or in associated pegmatites - extremely coarse-grained igneous rocks that form from the last, most evolved portions of magma.

**Pegmatite Formation**: These rocks form when water-rich magma cools slowly, allowing large crystals to grow. Pegmatites are important sources of many gemstones, including some sapphires and various rare species.

**Volcanic Processes**: Rapid cooling of magma can sometimes preserve high-pressure minerals that would otherwise transform under surface conditions. Some sapphires are found in volcanic rocks or their erosional products.

**Secondary Processes and Concentration**

**Weathering and Erosion**: Physical and chemical weathering breaks down gemstone-bearing rocks, releasing crystals that may be concentrated in alluvial deposits. Many of the world's most important gem deposits are alluvial.

**Placer Deposits**: Rivers and streams can concentrate heavy, durable gemstones in specific locations, creating rich placer deposits. The famous gem gravels of Sri Lanka and Myanmar formed through this process.

**Residual Deposits**: When host rocks weather away, resistant gemstones may accumulate in residual soils directly above their source rocks.

**Modern Understanding and Exploration**

**Geochemical Signatures**: Modern analytical techniques allow geologists to identify the specific conditions under which gemstones formed, helping in the search for new deposits.

**Plate Tectonics**: Understanding plate tectonic processes helps explain the global distribution of gemstone deposits and guides exploration efforts.

**Experimental Studies**: Laboratory experiments that recreate natural formation conditions help scientists understand the precise requirements for gemstone formation.

**Implications for Rarity and Value**

The complex and specific requirements for gemstone formation explain their rarity and value. The combination of precise chemical conditions, extreme physical environments, and vast time scales means that gem-quality crystals represent truly exceptional natural phenomena.

**Future Formation**: While gemstones continue to form in the Earth's depths, the time scales involved mean that current deposits represent essentially finite resources. This geological reality supports the long-term value proposition of high-quality gemstones.

Understanding the science behind gemstone formation deepens our appreciation for these natural masterpieces and helps explain why they have captivated humanity throughout history. Each gemstone represents a unique convergence of geological conditions that may never be repeated exactly, making every specimen a irreplaceable piece of Earth's history.`,
      category: 'education',
      author: 'Dr. Sarah Chen',
      date: '2024-11-20',
      readTime: 16,
      image: gemstoneFormationImg,
      tags: ['geology', 'formation', 'science', 'education', 'crystallography']
    },
    {
      id: 6,
      title: 'Ethical Sourcing in the Gemstone Industry: A Path Forward',
      excerpt: 'Explore the importance of ethical sourcing in the gemstone trade. Learn about responsible mining practices, fair trade initiatives, and how consumers can make informed choices.',
      content: `The gemstone industry has undergone significant transformation in recent years, with increasing focus on ethical sourcing, environmental responsibility, and social impact. As consumers become more conscious of the origins of their purchases, the industry has responded with initiatives to ensure that the beauty of gemstones is not overshadowed by negative social or environmental consequences.

**Understanding Ethical Sourcing**

Ethical sourcing in the gemstone industry encompasses multiple dimensions: environmental protection, fair labor practices, community development, and transparency in the supply chain. It requires a comprehensive approach that considers the entire journey from mine to market.

**Environmental Responsibility**: Ethical mining operations minimize environmental impact through responsible extraction methods, land rehabilitation, and water management. This includes avoiding practices that cause long-term environmental damage and implementing restoration programs.

**Social Impact**: Ethical sourcing ensures that mining communities benefit from gemstone extraction through fair wages, safe working conditions, education opportunities, and community development programs.

**Transparency**: Ethical suppliers maintain clear documentation of their gemstones' journey from mine to market, allowing consumers to make informed decisions about their purchases.

**Challenges in Traditional Mining**

**Artisanal Mining**: Much of the world's gemstone production comes from small-scale, artisanal mining operations. While these provide livelihoods for millions of people, they often lack the resources to implement comprehensive safety and environmental measures.

**Geographic Concentration**: Many of the world's finest gemstones come from regions with political instability, weak governance, or limited infrastructure. This creates challenges for implementing and monitoring ethical practices.

**Complex Supply Chains**: Gemstones often pass through multiple intermediaries before reaching consumers, making it difficult to trace their origins and ensure ethical practices throughout the supply chain.

**Economic Pressures**: The pressure to maximize profits can sometimes conflict with ethical practices, particularly in regions where mining provides one of the few economic opportunities.

**Positive Developments and Initiatives**

**Certification Programs**: Organizations like the Responsible Jewellery Council (RJC) have developed certification programs that set standards for ethical practices throughout the jewelry supply chain.

**Traceability Technology**: Blockchain and other technologies are being implemented to create transparent, tamper-proof records of gemstone origins and supply chain movements.

**Direct Trade Relationships**: Some companies are establishing direct relationships with mining communities, ensuring fair prices and supporting local development projects.

**Industry Collaboration**: Major players in the gemstone industry are working together to establish industry-wide standards and best practices for ethical sourcing.

**Environmental Considerations**

**Sustainable Mining Practices**: Modern ethical mining operations implement practices that minimize environmental impact, including:
- Careful planning to reduce land disturbance
- Water recycling and treatment systems
- Restoration of mined areas
- Protection of biodiversity and ecosystems

**Carbon Footprint**: Efforts to reduce the carbon footprint of gemstone mining include using renewable energy sources, optimizing transportation routes, and implementing energy-efficient processing methods.

**Waste Management**: Responsible operations implement comprehensive waste management systems to prevent contamination of soil and water resources.

**Social Impact and Community Development**

**Fair Labor Practices**: Ethical mining operations ensure:
- Safe working conditions with proper safety equipment and training
- Fair wages that provide a living income for workers and their families
- Respect for workers' rights, including the right to organize
- Prohibition of child labor and forced labor

**Community Investment**: Many ethical mining operations invest in local communities through:
- Education programs and school construction
- Healthcare facilities and services
- Infrastructure development
- Skills training and capacity building

**Women's Empowerment**: Programs that specifically support women in mining communities, including training opportunities, microfinance programs, and leadership development.

**The Role of Consumers**

**Informed Purchasing**: Consumers can support ethical sourcing by:
- Asking retailers about the origins of their gemstones
- Seeking out suppliers who provide transparency about their sourcing practices
- Supporting companies that have made commitments to ethical sourcing
- Being willing to pay fair prices that support ethical practices

**Certification Awareness**: Understanding and looking for certifications from recognized organizations that verify ethical sourcing practices.

**Long-term Perspective**: Recognizing that ethical sourcing may sometimes result in higher prices, but that this investment supports sustainable practices and community development.

**Industry Transformation**

**Technology Integration**: The industry is increasingly using technology to improve traceability and transparency:
- Digital certificates that track gemstones from mine to market
- Satellite monitoring of mining operations
- Mobile applications that allow consumers to verify gemstone origins

**Partnerships**: Collaboration between mining companies, NGOs, governments, and international organizations to develop and implement ethical standards.

**Education and Training**: Programs to educate miners, traders, and retailers about ethical practices and their importance.

**Challenges and Future Directions**

**Implementation Costs**: Implementing ethical practices often requires significant investment, which can be challenging for small-scale operations.

**Monitoring and Enforcement**: Ensuring compliance with ethical standards across diverse and often remote mining locations remains challenging.

**Consumer Education**: Continuing to educate consumers about the importance of ethical sourcing and how to identify ethically sourced gemstones.

**Regulatory Framework**: Developing appropriate regulatory frameworks that support ethical practices while not creating barriers for legitimate small-scale miners.

**Success Stories**

**Colombian Emerald Initiative**: Colombia has implemented programs to formalize artisanal emerald mining, providing training, equipment, and market access to small-scale miners while ensuring environmental protection.

**Fair Trade Gemstones**: Several organizations have developed fair trade certification programs for gemstones, ensuring that miners receive fair prices and that environmental and social standards are met.

**Corporate Responsibility Programs**: Major jewelry companies have implemented comprehensive responsible sourcing programs, working directly with mining communities to improve conditions and provide development support.

**The Path Forward**

The future of ethical sourcing in the gemstone industry depends on continued collaboration between all stakeholders: miners, traders, retailers, consumers, and civil society organizations. Key priorities include:

**Standardization**: Developing industry-wide standards for ethical sourcing that are practical to implement and verify.

**Technology Adoption**: Leveraging technology to improve traceability and transparency throughout the supply chain.

**Capacity Building**: Providing training and resources to help small-scale miners implement ethical practices.

**Consumer Engagement**: Continuing to educate consumers about the importance of ethical sourcing and how their purchasing decisions can make a difference.

**Policy Support**: Working with governments to develop policies that support ethical mining while protecting the environment and communities.

The movement toward ethical sourcing in the gemstone industry represents a fundamental shift toward sustainability and social responsibility. While challenges remain, the progress made in recent years demonstrates that it is possible to enjoy the beauty of gemstones while ensuring that their extraction benefits the communities and environments where they are found.

By supporting ethical sourcing practices, consumers can help ensure that the gemstone industry contributes positively to the world, creating a legacy of beauty that extends far beyond the stones themselves.`,
      category: 'mining',
      author: 'Maria Rodriguez',
      date: '2024-11-15',
      readTime: 20,
      image: ethicalMiningImg,
      tags: ['ethics', 'sustainability', 'mining', 'social responsibility', 'environment']
    }
  ];

  const filteredPosts = blogPosts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const openFullArticle = (post) => {
    setSelectedPost(post);
  };

  const closeFullArticle = () => {
    setSelectedPost(null);
  };

  if (selectedPost) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8">
          <Button 
            onClick={closeFullArticle}
            variant="outline" 
            className="mb-6"
          >
            ← {t.backToBlog}
          </Button>
          
          <article className="max-w-4xl mx-auto">
            <div className="mb-8">
              <img 
                src={selectedPost.image} 
                alt={selectedPost.title}
                className="w-full h-64 md:h-96 object-cover rounded-lg mb-6"
              />
              
              <div className="flex items-center gap-4 mb-4">
                <Badge variant="secondary">
                  {t.categories[selectedPost.category]}
                </Badge>
                {selectedPost.tags.map(tag => (
                  <Badge key={tag} variant="outline" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
              
              <h1 className="font-playfair text-3xl md:text-4xl font-bold mb-4">
                {selectedPost.title}
              </h1>
              
              <div className="flex items-center gap-6 text-muted-foreground text-sm mb-6">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  {t.author} {selectedPost.author}
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  {new Date(selectedPost.date).toLocaleDateString()}
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  {selectedPost.readTime} {t.readTime}
                </div>
              </div>
            </div>
            
            <div className="prose prose-lg max-w-none blog-article-content">
              {selectedPost.content.split('\n\n').map((paragraph, index) => {
                if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                  return (
                    <h3 key={index} className="font-playfair text-xl font-semibold mt-8 mb-4">
                      {paragraph.slice(2, -2)}
                    </h3>
                  );
                }
                return (
                  <p key={index} className="mb-4 leading-relaxed">
                    {paragraph}
                  </p>
                );
              })}
            </div>
            
            <div className="mt-12 pt-8 border-t">
              <div className="blog-button-group">
                <Button 
                  variant="outline" 
                  className="blog-share-button"
                  onClick={() => {
                    if (navigator.share) {
                      navigator.share({
                        title: selectedPost.title,
                        text: selectedPost.excerpt,
                        url: window.location.href
                      });
                    } else {
                      // Fallback for browsers that don't support Web Share API
                      const shareText = `${selectedPost.title} - ${selectedPost.excerpt}`;
                      const shareUrl = window.location.href;
                      const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`;
                      window.open(twitterUrl, '_blank', 'width=600,height=400');
                    }
                  }}
                >
                  {t.shareArticle}
                </Button>
                <Button 
                  variant="outline"
                  onClick={() => navigate("/contact")}
                  className="blog-contact-button"
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Contact Expert
                </Button>
              </div>
            </div>
          </article>
        </div>
      </div>
    );
  }

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
            className="text-xl max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {t.pageSubtitle}
          </motion.p>
          
          <motion.div 
            className="max-w-md mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder={t.searchPlaceholder}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-white text-black blog-search-enhanced"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">{t.noResults}</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow duration-300 cursor-pointer group blog-card-hover">
                    <div className="relative overflow-hidden blog-image-container">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300 blog-image-hover"
                      />
                      <Badge className="absolute top-4 left-4 bg-primary-gold text-white blog-badge-float blog-category-badge">
                        {t.categories[post.category]}
                      </Badge>
                    </div>
                    
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="flex-1">
                        <h3 className="font-playfair text-xl font-semibold mb-3 line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="text-muted-foreground text-sm mb-4 line-clamp-3 blog-excerpt-text">
                          {post.excerpt}
                        </p>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="flex items-center gap-4 text-xs text-muted-foreground blog-meta-info">
                          <div className="flex items-center gap-1 blog-author-info">
                            <User className="h-3 w-3" />
                            {post.author}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {post.readTime} {t.readTime}
                          </div>
                        </div>
                        
                        <div className="flex flex-wrap gap-1 mb-4">
                          {post.tags.slice(0, 3).map(tag => (
                            <Badge key={tag} variant="outline" className="text-xs blog-tag-hover">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        
                        <Button 
                          onClick={() => openFullArticle(post)}
                          className="w-full bg-primary-gold hover:bg-yellow-600 text-white blog-button-enhanced"
                        >
                          {t.readFull}
                          <ArrowRight className="h-4 w-4 ml-2" />
                        </Button>
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

export default Blog;

