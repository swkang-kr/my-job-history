import { MAJOR_CLIENTS } from '@/data/resumeData';
import SectionWrapper from '@/components/common/SectionWrapper';

const ExperienceSection = () => (
  <section id="experience" className="py-20">
    <SectionWrapper className="max-w-6xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12">경력</h2>
      <div className="max-w-3xl mx-auto">
        {/* 경력 요약 */}
        <div className="relative pl-8 border-l-2 border-primary">
          <div className="absolute -left-[9px] top-0 w-4 h-4 bg-primary rounded-full" />
          <div className="bg-white dark:bg-dark-card p-6 rounded-xl shadow-sm">
            <div className="flex flex-wrap items-center justify-between mb-2">
              <h3 className="text-lg font-bold">프리랜서</h3>
              <span className="text-sm text-gray-500 dark:text-gray-400">2008.03 ~ 재직중</span>
            </div>
            <p className="text-primary font-medium mb-1">SI 차장 · 풀스택 웹개발자</p>
            <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">총 18년 경력</p>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
              제조·통신·건설 분야의 대기업 SI 프로젝트를 중심으로 30건 이상의 프로젝트를 성공적으로 수행했습니다.
            </p>
          </div>
        </div>

        {/* 주요 고객사 */}
        <div className="mt-8">
          <h3 className="text-lg font-bold text-center mb-6">주요 고객사</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {MAJOR_CLIENTS.map((client) => (
              <span key={client} className="px-4 py-2 bg-white dark:bg-dark-card rounded-lg shadow-sm text-sm font-medium text-gray-700 dark:text-gray-300">
                {client}
              </span>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  </section>
);

export default ExperienceSection;
