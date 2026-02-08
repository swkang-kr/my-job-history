import { PROFILE } from '@/data/resumeData';
import { EmailIcon, GitHubIcon, WebsiteIcon } from '@/components/icons/SvgIcons';
import SectionWrapper from '@/components/common/SectionWrapper';

const ContactSection = () => (
  <section id="contact" className="py-20 bg-white dark:bg-dark-card">
    <SectionWrapper className="max-w-6xl mx-auto px-4 text-center">
      <h2 className="text-3xl font-bold mb-4">연락처</h2>
      <p className="text-gray-600 dark:text-gray-400 mb-8">함께 일하고 싶으시다면 언제든 연락해 주세요!</p>
      <div className="flex flex-wrap justify-center gap-6">
        <a
          href={`mailto:${PROFILE.email}`}
          className="flex items-center gap-2 px-6 py-3 bg-gray-100 dark:bg-dark-bg rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
        >
          <EmailIcon className="w-5 h-5 text-primary" />
          {PROFILE.email}
        </a>
        <a
          href={PROFILE.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-3 bg-gray-100 dark:bg-dark-bg rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
        >
          <GitHubIcon className="w-5 h-5" />
          GitHub
        </a>
        <a
          href={PROFILE.websiteUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-3 bg-gray-100 dark:bg-dark-bg rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
        >
          <WebsiteIcon className="w-5 h-5 text-primary" />
          www.snix.kr
        </a>
      </div>
    </SectionWrapper>
  </section>
);

export default ContactSection;
