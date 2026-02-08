import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
}

/** 섹션 콘텐츠에 fade-in 애니메이션을 적용하는 래퍼 */
const SectionWrapper = ({ children, className = '' }: SectionWrapperProps) => {
  const ref = useScrollAnimation<HTMLDivElement>();

  return (
    <div ref={ref} className={`fade-in ${className}`}>
      {children}
    </div>
  );
};

export default SectionWrapper;
