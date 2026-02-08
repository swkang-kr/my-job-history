interface ProgressBarProps {
  level: number;
  colorClass: string;
}

/** 스킬 숙련도 프로그레스 바 */
const ProgressBar = ({ level, colorClass }: ProgressBarProps) => (
  <div className="w-full bg-white/5 rounded-full h-2 overflow-hidden">
    <div
      className={`${colorClass} h-2 rounded-full transition-all duration-500 shadow-sm`}
      style={{ width: `${level}%` }}
    />
  </div>
);

export default ProgressBar;
