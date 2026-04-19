import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Footer() {
  const navigation = useNavigation();

  return (
    <View className="w-full border-t border-stone-200/20 bg-[#faf9f8] flex-col justify-between items-center py-12 px-10 gap-8 mt-auto">
      <Text className="font-headline italic text-lg text-[#9e0000]">
        THE REGAL CURATOR
      </Text>

      <View className="flex-row flex-wrap justify-center gap-4">
        <TouchableOpacity onPress={() => navigation.navigate('Collections')}>
          <Text className="font-label text-sm tracking-wide text-stone-500 underline decoration-stone-500">Collections</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Story')}>
          <Text className="font-label text-sm tracking-wide text-stone-500 underline decoration-stone-500">Our Story</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text className="font-label text-sm tracking-wide text-stone-500 underline decoration-stone-500">Shipping & Returns</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text className="font-label text-sm tracking-wide text-stone-500 underline decoration-stone-500">Privacy Policy</Text>
        </TouchableOpacity>
      </View>

      <Text className="font-label text-xs tracking-wide text-stone-500 text-center">
        © 2024 THE REGAL CURATOR. ALL RIGHTS RESERVED.
      </Text>
    </View>
  );
}
