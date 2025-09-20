# 파오 (P.A.O) - 퍼포먼스 마케팅 전문 회사 홈페이지

데이터 기반 마케팅으로 ROI 300% 이상의 확실한 성과를 보장하는 파오(P.A.O)의 공식 홈페이지입니다.

## 🚀 주요 기능

- **플로팅 헤더**: 스크롤에 반응하는 상단 고정 네비게이션 헤더
- **현대적인 반응형 디자인**: Tailwind CSS v4 사용
- **부드러운 애니메이션**: Framer Motion으로 구현된 인터랙티브 UI
- **스무스 스크롤 네비게이션**: 섹션별 원클릭 이동 기능
- **카카오톡 문의하기**: 항상 표시되는 플로팅 버블 버튼
- **성과 중심 콘텐츠**: 실제 성과 지표와 고객 후기 섹션
- **완전한 SEO 최적화**: JSON-LD, OpenGraph, Twitter Cards, 사이트맵, robots.txt 포함

## 🛠️ 기술 스택

- **프레임워크**: React 19 + React Router v7
- **빌드 도구**: Vite 6
- **스타일링**: Tailwind CSS v4
- **애니메이션**: Framer Motion
- **아이콘**: Lucide React
- **언어**: TypeScript 5

## 📦 설치 및 실행

### 개발 환경 실행

```bash
npm install
npm run dev
```

개발 서버가 `http://localhost:5173`에서 실행됩니다.

### 프로덕션 빌드

```bash
# 정적 사이트 빌드 (GitHub Pages용)
npm run build:static

# 일반 빌드 (SSR 지원 플랫폼용) 
npm run build
npm start
```

### **GitHub User Pages**

`pao-tracking.github.io` Repository로 설정되어 항상 루트 도메인에 배포됩니다:

- ✅ **배포 URL**: `https://pao-tracking.github.io`
- ✅ **Assets 경로**: `/assets/` (루트 경로)
- ✅ **간단한 설정**: 복잡한 서브패스 로직 불필요
```

## 🎨 디자인 특징

### 색상 팔레트
- **주요 색상**: Purple (보라), Pink (핑크) 그라데이션
- **배경**: Dark theme with glass morphism 효과
- **액센트**: Yellow (카카오톡 버튼)

### 섹션 구성
0. **Floating Header**: 브랜드 로고, 네비게이션, 연락처 버튼
1. **Hero Section**: 메인 헤드라인과 CTA 버튼
2. **Services Section**: 4가지 핵심 서비스 소개 (플레이스홀더 이미지 포함)
3. **Stats Section**: 주요 성과 지표 (ROI, 캠페인 수, 만족도)
4. **Testimonials Section**: 고객 후기 3개 (프로필 이미지 포함)
5. **Team Section**: 전문가 팀 소개 4명 (프로필 이미지 포함)
6. **Contact Section**: 연락처 정보 및 브랜드 카드

## 🚀 SEO 최적화 기능

완벽한 검색 엔진 최적화와 소셜 미디어 최적화를 위한 포괄적인 SEO 구현:

### 🔍 **JSON-LD 구조화 데이터**
- **Organization**: 회사 조직 정보 (이름, 로고, 연락처, 서비스 지역)
- **LocalBusiness**: 지역 비즈니스 정보 (평점, 운영시간, 가격대)
- **Service**: 서비스 상세 정보 (퍼포먼스 마케팅 서비스 카탈로그)
- **WebSite**: 웹사이트 정보 (검색 액션, 언어 설정)
- **FAQPage**: 자주 묻는 질문 구조화 데이터

### 📱 **소셜 미디어 최적화**
- **OpenGraph**: Facebook, LinkedIn 등 소셜 미디어 공유 최적화
- **Twitter Cards**: 트위터 카드 최적화 (Large Image Card)
- **이미지 메타데이터**: 1200x630 OG 이미지 사양 준수

### 📄 **핵심 SEO 파일들**
- **sitemap.xml**: 검색 엔진 크롤링 가이드
- **robots.txt**: 크롤러 접근 규칙 및 사이트맵 위치
- **manifest.json**: PWA 지원 및 앱 설치 최적화
- **browserconfig.xml**: Windows 타일 설정

### 🎯 **검색 엔진별 최적화**
- Google, Bing, Naver, Daum 검색 엔진 호환
- 모바일 First Index 대응
- Core Web Vitals 최적화 준비

## 🔗 플로팅 헤더 기능

상단에 고정된 반응형 헤더로 브랜딩 인지도를 극대화:
- **브랜드 로고**: 파오(P.A.O) 로고와 그라데이션 아이콘
- **스크롤 반응**: 스크롤 시 배경이 투명에서 반투명 흰색으로 변경
- **스무스 네비게이션**: 서비스, 성과, 후기, 팀, 연락처 섹션으로 부드럽게 이동
- **연락처 직접 연결**: 헤더에서 바로 이메일/카카오톡 연결 가능
- **모바일 최적화**: 햄버거 메뉴로 모바일 환경 지원

## 📱 카카오톡 문의하기 기능

우측 하단에 고정된 플로팅 버블 버튼으로 구현:
- **애니메이션**: 상하 움직임과 호버 효과
- **반응형**: 모바일에서는 아이콘만, 데스크톱에서는 텍스트 포함
- **즉시 연결**: 카카오톡 오픈채팅으로 바로 연결됩니다

```typescript
const handleKakaoClick = () => {
  window.open('https://open.kakao.com/me/lets_goblin', '_blank');
};
```

## 🔧 커스터마이징

### SEO 설정 변경
실제 배포 시 다음 설정들을 수정해주세요:
- **도메인**: `https://p-a-o.com` (이미 설정 완료)
- **트위터 계정**: `@pao_marketing`을 실제 계정으로 변경
- **OG 이미지**: `/og-image.jpg` 파일을 1200x630 사이즈로 제작
- **파비콘**: 다양한 사이즈의 아이콘 파일들 교체
- **사이트맵**: `lastmod` 날짜를 실제 업데이트 날짜로 변경

### 헤더 브랜딩 수정
`FloatingHeader` 컴포넌트에서 다음을 수정할 수 있습니다:
- 로고 아이콘: 현재 "P"로 설정됨
- 브랜드명: "파오" / "P.A.O"
- 브랜드 색상: 파란-보라 그라데이션

### 네비게이션 메뉴 수정
네비게이션 항목을 수정하려면 다음 배열을 편집:
```typescript
{ name: '서비스', id: 'services' },
{ name: '성과', id: 'stats' },
{ name: '후기', id: 'testimonials' },
{ name: '팀', id: 'team' },
{ name: '연락처', id: 'contact' }
```

### 연락처 정보
현재 설정된 연락처 정보:
- 이메일: `goblinprojectm@gmail.com`
- 카카오톡 상담: `https://open.kakao.com/me/lets_goblin`

### 회사 정보 수정
- 회사명, 서비스 설명 등은 `app/routes/home.tsx`에서 수정
- SEO 메타 태그는 `meta` 함수에서 수정

### 스타일 변경
- 전역 스타일: `app/app.css`
- 컴포넌트별 Tailwind 클래스는 각 JSX 요소에서 직접 수정

## 📈 성과 측정 및 SEO 모니터링

### 웹사이트 성과 측정
- 방문자 수 및 체류 시간
- 카카오톡 문의 클릭률
- 전화/이메일 문의 전환율
- 무료 상담 버튼 클릭률

### SEO 모니터링 도구
- **Google Search Console**: 검색 성과 및 색인 상태 모니터링
- **Google Analytics**: 트래픽 분석 및 사용자 행동 추적
- **구조화 데이터 테스트**: Google Rich Results Test 도구 활용
- **PageSpeed Insights**: 페이지 로딩 속도 및 Core Web Vitals 측정
- **Social Media Debugger**: Facebook, Twitter 공유 미리보기 테스트

### 권장 검색엔진 등록
1. **Google Search Console**: 사이트맵 제출 및 색인 요청
2. **Bing Webmaster Tools**: Bing 검색 최적화
3. **네이버 서치어드바이저**: 네이버 검색 등록
4. **다음 검색등록**: 다음 검색엔진 등록

## 🚀 GitHub Actions 자동 배포

완전한 CI/CD 파이프라인이 설정되어 있습니다. 다음 3가지 워크플로우를 제공합니다:

### 📋 **배포 워크플로우 종류**

#### 1. **Vercel 배포** (`.github/workflows/deploy-vercel.yml`)
- **트리거**: `main` 브랜치 푸시 시 프로덕션 배포
- **PR**: Pull Request 시 프리뷰 배포
- **성능 테스트**: Lighthouse CI 자동 실행
- **서버리스**: React Router SSR 완전 지원

#### 2. **Netlify 배포** (`.github/workflows/deploy-netlify.yml`)
- **트리거**: `main` 브랜치 푸시 시 프로덕션 배포  
- **PR**: Pull Request 시 프리뷰 배포
- **SEO 체크**: 자동 SEO 및 접근성 검사
- **보안**: CSP 헤더 및 보안 정책 적용

#### 3. **GitHub Pages 배포** (`.github/workflows/deploy-github-pages.yml`)
- **트리거**: `main` 브랜치 푸시 시 정적 사이트 배포
- **정적 빌드**: SSR 없는 클라이언트 사이드 렌더링
- **무료 호스팅**: GitHub Pages 무료 도메인 또는 커스텀 도메인
- **성능 측정**: 배포 후 Lighthouse CI 자동 실행

#### 4. **지속적 통합** (`.github/workflows/ci.yml`)
- **코드 품질**: ESLint + TypeScript 타입 체크
- **보안 감사**: npm audit 자동 실행
- **의존성 검토**: 보안 취약점 스캔

### ⚙️ **배포 설정 방법**

#### **Option A: Vercel 배포**

1. **Vercel 계정 생성 및 프로젝트 연결**
   ```bash
   npm i -g vercel
   vercel login
   vercel link
   ```

2. **GitHub Repository Secrets 설정**
   - `VERCEL_TOKEN`: Vercel 액세스 토큰
   - `VERCEL_ORG_ID`: 조직 ID (`vercel project ls` 확인)
   - `VERCEL_PROJECT_ID`: 프로젝트 ID

3. **자동 배포 활성화**
   - `main` 브랜치에 코드 푸시 → 즉시 배포
   - PR 생성 → 프리뷰 URL 자동 생성
   - **도메인**: `p-a-o.com` 자동 연결

#### **Option B: Netlify 배포**

1. **Netlify 계정 생성 및 사이트 생성**
   ```bash
   npm i -g netlify-cli
   netlify login
   netlify init
   ```

2. **GitHub Repository Secrets 설정**
   - `NETLIFY_AUTH_TOKEN`: Netlify 액세스 토큰
   - `NETLIFY_SITE_ID`: 사이트 ID (Site settings에서 확인)

3. **자동 배포 활성화**
   - `main` 브랜치 푸시 → 프로덕션 배포
   - PR 생성 → Deploy Preview 자동 생성
   - **보안**: CSP, HTTPS 강제, 보안 헤더 적용

#### **Option C: GitHub Pages 배포 (무료)**

1. **GitHub Repository 설정**
   ```bash
   # Repository Settings → Pages → Source를 "GitHub Actions"로 설정
   ```

2. **자동 배포 활성화** (별도 설정 불필요)
   - `main` 브랜치 푸시 → 정적 사이트 자동 배포
   - **URL**: `https://pao-tracking.github.io`
   - **무료**: GitHub 계정만 있으면 사용 가능

### 📊 **자동 성능 모니터링**

#### **Lighthouse CI 스코어 목표**
```json
{
  "성능 (Performance)": "80점 이상",
  "접근성 (Accessibility)": "90점 이상", 
  "모범 사례 (Best Practices)": "90점 이상",
  "SEO": "90점 이상",
  "PWA": "70점 이상"
}
```

#### **자동 실행 기능**
- ✅ 빌드 및 타입 체크
- ✅ 보안 취약점 스캔  
- ✅ Lighthouse 성능 측정
- ✅ SEO 및 접근성 검사
- ✅ 소셜 미디어 미리보기 테스트

### 🔧 **환경 변수 설정**

배포 환경에서 필요한 환경 변수들:

```bash
# Vercel용 (Repository Secrets에 설정)
VERCEL_TOKEN=your_vercel_token
VERCEL_ORG_ID=team_xxx
VERCEL_PROJECT_ID=proj_xxx

# Netlify용 (Repository Secrets에 설정)  
NETLIFY_AUTH_TOKEN=your_netlify_token
NETLIFY_SITE_ID=site_xxx

# 선택사항 (분석 도구)
GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX
```

### 🚀 **원클릭 배포**

#### **GitHub Pages (가장 간단)**
1. **Repository Fork** → GitHub에서 Fork 버튼 클릭
2. **Pages 활성화** → Settings → Pages → Source를 "GitHub Actions"로 설정
3. **main 브랜치에 Push** → 자동 배포 시작!

#### **Vercel/Netlify (고급 기능)**
1. **Repository Fork/Clone**
2. **main 브랜치에 Push** → 빌드 성공 (배포는 secrets 설정 후)
3. **Secrets 설정** → 자동 배포 활성화!

> ⚠️ **스마트 스킵 기능**: Secrets가 설정되지 않아도 오류 없이 빌드가 성공합니다. 친절한 안내 메시지와 함께 배포 단계만 스킵됩니다.

```bash
git add .
git commit -m "Deploy to production"
git push origin main
```

배포 상태는 GitHub Actions 탭에서 실시간 확인 가능합니다.

## 📖 추가 문서

- **[DEPLOY.md](./DEPLOY.md)**: 상세한 배포 가이드
- **[TROUBLESHOOTING.md](./TROUBLESHOOTING.md)**: 문제 해결 가이드
- **[GitHub Actions](./.github/workflows/)**: CI/CD 워크플로우 설정
- **[Vercel 설정](./vercel.json)**: Vercel 배포 최적화
- **[Netlify 설정](./netlify.toml)**: Netlify 배포 최적화

## 📞 연락처

- **이메일**: goblinprojectm@gmail.com
- **카카오톡 상담**: https://open.kakao.com/me/lets_goblin
- **웹사이트**: https://pao-tracking.github.io

## 📊 SEO 체크리스트

배포 전 필수 확인사항:
- [x] User Pages로 도메인 설정 (pao-tracking.github.io 완료)
- [ ] OG 이미지 (1200x630) 업로드
- [ ] 다양한 사이즈 파비콘 제작 및 업로드
- [ ] Google Search Console에 사이트맵 제출
- [ ] robots.txt 접근성 확인
- [ ] 구조화 데이터 검증 (Rich Results Test)
- [ ] 소셜 미디어 공유 테스트
- [ ] 모바일 최적화 확인
- [ ] 페이지 로딩 속도 최적화

---

💡 **문의사항이 있으시면 카카오톡 또는 이메일로 연락주세요!**