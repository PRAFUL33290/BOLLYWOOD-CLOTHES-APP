import React, { useState } from 'react';
import {
  View, Text, TouchableOpacity, Modal, Pressable,
  StyleSheet, Platform,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Animated, {
  useSharedValue, useAnimatedStyle, withTiming, Easing,
} from 'react-native-reanimated';
import useBreakpoint from '../hooks/useBreakpoint';

export function MaterialSymbolsOutlined({ name, size = 24, color = 'black', style }) {
  return <MaterialIcons name={name} size={size} color={color} style={style} />;
}

const NAV_LINKS = [
  { label: 'Collections', screen: 'Collections' },
  { label: 'Notre Histoire', screen: 'Story' },
  { label: 'Contact', screen: 'Contact' },
  { label: 'Tableau de bord', screen: 'Dashboard' },
];

const DRAWER_WIDTH = 300;

export default function Header() {
  const navigation = useNavigation();
  const { isMobile, isTablet, isDesktop } = useBreakpoint();
  const [drawerVisible, setDrawerVisible] = useState(false);

  const translateX = useSharedValue(-DRAWER_WIDTH);
  const backdropOpacity = useSharedValue(0);

  const openDrawer = () => {
    setDrawerVisible(true);
    translateX.value = withTiming(0, { duration: 320, easing: Easing.out(Easing.cubic) });
    backdropOpacity.value = withTiming(1, { duration: 320 });
  };

  const closeDrawer = (callback) => {
    translateX.value = withTiming(-DRAWER_WIDTH, { duration: 260, easing: Easing.in(Easing.cubic) });
    backdropOpacity.value = withTiming(0, { duration: 260 });
    setTimeout(() => {
      setDrawerVisible(false);
      callback?.();
    }, 270);
  };

  const navigateTo = (screen) => closeDrawer(() => navigation.navigate(screen));

  const drawerAnimStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }));

  const backdropAnimStyle = useAnimatedStyle(() => ({
    opacity: backdropOpacity.value,
  }));

  /* ── Desktop ── */
  if (isDesktop) {
    return (
      <View style={styles.desktopHeader}>
        <Text style={styles.brand} onPress={() => navigation.navigate('Home')}>
          THE REGAL CURATOR
        </Text>
        <View style={styles.desktopNav}>
          {NAV_LINKS.map((link) => (
            <TouchableOpacity key={link.label} onPress={() => navigation.navigate(link.screen)}>
              <Text style={styles.desktopNavLink}>{link.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <TouchableOpacity style={styles.iconBtn}>
          <MaterialIcons name="shopping-bag" size={28} color="#9e0000" />
        </TouchableOpacity>
      </View>
    );
  }

  /* ── Tablette ── */
  if (isTablet) {
    return (
      <View style={styles.tabletWrapper}>
        <View style={styles.tabletTop}>
          <Text style={styles.brand} onPress={() => navigation.navigate('Home')}>
            THE REGAL CURATOR
          </Text>
          <TouchableOpacity style={styles.iconBtn}>
            <MaterialIcons name="shopping-bag" size={26} color="#9e0000" />
          </TouchableOpacity>
        </View>
        <View style={styles.tabletNav}>
          {NAV_LINKS.map((link) => (
            <TouchableOpacity key={link.label} onPress={() => navigation.navigate(link.screen)}>
              <Text style={styles.tabletNavLink}>{link.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    );
  }

  /* ── Mobile ── */
  return (
    <>
      <View style={styles.mobileHeader}>
        <TouchableOpacity onPress={openDrawer} style={styles.iconBtn}>
          <MaterialIcons name="menu" size={28} color="#9e0000" />
        </TouchableOpacity>
        <Text style={styles.brand} onPress={() => navigation.navigate('Home')}>
          THE REGAL CURATOR
        </Text>
        <TouchableOpacity style={styles.iconBtn}>
          <MaterialIcons name="shopping-bag" size={28} color="#9e0000" />
        </TouchableOpacity>
      </View>

      <Modal
        visible={drawerVisible}
        transparent
        animationType="none"
        statusBarTranslucent
        onRequestClose={() => closeDrawer()}
      >
        {/* Backdrop */}
        <Animated.View style={[StyleSheet.absoluteFillObject, styles.backdrop, backdropAnimStyle]}>
          <Pressable style={StyleSheet.absoluteFillObject} onPress={() => closeDrawer()} />
        </Animated.View>

        {/* Panneau latéral */}
        <Animated.View style={[styles.drawer, drawerAnimStyle]}>
          {/* En-tête du tiroir */}
          <View style={styles.drawerHeader}>
            <Text style={styles.drawerBrand}>THE REGAL CURATOR</Text>
            <TouchableOpacity onPress={() => closeDrawer()} style={styles.iconBtn}>
              <MaterialIcons name="close" size={24} color="#9e0000" />
            </TouchableOpacity>
          </View>

          {/* Liens de navigation */}
          <View style={styles.drawerLinks}>
            <TouchableOpacity style={styles.drawerHomeBtn} onPress={() => navigateTo('Home')}>
              <MaterialIcons name="home" size={18} color="#9e0000" style={{ marginRight: 10 }} />
              <Text style={styles.drawerHomeTxt}>Accueil</Text>
            </TouchableOpacity>
            {NAV_LINKS.map((link) => (
              <TouchableOpacity
                key={link.label}
                style={styles.drawerItem}
                onPress={() => navigateTo(link.screen)}
              >
                <Text style={styles.drawerItemTxt}>{link.label}</Text>
                <MaterialIcons name="chevron-right" size={18} color="#9269" />
              </TouchableOpacity>
            ))}
          </View>

          {/* Bas du tiroir */}
          <View style={styles.drawerFooter}>
            <Text style={styles.drawerFooterTxt}>© 2024 THE REGAL CURATOR</Text>
          </View>
        </Animated.View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  /* Commun */
  brand: {
    fontFamily: 'NotoSerif_700Bold',
    fontSize: 17,
    color: '#9e0000',
    letterSpacing: 3,
  },
  iconBtn: { padding: 8 },

  /* Desktop */
  desktopHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 48,
    height: 72,
    backgroundColor: 'rgba(250,249,248,0.95)',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(146,110,105,0.2)',
    zIndex: 50,
  },
  desktopNav: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 32,
  },
  desktopNavLink: {
    fontFamily: 'Manrope_500Medium',
    fontSize: 12,
    letterSpacing: 2,
    textTransform: 'uppercase',
    color: '#1a1c1c',
  },

  /* Tablette */
  tabletWrapper: {
    backgroundColor: 'rgba(250,249,248,0.95)',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(146,110,105,0.2)',
    zIndex: 50,
  },
  tabletTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 32,
    height: 64,
  },
  tabletNav: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 24,
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: 'rgba(146,110,105,0.1)',
  },
  tabletNavLink: {
    fontFamily: 'Manrope_500Medium',
    fontSize: 11,
    letterSpacing: 2,
    textTransform: 'uppercase',
    color: '#1a1c1c',
  },

  /* Mobile */
  mobileHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    height: 80,
    marginTop: Platform.OS !== 'web' ? 32 : 0,
    backgroundColor: 'rgba(250,249,248,0.95)',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(146,110,105,0.2)',
    zIndex: 50,
  },

  /* Backdrop */
  backdrop: {
    backgroundColor: 'rgba(0,0,0,0.52)',
  },

  /* Tiroir */
  drawer: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    width: DRAWER_WIDTH,
    backgroundColor: '#faf9f8',
    shadowColor: '#000',
    shadowOffset: { width: 4, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 12,
    elevation: 20,
  },
  drawerHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: Platform.OS !== 'web' ? 56 : 24,
    paddingHorizontal: 24,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(146,110,105,0.2)',
  },
  drawerBrand: {
    fontFamily: 'NotoSerif_700Bold',
    fontSize: 13,
    color: '#9e0000',
    letterSpacing: 3,
    flex: 1,
  },
  drawerLinks: {
    flex: 1,
    paddingTop: 8,
  },
  drawerHomeBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 18,
    paddingHorizontal: 24,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(146,110,105,0.1)',
  },
  drawerHomeTxt: {
    fontFamily: 'Manrope_500Medium',
    fontSize: 13,
    letterSpacing: 2,
    textTransform: 'uppercase',
    color: '#9e0000',
  },
  drawerItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 18,
    paddingHorizontal: 24,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(146,110,105,0.1)',
  },
  drawerItemTxt: {
    fontFamily: 'Manrope_500Medium',
    fontSize: 13,
    letterSpacing: 2,
    textTransform: 'uppercase',
    color: '#1a1c1c',
  },
  drawerFooter: {
    paddingHorizontal: 24,
    paddingVertical: 20,
    borderTopWidth: 1,
    borderTopColor: 'rgba(146,110,105,0.15)',
  },
  drawerFooterTxt: {
    fontFamily: 'Manrope_400Regular',
    fontSize: 11,
    color: '#5e3f3a',
    textAlign: 'center',
    letterSpacing: 1,
  },
});
