import React from 'react';
import { ScrollView, View, Text, TouchableOpacity, TextInput } from 'react-native';
import { Image } from 'expo-image';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';

export default function CollectionsScreen() {
  return (
    <View className="flex-1 bg-surface">
      <Header />
      <ScrollView className="flex-1">
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
