import { cn } from "@/lib/utils";

export const Lights: React.FC<{ className?: React.ReactNode }> = ({ className }) => (
  <div className={cn('w-full h-full ', className)}>
    <div
      className={'w-full h-1/2 relative translate-y-[550px]'}
      style={{
        background:
          'conic-gradient(from 180deg at 50% 20%,var(--blue-500) 0deg,var(--cyan-400) 180deg,var(--yellow-400) 1turn)',
        filter: 'blur(75px)',
        opacity: '30%'
      }}
    />
  </div>
)