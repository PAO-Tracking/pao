# 🔧 파오 (P.A.O) 트러블슈팅 가이드

GitHub Actions 배포 중 발생할 수 있는 문제들과 해결 방법을 정리한 가이드입니다.

## 📋 일반적인 문제들

### 1. **Vercel 배포 오류**

#### 문제: `Error: Input required and not supplied: vercel-token`
```
Error: Input required and not supplied: vercel-token
    at Object.getInput (/home/runner/work/_actions/amondnet/vercel-action/v25/dist/index.js:212:15)
```

#### 해결책: ✅ **자동 해결됨**
- 2024-12-20 이후 버전에서는 이 오류가 발생하지 않습니다
- Secrets가 없으면 친절한 안내 메시지와 함께 배포 단계만 스킵됩니다
- GitHub Actions 로그에서 다음과 같은 메시지를 확인할 수 있습니다:

```
⚠️ Vercel secrets not configured. Skipping Vercel deployment.
To enable Vercel deployment, set the following secrets in Repository Settings:
- VERCEL_TOKEN
- VERCEL_ORG_ID
- VERCEL_PROJECT_ID
```

#### 수동으로 Vercel 설정하려면:
1. **Vercel Token 생성**: https://vercel.com/account/tokens
2. **Repository Settings** → **Secrets and variables** → **Actions**
3. 다음 3개 Secrets 추가:
   - `VERCEL_TOKEN`: Personal Access Token
   - `VERCEL_ORG_ID`: `vercel project ls` 명령어로 확인
   - `VERCEL_PROJECT_ID`: `vercel project ls` 명령어로 확인

---

### 2. **Netlify 배포 오류**

#### 문제: Netlify secrets 미설정
- 이전에는 `NETLIFY_AUTH_TOKEN`이 없으면 오류가 발생했습니다

#### 해결책: ✅ **자동 해결됨**
- 현재는 Secrets가 없으면 배포만 스킵되고 빌드는 성공합니다
- 안내 메시지가 표시됩니다:

```
⚠️ Netlify secrets not configured. Skipping Netlify deployment.
🚀 To enable Netlify deployment:
1. Go to Repository Settings → Secrets and variables → Actions
2. Add the following secrets:
   - NETLIFY_AUTH_TOKEN: Get from https://app.netlify.com/user/applications#personal-access-tokens
   - NETLIFY_SITE_ID: Get from Site settings → General → Site information
```

---

### 3. **GitHub Pages 배포 문제**

#### 문제: Pages가 활성화되지 않음
#### 해결책:
1. **Repository Settings** → **Pages**
2. **Source**를 **"GitHub Actions"**로 설정
3. **Save** 클릭

#### 문제: 404 오류 또는 CSS 로드 실패
#### 해결책:
- `public/CNAME` 파일에 올바른 도메인이 설정되어 있는지 확인
- GitHub Pages URL: `https://your-username.github.io/pao`
- 커스텀 도메인 사용시: DNS CNAME 설정 확인

---

## 🚀 배포 상태 확인 방법

### **GitHub Actions 탭에서 확인**
1. Repository → **Actions** 탭
2. 최근 워크플로우 실행 결과 확인
3. 각 단계별 로그 확인 가능

### **배포 성공 시 로그 예시**
```bash
✅ Build completed successfully!
🚀 GitHub Pages: https://pao-tracking.github.io/pao
⚠️ Vercel deployment skipped (secrets not configured)
⚠️ Netlify deployment skipped (secrets not configured)
💡 Set up secrets to enable additional deployment options
```

## 📊 배포 우선순위

### **추천 배포 순서**
1. **GitHub Pages** (무료, 설정 불필요)
   - 바로 사용 가능
   - `https://username.github.io/pao`

2. **Vercel** (고성능, SSR 지원)
   - Secrets 설정 후 사용
   - `https://p-a-o.com`

3. **Netlify** (팀 협업, 프리뷰)
   - Secrets 설정 후 사용
   - `https://p-a-o.com`

## 🔍 성능 모니터링

### **Lighthouse CI 점수 확인**
- GitHub Pages: 75점 이상 목표
- Vercel/Netlify: 90점 이상 목표
- Actions 탭에서 Lighthouse 리포트 확인

### **성능 최적화 팁**
- 이미지 최적화 (WebP 형식 사용)
- 폰트 최적화 (Google Fonts 최신 방식)
- 캐싱 전략 (Service Worker)
- Core Web Vitals 개선

## 🆘 추가 지원

### **GitHub Issues**
문제가 지속되면 GitHub Repository의 Issues 탭에서 문의해주세요:
1. 문제 상황 설명
2. GitHub Actions 로그 첨부
3. 사용 중인 배포 방식 명시

### **문서 참고**
- [README.md](./README.md): 기본 설정 가이드
- [DEPLOY.md](./DEPLOY.md): 상세 배포 가이드  
- [GitHub Actions 워크플로우](./.github/workflows/): CI/CD 설정

---

💡 **대부분의 문제는 자동으로 해결되도록 설계되었습니다. Secrets 설정 없이도 성공적으로 빌드되며, 필요에 따라 나중에 추가 배포 옵션을 활성화할 수 있습니다!**
