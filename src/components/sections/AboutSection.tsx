import { ABOUT_TEXT, COMPETENCY_TAGS } from '@/data/resumeData';
import SectionWrapper from '@/components/common/SectionWrapper';

const AboutSection = () => (
  <section id="about" className="py-20">
    <SectionWrapper className="max-w-6xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
          {ABOUT_TEXT}
        </p>
        {/* 핵심 역량 태그 */}
        <div className="flex flex-wrap justify-center gap-3">
          {COMPETENCY_TAGS.map((tag) => (
            <span key={tag.label} className={`px-4 py-2 rounded-full text-sm font-medium ${tag.colorClass}`}>
              {tag.label}
            </span>
          ))}
        </div>
      </div>
    </SectionWrapper>
  </section>
);

export default AboutSection;
