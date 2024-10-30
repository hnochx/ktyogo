# 프로젝트 캠프: Next.js 3기 KT 요고 요금제 페이지 UI/UX 개선 - 팀 요거투 

## 🎙️ 프로젝트 소개 
> 기존의 KT 요고 요금제 사이트를 분석하여 효과적인 홍보 페이지와 기존 페이지의 개선

### 프로젝트 중점 사항
> - KT 요고 요금제 페이지 분석 및 개선 사항 설계
> - 페이지 로딩 속도 개선
> - 사용자가 쉽게 요금제를 비교할 수 있도록 UI 단순화
> - Tailwind CSS를 활용한 반응형 디자인 최적화
> - 컴포넌트 별 개발 및 종합 기능 테스트

### 프로젝트 진행 기간
: 2024.10.08 ~ 2024.11.01

![프로젝트 일정](public/readme/schedule.png)

## 🕸️ 배포 사이트
> [https://ktyogo.vercel.app/](https://ktyogo.vercel.app/)

## 💁 팀원소개
[**이서연**](https://github.com/seoyeon1123): 팀장, 요고 다이렉트 및 핸드폰 등록 및 요금제 변경 페이지 UI 설계 및 Tailwind CSS 스타일링, Firebase 연동 및 데이터 관리

[**김지영**](https://github.com/jiographie): 팀대표자, 헤더를 포함한 공통 레이아웃 및 요고 가입혜택 페이지 UI 설계 및 Tailwind CSS 스타일링

[**이신우**](https://github.com/SH1NW00-0H): 푸터 컴포넌트, 브랜드스토리 페이지, 유의사항 섹션, 상단 이동 버튼 담당, UI 설계 및 구현과 Tailwind CSS를 활용한 스타일링

[**황현호**](https://github.com/hnochx): 챗봇 페이지 UI 설계 & 기능 담당, Github Repository 관리, 배포 작업 관리


## 버전
> - "next": "14.2.14"
> - "react": "18"
> - "tailwindcss": "3.4.1"

## 폴더 구조
```.
├── app
│   ├── (Layout)
│   ├── (NoLayout)
│   └── globals.css
├── assets
│   └── images
├── components
├── firebase
│   └── firebaseInitial.ts
├── hook
│   └── useChatbot.ts
├── lib
│   └── utils.ts
├── services
│   ├── ktplanService.ts
│   └── planServices.ts
└── types
    ├── chatbot.d.ts
    └── types.ts
```

## 🏁 프로젝트 실행
### Installation
```
npm install
```
### Develop Mode
```
npm run dev
```
### Production
```
npm run build
```

## 📚 사용 기술 스택
<img src="https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=Next.js&
logoColor=white"/> 
<img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=black"/>
<img src="https://img.shields.io/badge/Firebase-FFCA28?style=flat-square&logo=firebase&logoColor=black"/>
<img src="https://img.shields.io/badge/Tailwind CSS-06B6D4?style=flat-square&logo=Tailwind CSS&logoColor=white"/>
<img src="https://img.shields.io/badge/**JavaScript**-F7DF1E?style=flat-square&logo=javascript&logoColor=black"/>
<img src="https://img.shields.io/badge/Git-F05032?style=flat-square&logo=git&logoColor=white"/>
<img src="https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=GitHub&logoColor=white"/>


## 🖥️ 화면 구성
|요고 다이렉트|요고 가입 혜택|요고 브랜드 스토리|
|:---:|:---:|:---:|
|![요고 다이렉트](public/readme/yogo_direct.png)|![요고 가입 혜택](public/readme/yogo_benefit.png)|![요고 브랜드 스토리](public/readme/yogo_brandstory.png)|
|핸드폰 등록 및 요금제 변경|챗봇|
|![핸드폰 등록 및 요금제 변경](public/readme/yogo_changerate.png)|![챗봇](public/readme/yogo_chatbot.png)|


## ☄️ 트러블 슈팅
### 데이터를 불러오는 과정에서 로딩 시간이 일관되지 않아 사용자에게 빈 화면이 길게 노출되는 문제

❓ 원인 분석
- 데이터가 로드되는 시간이 네트워크 상태, API 응답 속도 등에 따라 달라지기에 사용자가 오래 빈화면을 보게되는 경우가 있었다.

1️⃣ 1차 접근
- 스켈레톤 로딩 UI를 도입해 데이터가 로드되는 동안 사용자에게 시각적으로 로딩 중임을 알려주려했으나 
실제 로딩 시간에 따라 스켈레톤이 표시되는 시간이 일정하지 않은 문제를 발견했다.

2️⃣ 2차 접근 
- 최소 로딩 시간을 설정해 스켈레톤 로딩 UI가 사라지는 속도가 일정치 않아 최소 로딩 시간을 설정했다.
- 데이터가 성공적으로 로드되면 스켈레톤 로딩 UI를 제거하고 실제 데이터를 표시하게 했다.

💡 결과
- 사용자가 로딩 중에 빈 화면을 보지 않게 되어 로딩 경험이 향상되었다.
- 사용자는 데이터 로딩이 진행 중임을 스켈레톤 UI를 통해 명확하게 인식할 수 있게 되었다.
- 로딩 시간이 일정하게 유지되어 더 나은 사용자 경험을 제공할 수 있었다.


### 브랜드스토리 페이지에서 배경 이미지가 표시되지 않는 문제
❓ 원인 분석
- 처음에는 Tailwind의 bg-cover, bg-center, bg-[url('/path/to/image.png')] 등을 활용하여 배경 이미지를 설정하려 했으나
해당 환경에서 이미지가 표시되지 않는 등의 문제가 있었다.

1️⃣  1차 접근
- 일관된 배경을 제공하기 위해 Tailwind 제공 기능이 아닌 CSS style 속성을 직접 활용했다.
- style 속성을 통해 backgroundImage, backgroundSize, backgroundRepeat, backgroundPosition을 설정해서 문제를 해결했다.
- backgroundSize를 100% 100%로 설정해 모든 화면 크기에 맞춰지도록 조정하였고, backgroundPosition을 center top으로 설정하여 화면에 맞춰 깔끔하게 배경이 적용되도록 했다.

💡 해결
- Tailwind CSS의 제약을 넘어 제대로 된 배경 이미지를 표시하고, 다양한 기기에서 일관된 배경 이미지를 유지할 수 있었다.