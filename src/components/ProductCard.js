import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Image } from 'expo-image';
import { MaterialIcons } from '@expo/vector-icons';

export default function ProductCard({ title, price, imageUrl }) {
  return (
    <View className="flex-col bg-surface-container-low pb-6 w-full max-w-sm mb-8">
      <View className="relative w-full aspect-[3/4] bg-surface-container-lowest overflow-hidden mb-6">
        <Image
          source={{ uri: imageUrl }}
          className="w-full h-full object-cover"
          contentFit="cover"
        />
        <View className="absolute top-4 right-4">
          <TouchableOpacity className="w-10 h-10 rounded-full bg-surface/80 flex items-center justify-center shadow-sm">
            <MaterialIcons name="favorite-outline" size={20} color="black" />
          </TouchableOpacity>
        </View>
      </View>

      <View className="px-6 flex-col flex-grow">
        <Text className="font-headline text-xl text-on-surface mb-2" numberOfLines={1}>{title}</Text>
        <Text className="font-body text-lg text-primary font-medium mb-6">{price}</Text>

        <TouchableOpacity className="mt-auto w-full py-3 bg-[#FFD700] rounded flex-row items-center justify-center gap-2">
          <Text className="text-on-primary font-label text-sm uppercase tracking-widest font-semibold text-primary">
            Add to Cart
          </Text>
          <MaterialIcons name="shopping-cart" size={16} color="#9e0000" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
