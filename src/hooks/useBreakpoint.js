import { useState, useEffect } from 'react';
import { Dimensions } from 'react-native';

const BREAKPOINTS = { tablet: 768, desktop: 1280 };

export default function useBreakpoint() {
  const [width, setWidth] = useState(Dimensions.get('window').width);

  useEffect(() => {
    const sub = Dimensions.addEventListener('change', ({ window }) => setWidth(window.width));
    return () => sub?.remove();
  }, []);

  const isDesktop = width >= BREAKPOINTS.desktop;
  const isTablet = !isDesktop && width >= BREAKPOINTS.tablet;
  const isMobile = !isDesktop && !isTablet;

  return { width, isMobile, isTablet, isDesktop, isTabletOrDesktop: !isMobile };
}
