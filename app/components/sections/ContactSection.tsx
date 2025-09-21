import { motion } from "framer-motion";
import { Mail, MessageCircle, CheckCircle } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="py-20 px-6 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-5xl font-bold text-white mb-6">
              가장 단순한 것에서,
              <br />가장 탁월한 결과를
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              무료 상담을 통해 귀하의 브랜드에 최적화된<br/> 
              바이럴 & 퍼포먼스 통합 마케팅 솔루션을 제안해드립니다.
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
                <span className="text-gray-300 text-sm">FIT 크리에이터 매칭</span>
              </div>
              <div className="flex flex-col items-center">
                <CheckCircle size={20} className="text-green-400 mb-2" />
                <span className="text-gray-300 text-sm">통합 시너지 전략</span>
              </div>
              <div className="flex flex-col items-center">
                <CheckCircle size={20} className="text-purple-400 mb-2" />
                <span className="text-gray-300 text-sm">검색량 증대 & 전환 극대화</span>
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
                  <div className="text-4xl mb-4">🍝</div>
                  <h4 className="text-xl font-semibold text-white mb-3">
                    Project Aglio e Olio
                  </h4>
                  <p className="text-gray-300 leading-relaxed">
                    마늘과 올리브처럼 가장 근본적인 재료로 극상의 맛을 내듯<br/>
                    브랜드 문제를 근본부터 진단하고 연결하여 최고의 성과를 창출
                  </p>
                </div>
                
                <div className="border-t border-white/20 pt-6">
                  <div className="grid grid-cols-2 gap-6 text-center">
                    <div>
                      <div className="text-3xl font-bold text-blue-400 mb-1">알리오</div>
                      <div className="text-gray-300 text-sm">브랜드를 알리오</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-purple-400 mb-1">올리오</div>
                      <div className="text-gray-300 text-sm">매출을 올리오</div>
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
  );
}
