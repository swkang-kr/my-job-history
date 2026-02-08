import type {
  NavItem,
  SkillCategory,
  ProjectItem,
  EducationItem,
  CertificationItem,
  CompetencyTag,
  StatisticItem,
} from '@/types';

/** 네비게이션 메뉴 */
export const NAV_ITEMS: NavItem[] = [
  { label: '소개', href: '#about' },
  { label: '기술', href: '#skills' },
  { label: '경력', href: '#experience' },
  { label: '프로젝트', href: '#projects' },
  { label: '학력', href: '#education' },
  { label: '연락처', href: '#contact' },
];

/** 프로필 정보 */
export const PROFILE = {
  name: 'Quant Logic',
  nameInitial: 'QL',
  title: 'SI 풀스택 개발자',
  greeting: '안녕하세요,',
  description: '안정감 있는 백엔드와 유연한 프론트엔드의 조화.\nJava/Spring 기반 백엔드부터 React/Vue/TypeScript 프론트엔드까지,\n제조·통신·건설 분야의 성공적인 시스템 구축을 이끄는 베테랑 개발자입니다.',
  email: 'snix.kr@gmail.com',
  githubUrl: 'https://github.com/swkang-kr/',
  websiteUrl: 'https://my-job-history.vercel.app/',
} as const;

/** 자기소개 텍스트 */
export const ABOUT_TEXT =
  '2008년부터 현재까지 약 18년 동안 SI 개발 현장에서 Java(Spring Framework, Spring Boot)와 Oracle/Tibero 기반의 백엔드 개발, 그리고 jQuery부터 React.js/Vue.js/TypeScript로 이어지는 프론트엔드 개발을 모두 수행해 온 풀스택 개발자입니다. 현대차그룹 및 삼성 계열사 장기 프로젝트를 성공적으로 수행했으며, 최근에는 AI Agent, RAG 등 신기술 영역까지 확장하고 있습니다. 단순히 코드를 작성하는 것을 넘어, 시스템의 전체적인 흐름을 읽고 최적의 솔루션을 제시할 수 있는 개발자입니다.';

/** 핵심 역량 */
export const COMPETENCY_TAGS: CompetencyTag[] = [
  { label: 'SI 풀스택', colorClass: 'glass-card px-4 py-2 text-primary-light' },
  { label: 'PLM/ERP', colorClass: 'glass-card px-4 py-2 text-emerald-400' },
  { label: '제조·통신·건설', colorClass: 'glass-card px-4 py-2 text-violet-400' },
  { label: 'AI/RAG', colorClass: 'glass-card px-4 py-2 text-amber-400' },
  { label: 'React/Vue/TS', colorClass: 'glass-card px-4 py-2 text-sky-400' },
];

/** 히어로 기술 스택 배지 */
export const HERO_TECH_STACK = ['Java', 'Spring', 'React', 'Vue.js', 'TypeScript', 'Oracle'];

/** 통계 데이터 */
export const STATISTICS: StatisticItem[] = [
  { value: '30+', label: '수행 프로젝트' },
  { value: '18년', label: '개발 경력' },
  { value: '10+', label: '대기업 고객사' },
];

/** 스킬 카테고리 */
export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Frontend',
    colorClass: 'text-primary',
    barColorClass: 'bg-primary',
    items: [
      { name: 'Vue.js', level: 90 },
      { name: 'React', level: 85 },
      { name: 'TypeScript', level: 85 },
      { name: 'Next.js', level: 70 },
      { name: 'jQuery', level: 95 },
    ],
  },
  {
    title: 'Backend',
    colorClass: 'text-emerald-400',
    barColorClass: 'bg-emerald-400',
    items: [
      { name: 'Java', level: 95 },
      { name: 'Spring/Boot', level: 90 },
      { name: 'Node.js', level: 75 },
      { name: 'Python', level: 65 },
    ],
  },
  {
    title: 'Database',
    colorClass: 'text-amber-400',
    barColorClass: 'bg-amber-400',
    items: [
      { name: 'Oracle', level: 90 },
      { name: 'MySQL/MariaDB', level: 80 },
      { name: 'Tibero', level: 75 },
      { name: 'SAP HANA', level: 65 },
    ],
  },
  {
    title: 'Tools & AI',
    colorClass: 'text-violet-400',
    barColorClass: 'bg-violet-400',
    items: [
      { name: 'IntelliJ', level: 90 },
      { name: 'Git', level: 85 },
      { name: 'RAG/AI Agent', level: 70 },
      { name: 'Docker', level: 60 },
    ],
  },
];

/** 주요 고객사 목록 */
export const MAJOR_CLIENTS = [
  'SK C&C', '삼성전자', '삼성SDS', '삼성물산', '현대모비스',
  '현대자동차', '현대오토에버', 'SK플래닛', 'LG전자', '포스코ICT',
];

// @ts-ignore
/** 프로젝트 전체 목록 (최신순) */
export const PROJECTS: ProjectItem[] = [
  {
    title: 'SK 쉴더스 ERP 고도화',
    period: '2026.01 ~ 2026.02',
    client: 'SK C&C',
    company: '인포매니아IT',
    techStack: ['SAP Hana DB', 'IntelliJ', 'Spring', 'Vue', 'React', '모두싸인API'],
  },
  {
    title: 'SKT Movios2.0 개발',
    period: '2024.12 ~ 2025.12',
    client: 'SK C&C',
    company: '대원씨앤씨',
    techStack: ['Vue', 'TypeScript', 'IntelliJ', '리얼그리드', 'Oracle', 'EDB'],
  },
  {
    title: '삼성전자 MES4.0 고도화 개발',
    period: '2024.05 ~ 2024.11',
    client: '삼성전자',
    company: '블루비즈랩',
    techStack: ['Java', 'Oracle', 'AnyFrame', 'Nexacro', 'SpringBoot', 'TypeScript'],
  },
  {
    title: '물산건설 시공검측',
    period: '2023.12 ~ 2024.04',
    client: '삼성물산',
    company: '블루비즈랩',
    techStack: ['Java', 'Tibero', 'Vue.js', 'Node.js', 'TypeScript', 'RealGrid'],
  },
  {
    title: '현대모비스 PLM 입찰BOM 및 회로부품 마스터 관리체계 구축',
    period: '2023.05 ~ 2023.10',
    client: '현대모비스',
    company: '펩시스',
    techStack: ['Java', 'Oracle', 'ABLE Framework', 'JSP', 'jQuery', 'myBatis'],
  },
  {
    title: '삼성전자DX PLM 크로스 브라우징',
    period: '2022.05 ~ 2023.03',
    client: '삼성SDS',
    company: '브랜비',
    techStack: ['Java', 'Oracle', 'Vue.js', 'TypeScript', 'realGrid', 'git'],
  },
  {
    title: '현대모비스 EO 수정비 관리 개선',
    period: '2021.12 ~ 2022.04',
    client: '현대모비스',
    company: '브랜비',
    techStack: ['Java', 'Oracle', 'ABLE Framework', 'JSP', 'jQuery', 'myBatis'],
  },
  {
    title: '현대모비스 협력사 협업환경 및 개발정보 사용성 개선',
    period: '2021.06 ~ 2021.11',
    client: '현대모비스',
    company: '브랜비',
    techStack: ['Java', 'Oracle', 'ABLE Framework', 'JSP', 'jQuery', 'myBatis'],
  },
  {
    title: '현대모비스 PLM R&D 소프트웨어 투자지원',
    period: '2020.12 ~ 2021.05',
    client: '현대모비스',
    company: '브랜비',
    techStack: ['Java', 'Oracle', 'ABLE Framework', 'JSP', 'jQuery', 'myBatis'],
  },
  {
    title: '광주공장 체결보증서버 스마트태그시스템 개조개발',
    period: '2020.10 ~ 2020.11',
    client: '현대자동차',
    company: '테이아',
    techStack: ['Java', 'Oracle', 'Tibero', 'Egov Framework', 'Vue.js', 'git'],
  },
  {
    title: '현대모비스 PLM 아이디어포털',
    period: '2020.03 ~ 2020.10',
    client: '현대모비스',
    company: '엔솔루션스',
    techStack: ['Java', 'Oracle', 'ABLE Framework', 'Vue.js', 'jQuery', 'myBatis'],
  },
  {
    title: '현대모비스 HR포털 고도화',
    period: '2019.11 ~ 2020.03',
    client: '현대모비스',
    company: '에스앤인포텍',
    techStack: ['SAP GUI', 'Kendo UI', 'jQuery', 'ABAP JSON Interface'],
  },
  {
    title: '현대모비스 PLM 2단계 통합부분 SI 시스템 구축',
    period: '2019.04 ~ 2019.11',
    client: '현대모비스',
    company: '테이아',
    techStack: ['Java', 'Oracle', 'ABLE Framework', 'JSP', 'jQuery', 'myBatis'],
  },
  {
    title: 'SK Telecom Tworld Direct 구조개선',
    period: '2019.01 ~ 2019.03',
    client: 'SK C&C',
    company: '이텍커스',
    techStack: ['Java', 'Spring', 'jQuery', 'GitHub', 'Oracle'],
  },
  {
    title: 'SK Telecom TKey 고도화',
    period: '2018.09 ~ 2018.12',
    client: 'SK C&C',
    company: '다솜S&C',
    techStack: ['PHP', 'MySQL', 'jQuery', 'JSON'],
  },
  {
    title: '현대모비스 PLM 1단계 통합부분 SI 시스템 구축',
    period: '2017.11 ~ 2018.08',
    client: '현대모비스',
    company: '테이아',
    techStack: ['Java', 'Oracle', 'ABLE Framework', 'JSP', 'jQuery', 'myBatis'],
  },
  {
    title: '현대모비스 생산기술포털 고도화',
    period: '2017.04 ~ 2017.10',
    client: '현대모비스',
    company: '테이아',
    techStack: ['Java', 'Oracle', 'Able Framework', 'JSP', 'jQuery', 'myBatis'],
  },
  {
    title: 'KIA My Sales',
    period: '2016.11 ~ 2017.03',
    client: '현대오토에버',
    company: 'DKI테크놀러지',
    techStack: ['Java', 'MSSQL', 'Able Framework', 'D3', 'jQuery', 'rMateGrid'],
  },
  {
    title: 'Tworld Direct',
    period: '2016.03 ~ 2016.10',
    client: 'SK C&C',
    company: '코니퍼',
    techStack: ['Java', 'Oracle', 'X2 Framework', 'JSP', 'jQuery', 'myBatis'],
  },
  {
    title: '행복나래 차세대',
    period: '2015.12 ~ 2016.02',
    client: 'SK C&C',
    company: 'M2B',
    techStack: ['Java', 'Oracle', 'M2B Solution', 'JSP', 'jQuery', 'myBatis'],
  },
  {
    title: '재무회계 개발',
    period: '2015.10 ~ 2015.12',
    client: '포스코건설',
    company: '뉴윈텍',
    techStack: ['Java', 'Oracle', 'Spring Framework', 'JSP', 'jQuery', 'jqGrid'],
  },
  {
    title: '포스코 사내 SNS Easy Thanks Planet',
    period: '2015.05 ~ 2015.09',
    client: '포스코ICT',
    company: '뉴윈텍',
    techStack: ['Java', 'Oracle', 'JSP', 'jQuery', 'myBatis'],
  },
  {
    title: 'SKT NLP',
    period: '2015.03 ~ 2015.04',
    client: '와이즈넛',
    company: '리드어스',
    techStack: ['Java', 'Python', 'NODE-Red', 'Django', 'Bootstrap'],
  },
  {
    title: 'WISE BIC Analyzer',
    period: '2014.09 ~ 2015.02',
    client: '와이즈넛',
    company: '리드어스',
    techStack: ['Java', 'MariaDB', 'JSP', 'jQuery', 'Bootstrap'],
  },
  {
    title: '이메일 빅데이터 분석 e-Discovery SW개발',
    period: '2014.06 ~ 2014.08',
    client: '와이즈넛',
    company: '리드어스',
    techStack: ['Java', 'HSQLDB', 'Spring Framework', 'jQuery', 'Bootstrap'],
  },
  {
    title: '티스토어 리팩토링',
    period: '2014.01 ~ 2014.05',
    client: 'SK플래닛',
    company: '인크로스',
    techStack: ['Java', 'Oracle', 'Spring Framework', 'JSP', 'jQuery'],
  },
  {
    title: '유치원정보공시시스템',
    period: '2013.10 ~ 2013.12',
    client: 'KERIS',
    company: '야긴스텍',
    techStack: ['Java', 'Oracle', '전자정부 Framework', 'myBatis', 'X-Platform'],
  },
  {
    title: '장비실사관리',
    period: '2013.08 ~ 2013.09',
    client: '삼성SDS',
    company: '엠티콤',
    techStack: ['Android', 'Java', 'Oracle', 'Spring Framework', 'myBatis'],
  },
  {
    title: 'APMall Mobile',
    period: '2013.04 ~ 2013.06',
    client: '아모레퍼시픽',
    company: '카이제라',
    techStack: ['Android', 'Java', 'SQLite'],
  },
  {
    title: '길라잡이 앱',
    period: '2013.03 ~ 2013.04',
    client: '동부화재',
    company: '카이제라',
    techStack: ['Android', 'Java', 'SQLite'],
  },
  {
    title: '문제은행',
    period: '2013.01 ~ 2013.03',
    client: '영화진흥위원회',
    company: '카이제라',
    techStack: ['Java', 'Oracle', '전자정부 Framework', 'myBatis', 'X-Platform'],
  },
  {
    title: '웹기반 컨퍼런스 시스템',
    period: '2012.11 ~ 2013.01',
    client: '웨비나스',
    company: '카이제라',
    techStack: ['Java', 'MySQL', 'Spring Framework', 'JSP', 'jQuery'],
  },
  {
    title: '자료집계시스템',
    period: '2012.08 ~ 2012.10',
    client: '하나USI',
    company: '하나USI',
    techStack: ['Java', 'Oracle', 'Spring Framework', 'JSP', 'jQuery'],
  },
  {
    title: 'FTA 컨설팅 시스템',
    period: '2012.05 ~ 2012.07',
    client: '무역협회',
    company: '커널시스템',
    techStack: ['Java', 'Oracle', 'Spring Framework', 'JSP', 'jQuery'],
  },
  {
    title: '런닝허브',
    period: '2012.01 ~ 2012.04',
    client: '삼성SDS',
    company: '커널시스템',
    techStack: ['Java', 'Oracle', 'Spring Framework', 'JSP', 'jQuery'],
  },
  {
    title: 'LG Smart World',
    period: '2011.08 ~ 2011.12',
    client: 'LG전자',
    company: '커널시스템',
    techStack: ['Java', 'Oracle', 'Spring Framework', 'JSP', 'jQuery'],
  },
  {
    title: '네이트 영화예매',
    period: '2011.03 ~ 2011.07',
    client: 'QNSOLV',
    company: '커널시스템',
    techStack: ['Java', 'MySQL', 'JSP', 'jQuery'],
  },
];

/** 학력 */
export const EDUCATIONS: EducationItem[] = [
  { school: '서울디지털대', major: '컴퓨터소프트웨어공학과 (편입)', period: '2004.03 ~ 2006.02' },
  { school: '안산대학교', major: '멀티미디어', period: '1998.03 ~ 2004.02' },
];

/** 자격증 */
export const CERTIFICATIONS: CertificationItem[] = [
  { name: '정보처리산업기사', year: '2008' },
  { name: '(국가공인)인터넷정보검색사 1급', year: '1998' },
];
