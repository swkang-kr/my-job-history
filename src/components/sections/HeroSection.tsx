import { PROFILE } from '@/data/resumeData';
import { EmailIcon, GitHubIcon, WebsiteIcon } from '@/components/icons/SvgIcons';

const HeroSection = () => (
  <section id="hero" className="min-h-screen flex items-center justify-center pt-16">
    <div className="max-w-6xl mx-auto px-4 py-20 flex flex-col md:flex-row items-center gap-12">
      {/* 프로필 이미지 */}
      <div className="flex-shrink-0">
        <div className="w-48 h-48 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-5xl font-bold shadow-lg">
          {PROFILE.nameInitial}
        </div>
      </div>

      {/* 프로필 텍스트 */}
      <div className="text-center md:text-left">
        <p className="text-primary font-semibold mb-2">{PROFILE.greeting}</p>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{PROFILE.name}</h1>
        <h2 className="text-xl md:text-2xl text-gray-500 dark:text-gray-400 mb-6">{PROFILE.title}</h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-lg mb-8 leading-relaxed">
          {PROFILE.description.split('\n').map((line, i) => (
            <span key={i}>
              {line}
              {i < PROFILE.description.split('\n').length - 1 && <br />}
            </span>
          ))}
        </p>

        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
          <a href="#contact" className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-secondary transition-colors font-medium">
            연락하기
          </a>
          <a href="#projects" className="px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-colors font-medium">
            프로젝트 보기
          </a>
        </div>

        {/* 소셜 링크 */}
        <div className="flex gap-4 mt-8 justify-center md:justify-start">
          <a href={`mailto:${PROFILE.email}`} className="text-gray-500 hover:text-primary transition-colors" aria-label="이메일">
            <EmailIcon />
          </a>
          <a href={PROFILE.githubUrl} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary transition-colors" aria-label="GitHub">
            <GitHubIcon />
          </a>
          <a href={PROFILE.websiteUrl} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary transition-colors" aria-label="홈페이지">
            <WebsiteIcon />
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
