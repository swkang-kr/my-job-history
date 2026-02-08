/** 네비게이션 메뉴 항목 */
export interface NavItem {
  label: string;
  href: string;
}

/** 스킬 항목 */
export interface SkillItem {
  name: string;
  level: number;
}

/** 스킬 카테고리 */
export interface SkillCategory {
  title: string;
  colorClass: string;
  barColorClass: string;
  items: SkillItem[];
}

/** 프로젝트 항목 (타임라인형) */
export interface ProjectItem {
  title: string;
  period: string;
  client: string;
  company: string;
  techStack: string[];
}

/** 학력 항목 */
export interface EducationItem {
  school: string;
  major: string;
  period: string;
}

/** 자격증 항목 */
export interface CertificationItem {
  name: string;
  year: string;
}

/** 핵심 역량 태그 */
export interface CompetencyTag {
  label: string;
  colorClass: string;
}

/** 통계 항목 */
export interface StatisticItem {
  value: string;
  label: string;
}
