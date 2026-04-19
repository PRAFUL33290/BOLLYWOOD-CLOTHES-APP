import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import { Image } from 'expo-image';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { MaterialIcons } from '@expo/vector-icons';

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
