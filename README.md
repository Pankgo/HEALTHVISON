# HealthVision

Vision AI 기반 건강 관리 모바일 웹 앱 프로토타입입니다. 음식 촬영 흐름, 영양 분석 결과, 개인화 추천, 인바디 기반 통계와 프로필 화면을 한 앱 흐름으로 구성했습니다.

## 주요 기능

- 홈 대시보드: 오늘의 칼로리 섭취량과 AI 건강 인사이트 요약
- 푸드 렌즈: 카메라 기반 음식 촬영 UI와 분석 결과 카드
- AI 추천: 인바디 데이터 컨셉을 반영한 식단 및 운동 추천
- 통계: 주간 칼로리 추세와 체성분 변화 리포트
- 내정보: 인바디 연동 상태, 최근 신체 지표, 측정 히스토리
- 회원가입: 계정 생성, 신체 정보 입력, 인바디 연동, 목표 설정 흐름

## 기술 스택

- React 19
- TypeScript
- Vite
- React Router
- Tailwind CSS v4
- Lucide React Icons

## 실행 방법

```bash
npm install
npm run dev
```

개발 서버가 실행되면 브라우저에서 안내되는 로컬 주소로 접속합니다.

## 빌드

```bash
npm run build
```

## 린트

```bash
npm run lint
```

## 프로젝트 구조

```text
src/
  App.tsx
  main.tsx
  index.css
  pages/
    components/
      footer.tsx
      header.tsx
      layout.tsx
    view/
      mainView.tsx
      myProfile.tsx
      recommend.tsx
      review.tsx
      signUp.tsx
      statistics.tsx
  styles/
    app.css
    auth.css
    pages.css
    scanner.css
```

## 화면 흐름

```text
홈
  -> AI 추천
  -> 푸드 렌즈
  -> 통계
  -> 내정보

회원가입
  -> 계정 정보
  -> 신체 정보
  -> 인바디 연동
  -> 목표 설정
  -> 홈 대시보드
```

## 참고

현재 앱은 프론트엔드 프로토타입이며, 카메라 촬영과 AI 분석 결과는 데모 흐름으로 구성되어 있습니다. 실제 AI 분석 API, 사용자 인증, 인바디 API 연동은 추후 백엔드와 연결할 수 있도록 화면 흐름 중심으로 설계했습니다.
