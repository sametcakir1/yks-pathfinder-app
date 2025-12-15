import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { LiveClass } from "@/types";
import { Radio, Clock, Users, Play, Bell } from "lucide-react";

interface LiveClassCardProps {
  liveClass: LiveClass;
  onClick?: () => void;
  className?: string;
}

const formatTime = (date: Date): string => {
  return new Intl.DateTimeFormat("tr-TR", {
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);
};

const getTimeUntil = (date: Date): string => {
  const diff = date.getTime() - Date.now();
  const hours = Math.floor(diff / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  
  if (hours > 0) return `${hours}s ${minutes}dk sonra`;
  return `${minutes}dk sonra`;
};

const LiveClassCard: React.FC<LiveClassCardProps> = ({
  liveClass,
  onClick,
  className,
}) => {
  const isUpcoming = new Date(liveClass.startTime) > new Date();

  return (
    <Card
      variant="interactive"
      className={cn(
        "overflow-hidden",
        liveClass.isLive && "ring-2 ring-destructive/50",
        className
      )}
      onClick={onClick}
    >
      {liveClass.isLive && (
        <div className="bg-destructive text-destructive-foreground px-4 py-2 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Radio className="w-4 h-4 animate-pulse" />
            <span className="text-sm font-bold">CANLI YAYIN</span>
          </div>
          <div className="flex items-center gap-1 text-xs">
            <Users className="w-3.5 h-3.5" />
            {liveClass.attendees.toLocaleString()} izliyor
          </div>
        </div>
      )}
      <div className="p-4">
        <div className="flex items-start gap-3">
          <div
            className={cn(
              "w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0",
              liveClass.isLive ? "gradient-secondary animate-pulse-glow" : "gradient-primary"
            )}
          >
            <Radio className="w-6 h-6 text-primary-foreground" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-foreground line-clamp-2">
              {liveClass.title}
            </h3>
            <p className="text-sm text-muted-foreground mt-0.5">
              {liveClass.instructor}
            </p>
            <div className="flex items-center gap-3 mt-2 text-xs text-muted-foreground">
              <span className="flex items-center gap-1">
                📚 {liveClass.subject}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {liveClass.duration} dk
              </span>
            </div>
          </div>
        </div>

        {isUpcoming && (
          <div className="flex items-center gap-2 mt-4 p-3 rounded-lg bg-primary/5">
            <Clock className="w-4 h-4 text-primary" />
            <div className="flex-1">
              <p className="text-xs font-medium text-foreground">
                {formatTime(liveClass.startTime)} başlayacak
              </p>
              <p className="text-[10px] text-muted-foreground">
                {getTimeUntil(liveClass.startTime)}
              </p>
            </div>
            <Button size="sm" variant="outline">
              <Bell className="w-3.5 h-3.5" />
              Hatırlat
            </Button>
          </div>
        )}

        {liveClass.isLive && (
          <Button className="w-full mt-4" variant="secondary">
            <Play className="w-4 h-4" />
            Katıl
          </Button>
        )}

        {!isUpcoming && !liveClass.isLive && liveClass.recordingUrl && (
          <Button className="w-full mt-4" variant="outline">
            <Play className="w-4 h-4" />
            Kaydı İzle
          </Button>
        )}
      </div>
    </Card>
  );
};

export default LiveClassCard;
