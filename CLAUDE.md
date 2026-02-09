# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 프로젝트 개요

`claude-code-mastery` - 현재 초기 설정 단계의 프로젝트.

## 개발 환경

- IDE: IntelliJ IDEA / PyCharm
- Platform: Windows

## 언어 및 커뮤니케이션 규칙

- **기본 응답 언어**: 한국어
- **코드 주석**: 한국어로 작성
- **커밋 메시지**: 한국어로 작성
- **문서화**: 한국어로 작성
- **변수명/함수명**: 영어 (코드 표준 준수)

## 프로젝트 개요
개발자 웹 이력서(포트폴리오) 웹사이트 개발 프로젝트 입니다. 순수 HTML, CSS, JavaScript와 TailwindCSS를 사용하여 반응형
웹사이트를 구축합니다.

## 기술 스택
- **HTML5**: 시맨틱 마그업 구조
- **CSS3**: 스타일링 및 애니메이션
- **JavaScript (ES6+)**:: 인터랙티브 기능 구현
- **TailwindCSS**: ㅇ틸리티 기반 스타일링 프레임워크

## 프로젝트 구조
```
my-job-history/
├── legacy/                  # 기존 HTML 버전
│   ├── index.html
│   ├── css/style.css
│   └── js/main.js
├── src/                     # React 소스 코드
│   ├── components/
│   │   ├── common/         # 공통 컴포넌트
│   │   ├── layout/         # 레이아웃
│   │   └── sections/       # 페이지 섹션들
│   ├── hooks/              # 커스텀 훅
│   ├── data/               # 데이터
│   ├── types/              # TypeScript 타입
│   ├── App.tsx             # 메인 앱
│   ├── main.tsx            # 진입점
│   └── index.css           # 글로벌 스타일
├── dist/                    # 빌드 결과물
├── package.json
├── tsconfig.json
├── vite.config.ts
├── tailwind.config.ts
├── CLAUDE.md
└── ROADMAP.md
```

## 코딩 규칙

### HTML
- 시맨틱 태그 사용 (header, nav, main, section, article, footer)
- BEM 방법론을 따른 클래스 네이밍
- 접근성을 위한 ARIA 레이블 포함

### CSS/TailwindCSS
- 모바일 우선 반응형 디자인
- TailwindCSS 유틸리티 클래스 우선 사용
- 커스텀 스타일은 style.css에 작성

### 코딩 컨벤션
- 변수명과 함수명은 영어로 작성하되, camelCase 사용
- 클래스명은 PascalCase 사용
- 상수는 UPPER_SNAKE_CASE 사용
- 모든 코드 주석은 한국어로 작성

# 코딩 스타일
- 들여쓰기: 2칸 스페이스
- 따옴표: 작은따옴표 사용

# React 규칙
- 컴포넌트명: PascalCase (예: UserProfile)
- Props명: camelCase (예: userName)


# 비동기 처리
- API 호출: async/await 패턴 사용
- 에러 처리: try-catch 블록 필수

# 테스팅
- 테스트 도구: Jest 사용
- 테스트 파일: .test .js 확장자

## Git 워크플로우
```bash
# 기능 개발
git checkout -b feature/기능명
git add .
git commit -m "기능: 설명"

# 버그 수정
git checkout -b fix/버그명
git add .
git commit -m "수정: 설명"

# 문서 업데이트
git add .
git commit -m "문서: 설명"
```

## 배포
- Vercel

## 테스트
- 크로스 브라우저 테스트 (Chrome, Firefox, Safari, Edge)
- 다양한 디바이스에서 반응형 테스트
- Lighthouse를 통한 성능 측정
- Wave 도구를 통한 접근성 검사

# 추가 지침
- git 워크플로우 @docs/git-instructions.md