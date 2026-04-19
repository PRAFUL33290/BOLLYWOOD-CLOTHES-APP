import React from 'react';
import { ScrollView, View, Text, TouchableOpacity, TextInput } from 'react-native';
import { Image } from 'expo-image';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import { MaterialIcons } from '@expo/vector-icons';

export default function HomeScreen({ navigation }) {
  return (
    <View className="flex-1 bg-background">
      <Header />
      <ScrollView className="flex-1" contentContainerStyle={{ paddingBottom: 40 }}>

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
