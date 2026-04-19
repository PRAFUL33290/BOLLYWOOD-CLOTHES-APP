import React from 'react';
import { ScrollView, View, Text, TouchableOpacity } from 'react-native';
import { Image } from 'expo-image';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import useBreakpoint from '../hooks/useBreakpoint';

export default function CollectionsScreen() {
  const { isMobile, isTablet, isDesktop } = useBreakpoint();
  const px = isDesktop ? 64 : isTablet ? 40 : 24;

  const colCount = isDesktop ? 3 : isTablet ? 2 : 1;
  const cardStyle = { width: `${Math.floor(100 / colCount) - 1}%` };

  return (
    <View className="flex-1 bg-surface">
      <Header />
      <ScrollView className="flex-1">
        <View style={{ paddingHorizontal: px, paddingTop: 48, paddingBottom: 16, alignItems: 'center' }}>
          <Text style={{ fontFamily: 'NotoSerif_700Bold', fontSize: isDesktop ? 42 : 32, color: '#9e0000', marginBottom: 12, textAlign: 'center', letterSpacing: 1 }}>
            La Sélection Festive
          </Text>
          <Text style={{ fontFamily: 'Manrope_400Regular', color: '#5e3f3a', textAlign: 'center', maxWidth: 560, lineHeight: 22 }}>
            Découvrez notre sélection de haute couture indienne. Chaque pièce est le témoignage d'un savoir-faire ancestral.
          </Text>
        </View>

        {/* Barre de filtres */}
        <View style={{
          paddingHorizontal: px,
          paddingVertical: 16,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderBottomWidth: 1,
          borderBottomColor: 'rgba(146,110,105,0.2)',
        }}>
          <Text style={{ fontFamily: 'Manrope_400Regular', color: '#5e3f3a', fontSize: 13 }}>Affichage 1–12 sur 48 articles</Text>
          <View style={{ flexDirection: 'row', gap: 12 }}>
            {['Tout', 'Femmes', 'Hommes', 'Bijoux'].map((cat) => (
              <TouchableOpacity
                key={cat}
                style={{
                  borderWidth: 1,
                  borderColor: 'rgba(146,110,105,0.4)',
                  paddingHorizontal: 12,
                  paddingVertical: 6,
                  borderRadius: 2,
                }}
              >
                <Text style={{ fontFamily: 'Manrope_500Medium', fontSize: 11, letterSpacing: 1, textTransform: 'uppercase', color: '#1a1c1c' }}>
                  {cat}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Grille de produits */}
        <View style={{ paddingHorizontal: px, paddingTop: 32 }}>
          {/* Produit vedette (pleine largeur) */}
          <View style={{ width: '100%', backgroundColor: '#fff', marginBottom: 32, shadowColor: '#000', shadowOpacity: 0.06, shadowOffset: { width: 0, height: 2 }, shadowRadius: 8, elevation: 3 }}>
            {isDesktop ? (
              /* Desktop : image + texte côte à côte */
              <View style={{ flexDirection: 'row' }}>
                <View style={{ flex: 1, aspectRatio: 4 / 5 }}>
                  <Image
                    source={{ uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuAQOub3c2ppilj3V5HuJdbT1pbydqTMrn830RZcJaN_nefPZdf_mw18YSj03Nz6lp6MvnwNxF-BQ4p7EK-dY7QMTb8ykXdYtAVf8LoxMPYxTnD5tja_aeHoDEZ0TrK-q0f92h9j5zW7tWV4xI9yZWjhg8ypb8mxDTPWtFRE3CI7AvPLQ3N4CazCznBzlxp3yJf5O4IONKoKSiiHgzqVXbMb4t6ZXgl6gbnGDbRTurjFu1ZvL_feOistPZmW8vH63eDK_9gQG2FaYoiL" }}
                    style={{ width: '100%', height: '100%' }}
                    contentFit="cover"
                  />
                </View>
                <View style={{ flex: 1, padding: 48, justifyContent: 'center' }}>
                  <Text style={{ fontFamily: 'Manrope_600SemiBold', fontSize: 11, letterSpacing: 3, textTransform: 'uppercase', color: '#B8860B', marginBottom: 12 }}>
                    Collection Couture
                  </Text>
                  <Text style={{ fontFamily: 'NotoSerif_700Bold', fontSize: 32, color: '#1a1c1c', marginBottom: 16, lineHeight: 40 }}>
                    Le Lehenga Rouge Héritage
                  </Text>
                  <Text style={{ fontFamily: 'Manrope_400Regular', color: '#5e3f3a', lineHeight: 22, marginBottom: 24 }}>
                    Brodé à la main par des artisans de Rajasthan, ce lehenga incarne des siècles de tradition royale.
                  </Text>
                  <Text style={{ fontFamily: 'NotoSerif_700Bold', fontSize: 26, color: '#9e0000', marginBottom: 28 }}>₹1,45,000</Text>
                  <TouchableOpacity style={{ backgroundColor: '#9e0000', paddingVertical: 14, paddingHorizontal: 32, alignSelf: 'flex-start', borderRadius: 2 }}>
                    <Text style={{ fontFamily: 'Manrope_700Bold', color: '#fff', letterSpacing: 2, textTransform: 'uppercase', fontSize: 12 }}>
                      Ajouter au Panier
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            ) : (
              /* Mobile/Tablette : empilé */
              <>
                <View style={{ width: '100%', aspectRatio: 4 / 5 }}>
                  <Image
                    source={{ uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuAQOub3c2ppilj3V5HuJdbT1pbydqTMrn830RZcJaN_nefPZdf_mw18YSj03Nz6lp6MvnwNxF-BQ4p7EK-dY7QMTb8ykXdYtAVf8LoxMPYxTnD5tja_aeHoDEZ0TrK-q0f92h9j5zW7tWV4xI9yZWjhg8ypb8mxDTPWtFRE3CI7AvPLQ3N4CazCznBzlxp3yJf5O4IONKoKSiiHgzqVXbMb4t6ZXgl6gbnGDbRTurjFu1ZvL_feOistPZmW8vH63eDK_9gQG2FaYoiL" }}
                    style={{ width: '100%', height: '100%' }}
                    contentFit="cover"
                  />
                </View>
                <View style={{ padding: 20, alignItems: 'center' }}>
                  <Text style={{ fontFamily: 'Manrope_600SemiBold', fontSize: 11, letterSpacing: 3, textTransform: 'uppercase', color: '#B8860B', marginBottom: 8 }}>Collection Couture</Text>
                  <Text style={{ fontFamily: 'NotoSerif_700Bold', fontSize: 22, color: '#1a1c1c', marginBottom: 8, textAlign: 'center' }}>Le Lehenga Rouge Héritage</Text>
                  <Text style={{ fontFamily: 'NotoSerif_700Bold', fontSize: 20, color: '#9e0000' }}>₹1,45,000</Text>
                </View>
              </>
            )}
          </View>

          {/* Grille */}
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
            <ProductCard title="Sherwani Ivoire" price="₹ 85 000" imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuA3Hkuc0konS53aDJuuMVkgc94KeAONr6kaeC2W8IwPdKrzxx8Ld_h0MOXQli20SvKs0YFIbkznwDzWA4dPva1DxHJu1pkuOCc5jr6J3SkwZxurT_QDr2w5uugaVMcNGvB55dsuKf6wFlPyL1g4s8Wlr_ennmCFv4AqTYeNpFVe0tnF4S-0RYMnYTja_6YR_gmBveJGjAuQod4JM_E4_Q7tqU_6orLf1o1zmAA9uE3T7JQtib4GoSh1JSyVzgthJ76lG69_oxVC4rE0" cardStyle={cardStyle} />
            <ProductCard title="Sari Zari Émeraude" price="₹ 62 000" imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuBuvE0EJwDhtdIfysUHM1107p85ICvyW1e--pHbnBFp8iHrlISO2DjWrPI4Awz9GJJ9gw1bbrDGTxC0-yEL89euJ7_4AHKTK_utD6RiYt6JxSayi8u7RruIpiyhQ6ChHWXJJXEkzXZ1Vqvh2bbMGYnx0GjaXlHy6HHirQEs-Bi_9OQybiGYtV1XyzBRI5i99Ovqb7RKvTXn1WsCSkFTa_TEmq8sifzGAugumzUH5yOrJgWY0cLMiHf-REAU8_w3UVlrXkKl9eLnYWIm" cardStyle={cardStyle} />
            <ProductCard title="Parure Kundan" price="₹ 2,10,000" imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuCfBrhjepy6ih9wOQbokmSRb-gpM8RV9ea8NnBHPO4ZPCz69avYnoSG3UGUeh0uZcz-rF0RNw3zaNKT9J-1jqcETC0dQVk_zqLufJDO8FPlGKeDED5qn9cdORs_56-OvZ0B-HKgJAlZFYerKk_j597f2etPVWmq-48mry5aXZbHbRS1LOIvpXDRdybPt8Sga5vnncZOBS4WXn8CFb2sh_DhoG7Z_pFnqraaY2JkaUxnY0LAQ7wgx6w3B-012feEYnWCs2qPcrbyJeDF" cardStyle={cardStyle} />
          </View>

          {/* Pagination */}
          <View style={{ flexDirection: 'row', justifyContent: 'center', gap: 8, marginTop: 32, marginBottom: 48 }}>
            {[1, 2, 3, 4].map((p) => (
              <TouchableOpacity
                key={p}
                style={{
                  width: 40, height: 40,
                  alignItems: 'center', justifyContent: 'center',
                  borderBottomWidth: p === 1 ? 2 : 0,
                  borderBottomColor: '#FFD700',
                }}
              >
                <Text style={{ fontFamily: 'NotoSerif_700Bold', fontSize: 16, color: p === 1 ? '#9e0000' : '#5e3f3a' }}>{p}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <Footer />
      </ScrollView>
    </View>
  );
}
        <View className="px-6 py-12 items-center">
          <Text className="font-headline text-4xl text-primary font-bold tracking-tight mb-4 text-center">
            The Festive Edit
          </Text>
          <Text className="font-body text-on-surface-variant text-base text-center px-4">
            Discover our curated selection of high-end Indian couture. Each piece is a testament to heritage craftsmanship.
          </Text>
        </View>

        {/* Filters Mobile View (simplified) */}
        <View className="px-6 pb-6 flex-row justify-between items-center border-b border-outline-variant/20">
          <Text className="font-body text-on-surface-variant">Showing 1-12 of 48 items</Text>
          <TouchableOpacity className="flex-row items-center border border-outline-variant/40 px-3 py-1 rounded">
            <Text className="font-label text-sm uppercase text-on-surface mr-2">Filter</Text>
          </TouchableOpacity>
        </View>

        {/* Product Grid */}
        <View className="px-6 pt-8 items-center">
          {/* Featured Large Product */}
          <View className="w-full bg-surface-container-lowest mb-10 pb-6 shadow-sm">
            <View className="relative w-full aspect-[4/5] bg-surface-container-low mb-6">
              <Image
                source={{ uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuAQOub3c2ppilj3V5HuJdbT1pbydqTMrn830RZcJaN_nefPZdf_mw18YSj03Nz6lp6MvnwNxF-BQ4p7EK-dY7QMTb8ykXdYtAVf8LoxMPYxTnD5tja_aeHoDEZ0TrK-q0f92h9j5zW7tWV4xI9yZWjhg8ypb8mxDTPWtFRE3CI7AvPLQ3N4CazCznBzlxp3yJf5O4IONKoKSiiHgzqVXbMb4t6ZXgl6gbnGDbRTurjFu1ZvL_feOistPZmW8vH63eDK_9gQG2FaYoiL" }}
                className="w-full h-full"
                contentFit="cover"
              />
            </View>
            <View className="items-center px-4">
              <Text className="font-label text-xs uppercase tracking-[0.2em] text-[#B8860B] mb-2 font-semibold">Couture Collection</Text>
              <Text className="font-headline text-2xl font-bold text-on-surface mb-2 text-center">The Crimson Heritage Lehenga</Text>
              <Text className="font-body text-xl font-medium text-primary">₹1,45,000</Text>
            </View>
          </View>

          <View className="flex-row flex-wrap justify-between w-full">
            <ProductCard
              title="Ivory Silk Sherwani"
              price="₹ 85,000"
              imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuA3Hkuc0konS53aDJuuMVkgc94KeAONr6kaeC2W8IwPdKrzxx8Ld_h0MOXQli20SvKs0YFIbkznwDzWA4dPva1DxHJu1pkuOCc5jr6J3SkwZxurT_QDr2w5uugaVMcNGvB55dsuKf6wFlPyL1g4s8Wlr_ennmCFv4AqTYeNpFVe0tnF4S-0RYMnYTja_6YR_gmBveJGjAuQod4JM_E4_Q7tqU_6orLf1o1zmAA9uE3T7JQtib4GoSh1JSyVzgthJ76lG69_oxVC4rE0"
            />
            <ProductCard
              title="Emerald Zari Saree"
              price="₹ 62,000"
              imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuBuvE0EJwDhtdIfysUHM1107p85ICvyW1e--pHbnBFp8iHrlISO2DjWrPI4Awz9GJJ9gw1bbrDGTxC0-yEL89euJ7_4AHKTK_utD6RiYt6JxSayi8u7RruIpiyhQ6ChHWXJJXEkzXZ1Vqvh2bbMGYnx0GjaXlHy6HHirQEs-Bi_9OQybiGYtV1XyzBRI5i99Ovqb7RKvTXn1WsCSkFTa_TEmq8sifzGAugumzUH5yOrJgWY0cLMiHf-REAU8_w3UVlrXkKl9eLnYWIm"
            />
            <ProductCard
              title="Kundan Choker Set"
              price="₹ 2,10,000"
              imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuCfBrhjepy6ih9wOQbokmSRb-gpM8RV9ea8NnBHPO4ZPCz69avYnoSG3UGUeh0uZcz-rF0RNw3zaNKT9J-1jqcETC0dQVk_zqLufJDO8FPlGKeDED5qn9cdORs_56-OvZ0B-HKgJAlZFYerKk_j597f2etPVWmq-48mry5aXZbHbRS1LOIvpXDRdybPt8Sga5vnncZOBS4WXn8CFb2sh_DhoG7Z_pFnqraaY2JkaUxnY0LAQ7wgx6w3B-012feEYnWCs2qPcrbyJeDF"
            />
          </View>

          {/* Pagination */}
          <View className="flex-row gap-4 mt-8 mb-12">
            <TouchableOpacity className="w-10 h-10 items-center justify-center border-b-2 border-[#FFD700]">
              <Text className="font-headline text-lg text-primary font-bold">1</Text>
            </TouchableOpacity>
            <TouchableOpacity className="w-10 h-10 items-center justify-center">
              <Text className="font-headline text-lg text-on-surface-variant">2</Text>
            </TouchableOpacity>
            <TouchableOpacity className="w-10 h-10 items-center justify-center">
              <Text className="font-headline text-lg text-on-surface-variant">3</Text>
            </TouchableOpacity>
          </View>
        </View>

        <Footer />
      </ScrollView>
    </View>
  );
}
