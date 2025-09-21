import { motion } from "framer-motion";

export function StatsSection() {
  const stats = [
    { number: "FIT 매칭", label: "성과 중심 크리에이터", desc: "브랜드 연관성 최우선" },
    { number: "통합 시너지", label: "체널 간 연동", desc: "유기적 트래픽 흐름" },
    { number: "전환 극대화", label: "구매 전환율", desc: "유효 트래픽 확보" },
    { number: "근본부터", label: "문제 진단 및 개선", desc: "기본에 충실한 접근" }
  ];

  return (
    <section id="stats" className="py-20 px-6 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-6">
              PAO의 핵심 경쟁력
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              FIT 매칭과 통합 시너지로 만들어내는 차별화된 성과. 
              브랜드/상품과 가장 연관성이 높은 크리에이터를 매칭합니다.
            </p>
            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">
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
  );
}
