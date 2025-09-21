import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <section id="hero" className="relative overflow-hidden px-6 py-24 sm:py-32 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 pt-32">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6">
              가장 단순한 것에서 시작해
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {" "}가장 탁월한 결과
              </span>
            </h1>
            <p className="text-xl text-gray-100 mb-8">
              PAO(Project Aglio e Olio)는 마늘과 올리브처럼 근본적인 것부터 시작하여<br/>
              바이럴 및 퍼포먼스 통합 마케팅으로 최고의 성과를 창출합니다
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToContact}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold flex items-center gap-2 cursor-pointer"
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
  );
}
