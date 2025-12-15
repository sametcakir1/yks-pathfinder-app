import React from "react";
import { Card } from "@/components/ui/card";
import { studyPlan, motivationalQuotes } from "@/data/mockData";
import ProgressRing from "@/components/common/ProgressRing";
import { CheckCircle2, Circle, Play } from "lucide-react";
import { cn } from "@/lib/utils";

const DailyProgress: React.FC = () => {
  const todayQuote =
    motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)];

  const getTaskIcon = (type: string) => {
    switch (type) {
      case "video":
        return "🎬";
      case "questions":
        return "📝";
      case "exam":
        return "📋";
      case "review":
        return "🔄";
      default:
        return "📚";
    }
  };

  return (
    <div className="px-4 mt-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-bold text-lg text-foreground">Bugünkü Hedefler</h2>
        <span className="text-sm text-muted-foreground">
          {studyPlan.tasks.filter((t) => t.isCompleted).length}/{studyPlan.tasks.length} tamamlandı
        </span>
      </div>

      <Card variant="gradient" className="p-4">
        <div className="flex items-center gap-4">
          <ProgressRing
            progress={studyPlan.completionRate}
            size={72}
            strokeWidth={6}
            variant="secondary"
          />
          <div className="flex-1">
            <p className="text-sm text-muted-foreground">{todayQuote}</p>
          </div>
        </div>

        <div className="mt-4 space-y-2">
          {studyPlan.tasks.map((task) => (
            <div
              key={task.id}
              className={cn(
                "flex items-center gap-3 p-3 rounded-xl transition-all",
                task.isCompleted
                  ? "bg-success/10"
                  : "bg-muted/50 hover:bg-muted"
              )}
            >
              <span className="text-lg">{getTaskIcon(task.type)}</span>
              <div className="flex-1 min-w-0">
                <p
                  className={cn(
                    "text-sm font-medium",
                    task.isCompleted && "line-through text-muted-foreground"
                  )}
                >
                  {task.title}
                </p>
                <p className="text-xs text-muted-foreground">
                  {task.subject} • {task.duration} dk
                </p>
              </div>
              {task.isCompleted ? (
                <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0" />
              ) : (
                <button className="w-8 h-8 rounded-full gradient-primary flex items-center justify-center shadow-md hover:scale-110 transition-transform">
                  <Play className="w-4 h-4 text-primary-foreground ml-0.5" />
                </button>
              )}
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default DailyProgress;
