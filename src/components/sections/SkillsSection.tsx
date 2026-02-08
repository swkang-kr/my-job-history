import { SKILL_CATEGORIES } from '@/data/resumeData';
import ProgressBar from '@/components/common/ProgressBar';
import SectionWrapper from '@/components/common/SectionWrapper';

const SkillsSection = () => (
  <section id="skills" className="py-28 section-dark-1">
    <SectionWrapper className="max-w-6xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-2">
        기술 <span className="text-gradient">스택</span>
      </h2>
      <div className="w-12 h-1 bg-primary mx-auto rounded-full mb-12" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {SKILL_CATEGORIES.map((category) => (
          <div key={category.title} className="glass-card glass-card-hover p-6">
            <h3 className={`text-lg font-bold mb-4 ${category.colorClass}`}>{category.title}</h3>
            <ul className="space-y-4">
              {category.items.map((skill) => (
                <li key={skill.name}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm">{skill.name}</span>
                    <span className="text-xs text-dark-muted">{skill.level}%</span>
                  </div>
                  <ProgressBar level={skill.level} colorClass={category.barColorClass} />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </SectionWrapper>
  </section>
);

export default SkillsSection;
