import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export function MaterialSymbolsOutlined({ name, size = 24, color = 'black', style }) {
  return <MaterialIcons name={name} size={size} color={color} style={style} />;
}

export default function Header() {
  const navigation = useNavigation();

  return (
    <View className="flex-row justify-between items-center px-4 h-20 w-full bg-[#faf9f8]/90 z-50 mt-8 border-b border-outline-variant/20">
      <TouchableOpacity onPress={() => navigation.toggleDrawer?.() || navigation.goBack()} className="p-2">
        <MaterialSymbolsOutlined name="menu" size={28} color="#9e0000" />
      </TouchableOpacity>

      <Text className="text-xl font-headline font-black tracking-widest text-[#9e0000]" onPress={() => navigation.navigate('Home')}>
        THE REGAL CURATOR
      </Text>

      <TouchableOpacity className="p-2">
        <MaterialSymbolsOutlined name="shopping-bag" size={28} color="#9e0000" />
      </TouchableOpacity>
    </View>
  );
}
