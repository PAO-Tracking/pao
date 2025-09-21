import { motion } from "framer-motion";

export function PhilosophySection() {
  const philosophyItems = [
    {
      icon: "🧄",
      title: "알리오",
      subtitle: "브랜드를 알리오",
      description: "인지도 확장을 위한 체계적인 브랜드 노출 전략",
      color: "from-amber-500 to-orange-500"
    },
    {
      icon: "🫒", 
      title: "올리오",
      subtitle: "매출을 올리오",
      description: "실질적인 성과 증대를 위한 전환 최적화",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: "🚀",
      title: "파오", 
      subtitle: "상품을 파오",
      description: "경쟁력 강화 및 판매 촉진을 위한 통합 마케팅",
      color: "from-blue-500 to-purple-500"
    }
  ];

  return (
    <section id="philosophy" className="py-20 px-6 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-6">
            PAO, 이름에 담긴 철학
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            마늘과 올리브라는 가장 간단하고 근본적인 재료로 극상의 맛을 내는 <strong>알리오 올리오</strong>처럼,<br/>
            고객의 마케팅 문제를 가장 <strong>근본적인 부분</strong>부터 진단하고 개선하여 <strong>최고의 성과(Optimal Result)</strong>를 창출합니다.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {philosophyItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="text-center">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <div className={`text-lg font-semibold bg-gradient-to-r ${item.color} bg-clip-text text-transparent mb-4`}>
                  {item.subtitle}
                </div>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white rounded-2xl p-8 shadow-lg"
        >
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">근본과 최고 성과의 약속</h3>
            <p className="text-gray-700 text-lg leading-relaxed max-w-4xl mx-auto">
              PAO는 단순히 채널을 운영하거나 인력을 연결하는 회사가 아닌, <strong>브랜드의 목표 달성에 최적화된 전략을 설계하고 실행하는 마케팅 솔루션 프로바이더</strong>입니다. 
              무작위 섭외를 지양하고, 브랜드/상품과 가장 연관성이 높고 목표 달성에 기여할 수 있는 <strong>FIT한 크리에이터</strong>를 전략적으로 발굴하여 마케팅의 효율을 극대화합니다.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
