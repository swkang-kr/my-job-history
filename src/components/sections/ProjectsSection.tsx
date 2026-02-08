import { PROJECTS } from '@/data/resumeData';
import SectionWrapper from '@/components/common/SectionWrapper';

const ProjectsSection = () => (
  <section id="projects" className="py-20 bg-white dark:bg-dark-card">
    <SectionWrapper className="max-w-6xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-4">프로젝트</h2>
      <p className="text-center text-gray-500 dark:text-gray-400 mb-12">총 {PROJECTS.length}개 프로젝트 수행</p>
      <div className="max-w-4xl mx-auto space-y-4">
        {PROJECTS.map((project, index) => (
          <div
            key={`${project.title}-${project.period}`}
            className={`relative pl-8 border-l-2 ${index === 0 ? 'border-primary' : 'border-gray-300 dark:border-gray-600'}`}
          >
            <div className={`absolute -left-[9px] top-6 w-4 h-4 rounded-full ${index === 0 ? 'bg-primary' : 'bg-gray-400'}`} />
            <div className="bg-gray-50 dark:bg-dark-bg p-5 rounded-xl hover:shadow-sm transition-shadow">
              <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                <h3 className="text-base font-bold">{project.title}</h3>
                <span className="text-xs text-gray-500 dark:text-gray-400 whitespace-nowrap">{project.period}</span>
              </div>
              <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-gray-600 dark:text-gray-400 mb-3">
                <span>고객사: <strong className="text-gray-800 dark:text-gray-200">{project.client}</strong></span>
                <span>근무: {project.company}</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {project.techStack.map((tech) => (
                  <span key={tech} className="px-2 py-0.5 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-300 text-xs rounded">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  </section>
);

export default ProjectsSection;
