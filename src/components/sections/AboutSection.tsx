import { ABOUT_TEXT, COMPETENCY_TAGS, STATISTICS } from '@/data/resumeData';
import SectionWrapper from '@/components/common/SectionWrapper';

const AboutSection = () => (
  <section id="about" className="py-28 section-dark-2">
    <SectionWrapper className="max-w-6xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-2">
        About <span className="text-gradient">Me</span>
      </h2>
      <div className="w-12 h-1 bg-primary mx-auto rounded-full mb-12" />
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-dark-muted leading-relaxed mb-8">
          {ABOUT_TEXT}
        </p>
        {/* 핵심 역량 태그 */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {COMPETENCY_TAGS.map((tag) => (
            <span key={tag.label} className={`rounded-full text-sm font-medium ${tag.colorClass}`}>
              {tag.label}
            </span>
          ))}
        </div>
        {/* 통계 */}
        <div className="grid grid-cols-3 gap-6">
          {STATISTICS.map((stat) => (
            <div key={stat.label} className="glass-card p-6 text-center">
              <p className="text-3xl font-bold text-primary mb-1">{stat.value}</p>
              <p className="text-sm text-dark-muted">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  </section>
);

export default AboutSection;
