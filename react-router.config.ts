import type { Config } from "@react-router/dev/config";

export default {
  // Config options...
  // Server-side render by default, to enable SPA mode set this to `false`
  // SEO를 위해 SSR 활성화하고 정적 사이트로 빌드
  ssr: true,
  // 정적 사이트 생성을 위한 prerender 설정
  prerender: ["/"],
} satisfies Config;
