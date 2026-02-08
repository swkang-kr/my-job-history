import { EDUCATIONS, CERTIFICATIONS } from '@/data/resumeData';
import { GraduationIcon, CertificationIcon } from '@/components/icons/SvgIcons';
import SectionWrapper from '@/components/common/SectionWrapper';

const EducationSection = () => (
  <section id="education" className="py-20">
    <SectionWrapper className="max-w-6xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12">학력 & 자격증</h2>
      <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* 학력 */}
        <div className="bg-white dark:bg-dark-card p-6 rounded-xl shadow-sm">
          <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
            <GraduationIcon className="w-5 h-5 text-primary" />
            학력
          </h3>
          <div className="space-y-4">
            {EDUCATIONS.map((edu) => (
              <div key={edu.school}>
                <p className="font-medium">{edu.school}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{edu.major}</p>
                <p className="text-sm text-gray-400 dark:text-gray-500">{edu.period}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 자격증 */}
        <div className="bg-white dark:bg-dark-card p-6 rounded-xl shadow-sm">
          <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
            <CertificationIcon className="w-5 h-5 text-primary" />
            자격증
          </h3>
          <div className="space-y-4">
            {CERTIFICATIONS.map((cert) => (
              <div key={cert.name}>
                <p className="font-medium">{cert.name}</p>
                <p className="text-sm text-gray-400 dark:text-gray-500">{cert.year}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  </section>
);

export default EducationSection;
