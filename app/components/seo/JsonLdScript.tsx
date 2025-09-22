// JSON-LD 구조화 데이터 컴포넌트
export function JsonLdScript() {
  const siteUrl = "https://p-a-o.com"; // 실제 도메인으로 변경 필요
  
  // 조직(회사) 정보
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "파오 (P.A.O)",
    "alternateName": "Project Aglio e Olio",
    "description": "바이럴 및 퍼포먼스 통합 마케팅 솔루션 전문 기업",
    "url": siteUrl,
    "logo": `${siteUrl}/logo.png`,
    "image": `${siteUrl}/og-image.jpg`,
    "email": "yummy@p-a-o.com",
    "sameAs": [
      "https://open.kakao.com/me/projectaglioeolio"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "email": "yummy@p-a-o.com",
      "availableLanguage": ["Korean", "English"]
    },
    "areaServed": {
      "@type": "Country",
      "name": "South Korea"
    },
    "foundingDate": "2024",
    "knowsAbout": [
      "바이럴 마케팅",
      "퍼포먼스 마케팅",
      "네이버 플레이스 최적화",
      "블로그 체험단",
      "인스타그램/유튜브 크리에이터 매칭",
      "통합 마케팅 시너지"
    ]
  };

  // 지역 비즈니스 정보
  const localBusinessData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "파오 (P.A.O)",
    "description": "가장 단순한 것에서 시작해 가장 탁월한 결과를 내는 바이럴 및 퍼포먼스 통합 마케팅 전문가",
    "url": siteUrl,
    "telephone": "yummy@p-a-o.com",
    "email": "yummy@p-a-o.com",
    "priceRange": "$$",
    "paymentAccepted": "Cash, Credit Card, Bank Transfer",
    "currenciesAccepted": "KRW",
    "openingHours": "Mo-Fr 09:00-18:00",
    "image": `${siteUrl}/og-image.jpg`,
    "logo": `${siteUrl}/logo.png`,
    "sameAs": [
      "https://open.kakao.com/me/projectaglioeolio"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "bestRating": "5",
      "worstRating": "1",
      "ratingCount": "127"
    }
  };

  // 서비스 정보
  const serviceData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "바이럴 및 퍼포먼스 통합 마케팅 서비스",
    "description": "FIT 크리에이터 매칭과 체널 간 통합 시너지로 검색량 증대와 구매 전환율 극대화",
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
            "name": "네이버 플레이스 통합 솔루션",
            "description": "전환 최적화, 통합 관리, 유입 확장 전략, 노출 분석"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "네이버 블로그 전략 체험단",
            "description": "키워드 기반 검색 시장 선점, 전략적 섭외, 성과 분석"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "인스타그램 & 유튜브 크리에이터 매칭",
            "description": "FIT 크리에이터 매칭, 바이럴 트래픽 확장, 검색 수요 증대"
          }
        }
      ]
    }
  };

  // 웹사이트 정보
  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "파오 (P.A.O) - 바이럴 및 퍼포먼스 통합 마케팅",
    "url": siteUrl,
    "description": "가장 단순한 것에서 시작해 가장 탁월한 결과를 내는 파오(P.A.O)의 공식 홈페이지",
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
        "name": "파오(P.A.O)의 통합 마케팅 솔루션은 어떤 것인가요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "네이버 플레이스 통합 솔루션, 네이버 블로그 전략 체험단, 인스타그램/유튜브 크리에이터 매칭의 3가지 솔루션을 통해 채널 간 시너지를 창출하여 검색량 증대와 구매 전환율 극대화를 실현하는 통합 마케팅 서비스입니다."
        }
      },
      {
        "@type": "Question", 
        "name": "파오(P.A.O)의 핵심 경쟁력은 무엇인가요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "성과 중심의 FIT 크리에이터 매칭과 검색량 증대 및 전환을 위한 통합 전략 구축을 통해 브랜드와 가장 연관성이 높은 크리에이터를 발굴하고, 채널 간 유기적인 연동으로 구매 전환율이 높은 유효 트래픽을 확보합니다."
        }
      },
      {
        "@type": "Question",
        "name": "문의는 어떻게 할 수 있나요?",
        "acceptedAnswer": {
          "@type": "Answer", 
          "text": "이메일(yummy@p-a-o.com) 또는 카카오톡 오픈채팅(https://open.kakao.com/me/projectaglioeolio)을 통해 언제든지 문의하실 수 있습니다."
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
