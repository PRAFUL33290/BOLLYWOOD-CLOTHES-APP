import React from 'react';
import { ScrollView, View, Text, TouchableOpacity, TextInput } from 'react-native';
import { Image } from 'expo-image';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import { MaterialIcons } from '@expo/vector-icons';
import useBreakpoint from '../hooks/useBreakpoint';

export default function HomeScreen({ navigation }) {
  const { isMobile, isTablet, isDesktop, width } = useBreakpoint();

  /* Largeur des cartes produit selon la taille d'écran */
  const getCardStyle = (colCount) => ({
    width: `${Math.floor(100 / colCount) - 1}%`,
  });
  const cardCols = isDesktop ? 3 : isTablet ? 2 : 1;
  const cardStyle = getCardStyle(cardCols);

  /* Hauteur du héros */
  const heroHeight = isDesktop ? 720 : isTablet ? 640 : 580;

  /* Padding horizontal selon l'écran */
  const px = isDesktop ? 64 : isTablet ? 40 : 24;

  return (
    <View className="flex-1 bg-background">
      <Header />
      <ScrollView className="flex-1" contentContainerStyle={{ paddingBottom: 40 }}>

        {/* ── Bannière héros ── */}
        <View style={{ height: heroHeight, position: 'relative', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f0ede8' }}>
          <Image
            source={{ uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuB6L3WRWq7_-BirqD39LqOg5F0c7JaBCaB2NrABKYcU-y9Qu5SwUnaw8Dvp1OHj8R0WAQrJ-q4i0tJS-zlkbXWefHx_bkeZdgWh1ApeHoWF54kaDrZosHs40iV13t0cV_nmmpB-bK3W7irwMSPRZwKlOvty-G5xjmiktf_ihPUSdCmzzH4WX7ufRNlnaTWdI8zH-CvK950RwEtt2iAJlrDw6_5nL1SLezMvUtYL6i-glqyM7j9rrXa5dzgTKqLRCX1vdkzk67SA6h6H" }}
            style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}
            contentFit="cover"
          />
          <View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.42)' }} />
          <View style={{ position: 'relative', zIndex: 10, paddingHorizontal: px, alignItems: 'center', maxWidth: 780 }}>
            <Text style={{ fontFamily: 'NotoSerif_700Bold', fontSize: isDesktop ? 56 : isTablet ? 46 : 38, color: '#fff', marginBottom: 16, textAlign: 'center', lineHeight: isDesktop ? 68 : 52 }}>
              Élégance Indienne Exquise
            </Text>
            <Text style={{ fontFamily: 'Manrope_300Light', fontSize: isDesktop ? 18 : 15, color: 'rgba(255,255,255,0.88)', marginBottom: 36, textAlign: 'center', lineHeight: 26 }}>
              Découvrez l'art de la haute couture indienne, à la croisée du patrimoine artisanal et du luxe contemporain.
            </Text>
            <TouchableOpacity
              style={{ backgroundColor: '#9e0000', paddingHorizontal: 40, paddingVertical: 16, borderRadius: 2 }}
              onPress={() => navigation.navigate('Collections')}
            >
              <Text style={{ fontFamily: 'Manrope_700Bold', color: '#fff', letterSpacing: 3, textTransform: 'uppercase', fontSize: 12 }}>
                Explorer la Collection
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* ── Catégories ── */}
        <View style={{ paddingVertical: 64, paddingHorizontal: px, backgroundColor: '#faf9f8', alignItems: 'center' }}>
          <Text style={{ fontFamily: 'NotoSerif_700Bold', fontSize: 28, color: '#1a1c1c', marginBottom: 8, textAlign: 'center' }}>
            Catégories Phares
          </Text>
          <View style={{ width: 48, height: 3, backgroundColor: '#FFD700', marginBottom: 36 }} />

          {isDesktop ? (
            /* Desktop : 3 colonnes */
            <View style={{ flexDirection: 'row', width: '100%', gap: 16 }}>
              {[
                { label: 'Femmes', uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuDSJ7SXyKf2CHUDGYpIxvTb6LpHhx2RPAuqoCuHrLOUNcAZvR76e9GQqyMDl7C1tIdwCYaJffVMY4W_HG5dwbNB6Iok15HgWS2-35iOrOCDELgjflUOxhfm1y9FSNMeKzihuUHf02QWjARD6zK3i1S2QPsqijVlK1-hcRrDdiYUVvLs4V8j0XuRs0pSR30EDajZ6RnlXk-dWFuG_HV7AScj6uEsmsj5SzNBrrQ9EjIbA6u0OiFqJOuBeI24ogdaZMV0zkTcUwfd-JN-" },
                { label: 'Hommes', uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuBcjgdcbQo_jifm1zlYHirZGFeivsooNnwIJ8tYeF1n6KOPyAb3L16L1E94q_ch8-SX8MSOftA4EIFHM9LeO0v8w_KKu7RCdS_u6sb2lNqj_wU1HVKeI_w0Efqfvi3XlRPb_aZYu8zT9aKsRXFDRYRnBi4fVixp_WhoHP9MBc7Wyp6VzbPNXhVgqpjUStm4yrYcNAJi-HHjz_iTj8J44lQawtRbHbMru4gjsyY7M7Uq-Ky1HOLjWRkQLOjLZzzm4f1I1WRMcgSi1zlf" },
                { label: 'Enfants', uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuBia9ILcRIefzR-LNcY863kQZRBmacciXx3xh2He2xcGJk6t635bBS7i65Z5V4WhJiqUDI9XuYjUpWxEesjKNg10FiHHqn3g9FLOi78HkhpImfxa_7e1mEwD8Z88ZauzqdjfPUU18D3WDczkQnqo1uFuiA8ms8dwYUTPA0DKK5bfmSSlArq74EgeDVAQe_FTgLBztB-JB8Wk5TR8_9yz-HBmkIOrMPTfxrlDrpCB87FhxP439LmcyCaACQrShdCtZl7dEA9PVP-7i2S" },
              ].map(({ label, uri }) => (
                <TouchableOpacity key={label} style={{ flex: 1, height: 420, position: 'relative', overflow: 'hidden' }}>
                  <Image source={{ uri }} style={{ width: '100%', height: '100%' }} contentFit="cover" />
                  <View style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.3)' }} />
                  <View style={{ position: 'absolute', bottom: 24, left: 20 }}>
                    <Text style={{ fontFamily: 'NotoSerif_700Bold', fontSize: 22, color: '#fff', marginBottom: 4 }}>{label}</Text>
                    <Text style={{ fontFamily: 'Manrope_600SemiBold', fontSize: 11, color: '#FFD700', letterSpacing: 2, textTransform: 'uppercase' }}>Découvrir →</Text>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          ) : (
            /* Mobile / Tablette : layout empilé */
            <View style={{ width: '100%', gap: 12 }}>
              <TouchableOpacity style={{ height: isTablet ? 320 : 280, width: '100%', position: 'relative', overflow: 'hidden' }}>
                <Image source={{ uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuDSJ7SXyKf2CHUDGYpIxvTb6LpHhx2RPAuqoCuHrLOUNcAZvR76e9GQqyMDl7C1tIdwCYaJffVMY4W_HG5dwbNB6Iok15HgWS2-35iOrOCDELgjflUOxhfm1y9FSNMeKzihuUHf02QWjARD6zK3i1S2QPsqijVlK1-hcRrDdiYUVvLs4V8j0XuRs0pSR30EDajZ6RnlXk-dWFuG_HV7AScj6uEsmsj5SzNBrrQ9EjIbA6u0OiFqJOuBeI24ogdaZMV0zkTcUwfd-JN-" }} style={{ width: '100%', height: '100%' }} contentFit="cover" />
                <View style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.3)' }} />
                <View style={{ position: 'absolute', bottom: 20, left: 20 }}>
                  <Text style={{ fontFamily: 'NotoSerif_700Bold', fontSize: 22, color: '#fff', marginBottom: 4 }}>Femmes</Text>
                  <Text style={{ fontFamily: 'Manrope_600SemiBold', fontSize: 11, color: '#FFD700', letterSpacing: 2, textTransform: 'uppercase' }}>Découvrir →</Text>
                </View>
              </TouchableOpacity>
              <View style={{ flexDirection: 'row', height: 180, gap: 12 }}>
                {[
                  { label: 'Hommes', uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuBcjgdcbQo_jifm1zlYHirZGFeivsooNnwIJ8tYeF1n6KOPyAb3L16L1E94q_ch8-SX8MSOftA4EIFHM9LeO0v8w_KKu7RCdS_u6sb2lNqj_wU1HVKeI_w0Efqfvi3XlRPb_aZYu8zT9aKsRXFDRYRnBi4fVixp_WhoHP9MBc7Wyp6VzbPNXhVgqpjUStm4yrYcNAJi-HHjz_iTj8J44lQawtRbHbMru4gjsyY7M7Uq-Ky1HOLjWRkQLOjLZzzm4f1I1WRMcgSi1zlf" },
                  { label: 'Enfants', uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuBia9ILcRIefzR-LNcY863kQZRBmacciXx3xh2He2xcGJk6t635bBS7i65Z5V4WhJiqUDI9XuYjUpWxEesjKNg10FiHHqn3g9FLOi78HkhpImfxa_7e1mEwD8Z88ZauzqdjfPUU18D3WDczkQnqo1uFuiA8ms8dwYUTPA0DKK5bfmSSlArq74EgeDVAQe_FTgLBztB-JB8Wk5TR8_9yz-HBmkIOrMPTfxrlDrpCB87FhxP439LmcyCaACQrShdCtZl7dEA9PVP-7i2S" },
                ].map(({ label, uri }) => (
                  <TouchableOpacity key={label} style={{ flex: 1, position: 'relative', overflow: 'hidden' }}>
                    <Image source={{ uri }} style={{ width: '100%', height: '100%' }} contentFit="cover" />
                    <View style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.3)' }} />
                    <View style={{ position: 'absolute', bottom: 12, left: 12 }}>
                      <Text style={{ fontFamily: 'NotoSerif_700Bold', fontSize: 16, color: '#fff' }}>{label}</Text>
                    </View>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          )}
        </View>

        {/* ── Produits vedettes ── */}
        <View style={{ paddingVertical: 64, paddingHorizontal: px, backgroundColor: '#f4f3f2', alignItems: 'center' }}>
          <Text style={{ fontFamily: 'NotoSerif_700Bold', fontSize: 28, color: '#1a1c1c', marginBottom: 8, textAlign: 'center' }}>
            Chefs-d'Œuvre Sélectionnés
          </Text>
          <View style={{ width: 48, height: 3, backgroundColor: '#FFD700', marginBottom: 36 }} />

          <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', width: '100%', gap: 0 }}>
            <ProductCard
              title="Sari en Soie Safran"
              price="₹ 45 000"
              imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuAxl2oHEpQs2gKGVXF9CiUSdt2sPsbKZmJAvdMQRTl14cRafq0BfTQl-lCQ3olcxvvoqeaDcgbHKUFXsY_sriugqkDYzR1OXMs65yoHQpOKpmhtHYFt6xikx34mlNuqepeE_h1_94mDGkiElu6beAOG-6yLMBI4id2nD14Jza6OjL4q9eSwbWl8ppp7zQTQDwsWC33hicYEmVSH_IoBd9pqOdCAizW-QEM8Y9ex9FhXIw5-_BktTgPK-yzIY7qMRywVlR00nAXgXoVw"
              cardStyle={cardStyle}
            />
            <ProductCard
              title="Lehenga en Velours Émeraude"
              price="₹ 85 500"
              imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuBRMwKRtEOxLHW0I13VEus8DNGCuB-8xK2Y38EtHxCQvRGhuNdF7IGtPNJm7-WWBrB56VojYerOjzUCsPIIm1N1mtyfGlT_vsDURx8BOKm8SWYqKSinqqFuY3CgHUlDU3p4ZXT3tegeTdbI4MUItnKVCTFqQesw1B7fbFEDyPy24YETIPA8_xQmSIjZjy0SXv3_VZGHcb4mNPsJ1VDntpqilRmb6Hufz-FZsrzN_LQxBidgcoUP5OgaIMljM6s8ZcTF7Ulv1RRGUCgb"
              cardStyle={cardStyle}
            />
            {isDesktop && (
              <ProductCard
                title="Sherwani Crème Brodé"
                price="₹ 72 000"
                imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuA3Hkuc0konS53aDJuuMVkgc94KeAONr6kaeC2W8IwPdKrzxx8Ld_h0MOXQli20SvKs0YFIbkznwDzWA4dPva1DxHJu1pkuOCc5jr6J3SkwZxurT_QDr2w5uugaVMcNGvB55dsuKf6wFlPyL1g4s8Wlr_ennmCFv4AqTYeNpFVe0tnF4S-0RYMnYTja_6YR_gmBveJGjAuQod4JM_E4_Q7tqU_6orLf1o1zmAA9uE3T7JQtib4GoSh1JSyVzgthJ76lG69_oxVC4rE0"
                cardStyle={cardStyle}
              />
            )}
          </View>
        </View>

        {/* ── Newsletter ── */}
        <View style={{ paddingVertical: 64, paddingHorizontal: px, backgroundColor: '#eeeeed', alignItems: 'center' }}>
          <MaterialIcons name="mark-email-read" size={40} color="#FFD700" />
          <Text style={{ fontFamily: 'NotoSerif_700Bold', fontSize: 26, color: '#1a1c1c', marginBottom: 12, marginTop: 16, textAlign: 'center' }}>
            Rejoignez le Cercle Privé
          </Text>
          <Text style={{ fontFamily: 'Manrope_400Regular', color: '#5e3f3a', marginBottom: 28, textAlign: 'center', maxWidth: 480, lineHeight: 22 }}>
            Abonnez-vous pour un accès exclusif aux nouvelles collections, aux ventes privées et aux conseils de nos curateurs.
          </Text>
          <View style={{ width: '100%', maxWidth: 480, backgroundColor: '#fff', borderRadius: 2, overflow: 'hidden' }}>
            <TextInput
              placeholder="Votre adresse e-mail"
              style={{ paddingHorizontal: 16, paddingVertical: 14, fontFamily: 'Manrope_400Regular', borderBottomWidth: 1, borderBottomColor: 'rgba(146,110,105,0.2)' }}
            />
            <TouchableOpacity style={{ backgroundColor: '#9e0000', paddingVertical: 14, alignItems: 'center' }}>
              <Text style={{ fontFamily: 'Manrope_700Bold', color: '#fff', letterSpacing: 3, textTransform: 'uppercase', fontSize: 12 }}>
                S'abonner
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <Footer />
      </ScrollView>
    </View>
  );
}

        {/* Hero Banner */}
        <View className="relative h-[600px] w-full flex items-center justify-center bg-surface-container-lowest">
          <Image
            source={{ uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuB6L3WRWq7_-BirqD39LqOg5F0c7JaBCaB2NrABKYcU-y9Qu5SwUnaw8Dvp1OHj8R0WAQrJ-q4i0tJS-zlkbXWefHx_bkeZdgWh1ApeHoWF54kaDrZosHs40iV13t0cV_nmmpB-bK3W7irwMSPRZwKlOvty-G5xjmiktf_ihPUSdCmzzH4WX7ufRNlnaTWdI8zH-CvK950RwEtt2iAJlrDw6_5nL1SLezMvUtYL6i-glqyM7j9rrXa5dzgTKqLRCX1vdkzk67SA6h6H" }}
            className="absolute inset-0 w-full h-full"
            contentFit="cover"
          />
          <View className="absolute inset-0 bg-black/40" />
          <View className="relative z-10 px-4 items-center">
            <Text className="font-headline text-5xl text-white mb-6 text-center shadow-md">
              Exquisite Indian Elegance
            </Text>
            <Text className="font-body text-lg text-white/90 mb-10 text-center font-light">
              Discover the intersection of heritage craftsmanship and modern luxury.
            </Text>
            <TouchableOpacity
              className="bg-primary px-10 py-4 rounded"
              onPress={() => navigation.navigate('Collections')}
            >
              <Text className="text-white font-label font-bold uppercase tracking-widest text-sm">
                Explore Collection
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Shop by Category */}
        <View className="py-16 px-6 bg-surface items-center">
          <Text className="font-headline text-3xl text-on-surface mb-2">Curated Categories</Text>
          <View className="w-12 h-1 bg-[#FFD700] mb-8" />

          <View className="w-full gap-4">
            <TouchableOpacity className="relative h-[300px] w-full bg-surface-container-lowest overflow-hidden">
              <Image source={{ uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuDSJ7SXyKf2CHUDGYpIxvTb6LpHhx2RPAuqoCuHrLOUNcAZvR76e9GQqyMDl7C1tIdwCYaJffVMY4W_HG5dwbNB6Iok15HgWS2-35iOrOCDELgjflUOxhfm1y9FSNMeKzihuUHf02QWjARD6zK3i1S2QPsqijVlK1-hcRrDdiYUVvLs4V8j0XuRs0pSR30EDajZ6RnlXk-dWFuG_HV7AScj6uEsmsj5SzNBrrQ9EjIbA6u0OiFqJOuBeI24ogdaZMV0zkTcUwfd-JN-" }} className="w-full h-full" contentFit="cover" />
              <View className="absolute inset-0 bg-black/30" />
              <View className="absolute bottom-6 left-6">
                <Text className="font-headline text-2xl text-white mb-1">Women</Text>
                <Text className="font-label text-xs text-[#FFD700] uppercase tracking-widest">Shop Now →</Text>
              </View>
            </TouchableOpacity>

            <View className="flex-row gap-4 w-full h-[200px]">
              <TouchableOpacity className="flex-1 relative bg-surface-container-lowest overflow-hidden">
                <Image source={{ uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuBcjgdcbQo_jifm1zlYHirZGFeivsooNnwIJ8tYeF1n6KOPyAb3L16L1E94q_ch8-SX8MSOftA4EIFHM9LeO0v8w_KKu7RCdS_u6sb2lNqj_wU1HVKeI_w0Efqfvi3XlRPb_aZYu8zT9aKsRXFDRYRnBi4fVixp_WhoHP9MBc7Wyp6VzbPNXhVgqpjUStm4yrYcNAJi-HHjz_iTj8J44lQawtRbHbMru4gjsyY7M7Uq-Ky1HOLjWRkQLOjLZzzm4f1I1WRMcgSi1zlf" }} className="w-full h-full" contentFit="cover" />
                <View className="absolute inset-0 bg-black/30" />
                <View className="absolute bottom-4 left-4">
                  <Text className="font-headline text-lg text-white mb-1">Men</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity className="flex-1 relative bg-surface-container-lowest overflow-hidden">
                <Image source={{ uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuBia9ILcRIefzR-LNcY863kQZRBmacciXx3xh2He2xcGJk6t635bBS7i65Z5V4WhJiqUDI9XuYjUpWxEesjKNg10FiHHqn3g9FLOi78HkhpImfxa_7e1mEwD8Z88ZauzqdjfPUU18D3WDczkQnqo1uFuiA8ms8dwYUTPA0DKK5bfmSSlArq74EgeDVAQe_FTgLBztB-JB8Wk5TR8_9yz-HBmkIOrMPTfxrlDrpCB87FhxP439LmcyCaACQrShdCtZl7dEA9PVP-7i2S" }} className="w-full h-full" contentFit="cover" />
                <View className="absolute inset-0 bg-black/30" />
                <View className="absolute bottom-4 left-4">
                  <Text className="font-headline text-lg text-white mb-1">Kids</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Featured Products */}
        <View className="py-16 px-6 bg-surface-bright items-center">
          <Text className="font-headline text-3xl text-on-surface mb-2">Featured Masterpieces</Text>
          <View className="w-12 h-1 bg-[#FFD700] mb-8" />

          <View className="flex-row flex-wrap justify-between w-full">
            <ProductCard
              title="Saffron Silk Saree"
              price="₹ 45,000"
              imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuAxl2oHEpQs2gKGVXF9CiUSdt2sPsbKZmJAvdMQRTl14cRafq0BfTQl-lCQ3olcxvvoqeaDcgbHKUFXsY_sriugqkDYzR1OXMs65yoHQpOKpmhtHYFt6xikx34mlNuqepeE_h1_94mDGkiElu6beAOG-6yLMBI4id2nD14Jza6OjL4q9eSwbWl8ppp7zQTQDwsWC33hicYEmVSH_IoBd9pqOdCAizW-QEM8Y9ex9FhXIw5-_BktTgPK-yzIY7qMRywVlR00nAXgXoVw"
            />
            <ProductCard
              title="Emerald Velvet Lehenga"
              price="₹ 85,500"
              imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuBRMwKRtEOxLHW0I13VEus8DNGCuB-8xK2Y38EtHxCQvRGhuNdF7IGtPNJm7-WWBrB56VojYerOjzUCsPIIm1N1mtyfGlT_vsDURx8BOKm8SWYqKSinqqFuY3CgHUlDU3p4ZXT3tegeTdbI4MUItnKVCTFqQesw1B7fbFEDyPy24YETIPA8_xQmSIjZjy0SXv3_VZGHcb4mNPsJ1VDntpqilRmb6Hufz-FZsrzN_LQxBidgcoUP5OgaIMljM6s8ZcTF7Ulv1RRGUCgb"
            />
          </View>
        </View>

        {/* Newsletter */}
        <View className="py-16 px-6 bg-surface-container-low items-center text-center">
          <MaterialIcons name="mark-email-read" size={40} color="#FFD700" className="mb-4" />
          <Text className="font-headline text-3xl text-on-surface mb-4 mt-4">Join The Inner Circle</Text>
          <Text className="font-body text-on-surface-variant mb-8 text-center px-4">
            Subscribe to receive exclusive access to new collections, private sales, and curatorial insights.
          </Text>
          <View className="w-full max-w-md bg-surface-container-lowest rounded overflow-hidden flex-col">
            <TextInput
              placeholder="Enter your email address"
              className="px-4 py-4 font-body border-b border-outline-variant"
            />
            <TouchableOpacity className="bg-primary px-8 py-4 items-center">
              <Text className="text-white font-label font-semibold uppercase tracking-widest text-sm">
                Subscribe
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <Footer />
      </ScrollView>
    </View>
  );
}
