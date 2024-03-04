import { ElementRef, useRef, useState, useCallback } from 'react';
import { useMediaQuery } from 'usehooks-ts';

export const useDocumentNavigation = () => {
  const sidebarRef = useRef<ElementRef<'aside'>>(null);
  const navbarRef = useRef<ElementRef<'div'>>(null);
  const isMobile = useMediaQuery('(max-width: 768px)');

  const [isResetting, setIsResetting] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(isMobile);

  const resetWidth = useCallback(() => {
    if (sidebarRef.current && navbarRef.current) {
      setIsCollapsed(false);
      setIsResetting(true);

      sidebarRef.current.style.width = isMobile ? '100%' : '240px';
      navbarRef.current.style.setProperty('width', isMobile ? '0' : 'calc(100% - 240px)');
      navbarRef.current.style.setProperty('left', isMobile ? '100%' : '240px');
      setTimeout(() => setIsResetting(false), 300);
    }
  }, [isMobile]);

  return { sidebarRef, isResetting, isCollapsed, isMobile, resetWidth } as const;
};
