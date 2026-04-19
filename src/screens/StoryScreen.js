import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import { Image } from 'expo-image';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { MaterialIcons } from '@expo/vector-icons';
import useBreakpoint from '../hooks/useBreakpoint';

const PILLARS = [
  { icon: 'verified', title: 'Authenticité', desc: 'Nous approvisionnons directement auprès des familles de tisserands de générations.' },
  { icon: 'diamond', title: 'Qualité', desc: 'Du poids de la soie à la précision du zari, rien n'est laissé au hasard.' },
  { icon: 'history-edu', title: 'Tradition', desc: 'Nous préservons les techniques ancestrales de la mode indienne.' },
];

export default function StoryScreen() {
  const { isDesktop, isTablet, isMobile } = useBreakpoint();
  const px = isDesktop ? 64 : isTablet ? 40 : 24;

  return (
    <View className="flex-1 bg-surface">
      <Header />
      <ScrollView className="flex-1">
        {/* Héros */}
        <View style={{ height: isDesktop ? 560 : 460, position: 'relative', alignItems: 'center', justifyContent: 'center' }}>
          <Image
            source={{ uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuCbaM2J0BaTjzFphtyXZR0sObBiqnI0lFFeO_ypO3pmL05llc2NvVyEhaL9lAtZtkmhNjlHLpyWwgArLT8Pb7NsTfQErvbIFHW8Jcn3WoY_vLSp3o43yaJ0o2kZ76sVu7z5dVGs_3TSrza68qRgeTQuSbbRf_2hhuiD_6OqwZn8o7ADtIf_8-kRRBHp8TiHh8geNAYgZA9hMKCAGCq1B0bDI_pIxt7uoPPZUJBSPKIWzExHNL_cx2YIYckmZm91IQw1cA8my-rDC6W6" }}
            style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, opacity: 0.65 }}
            contentFit="cover"
          />
          <View style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.25)' }} />
          <View style={{ position: 'relative', zIndex: 10, alignItems: 'center', paddingHorizontal: px }}>
            <Text style={{ fontFamily: 'Manrope_600SemiBold', color: '#fff', letterSpacing: 4, textTransform: 'uppercase', fontSize: 12, marginBottom: 16 }}>
              Notre Héritage
            </Text>
            <Text style={{ fontFamily: 'NotoSerif_700Bold', fontSize: isDesktop ? 52 : 36, color: '#fff', textAlign: 'center', marginBottom: 24, lineHeight: isDesktop ? 64 : 46 }}>
              Le Tissu de{'\n'}<Text style={{ fontFamily: 'NotoSerif_400Regular_Italic' }}>la Royauté</Text>
            </Text>
            <View style={{ width: 64, height: 3, backgroundColor: '#FFD700' }} />
          </View>
        </View>

        {/* Récit — texte + image côte à côte sur desktop */}
        <View style={{ paddingVertical: 64, paddingHorizontal: px, backgroundColor: '#faf9f8' }}>
          {isDesktop ? (
            <View style={{ flexDirection: 'row', gap: 56, alignItems: 'flex-start' }}>
              <Image
                source={{ uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuDBwT--9bo0sMokZ8Sga37N1srMjDG_8cblP8HKp9JR4k2vbN5FkzzJHk_gQ3ZDQPHKfmiYDF-t8jHai5YhjCmWKlXsZVFyy2o_aXXYjiVmHDfWEKyO5Cmnw_xbk-VeLhRyI3j92Ny5fBG09CW24DC0sUICKMlF7jOu-Mp_un4r5QRsQiZhdH7pbfQn9AziEPSbSkvAJ9mb4_xtCuSDRAubHD1uM1ljHKdDfoDvd-UZZyEEnT4xWD32J3" }}
                style={{ flex: 1, aspectRatio: 4 / 3, borderRadius: 2 }}
                contentFit="cover"
              />
              <View style={{ flex: 1, justifyContent: 'center' }}>
                <Text style={{ fontFamily: 'NotoSerif_700Bold', fontSize: 28, color: '#1a1c1c', marginBottom: 20 }}>
                  Un Héritage Préservé dans le Fil
                </Text>
                <Text style={{ fontFamily: 'Manrope_400Regular', color: '#5e3f3a', fontSize: 15, lineHeight: 26, marginBottom: 16 }}>
                  Depuis des générations, les artisans d'Inde ont tissé des récits de grandeur et de culture dans chaque métier à tisser. THE REGAL CURATOR est née du désir de préserver ces traditions.
                </Text>
                <Text style={{ fontFamily: 'Manrope_400Regular', color: '#5e3f3a', fontSize: 15, lineHeight: 26, marginBottom: 16 }}>
                  Nous voyageons au cœur du Rajasthan, aux métiers à tisser de Varanasi et dans les ateliers cachés de Lucknow.
                </Text>
                <Text style={{ fontFamily: 'Manrope_600SemiBold', color: '#9e0000', fontSize: 15, lineHeight: 24 }}>
                  Chaque pli est un siècle de savoir-faire ; chaque motif, une bénédiction.
                </Text>
              </View>
            </View>
          ) : (
            <>
              <Image
                source={{ uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuDBwT--9bo0sMokZ8Sga37N1srMjDG_8cblP8HKp9JR4k2vbN5FkzzJHk_gQ3ZDQPHKfmiYDF-t8jHai5YhjCmWKlXsZVFyy2o_aXXYjiVmHDfWEKyO5Cmnw_xbk-VeLhRyI3j92Ny5fBG09CW24DC0sUICKMlF7jOu-Mp_un4r5QRsQiZhdH7pbfQn9AziEPSbSkvAJ9mb4_xtCuSDRAubHD1uM1ljHKdDfoDvd-UZZyEEnT4xWD32J3" }}
                style={{ width: '100%', aspectRatio: 4 / 3, borderRadius: 2, marginBottom: 24 }}
                contentFit="cover"
              />
              <Text style={{ fontFamily: 'NotoSerif_700Bold', fontSize: 26, color: '#1a1c1c', marginBottom: 16 }}>
                Un Héritage Préservé dans le Fil
              </Text>
              <Text style={{ fontFamily: 'Manrope_400Regular', color: '#5e3f3a', fontSize: 15, lineHeight: 26, marginBottom: 14 }}>
                Depuis des générations, les artisans d'Inde ont tissé des récits de grandeur et de culture dans chaque métier à tisser.
              </Text>
              <Text style={{ fontFamily: 'Manrope_400Regular', color: '#5e3f3a', fontSize: 15, lineHeight: 26, marginBottom: 14 }}>
                Nous voyageons au cœur du Rajasthan, aux métiers à tisser de Varanasi et dans les ateliers cachés de Lucknow.
              </Text>
              <Text style={{ fontFamily: 'Manrope_600SemiBold', color: '#9e0000', fontSize: 15 }}>
                Chaque pli est un siècle de savoir-faire ; chaque motif, une bénédiction.
              </Text>
            </>
          )}
        </View>

        {/* Piliers */}
        <View style={{ paddingVertical: 64, paddingHorizontal: px, backgroundColor: '#f4f3f2', borderTopWidth: 1, borderTopColor: 'rgba(146,110,105,0.2)' }}>
          <View style={{ alignItems: 'center', marginBottom: 40 }}>
            <Text style={{ fontFamily: 'NotoSerif_700Bold', fontSize: 26, color: '#1a1c1c', marginBottom: 8 }}>
              Nos Piliers d'Excellence
            </Text>
            <Text style={{ fontFamily: 'Manrope_400Regular', color: '#5e3f3a', textAlign: 'center' }}>
              Les principes qui guident notre curation.
            </Text>
          </View>

          <View style={{
            flexDirection: isDesktop || isTablet ? 'row' : 'column',
            gap: 20,
            justifyContent: 'center',
          }}>
            {PILLARS.map((pillar) => (
              <View key={pillar.title} style={{
                flex: isDesktop || isTablet ? 1 : undefined,
                backgroundColor: '#fff',
                padding: 32,
                alignItems: 'center',
                borderRadius: 2,
              }}>
                <MaterialIcons name={pillar.icon} size={40} color="#B8860B" />
                <Text style={{ fontFamily: 'NotoSerif_700Bold', fontSize: 18, color: '#1a1c1c', marginTop: 16, marginBottom: 8, textAlign: 'center' }}>
                  {pillar.title}
                </Text>
                <Text style={{ fontFamily: 'Manrope_400Regular', color: '#5e3f3a', textAlign: 'center', lineHeight: 22 }}>
                  {pillar.desc}
                </Text>
              </View>
            ))}
          </View>
        </View>

        <Footer />
      </ScrollView>
    </View>
  );
}

export default function StoryScreen() {
  return (
    <View className="flex-1 bg-surface">
      <Header />
      <ScrollView className="flex-1">
        {/* Hero Section */}
        <View className="relative h-[500px] w-full flex items-center justify-center bg-surface-container-lowest">
          <Image
            source={{ uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuCbaM2J0BaTjzFphtyXZR0sObBiqnI0lFFeO_ypO3pmL05llc2NvVyEhaL9lAtZtkmhNjlHLpyWwgArLT8Pb7NsTfQErvbIFHW8Jcn3WoY_vLSp3o43yaJ0o2kZ76sVu7z5dVGs_3TSrza68qRgeTQuSbbRf_2hhuiD_6OqwZn8o7ADtIf_8-kRRBHp8TiHh8geNAYgZA9hMKCAGCq1B0bDI_pIxt7uoPPZUJBSPKIWzExHNL_cx2YIYckmZm91IQw1cA8my-rDC6W6" }}
            className="absolute inset-0 w-full h-full opacity-60"
            contentFit="cover"
          />
          <View className="absolute inset-0 bg-black/20" />
          <View className="relative z-10 text-center px-6 items-center">
            <Text className="text-white tracking-[0.3em] uppercase text-sm font-semibold mb-6">Our Heritage</Text>
            <Text className="font-headline text-4xl font-bold text-white mb-8 text-center leading-tight">
              The Fabric of{'\n'}<Text className="italic font-normal">Royalty</Text>
            </Text>
            <View className="w-16 h-1 bg-[#FFD700]" />
          </View>
        </View>

        {/* Narrative Section */}
        <View className="py-16 px-6 bg-surface">
          <Image
            source={{ uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuDBwT--9bo0sMokZ8Sga37N1srMjDG_8cblP8HKp9JR4k2vbN5FkzzJHk_gQ3ZDQPHKfmiYDF-t8jHai5YhjCmWKlXsZFML8nAWimMs5cWcRNQ8LzZVFyy2o_aXXYjiVmHDfWEKyO5Cmnw_xbk-VeLhRyI3j92Ny5fBG09CW24DC0sUICKMlF7jOu-Mp_un4r5QRsQiZhdH7pbfQn9AziEPSbSkvAJ9mb4_xtCuSDRAubHD1uM1ljHKdDfoDvd-UZZyEEnT4xWD32J3" }}
            className="w-full aspect-[4/3] rounded mb-10"
            contentFit="cover"
          />
          <Text className="font-headline text-3xl font-bold text-on-surface mb-6">A Legacy Preserved in Thread</Text>
          <Text className="text-on-surface-variant font-body text-lg leading-relaxed mb-4">
            For generations, the artisans of India have woven tales of grandeur, spirituality, and culture into every loom. THE REGAL CURATOR was born from a desire to rescue these fading narratives and present them to the modern aesthete.
          </Text>
          <Text className="text-on-surface-variant font-body text-lg leading-relaxed mb-4">
            We travel to the heart of Rajasthan, the looms of Varanasi, and the hidden ateliers of Lucknow, curating textiles that speak of unhurried craftsmanship.
          </Text>
          <Text className="font-medium text-primary font-body text-lg">
            Every fold is a century of skill; every motif, a blessing.
          </Text>
        </View>

        {/* Values Bento Grid */}
        <View className="py-16 px-6 bg-surface-container-low border-t border-outline-variant/30">
          <View className="items-center mb-10">
            <Text className="font-headline text-3xl font-bold text-on-surface mb-2">Our Pillars of Craft</Text>
            <Text className="text-on-surface-variant font-body text-center">The principles that guide our curation.</Text>
          </View>

          <View className="gap-6">
            <View className="bg-surface-container-lowest p-8 items-center rounded text-center">
              <MaterialIcons name="verified" size={40} color="#B8860B" className="mb-4" />
              <Text className="font-headline text-xl font-bold text-on-surface mb-2 mt-4">Authenticity</Text>
              <Text className="text-on-surface-variant text-center">We source directly from generational weaving families.</Text>
            </View>
            <View className="bg-surface-container-lowest p-8 items-center rounded text-center">
              <MaterialIcons name="diamond" size={40} color="#B8860B" className="mb-4" />
              <Text className="font-headline text-xl font-bold text-on-surface mb-2 mt-4">Quality</Text>
              <Text className="text-on-surface-variant text-center">From the weight of the silk to the precision of the zari.</Text>
            </View>
            <View className="bg-surface-container-lowest p-8 items-center rounded text-center">
              <MaterialIcons name="history-edu" size={40} color="#B8860B" className="mb-4" />
              <Text className="font-headline text-xl font-bold text-on-surface mb-2 mt-4">Tradition</Text>
              <Text className="text-on-surface-variant text-center">We preserve the ancestral techniques of Indian fashion.</Text>
            </View>
          </View>
        </View>

        <Footer />
      </ScrollView>
    </View>
  );
}
