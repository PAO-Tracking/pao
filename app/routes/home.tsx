import type { Route } from "./+types/home";

// SEO Components
import { JsonLdScript } from "../components/seo/JsonLdScript";

// Layout Components
import { FloatingHeader } from "../components/layout/FloatingHeader";
import { Footer } from "../components/layout/Footer";

// UI Components
import { KakaoTalkBubble } from "../components/ui/KakaoTalkBubble";

// Section Components
import { HeroSection } from "../components/sections/HeroSection";
import { ServicesSection } from "../components/sections/ServicesSection";
import { PhilosophySection } from "../components/sections/PhilosophySection";
import { StatsSection } from "../components/sections/StatsSection";
import { TestimonialsSection } from "../components/sections/TestimonialsSection";
import { ContactSection } from "../components/sections/ContactSection";

export function meta({}: Route.MetaArgs) {
  const siteUrl = "https://p-a-o.com"; // 실제 도메인으로 변경 필요
  const title = "파오 (P.A.O) - 바이럴 및 퍼포먼스 통합 마케팅 솔루션";
  const description = "가장 단순한 것에서 시작해, 가장 탁월한 결과를 내는 PAO(Project Aglio e Olio). 네이버 플레이스, 블로그, 인스타그램/유튜브 통합 마케팅으로 검색량 증대와 전환율 극대화를 실현합니다.";
  const imageUrl = `${siteUrl}/og-image.jpg`; // OG 이미지 경로

  return [
    // 기본 SEO 메타 태그
    { title },
    { name: "description", content: description },
    { name: "keywords", content: "바이럴 마케팅, 퍼포먼스 마케팅, 네이버 플레이스, 블로그 체험단, 인스타그램 마케팅, 유튜브 크리에이터, 통합 마케팅, 파오, P.A.O, Project Aglio e Olio" },
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
    { property: "og:site_name", content: "파오 (P.A.O) - 바이럴 및 퍼포먼스 통합 마케팅" },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:url", content: siteUrl },
    { property: "og:image", content: imageUrl },
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "630" },
    { property: "og:image:alt", content: "파오 (P.A.O) - 바이럴 및 퍼포먼스 통합 마케팅" },
    { property: "og:locale", content: "ko_KR" },
    
    // Twitter Cards
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:site", content: "@pao_marketing" }, // 실제 트위터 계정으로 변경
    { name: "twitter:creator", content: "@pao_marketing" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: imageUrl },
    { name: "twitter:image:alt", content: "파오 (P.A.O) - 바이럴 및 퍼포먼스 통합 마케팅" },
    
    // 추가 SEO 메타 태그
    { name: "format-detection", content: "telephone=no" },
    { name: "msapplication-TileColor", content: "#3B82F6" },
    { name: "msapplication-config", content: "/browserconfig.xml" },
    
    // Apple 관련
    { name: "apple-mobile-web-app-capable", content: "yes" },
    { name: "apple-mobile-web-app-status-bar-style", content: "default" },
    { name: "apple-mobile-web-app-title", content: "파오 (P.A.O)" },
    
    // CSP 헤더 (XSS 보호)
    { "http-equiv": "Content-Security-Policy", content: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://open.kakao.com https://www.googletagmanager.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https: blob:; connect-src 'self' https: wss:; frame-src https://open.kakao.com; object-src 'none'; base-uri 'self'; form-action 'self'; upgrade-insecure-requests;" },
  ];
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
        <HeroSection />

        {/* Services Section */}
        <ServicesSection />

        {/* Philosophy Section */}
        <PhilosophySection />

        {/* Stats Section */}
        <StatsSection />

        {/* Testimonials Section */}
        <TestimonialsSection />

        {/* Contact Section */}
        <ContactSection />

        {/* Kakao Talk Bubble */}
        <KakaoTalkBubble />

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}