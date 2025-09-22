import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export function KakaoTalkBubble() {
  const handleKakaoClick = () => {
    window.open('https://open.kakao.com/me/projectaglioeolio', '_blank');
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
