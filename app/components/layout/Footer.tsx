import { Mail, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid md:grid-cols-3 gap-6">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold mb-4 text-blue-400">파오 (P.A.O)</h3>
            <p className="text-gray-300 mb-4 text-sm leading-relaxed">
              데이터 기반 퍼포먼스 마케팅으로 확실한 성과를 만들어내는 전문 마케팅 파트너입니다.
            </p>
            <div className="space-y-1 text-xs text-gray-400">
              <div><span className="font-medium text-gray-300">상호:</span> 파오(P.A.O)</div>
              <div><span className="font-medium text-gray-300">대표자명:</span> 김국진</div>
              <div><span className="font-medium text-gray-300">사업자번호:</span> 726-44-01105</div>
              <div>
                <span className="font-medium text-gray-300">사업장주소:</span> 
                경기도 수원시 권선구 서호동로14번길 52-39, 207동 503호(서둔동, 상익리베리움)
              </div>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-base font-semibold mb-3 text-white">연락처</h4>
            <div className="space-y-2">
              <a 
                href="mailto:goblinprojectm@gmail.com" 
                className="flex items-center text-sm text-gray-300 hover:text-blue-400 transition-colors duration-200"
              >
                <Mail size={14} className="mr-2" />
                goblinprojectm@gmail.com
              </a>
              <a 
                href="https://open.kakao.com/me/lets_goblin" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-sm text-gray-300 hover:text-yellow-400 transition-colors duration-200"
              >
                <MessageCircle size={14} className="mr-2" />
                카카오톡 상담
              </a>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-6 text-center">
          <p className="text-gray-400 text-xs">
            © 2024 파오(P.A.O). All rights reserved. | 
            <span className="ml-2">성과로 증명하는 퍼포먼스 마케팅</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
