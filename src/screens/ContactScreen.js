import React from 'react';
import { ScrollView, View, Text, TouchableOpacity, TextInput } from 'react-native';
import { Image } from 'expo-image';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { MaterialIcons } from '@expo/vector-icons';

export default function ContactScreen() {
  return (
    <View className="flex-1 bg-surface">
      <Header />
      <ScrollView className="flex-1" contentContainerStyle={{ paddingBottom: 40 }}>
        <View className="px-6 py-10 flex-col gap-10">

          {/* Top Image + Info */}
          <View className="w-full flex-col gap-6 relative">
            <View className="relative w-full aspect-[4/5] bg-surface-container-lowest overflow-hidden">
              <Image
                source={{ uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuCrJX3xL1WRj1nnnfBDfbqqAUUWsz76DgZVtklp5vAe4gWTaSpSDyX2rFhel9URJYf_5DLTsRBAOAnuXIEvjn4O6ImG9UjNMY90aNAE3g7vR-V1tUkW5J9OfRNoTxy1Nv-FZ-ihnmtYGVSemUwIZJVI9gJwPcdIgEjt989Q8C7fYFPbKaJadJ49TKaJ8mlRbASuyB3boi3p4S0QwMKeoboqkixlHeGk_dk7sx_uGbZAeOhnuB_lXxz_rzln8iJFNG3hAV2uPlDHmmhc" }}
                className="w-full h-full object-cover"
                contentFit="cover"
              />
              <View className="absolute inset-0 bg-black/10" />
              <Text className="absolute bottom-4 right-4 font-headline text-4xl font-bold text-white shadow-lg">
                Get in Touch
              </Text>
            </View>

            <View className="bg-surface-container-low p-8 flex-col gap-4">
              <Text className="font-headline text-3xl font-semibold text-primary">Our Atelier</Text>
              <View className="flex-col gap-1">
                <Text className="font-body text-on-surface-variant text-lg">124 Heritage Avenue</Text>
                <Text className="font-body text-on-surface-variant text-lg">Couture District</Text>
                <Text className="font-body text-on-surface-variant text-lg">New Delhi, 110001</Text>
                <Text className="mt-4 font-semibold text-on-surface font-body text-lg">Appointments Only</Text>
              </View>

              <TouchableOpacity className="mt-6 flex-row items-center justify-center gap-3 py-4 px-6 border-2 border-secondary/40">
                <MaterialIcons name="chat" size={20} color="#7b5800" />
                <Text className="text-on-surface font-label uppercase text-sm tracking-widest font-semibold">Chat on WhatsApp</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Contact Form */}
          <View className="w-full flex-col gap-6">
            <View className="flex-col gap-2">
              <Text className="font-headline text-4xl font-bold text-on-surface">Send a Message</Text>
              <Text className="font-body text-on-surface-variant text-base">
                For bespoke inquiries, bridal consultations, or general questions, please write to us below.
              </Text>
            </View>

            <View className="flex-col gap-6">
              <View className="flex-col">
                <Text className="font-label text-sm uppercase tracking-widest text-on-surface-variant mb-1">Name</Text>
                <TextInput
                  placeholder="Jane Doe"
                  className="w-full font-body text-on-surface text-lg border-b border-outline-variant/50 py-2"
                  placeholderTextColor="#a0a0a0"
                />
              </View>

              <View className="flex-col">
                <Text className="font-label text-sm uppercase tracking-widest text-on-surface-variant mb-1">Email Address</Text>
                <TextInput
                  placeholder="jane@example.com"
                  keyboardType="email-address"
                  className="w-full font-body text-on-surface text-lg border-b border-outline-variant/50 py-2"
                  placeholderTextColor="#a0a0a0"
                />
              </View>

              <View className="flex-col">
                <Text className="font-label text-sm uppercase tracking-widest text-on-surface-variant mb-1">Message</Text>
                <TextInput
                  placeholder="How may we assist you?"
                  multiline
                  numberOfLines={4}
                  className="w-full font-body text-on-surface text-lg border-b border-outline-variant/50 py-2"
                  placeholderTextColor="#a0a0a0"
                  style={{ textAlignVertical: 'top' }}
                />
              </View>

              <TouchableOpacity className="mt-4 bg-primary py-4 px-8 rounded flex-row items-center justify-center gap-2">
                <Text className="text-white font-label text-sm uppercase tracking-[0.2em] font-semibold">Send Message</Text>
                <MaterialIcons name="arrow-forward" size={18} color="white" />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <Footer />
      </ScrollView>
    </View>
  );
}
