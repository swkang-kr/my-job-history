import { SKILL_CATEGORIES } from '@/data/resumeData';
import ProgressBar from '@/components/common/ProgressBar';
import SectionWrapper from '@/components/common/SectionWrapper';

const SkillsSection = () => (
  <section id="skills" className="py-20 bg-white dark:bg-dark-card">
    <SectionWrapper className="max-w-6xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12">기술 스택</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {SKILL_CATEGORIES.map((category) => (
          <div key={category.title} className="p-6 bg-gray-50 dark:bg-dark-bg rounded-xl">
            <h3 className={`text-lg font-bold mb-4 ${category.colorClass}`}>{category.title}</h3>
            <ul className="space-y-3">
              {category.items.map((skill) => (
                <li key={skill.name} className="flex items-center justify-between">
                  <span>{skill.name}</span>
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
