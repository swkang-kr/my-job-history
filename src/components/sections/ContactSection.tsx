import { PROFILE } from '@/data/resumeData';
import { EmailIcon, GitHubIcon, WebsiteIcon } from '@/components/icons/SvgIcons';
import SectionWrapper from '@/components/common/SectionWrapper';

const ContactSection = () => (
  <section id="contact" className="py-28 section-dark-1">
    <SectionWrapper className="max-w-6xl mx-auto px-4 text-center">
      <h2 className="text-3xl font-bold mb-2">
        연락처<span className="text-primary">.</span>
      </h2>
      <div className="w-12 h-1 bg-primary mx-auto rounded-full mb-4" />
      <p className="text-dark-muted mb-8">함께 일하고 싶으시다면 언제든 연락해 주세요!</p>
      <div className="flex flex-wrap justify-center gap-6">
        <a
          href={`mailto:${PROFILE.email}`}
          className="flex items-center gap-2 px-8 py-4 glass-card glass-card-hover"
        >
          <EmailIcon className="w-5 h-5 text-primary" />
          {PROFILE.email}
        </a>
        <a
          href={PROFILE.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-8 py-4 glass-card glass-card-hover"
        >
          <GitHubIcon className="w-5 h-5" />
          GitHub
        </a>
        <a
          href={PROFILE.websiteUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-8 py-4 glass-card glass-card-hover"
        >
          <WebsiteIcon className="w-5 h-5 text-primary" />
          www.snix.kr
        </a>
      </div>
    </SectionWrapper>
  </section>
);

export default ContactSection;
