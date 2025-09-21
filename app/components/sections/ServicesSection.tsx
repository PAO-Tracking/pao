import { motion } from "framer-motion";
import { Target, BarChart3, TrendingUp } from "lucide-react";

export function ServicesSection() {
  const services = [
    {
      icon: <Target className="w-12 h-12 text-blue-600" />,
      title: "Solution 1: 네이버 플레이스 통합 솔루션",
      description: "노출 → 유입 → 전환율 극대화. 전문 사진 촬영, 통합 관리, 유입 확장 전략, 노출 분석",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      icon: <BarChart3 className="w-12 h-12 text-green-600" />,
      title: "Solution 2: 네이버 블로그 전략 체험단",
      description: "키워드 기반 검색 시장 선점. 상위 노출 블로거 전략적 섭외, 캠페인 설계, 성과 분석",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-purple-600" />,
      title: "Solution 3: 인스타그램 & 유튜브 크리에이터 매칭",
      description: "목표 기반 바이럴 트래픽 확장. FIT 크리에이터 매칭, 콘텐츠 기획, 검색 수요 증대",
      image: "https://images.unsplash.com/photo-1611262588024-d12430b98920?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    }
  ];

  return (
    <section id="services" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-6">
            PAO의 3가지 솔루션
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            브랜드 목표 달성에 최적화된 전략을 설계하고 실행하는 마케팅 솔루션 프로바이더
          </p>
        </motion.div>

        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
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
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
