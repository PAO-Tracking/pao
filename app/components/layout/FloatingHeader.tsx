import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

export function FloatingHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMobileMenuOpen(false);
    }
  };

  const handleKakaoClick = () => {
    window.open('https://open.kakao.com/me/projectaglioeolio', '_blank');
  };

  const navigationItems = [
    { name: '서비스', id: 'services' },
    { name: '철학', id: 'philosophy' },
    { name: '성과', id: 'stats' },
    { name: 'PAO Flow', id: 'testimonials' },
    { name: '연락처', id: 'contact' }
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* 로고 */}
          <motion.div 
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.02 }}
          >
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-lg">P</span>
            </div>
            <div>
              <h1 className={`text-2xl font-bold ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
                파오
              </h1>
              <p className={`text-sm ${isScrolled ? 'text-gray-600' : 'text-gray-200'}`}>
                P.A.O
              </p>
            </div>
          </motion.div>

          {/* 데스크톱 네비게이션 */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`font-medium hover:scale-105 transition-all duration-200 ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-blue-600' 
                    : 'text-white hover:text-blue-200'
                }`}
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* 연락처 버튼들 */}
          <div className="hidden lg:flex items-center space-x-3">
            <motion.a
              href="mailto:yummy@p-a-o.com"
              whileHover={{ scale: 1.05 }}
              className={`px-4 py-2 rounded-lg border transition-all duration-200 ${
                isScrolled
                  ? 'border-gray-300 text-gray-700 hover:border-blue-500 hover:text-blue-600'
                  : 'border-white/30 text-white hover:bg-white/10'
              }`}
            >
              이메일 문의
            </motion.a>
            <motion.button
              onClick={handleKakaoClick}
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-2 rounded-lg font-medium transition-all duration-200"
            >
              카카오톡 상담
            </motion.button>
          </div>

          {/* 모바일 메뉴 버튼 */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              isScrolled ? 'text-gray-700' : 'text-white'
            }`}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* 모바일 메뉴 */}
        <motion.div
          initial={false}
          animate={{
            height: isMobileMenuOpen ? 'auto' : 0,
            opacity: isMobileMenuOpen ? 1 : 0
          }}
          transition={{ duration: 0.3 }}
          className={`lg:hidden overflow-hidden ${
            isScrolled ? 'bg-white' : 'bg-gray-900/95 backdrop-blur-md'
          } rounded-b-2xl`}
        >
          <div className="px-4 py-6 space-y-4">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left px-4 py-3 rounded-lg font-medium transition-colors ${
                  isScrolled
                    ? 'text-gray-700 hover:bg-gray-100 hover:text-blue-600'
                    : 'text-white hover:bg-white/10'
                }`}
              >
                {item.name}
              </button>
            ))}
            <div className="pt-4 border-t border-gray-200 space-y-3">
              <a
                href="mailto:yummy@p-a-o.com"
                className={`block px-4 py-3 rounded-lg border text-center font-medium transition-colors ${
                  isScrolled
                    ? 'border-gray-300 text-gray-700 hover:border-blue-500 hover:text-blue-600'
                    : 'border-white/30 text-white hover:bg-white/10'
                }`}
              >
                이메일 문의
              </a>
              <button
                onClick={handleKakaoClick}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 py-3 rounded-lg font-medium"
              >
                카카오톡 상담
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.header>
  );
}
