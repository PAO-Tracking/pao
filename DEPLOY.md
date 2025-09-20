# 🚀 파오 (P.A.O) 배포 가이드

완전 자동화된 GitHub Actions CI/CD 파이프라인으로 `p-a-o.com` 도메인에 배포하는 상세 가이드입니다.

## 📋 사전 준비

### 1. **GitHub Repository 설정**
```bash
# 프로젝트 클론
git clone https://github.com/your-username/pao.git
cd pao

# 의존성 설치 확인
npm install
npm run build  # 빌드 테스트
```

### 2. **도메인 준비**
- `p-a-o.com` 도메인 등록 및 DNS 설정 준비
- SSL 인증서는 배포 플랫폼에서 자동 제공

## 🆓 GitHub Pages 배포 (가장 간단)

**완전 무료**이며 별도 계정 생성이 필요 없는 가장 간단한 배포 방법입니다.

### **1단계: Repository 설정**
```bash
# GitHub에서 Repository Fork 또는 Clone
git clone https://github.com/your-username/pao.git
cd pao
```

### **2단계: GitHub Pages 활성화**
1. GitHub Repository → **Settings** 탭
2. **Pages** 메뉴 선택
3. **Source**를 **"GitHub Actions"**로 설정
4. 저장 후 자동으로 워크플로우 활성화

### **3단계: 자동 배포 테스트**
```bash
# 코드 수정 후 푸시하면 자동 배포
git add .
git commit -m "Deploy to GitHub Pages"
git push origin main

# 배포 상태 확인: Actions 탭에서 실시간 모니터링
# 약 2-3분 후 https://your-username.github.io/pao 에서 접속 가능
```

### **4단계: 커스텀 도메인 연결** (선택사항)
```bash
# public/CNAME 파일에 이미 p-a-o.com 설정됨
# DNS 설정에서 다음과 같이 연결:
# Type: CNAME
# Name: @ (또는 www)  
# Value: your-username.github.io
```

### **GitHub Pages 장단점**
✅ **장점**
- 완전 무료 (대역폭, 스토리지 무제한)
- 설정 간단 (토큰, 계정 불필요)
- HTTPS 자동 지원
- 커스텀 도메인 지원

⚠️ **제한사항**
- 정적 사이트만 지원 (SSR 불가)
- 빌드 시간 제한 (10분)
- 월 100GB 대역폭, 1GB 저장소 제한

## 🔧 Vercel 배포 (서버리스 SSR 지원)

### **1단계: Vercel 계정 설정**
```bash
# Vercel CLI 설치
npm i -g vercel

# Vercel 로그인
vercel login

# 프로젝트 연결
vercel link
```

### **2단계: GitHub Secrets 설정**
GitHub Repository → Settings → Secrets and variables → Actions에서 다음 설정:

```
VERCEL_TOKEN: [Vercel 계정 설정에서 생성한 토큰]
VERCEL_ORG_ID: [vercel project ls 명령어로 확인]  
VERCEL_PROJECT_ID: [vercel project ls 명령어로 확인]
```

### **3단계: 도메인 연결**
```bash
# Vercel 대시보드에서 도메인 설정
vercel domains add p-a-o.com
```

### **4단계: 자동 배포 테스트**
```bash
git add .
git commit -m "Initial deployment"
git push origin main
```

## 🌐 Netlify 배포

### **1단계: Netlify 설정**
```bash
# Netlify CLI 설치
npm i -g netlify-cli

# Netlify 로그인
netlify login

# 새 사이트 생성
netlify init
```

### **2단계: GitHub Secrets 설정**
```
NETLIFY_AUTH_TOKEN: [Netlify Personal Access Token]
NETLIFY_SITE_ID: [Site settings에서 확인 가능]
```

### **3단계: 도메인 및 SSL 설정**
Netlify Dashboard → Domain settings에서 `p-a-o.com` 설정

## 📊 성능 모니터링

### **Lighthouse CI 리포트**
매 배포마다 자동 실행되는 성능 지표:

| 카테고리 | 목표 점수 | 체크 항목 |
|----------|-----------|-----------|
| Performance | 80+ | Core Web Vitals, 로딩 속도 |
| Accessibility | 90+ | 접근성, 대체 텍스트, 키보드 네비게이션 |
| Best Practices | 90+ | HTTPS, 보안 헤더, 최신 API 사용 |
| SEO | 90+ | 메타 태그, 구조화 데이터, sitemap |
| PWA | 70+ | 매니페스트, 서비스 워커 |

### **실시간 모니터링 도구**
- **성능**: Lighthouse CI + Core Web Vitals
- **에러 추적**: Sentry (선택사항)
- **분석**: Google Analytics (선택사항)
- **가동시간**: Uptime Robot (선택사항)

## 🔒 보안 설정

### **자동 적용되는 보안 헤더**
```
X-Frame-Options: DENY
X-Content-Type-Options: nosniff  
X-XSS-Protection: 1; mode=block
Content-Security-Policy: 엄격한 CSP 정책
Referrer-Policy: strict-origin-when-cross-origin
```

### **의존성 보안 스캔**
매 배포시 자동 실행:
- `npm audit` 보안 취약점 검사
- GitHub Dependency Review
- Snyk 보안 스캔 (선택사항)

## 🚀 배포 플로우

### **GitHub Pages 배포** (가장 간단)
```bash
# 1. 로컬 테스트
npm run build:static  # 정적 사이트 빌드 테스트
npm run preview:static  # 로컬 프리뷰 (localhost:3000)

# 2. GitHub에 푸시
git add .
git commit -m "feat: 새로운 기능 추가"  
git push origin main

# 3. 자동 배포 확인
# → Actions 탭에서 "Deploy to GitHub Pages" 워크플로우 확인
# → 2-3분 후 https://your-username.github.io/pao 에서 확인
# → 커스텀 도메인 사용시 https://p-a-o.com 에서 확인
```

### **Vercel/Netlify 배포** (SSR 지원)
```bash
# 1. 코드 작성 및 테스트
npm run typecheck
npm run build

# 2. main 브랜치에 푸시
git add .
git commit -m "feat: 새로운 기능 추가"
git push origin main

# 3. 자동 배포 시작 (3-5분 소요)
# GitHub Actions에서 진행상황 확인 가능
```

### **프리뷰 배포** 
```bash
# PR 생성시 자동으로 프리뷰 URL 생성
git checkout -b feature/new-feature
# ... 코드 작성 ...
git push origin feature/new-feature
# PR 생성 → 프리뷰 배포 자동 시작
```

## 📈 SEO 최적화 자동 검증

배포시 자동으로 검증되는 SEO 요소들:

### **기술적 SEO**
- ✅ sitemap.xml 접근성 (`p-a-o.com/sitemap.xml`)
- ✅ robots.txt 유효성 (`p-a-o.com/robots.txt`)
- ✅ 구조화 데이터 검증 (JSON-LD)
- ✅ 메타 태그 완성도
- ✅ OpenGraph 및 Twitter Cards

### **성능 SEO**
- ✅ Core Web Vitals (LCP, FID, CLS)
- ✅ 페이지 로딩 속도 (3초 이내)
- ✅ 모바일 반응형 테스트
- ✅ 이미지 최적화 확인

## 🔄 롤백 및 장애 대응

### **빠른 롤백**
```bash
# Vercel 롤백
vercel rollback

# Netlify 롤백 (대시보드에서 이전 배포 선택)
```

### **장애 모니터링**
- GitHub Actions 실패시 자동 알림
- Lighthouse 점수 하락시 경고
- 보안 취약점 발견시 즉시 알림

## 🎯 배포 완료 체크리스트

### **공통 체크리스트**
- [ ] 카카오톡 문의하기 버튼 작동 확인
- [ ] 모든 섹션 스크롤 및 네비게이션 테스트
- [ ] 모바일 반응형 확인
- [ ] sitemap.xml 및 robots.txt 접근 확인
- [ ] 소셜 미디어 공유 테스트

### **GitHub Pages 배포**
- [ ] `https://your-username.github.io/pao` 접속 확인
- [ ] 또는 `https://p-a-o.com` 접속 확인 (커스텀 도메인)
- [ ] Lighthouse 점수 75점 이상 확인 (정적 사이트)
- [ ] 404 페이지 정상 작동 확인

### **Vercel/Netlify 배포**  
- [ ] `https://p-a-o.com` 접속 확인
- [ ] Lighthouse 점수 90점 이상 확인 (SSR)
- [ ] Google Search Console에 사이트맵 제출

## 📊 배포 플랫폼 비교

| 기능 | GitHub Pages | Vercel | Netlify |
|------|-------------|--------|---------|
| **비용** | 완전 무료 | 무료 (제한) | 무료 (제한) |
| **SSR** | ❌ | ✅ | ✅ |
| **커스텀 도메인** | ✅ | ✅ | ✅ |
| **자동 SSL** | ✅ | ✅ | ✅ |
| **빌드 시간** | 10분 | 45분 | 15분 |
| **대역폭** | 100GB/월 | 100GB/월 | 100GB/월 |
| **설정 복잡도** | 매우 쉬움 | 쉬움 | 쉬움 |
| **성능 최적화** | 기본 | 고급 | 고급 |

### **권장 선택 기준**
- **개인/소규모**: GitHub Pages (무료, 간단)
- **비즈니스**: Vercel (성능, SSR 지원)  
- **팀 협업**: Netlify (협업 도구, 프리뷰)

---

💡 **배포 관련 문의사항은 GitHub Issues를 통해 문의해주세요!**
