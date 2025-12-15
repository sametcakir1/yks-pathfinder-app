import React from "react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Subject } from "@/types";
import ProgressRing from "./ProgressRing";
import { ChevronRight } from "lucide-react";

interface SubjectCardProps {
  subject: Subject;
  onClick?: () => void;
  className?: string;
}

const SubjectCard: React.FC<SubjectCardProps> = ({ subject, onClick, className }) => {
  const progress = Math.round((subject.completedTopics / subject.totalTopics) * 100);

  return (
    <Card
      variant="interactive"
      className={cn("p-4", className)}
      onClick={onClick}
    >
      <div className="flex items-center gap-4">
        <div className="text-3xl">{subject.icon}</div>
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-foreground truncate">{subject.name}</h3>
          <p className="text-xs text-muted-foreground mt-0.5">
            {subject.completedTopics}/{subject.totalTopics} konu tamamlandı
          </p>
          <div className="flex items-center gap-3 mt-2">
            <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
              <div
                className="h-full gradient-primary rounded-full transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
            <span className="text-xs font-medium text-muted-foreground">{progress}%</span>
          </div>
        </div>
        <ChevronRight className="w-5 h-5 text-muted-foreground" />
      </div>
      <div className="flex items-center gap-4 mt-4 pt-4 border-t border-border/50">
        <div className="flex-1 text-center">
          <p className="text-lg font-bold text-foreground">{subject.answeredQuestions}</p>
          <p className="text-[10px] text-muted-foreground">Çözülen</p>
        </div>
        <div className="w-px h-8 bg-border" />
        <div className="flex-1 text-center">
          <p className="text-lg font-bold text-success">{subject.correctRate}%</p>
          <p className="text-[10px] text-muted-foreground">Başarı</p>
        </div>
        <div className="w-px h-8 bg-border" />
        <div className="flex-1 text-center">
          <p className="text-lg font-bold text-foreground">{subject.totalQuestions.toLocaleString()}</p>
          <p className="text-[10px] text-muted-foreground">Toplam</p>
        </div>
      </div>
    </Card>
  );
};

export default SubjectCard;
