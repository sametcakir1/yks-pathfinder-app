import React from "react";
import { cn } from "@/lib/utils";

interface ProgressRingProps {
  progress: number;
  size?: number;
  strokeWidth?: number;
  className?: string;
  showPercentage?: boolean;
  children?: React.ReactNode;
  variant?: "primary" | "secondary" | "success" | "warning";
}

const ProgressRing: React.FC<ProgressRingProps> = ({
  progress,
  size = 80,
  strokeWidth = 6,
  className,
  showPercentage = true,
  children,
  variant = "primary",
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (progress / 100) * circumference;

  const gradientId = `progress-gradient-${variant}-${Math.random()}`;

  const gradientColors = {
    primary: { start: "hsl(210, 60%, 25%)", end: "hsl(195, 70%, 35%)" },
    secondary: { start: "hsl(175, 65%, 45%)", end: "hsl(160, 70%, 55%)" },
    success: { start: "hsl(145, 65%, 42%)", end: "hsl(155, 60%, 50%)" },
    warning: { start: "hsl(35, 95%, 55%)", end: "hsl(25, 95%, 60%)" },
  };

  return (
    <div className={cn("relative inline-flex items-center justify-center", className)}>
      <svg width={size} height={size} className="transform -rotate-90">
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={gradientColors[variant].start} />
            <stop offset="100%" stopColor={gradientColors[variant].end} />
          </linearGradient>
        </defs>
        {/* Background circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="hsl(var(--muted))"
          strokeWidth={strokeWidth}
        />
        {/* Progress circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={`url(#${gradientId})`}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          className="transition-all duration-700 ease-out"
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        {children ? (
          children
        ) : showPercentage ? (
          <span className="text-lg font-bold text-foreground">{Math.round(progress)}%</span>
        ) : null}
      </div>
    </div>
  );
};

export default ProgressRing;
