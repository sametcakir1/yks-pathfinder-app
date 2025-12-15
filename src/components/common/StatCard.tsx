import React from "react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface StatCardProps {
  icon: LucideIcon;
  label: string;
  value: string | number;
  subtext?: string;
  trend?: "up" | "down" | "neutral";
  trendValue?: string;
  variant?: "default" | "primary" | "secondary" | "accent" | "success";
  className?: string;
}

const StatCard: React.FC<StatCardProps> = ({
  icon: Icon,
  label,
  value,
  subtext,
  trend,
  trendValue,
  variant = "default",
  className,
}) => {
  const iconBgClasses = {
    default: "bg-muted",
    primary: "gradient-primary",
    secondary: "gradient-secondary",
    accent: "gradient-accent",
    success: "gradient-success",
  };

  const iconColorClasses = {
    default: "text-muted-foreground",
    primary: "text-primary-foreground",
    secondary: "text-secondary-foreground",
    accent: "text-accent-foreground",
    success: "text-success-foreground",
  };

  return (
    <Card variant="gradient" className={cn("p-4", className)}>
      <div className="flex items-start gap-3">
        <div
          className={cn(
            "p-2.5 rounded-xl",
            iconBgClasses[variant]
          )}
        >
          <Icon className={cn("w-5 h-5", iconColorClasses[variant])} />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-xs text-muted-foreground font-medium truncate">
            {label}
          </p>
          <div className="flex items-baseline gap-2 mt-0.5">
            <p className="text-xl font-bold text-foreground">{value}</p>
            {trend && trendValue && (
              <span
                className={cn(
                  "text-xs font-semibold",
                  trend === "up" && "text-success",
                  trend === "down" && "text-destructive",
                  trend === "neutral" && "text-muted-foreground"
                )}
              >
                {trend === "up" && "↑"}
                {trend === "down" && "↓"}
                {trendValue}
              </span>
            )}
          </div>
          {subtext && (
            <p className="text-[10px] text-muted-foreground mt-0.5">{subtext}</p>
          )}
        </div>
      </div>
    </Card>
  );
};

export default StatCard;
