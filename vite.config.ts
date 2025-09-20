import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { existsSync } from "fs";
import { join } from "path";

export default defineConfig({
  plugins: [tailwindcss(), reactRouter(), tsconfigPaths()],
  // GitHub Pages 경로 설정
  base: (() => {
    if (process.env.NODE_ENV !== "production") {
      return "/"; // 개발 환경에서는 항상 루트
    }
    
    if (process.env.GITHUB_PAGES) {
      // CNAME 파일이 있으면 커스텀 도메인이므로 루트 경로 사용
      const cnameExists = existsSync(join(process.cwd(), "public", "CNAME"));
      return cnameExists ? "/" : "/pao/";
    }
    
    return "/"; // 다른 배포 환경 (Vercel, Netlify)
  })(),
});
