import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import useBreakpoint from '../hooks/useBreakpoint';

export default function Footer() {
  const navigation = useNavigation();
  const { isMobile } = useBreakpoint();

  const links = [
    { label: 'Collections', screen: 'Collections' },
    { label: 'Notre Histoire', screen: 'Story' },
    { label: 'Expédition & Retours', screen: null },
    { label: 'Politique de confidentialité', screen: null },
  ];

  return (
    <View style={[styles.wrapper, isMobile ? styles.wrapperMobile : styles.wrapperDesktop]}>
      <Text style={styles.brand}>THE REGAL CURATOR</Text>

      <View style={[styles.linksRow, !isMobile && styles.linksRowDesktop]}>
        {links.map((link) => (
          <TouchableOpacity
            key={link.label}
            onPress={() => link.screen && navigation.navigate(link.screen)}
          >
            <Text style={styles.link}>{link.label}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.copy}>© 2024 THE REGAL CURATOR. TOUS DROITS RÉSERVÉS.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    borderTopWidth: 1,
    borderTopColor: 'rgba(230,225,220,0.5)',
    backgroundColor: '#faf9f8',
    marginTop: 'auto',
  },
  wrapperMobile: {
    flexDirection: 'column',
    alignItems: 'center',
    paddingVertical: 40,
    paddingHorizontal: 24,
    gap: 20,
  },
  wrapperDesktop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 28,
    paddingHorizontal: 48,
    flexWrap: 'wrap',
    gap: 16,
  },
  brand: {
    fontFamily: 'NotoSerif_400Regular_Italic',
    fontSize: 16,
    color: '#9e0000',
    letterSpacing: 2,
  },
  linksRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 16,
  },
  linksRowDesktop: {
    justifyContent: 'flex-start',
    gap: 24,
  },
  link: {
    fontFamily: 'Manrope_400Regular',
    fontSize: 12,
    letterSpacing: 1,
    color: '#78716c',
    textDecorationLine: 'underline',
    textDecorationColor: '#78716c',
  },
  copy: {
    fontFamily: 'Manrope_400Regular',
    fontSize: 11,
    letterSpacing: 1,
    color: '#78716c',
    textAlign: 'center',
  },
});
