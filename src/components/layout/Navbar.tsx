import { useMemo } from 'react';
import { useDarkMode } from '@/hooks/useDarkMode';
import { useMobileMenu } from '@/hooks/useMobileMenu';
import { useActiveSection } from '@/hooks/useActiveSection';
import { useScrollShadow } from '@/hooks/useScrollShadow';
import { NAV_ITEMS } from '@/data/resumeData';
import { SunIcon, MoonIcon } from '@/components/icons/SvgIcons';

const Navbar = () => {
  const { isDark, toggleDarkMode } = useDarkMode();
  const { isOpen, toggleMenu, closeMenu } = useMobileMenu();
  const sectionIds = useMemo(() => NAV_ITEMS.map((item) => item.href.slice(1)), []);
  const activeId = useActiveSection(sectionIds);
  const isScrolled = useScrollShadow();

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 bg-dark-DEFAULT/80 backdrop-blur-xl border-b border-white/5 transition-all duration-300 ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#hero" className="text-xl font-bold text-white hover:text-primary transition-colors">Quant Logic</a>

        {/* 데스크톱 메뉴 */}
        <ul className="hidden md:flex items-center gap-6 text-sm font-medium">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className={`nav-link text-dark-muted hover:text-primary transition-colors ${activeId === item.href.slice(1) ? 'active' : ''}`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          {/* 다크모드 토글 */}
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-lg hover:bg-white/10 transition-colors text-dark-muted"
            aria-label="테마 변경"
          >
            {isDark ? <SunIcon /> : <MoonIcon />}
          </button>

          {/* 모바일 햄버거 메뉴 */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors text-dark-muted"
            aria-label="메뉴 열기"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* 모바일 메뉴 */}
      {isOpen && (
        <div className="md:hidden border-t border-white/10 bg-dark-DEFAULT/95 backdrop-blur-xl">
          <ul className="flex flex-col px-4 py-3 gap-3 text-sm font-medium">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={closeMenu}
                  className={`mobile-nav-link block py-2 text-dark-muted hover:text-primary transition-colors ${activeId === item.href.slice(1) ? 'active' : ''}`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
