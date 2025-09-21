import { motion } from "framer-motion";
import { Star } from "lucide-react";

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "블로그 (정보 기반)",
      company: "1단계: 신뢰도 높은 검색 기반 구축",
      content: "키워드 기반 정보성 콘텐츠를 확보하여 신뢰도 높은 검색 기반을 구축합니다. 브랜드에 대한 기본적인 정보와 신뢰성을 제공합니다.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    },
    {
      name: "인스타그램/유튜브 (트래픽 확장)", 
      company: "2단계: 바이럴 콘텐츠로 검색량 증대",
      content: "매력적인 바이럴 콘텐츠로 잠재 고객의 흥미를 유발하고, 관련 키워드의 검색량을 폭발적으로 증대시킵니다.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1611262588024-d12430b98920?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    },
    {
      name: "최종 유입 (전환)",
      company: "3단계: 네이버 플레이스 또는 구매 페이지",
      content: "증대된 검색 수요가 블로그의 신뢰도 높은 정보를 거쳐 네이버 플레이스 또는 구매 페이지로 자연스럽게 유입되는 흐름을 완성합니다.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    }
  ];

  return (
    <section id="testimonials" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-6">
            PAO Flow: 통합 시너지 전략
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            개별 서비스 운영이 아닌, 채널 간의 유기적인 연동으로 성과 극대화를 실현
          </p>
        </motion.div>

        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
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
  );
}
