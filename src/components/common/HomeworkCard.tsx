import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Homework } from "@/types";
import { Clock, CheckCircle2, AlertCircle, Play } from "lucide-react";

interface HomeworkCardProps {
  homework: Homework;
  onClick?: () => void;
  className?: string;
}

const formatTimeRemaining = (date: Date): string => {
  const diff = date.getTime() - Date.now();
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

  if (diff < 0) return "Süresi doldu";
  if (days > 0) return `${days} gün ${hours} saat`;
  return `${hours} saat`;
};

const HomeworkCard: React.FC<HomeworkCardProps> = ({
  homework,
  onClick,
  className,
}) => {
  const progress = (homework.completedQuestions / homework.totalQuestions) * 100;
  const timeRemaining = new Date(homework.dueAt).getTime() - Date.now();
  const isUrgent = timeRemaining < 24 * 60 * 60 * 1000 && timeRemaining > 0;
  const isOverdue = timeRemaining < 0;

  return (
    <Card
      variant="interactive"
      className={cn(
        "overflow-hidden",
        isUrgent && !homework.isCompleted && "ring-2 ring-warning/50",
        isOverdue && !homework.isCompleted && "ring-2 ring-destructive/50",
        className
      )}
      onClick={onClick}
    >
      <div
        className={cn(
          "h-1.5",
          homework.isCompleted
            ? "gradient-success"
            : isOverdue
            ? "bg-destructive"
            : isUrgent
            ? "gradient-accent"
            : "gradient-primary"
        )}
      />
      <div className="p-4">
        <div className="flex items-start justify-between gap-2">
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <span className="text-lg">{
                homework.subject === "Matematik" ? "📐" :
                homework.subject === "Türkçe" ? "📖" :
                homework.subject === "Fizik" ? "⚡" :
                homework.subject === "Kimya" ? "🧪" :
                homework.subject === "Biyoloji" ? "🧬" : "📚"
              }</span>
              <span className="text-xs font-medium text-muted-foreground">
                {homework.subject}
              </span>
            </div>
            <h3 className="font-semibold text-foreground mt-1">
              {homework.title}
            </h3>
          </div>
          {homework.isCompleted ? (
            <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0" />
          ) : isOverdue ? (
            <AlertCircle className="w-5 h-5 text-destructive flex-shrink-0" />
          ) : null}
        </div>

        <div className="mt-3">
          <div className="flex items-center justify-between text-xs mb-1.5">
            <span className="text-muted-foreground">
              {homework.completedQuestions}/{homework.totalQuestions} soru
            </span>
            <span className="font-medium">{Math.round(progress)}%</span>
          </div>
          <div className="h-2 bg-muted rounded-full overflow-hidden">
            <div
              className={cn(
                "h-full rounded-full transition-all duration-500",
                homework.isCompleted
                  ? "gradient-success"
                  : "gradient-primary"
              )}
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className="flex items-center justify-between mt-4">
          <div
            className={cn(
              "flex items-center gap-1.5 text-xs",
              isOverdue
                ? "text-destructive"
                : isUrgent
                ? "text-warning"
                : "text-muted-foreground"
            )}
          >
            <Clock className="w-3.5 h-3.5" />
            {formatTimeRemaining(homework.dueAt)}
          </div>
          {!homework.isCompleted && (
            <Button size="sm" variant={isUrgent || isOverdue ? "accent" : "default"}>
              <Play className="w-3.5 h-3.5" />
              Devam Et
            </Button>
          )}
        </div>
      </div>
    </Card>
  );
};

export default HomeworkCard;
