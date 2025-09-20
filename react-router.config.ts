import type { Config } from "@react-router/dev/config";

export default {
  // Config options...
  // Server-side render by default, to enable SPA mode set this to `false`
  // GitHub Pages 정적 배포를 위해 SPA 모드 활성화
  ssr: false,
} satisfies Config;
