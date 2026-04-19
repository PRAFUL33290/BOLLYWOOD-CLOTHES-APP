import React from 'react';
import { ScrollView, View, Text, TouchableOpacity } from 'react-native';
import { Image } from 'expo-image';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function DashboardScreen() {
  return (
    <View className="flex-1 bg-surface">
      <Header />
      <ScrollView className="flex-1 px-4 py-8">
        <View className="mb-8 border-b border-outline-variant/20 pb-4">
          <Text className="font-headline text-4xl text-on-surface mb-2">Recent Orders</Text>
          <Text className="font-body text-on-surface-variant text-lg">Track and manage your curated selections.</Text>
        </View>

        <View className="flex-col gap-6 mb-12">
          {/* Order Card 1 */}
          <View className="bg-surface-container-lowest p-6 flex-col gap-4 relative shadow-sm border border-outline-variant/10">
            <View className="flex-row gap-4">
              <View className="w-24 h-32 bg-surface-container-low">
                <Image
                  source={{ uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuAdfPF5ZhPrXf-_QrtZK0oF5Zpk79OaOWj2IiKIXdgwwUJu9McLJVFG1XbBObKZ1o7p5CYNGQ87VASGKJ7ibVa33zQC4TFrVKQbmyJu50T6eI6sXdG55CMjQUWni8aH5pUCrUsVWc-f-7aRLme4z5xToHTIiz-OXGtkRw5qqog8f6r-uMFmEGEIxNSkymT5PoaXZJfR6V5wlSEHDrtP0zlqvliXObjEsJB9RZiWfvgYdFnVZv67-FQ9iPGTRjfwViKjMGV_OmDrwXyP" }}
                  className="w-full h-full object-cover"
                  contentFit="cover"
                />
              </View>
              <View className="flex-1">
                <Text className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant mb-1">Order #RC-8492</Text>
                <Text className="font-headline text-lg text-on-surface" numberOfLines={2}>Crimson Silk Sherwani Collection</Text>
                <Text className="font-body text-xs text-on-surface-variant mt-1">Placed on Oct 24, 2023</Text>
                <View className="bg-[#7b5800]/10 px-2 py-1 rounded self-start mt-2 border border-[#7b5800]/20">
                  <Text className="text-[#7b5800] font-label text-[10px] uppercase font-bold tracking-wider">Shipped</Text>
                </View>
              </View>
            </View>
            <View className="h-px w-full bg-outline-variant/20" />
            <View className="flex-row justify-between items-center w-full">
              <Text className="font-body text-base font-semibold">₹ 85,000</Text>
              <TouchableOpacity>
                <Text className="font-label text-xs uppercase tracking-widest text-primary font-bold">View Details</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Order Details Preview (Simulated Expand) */}
          <View className="bg-surface-container-low p-6 border-l-4 border-primary">
            <Text className="font-label text-xs uppercase tracking-widest text-primary font-bold mb-2">Order Details</Text>
            <Text className="font-headline text-2xl text-on-surface mb-1">Order #RC-8492</Text>
            <Text className="font-body text-sm text-on-surface-variant mb-6">Placed on October 24, 2023</Text>

            <View className="border-b border-outline-variant/30 pb-4 mb-4">
              <Text className="font-headline text-lg text-on-surface mb-4">Items</Text>
              <View className="flex-row gap-4 mb-4">
                <Image
                  source={{ uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuCvRKn5hcYRtWRVKETlzgixY7FQ1wV11VvswU0s9YjLzPmsjnFszjtC2kxF5Xe-ej-H-hhzRr_Tq2xxn5SyditRovsMEydG8cLOEue86eKa80ug4q3FG6Bm2-diwOsTPLiWChEeSP3XVPHYyKbhUaGII4CSMVRHuVRwEnlEh0oz_fIRx2fJ-76tYRsvgIQPiflNt41ds9XrPfHIVtizsx82DOM08HZMhjw35zuZ_zsjb9QKGmDFPwKvpBftbuUKoBTX-DVSb96BSQSK" }}
                  className="w-16 h-20 bg-surface object-cover"
                  contentFit="cover"
                />
                <View>
                  <Text className="font-body font-semibold text-on-surface">Crimson Silk Sherwani - Top</Text>
                  <Text className="font-body text-xs text-on-surface-variant my-1">Size: L | Qty: 1</Text>
                  <Text className="font-body font-medium text-sm">₹ 65,000</Text>
                </View>
              </View>
            </View>

            <View className="bg-surface p-4">
              <Text className="font-headline text-lg text-on-surface border-b border-outline-variant/30 pb-2 mb-4">Summary</Text>
              <View className="flex-row justify-between mb-2">
                <Text className="text-on-surface-variant font-body text-sm">Subtotal</Text>
                <Text className="font-body text-sm">₹ 85,000</Text>
              </View>
              <View className="flex-row justify-between mb-2">
                <Text className="text-on-surface-variant font-body text-sm">Shipping</Text>
                <Text className="font-body text-sm">Complimentary</Text>
              </View>
              <View className="h-px bg-outline-variant/30 my-2" />
              <View className="flex-row justify-between">
                <Text className="font-bold text-on-surface font-body">Total</Text>
                <Text className="font-bold text-on-surface font-body">₹ 85,000</Text>
              </View>
            </View>
          </View>
        </View>

        <Footer />
      </ScrollView>
    </View>
  );
}
