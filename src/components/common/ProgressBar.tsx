interface ProgressBarProps {
  level: number;
  colorClass: string;
}

/** 스킬 숙련도 프로그레스 바 */
const ProgressBar = ({ level, colorClass }: ProgressBarProps) => (
  <div className="w-32 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
    <div
      className={`${colorClass} h-2 rounded-full`}
      style={{ width: `${level}%` }}
    />
  </div>
);

export default ProgressBar;
