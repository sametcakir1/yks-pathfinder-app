import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Exam } from "@/types";
import { Clock, Users, Trophy, Play, CheckCircle2, Calendar } from "lucide-react";

interface ExamCardProps {
  exam: Exam;
  onClick?: () => void;
  className?: string;
}

const formatDate = (date: Date): string => {
  return new Intl.DateTimeFormat("tr-TR", {
    day: "numeric",
    month: "long",
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);
};

const ExamCard: React.FC<ExamCardProps> = ({ exam, onClick, className }) => {
  const isLive = exam.mode === "live";
  const isUpcoming = exam.startTime && new Date(exam.startTime) > new Date();

  return (
    <Card
      variant="interactive"
      className={cn("overflow-hidden", className)}
      onClick={onClick}
    >
      <div
        className={cn(
          "h-2",
          exam.type === "TYT" ? "gradient-primary" : "gradient-secondary"
        )}
      />
      <div className="p-4">
        <div className="flex items-start justify-between gap-2">
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <span
                className={cn(
                  "px-2 py-0.5 rounded-full text-[10px] font-bold",
                  exam.type === "TYT"
                    ? "bg-primary/10 text-primary"
                    : "bg-secondary/10 text-secondary"
                )}
              >
                {exam.type}
              </span>
              {isLive && (
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-destructive/10 text-destructive flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-destructive animate-pulse" />
                  CANLI
                </span>
              )}
              {exam.isCompleted && (
                <CheckCircle2 className="w-4 h-4 text-success" />
              )}
            </div>
            <h3 className="font-semibold text-foreground mt-2">{exam.title}</h3>
          </div>
        </div>

        <div className="flex items-center gap-4 mt-3 text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            {exam.duration} dk
          </span>
          <span className="flex items-center gap-1">
            📝 {exam.totalQuestions} soru
          </span>
          {exam.totalParticipants && (
            <span className="flex items-center gap-1">
              <Users className="w-3.5 h-3.5" />
              {exam.totalParticipants.toLocaleString()}
            </span>
          )}
        </div>

        {exam.isCompleted && exam.score !== undefined && (
          <div className="flex items-center gap-4 mt-4 pt-4 border-t border-border/50">
            <div className="flex-1">
              <p className="text-2xl font-bold text-foreground">{exam.score}</p>
              <p className="text-[10px] text-muted-foreground">Net</p>
            </div>
            {exam.rank && (
              <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-warning/10">
                <Trophy className="w-4 h-4 text-warning" />
                <div>
                  <p className="text-sm font-bold text-foreground">
                    #{exam.rank.toLocaleString()}
                  </p>
                  <p className="text-[10px] text-muted-foreground">Sıralama</p>
                </div>
              </div>
            )}
          </div>
        )}

        {isUpcoming && exam.startTime && (
          <div className="flex items-center gap-2 mt-4 p-3 rounded-lg bg-muted">
            <Calendar className="w-4 h-4 text-primary" />
            <div>
              <p className="text-xs font-medium text-foreground">Başlangıç</p>
              <p className="text-[10px] text-muted-foreground">
                {formatDate(exam.startTime)}
              </p>
            </div>
          </div>
        )}

        {!exam.isCompleted && !isUpcoming && (
          <Button className="w-full mt-4" variant="default">
            <Play className="w-4 h-4" />
            Başla
          </Button>
        )}

        {exam.isCompleted && (
          <Button className="w-full mt-4" variant="outline">
            Sonuçları Gör
          </Button>
        )}
      </div>
    </Card>
  );
};

export default ExamCard;
