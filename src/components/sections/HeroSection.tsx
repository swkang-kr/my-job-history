import { PROFILE, HERO_TECH_STACK } from '@/data/resumeData';
import { EmailIcon, GitHubIcon, WebsiteIcon } from '@/components/icons/SvgIcons';

const HeroSection = () => (
  <section id="hero" className="min-h-screen flex items-center justify-center pt-16 bg-hero-gradient">
    <div className="max-w-6xl mx-auto px-4 py-28 flex flex-col md:flex-row items-center gap-16">
      {/* 프로필 이미지 */}
      <div className="flex-shrink-0 relative">
        <div className="w-56 h-56 rounded-full bg-gradient-to-br from-primary to-primary-light flex items-center justify-center text-white text-6xl font-bold shadow-glow">
          {PROFILE.nameInitial}
        </div>
        {/* 장식 요소 */}
        <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-primary/30 animate-pulse-glow" />
        <div className="absolute -bottom-1 -left-3 w-4 h-4 rounded-full bg-primary/20" />
      </div>

      {/* 프로필 텍스트 */}
      <div className="text-center md:text-left">
        <p className="text-primary font-semibold mb-2 text-lg">{PROFILE.greeting}</p>
        <h1 className="text-5xl md:text-7xl font-extrabold mb-4">
          {PROFILE.name}<span className="text-primary">.</span>
        </h1>
        <h2 className="text-xl md:text-2xl text-dark-muted mb-6">{PROFILE.title}</h2>
        <p className="text-dark-muted max-w-lg mb-6 leading-relaxed">
          {PROFILE.description.split('\n').map((line, i) => (
            <span key={i}>
              {line}
              {i < PROFILE.description.split('\n').length - 1 && <br />}
            </span>
          ))}
        </p>

        {/* 기술 스택 배지 */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center md:justify-start">
          {HERO_TECH_STACK.map((tech) => (
            <span key={tech} className="glass-card px-3 py-1.5 text-sm text-dark-muted">
              {tech}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
          <a href="#contact" className="px-6 py-3 bg-primary text-white rounded-lg font-medium btn-glow hover:bg-primary-dark transition-colors">
            연락하기
          </a>
          <a href="#projects" className="px-6 py-3 border border-primary/50 text-primary rounded-lg hover:bg-primary/10 transition-colors font-medium">
            프로젝트 보기
          </a>
        </div>

        {/* 소셜 링크 */}
        <div className="flex gap-4 mt-8 justify-center md:justify-start">
          <a href={`mailto:${PROFILE.email}`} className="text-dark-muted hover:text-primary transition-colors" aria-label="이메일">
            <EmailIcon />
          </a>
          <a href={PROFILE.githubUrl} target="_blank" rel="noopener noreferrer" className="text-dark-muted hover:text-primary transition-colors" aria-label="GitHub">
            <GitHubIcon />
          </a>
          <a href={PROFILE.websiteUrl} target="_blank" rel="noopener noreferrer" className="text-dark-muted hover:text-primary transition-colors" aria-label="홈페이지">
            <WebsiteIcon />
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
