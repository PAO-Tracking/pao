import type { Route } from "./+types/home";
import { motion } from "framer-motion";
import { 
  TrendingUp, 
  Target, 
  BarChart3, 
  Users, 
  Phone, 
  Mail,
  MessageCircle,
  ArrowRight,
  CheckCircle,
  Star,
  Menu,
  X
} from "lucide-react";
import { useState, useEffect } from "react";

export function meta({}: Route.MetaArgs) {
  const siteUrl = "https://p-a-o.com"; // 실제 도메인으로 변경 필요
  const title = "파오 (P.A.O) - 성과 중심 퍼포먼스 마케팅 전문가";
  const description = "데이터 기반 마케팅으로 ROI 300% 이상의 확실한 성과를 보장하는 파오(P.A.O). 정밀 타겟팅, 실시간 최적화, 전담 매니저 서비스로 비즈니스 성장을 가속화합니다.";
  const imageUrl = `${siteUrl}/og-image.jpg`; // OG 이미지 경로

  return [
    // 기본 SEO 메타 태그
    { title },
    { name: "description", content: description },
    { name: "keywords", content: "퍼포먼스 마케팅, 디지털 마케팅, ROI 최적화, 데이터 기반 마케팅, 온라인 광고, 마케팅 대행, 파오, P.A.O" },
    { name: "author", content: "파오 (P.A.O)" },
    { name: "robots", content: "index, follow" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    { name: "theme-color", content: "#3B82F6" },
    
    // Canonical URL
    { rel: "canonical", href: siteUrl },
    
    // Favicon 및 아이콘들
    { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
    { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png" },
    { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" },
    { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
    { rel: "manifest", href: "/manifest.json" },
    
    // OpenGraph 메타 태그 (Facebook, LinkedIn 등)
    { property: "og:type", content: "website" },
    { property: "og:site_name", content: "파오 (P.A.O) - 퍼포먼스 마케팅" },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:url", content: siteUrl },
    { property: "og:image", content: imageUrl },
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "630" },
    { property: "og:image:alt", content: "파오 (P.A.O) - 퍼포먼스 마케팅 전문가" },
    { property: "og:locale", content: "ko_KR" },
    
    // Twitter Cards
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:site", content: "@pao_marketing" }, // 실제 트위터 계정으로 변경
    { name: "twitter:creator", content: "@pao_marketing" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: imageUrl },
    { name: "twitter:image:alt", content: "파오 (P.A.O) - 퍼포먼스 마케팅 전문가" },
    
    // 추가 SEO 메타 태그
    { name: "format-detection", content: "telephone=no" },
    { name: "msapplication-TileColor", content: "#3B82F6" },
    { name: "msapplication-config", content: "/browserconfig.xml" },
    
    // Apple 관련
    { name: "apple-mobile-web-app-capable", content: "yes" },
    { name: "apple-mobile-web-app-status-bar-style", content: "default" },
    { name: "apple-mobile-web-app-title", content: "파오 (P.A.O)" },
  ];
}

// JSON-LD 구조화 데이터 컴포넌트
function JsonLdScript() {
  const siteUrl = "https://p-a-o.com"; // 실제 도메인으로 변경 필요
  
  // 조직(회사) 정보
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "파오 (P.A.O)",
    "alternateName": "P.A.O",
    "description": "데이터 기반 퍼포먼스 마케팅 전문 기업",
    "url": siteUrl,
    "logo": `${siteUrl}/logo.png`,
    "image": `${siteUrl}/og-image.jpg`,
    "email": "goblinprojectm@gmail.com",
    "sameAs": [
      "https://open.kakao.com/me/lets_goblin"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "email": "goblinprojectm@gmail.com",
      "availableLanguage": ["Korean", "English"]
    },
    "areaServed": {
      "@type": "Country",
      "name": "South Korea"
    },
    "foundingDate": "2024",
    "knowsAbout": [
      "퍼포먼스 마케팅",
      "디지털 마케팅",
      "ROI 최적화",
      "데이터 분석",
      "온라인 광고"
    ]
  };

  // 지역 비즈니스 정보
  const localBusinessData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "파오 (P.A.O)",
    "description": "ROI 300% 이상의 확실한 성과를 보장하는 퍼포먼스 마케팅 전문가",
    "url": siteUrl,
    "telephone": "goblinprojectm@gmail.com",
    "email": "goblinprojectm@gmail.com",
    "priceRange": "$$",
    "paymentAccepted": "Cash, Credit Card, Bank Transfer",
    "currenciesAccepted": "KRW",
    "openingHours": "Mo-Fr 09:00-18:00",
    "image": `${siteUrl}/og-image.jpg`,
    "logo": `${siteUrl}/logo.png`,
    "sameAs": [
      "https://open.kakao.com/me/lets_goblin"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "bestRating": "5",
      "worstRating": "1",
      "ratingCount": "50"
    }
  };

  // 서비스 정보
  const serviceData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "퍼포먼스 마케팅 서비스",
    "description": "데이터 기반의 정밀한 타겟팅과 최적화로 ROI 300% 이상의 확실한 성과를 보장",
    "provider": {
      "@type": "Organization",
      "name": "파오 (P.A.O)",
      "url": siteUrl
    },
    "areaServed": {
      "@type": "Country",
      "name": "South Korea"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "마케팅 서비스",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "정밀 타겟팅",
            "description": "AI 기반 고객 분석으로 정확한 타겟 설정"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "실시간 최적화",
            "description": "24/7 데이터 모니터링과 자동 최적화"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "성과 분석",
            "description": "상세한 ROI 분석과 성과 리포트 제공"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "전담 매니저",
            "description": "경험 풍부한 전문가의 1:1 맞춤 관리"
          }
        }
      ]
    }
  };

  // 웹사이트 정보
  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "파오 (P.A.O) - 퍼포먼스 마케팅",
    "url": siteUrl,
    "description": "데이터 기반 마케팅으로 ROI 300% 이상의 확실한 성과를 보장하는 파오(P.A.O)의 공식 홈페이지",
    "publisher": {
      "@type": "Organization",
      "name": "파오 (P.A.O)",
      "logo": `${siteUrl}/logo.png`
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": `${siteUrl}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string"
    },
    "inLanguage": "ko-KR"
  };

  // FAQ 구조화 데이터
  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "파오(P.A.O)의 퍼포먼스 마케팅 서비스는 어떤 것인가요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "데이터 기반의 정밀한 타겟팅, 실시간 최적화, 성과 분석, 전담 매니저 서비스를 통해 ROI 300% 이상의 확실한 성과를 보장하는 퍼포먼스 마케팅 서비스입니다."
        }
      },
      {
        "@type": "Question", 
        "name": "파오(P.A.O)의 주요 성과는 무엇인가요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "평균 ROI 300% 이상, 500개 이상의 성공 캠페인, 98%의 고객 만족도, 24/7 실시간 모니터링을 통해 검증된 성과를 제공합니다."
        }
      },
      {
        "@type": "Question",
        "name": "문의는 어떻게 할 수 있나요?",
        "acceptedAnswer": {
          "@type": "Answer", 
          "text": "이메일(goblinprojectm@gmail.com) 또는 카카오톡 오픈채팅(https://open.kakao.com/me/lets_goblin)을 통해 언제든지 문의하실 수 있습니다."
        }
      }
    ]
  };

  const jsonLdScripts = [
    organizationData,
    localBusinessData, 
    serviceData,
    websiteData,
    faqData
  ];

  return (
    <>
      {jsonLdScripts.map((data, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(data, null, 2)
          }}
        />
      ))}
    </>
  );
}

// 플로팅 헤더 컴포넌트
function FloatingHeader() {
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
    window.open('https://open.kakao.com/me/lets_goblin', '_blank');
  };

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
            {[
              { name: '서비스', id: 'services' },
              { name: '성과', id: 'stats' },
              { name: '후기', id: 'testimonials' },
              { name: '팀', id: 'team' },
              { name: '연락처', id: 'contact' }
            ].map((item) => (
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
              href="mailto:goblinprojectm@gmail.com"
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
            {[
              { name: '서비스', id: 'services' },
              { name: '성과', id: 'stats' },
              { name: '후기', id: 'testimonials' },
              { name: '팀', id: 'team' },
              { name: '연락처', id: 'contact' }
            ].map((item) => (
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
                href="mailto:goblinprojectm@gmail.com"
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

// 카카오톡 버블 버튼 컴포넌트
function KakaoTalkBubble() {
  const handleKakaoClick = () => {
    window.open('https://open.kakao.com/me/lets_goblin', '_blank');
  };

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <motion.button
        onClick={handleKakaoClick}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{ 
          y: [0, -10, 0],
        }}
        transition={{ 
          duration: 2,
          repeat: Infinity,
          repeatType: "loop" 
        }}
        className="bg-yellow-400 hover:bg-yellow-500 text-black p-4 rounded-full shadow-2xl flex items-center gap-2 font-medium"
      >
        <MessageCircle size={24} />
        <span className="hidden sm:block">카카오톡 문의</span>
      </motion.button>
    </motion.div>
  );
}

export default function Home() {
  return (
    <>
      {/* JSON-LD 구조화 데이터 */}
      <JsonLdScript />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
        {/* Floating Header */}
        <FloatingHeader />

      {/* Hero Section */}
      <section id="hero" className="relative overflow-hidden px-6 py-24 sm:py-32 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 pt-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6">
                성과가 입증된
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  {" "}퍼포먼스 마케팅
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                데이터 기반의 정밀한 타겟팅과 최적화로 
                ROI 300% 이상의 확실한 성과를 보장합니다
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold flex items-center gap-2"
              >
                무료 상담 받기 <ArrowRight size={20} />
              </motion.button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="비즈니스 데이터 분석"
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-6">
              핵심 서비스
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              데이터 기반의 체계적인 접근으로 비즈니스 성장을 가속화합니다
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Target className="w-12 h-12 text-blue-600" />,
                title: "정밀 타겟팅",
                description: "AI 기반 고객 분석으로 정확한 타겟 설정",
                image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
              },
              {
                icon: <BarChart3 className="w-12 h-12 text-green-600" />,
                title: "실시간 최적화",
                description: "24/7 데이터 모니터링과 자동 최적화",
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
              },
              {
                icon: <TrendingUp className="w-12 h-12 text-purple-600" />,
                title: "성과 분석",
                description: "상세한 ROI 분석과 성과 리포트 제공",
                image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
              },
              {
                icon: <Users className="w-12 h-12 text-indigo-600" />,
                title: "전담 매니저",
                description: "경험 풍부한 전문가의 1:1 맞춤 관리",
                image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats" className="py-20 px-6 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-6">
                입증된 성과
              </h2>
              <p className="text-gray-600 text-lg mb-8">
                수많은 클라이언트와 함께 만들어낸 실제 성과입니다. 
                데이터가 증명하는 확실한 결과를 경험해보세요.
              </p>
              <div className="grid grid-cols-2 gap-8">
                {[
                  { number: "300%+", label: "평균 ROI", desc: "투자 대비 수익" },
                  { number: "500+", label: "성공 캠페인", desc: "완료된 프로젝트" },
                  { number: "98%", label: "고객 만족도", desc: "재계약률" },
                  { number: "24/7", label: "실시간 모니터링", desc: "지속적인 관리" }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">
                      {stat.number}
                    </div>
                    <div className="text-gray-900 font-semibold">{stat.label}</div>
                    <div className="text-gray-600 text-sm">{stat.desc}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="성과 분석 대시보드"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-6">
              고객 성공사례
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              실제 고객들이 경험한 성과와 만족도를 확인해보세요
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "김민준 대표",
                company: "온라인 패션몰 '스타일K'",
                content: "3개월 만에 매출이 400% 증가했습니다. 특히 신규 고객 유입이 눈에 띄게 늘었어요. 파오(P.A.O)팀의 전문성에 감탄했습니다.",
                rating: 5,
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
              },
              {
                name: "이지은 마케팅팀장", 
                company: "핀테크 스타트업 'PayEasy'",
                content: "고객 획득 비용은 50% 절감하고, 고객 생애 가치는 2배로 증가했습니다. 데이터 기반 접근이 정말 효과적이었어요.",
                rating: 5,
                image: "https://images.unsplash.com/photo-1494790108755-2616c512a987?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
              },
              {
                name: "박성호 CEO",
                company: "교육 플랫폼 'EduTech'",
                content: "복잡한 B2B 마케팅도 체계적으로 관리해주셨습니다. 리드 품질이 현저히 향상되었고, 전환율도 3배 증가했습니다.",
                rating: 5,
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl border border-gray-200 shadow-lg p-8 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <img 
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <div className="text-gray-900 font-semibold text-lg">{testimonial.name}</div>
                    <div className="text-gray-600 text-sm">{testimonial.company}</div>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed">"{testimonial.content}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 px-6 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-6">
              전문가 팀
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              각 분야 최고의 전문가들이 귀하의 성공을 위해 함께 합니다
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "김태현",
                role: "대표이사 / 전략 총괄",
                experience: "10년+ 디지털마케팅",
                image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
                specialization: "퍼포먼스 마케팅 전략 수립"
              },
              {
                name: "이수진",
                role: "데이터 분석 팀장",
                experience: "8년+ 빅데이터 분석",
                image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
                specialization: "고객 행동 분석 및 예측 모델링"
              },
              {
                name: "박준영",
                role: "광고 운영 전문가",
                experience: "7년+ 광고 최적화",
                image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
                specialization: "Google·Meta 광고 운영"
              },
              {
                name: "정미영",
                role: "콘텐츠 마케팅 리드",
                experience: "6년+ 브랜드 마케팅",
                image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
                specialization: "브랜드 스토리텔링 및 콘텐츠 전략"
              }
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl border border-gray-200 shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="h-64 overflow-hidden">
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <div className="text-blue-600 font-medium mb-2">{member.role}</div>
                  <div className="text-gray-600 text-sm mb-3">{member.experience}</div>
                  <div className="text-gray-700 text-sm">{member.specialization}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-5xl font-bold text-white mb-6">
                성공적인 마케팅,
                <br />지금 시작하세요
              </h2>
              <p className="text-gray-300 text-lg mb-8">
                무료 상담을 통해 귀하의 비즈니스에 최적화된 
                퍼포먼스 마케팅 전략을 제안해드립니다.
              </p>
              
              <div className="space-y-4 mb-8">
                <motion.a
                  href="mailto:goblinprojectm@gmail.com"
                  whileHover={{ scale: 1.02 }}
                  className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-6 py-4 rounded-2xl flex items-center gap-3 hover:bg-white/20 transition-all block"
                >
                  <Mail size={24} className="text-blue-400" />
                  <div>
                    <div className="font-medium">이메일 문의</div>
                    <div className="text-sm text-gray-300">goblinprojectm@gmail.com</div>
                  </div>
                </motion.a>
                <motion.a
                  href="https://open.kakao.com/me/lets_goblin"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-6 py-4 rounded-2xl flex items-center gap-3 hover:bg-white/20 transition-all block"
                >
                  <MessageCircle size={24} className="text-yellow-400" />
                  <div>
                    <div className="font-medium">카카오톡 상담</div>
                    <div className="text-sm text-gray-300">즉시 상담 가능</div>
                  </div>
                </motion.a>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                <div className="flex flex-col items-center">
                  <CheckCircle size={20} className="text-blue-400 mb-2" />
                  <span className="text-gray-300 text-sm">무료 전략 컨설팅</span>
                </div>
                <div className="flex flex-col items-center">
                  <CheckCircle size={20} className="text-green-400 mb-2" />
                  <span className="text-gray-300 text-sm">24시간 내 답변</span>
                </div>
                <div className="flex flex-col items-center">
                  <CheckCircle size={20} className="text-purple-400 mb-2" />
                  <span className="text-gray-300 text-sm">맞춤 솔루션 제공</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">파오 (P.A.O)</h3>
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-4xl mb-4">🚀</div>
                    <h4 className="text-xl font-semibold text-white mb-3">
                      퍼포먼스 마케팅의 새로운 기준
                    </h4>
                    <p className="text-gray-300 leading-relaxed">
                      데이터 기반의 정밀한 분석과 최적화로 
                      확실한 성과를 만들어내는 전문 마케팅 파트너
                    </p>
                  </div>
                  
                  <div className="border-t border-white/20 pt-6">
                    <div className="grid grid-cols-2 gap-6 text-center">
                      <div>
                        <div className="text-3xl font-bold text-blue-400 mb-1">300%+</div>
                        <div className="text-gray-300 text-sm">평균 ROI 향상</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-purple-400 mb-1">24/7</div>
                        <div className="text-gray-300 text-sm">실시간 모니터링</div>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-white/20 pt-6">
                    <p className="text-gray-300 text-center text-sm leading-relaxed">
                      "성과로 증명하는 마케팅, 데이터가 말하는 확실한 결과"
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

        {/* Kakao Talk Bubble */}
        <KakaoTalkBubble />
      </div>
    </>
  );
}
