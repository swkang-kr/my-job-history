import { PROJECTS } from '@/data/resumeData';
import SectionWrapper from '@/components/common/SectionWrapper';

const ProjectsSection = () => (
  <section id="projects" className="py-28 section-dark-1">
    <SectionWrapper className="max-w-6xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-2">
        프로젝트<span className="text-primary">.</span>
      </h2>
      <p className="text-center text-dark-muted mb-12">총 {PROJECTS.length}개 프로젝트 수행</p>
      <div className="max-w-4xl mx-auto space-y-4">
        {PROJECTS.map((project, index) => (
          <div
            key={`${project.title}-${project.period}`}
            className={`relative pl-8 border-l-2 ${index === 0 ? 'border-primary/50' : 'border-white/10'}`}
          >
            <div className={`absolute -left-[9px] top-6 w-4 h-4 rounded-full ${index === 0 ? 'bg-primary shadow-glow-sm' : 'bg-dark-muted/50'}`} />
            <div className="glass-card glass-card-hover p-5">
              <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                <h3 className="text-base font-bold">{project.title}</h3>
                <span className="text-xs text-dark-muted whitespace-nowrap">{project.period}</span>
              </div>
              <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-dark-muted mb-3">
                <span>고객사: <strong className="text-dark-text">{project.client}</strong></span>
                <span>근무: {project.company}</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {project.techStack.map((tech) => (
                  <span key={tech} className="px-2 py-0.5 bg-primary/10 text-primary-light border border-primary/20 text-xs rounded">
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
