import React from "react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Video } from "@/types";
import { Play, Clock, Eye } from "lucide-react";

interface VideoCardProps {
  video: Video;
  onClick?: () => void;
  className?: string;
  variant?: "default" | "horizontal";
}

const formatDuration = (seconds: number): string => {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}:${secs.toString().padStart(2, "0")}`;
};

const formatViews = (views: number): string => {
  if (views >= 1000000) return `${(views / 1000000).toFixed(1)}M`;
  if (views >= 1000) return `${(views / 1000).toFixed(1)}K`;
  return views.toString();
};

const VideoCard: React.FC<VideoCardProps> = ({
  video,
  onClick,
  className,
  variant = "default",
}) => {
  const watchProgress = (video.watchedDuration / video.duration) * 100;
  const isCompleted = watchProgress >= 90;

  if (variant === "horizontal") {
    return (
      <Card
        variant="interactive"
        className={cn("flex overflow-hidden", className)}
        onClick={onClick}
      >
        <div className="relative w-32 flex-shrink-0">
          <img
            src={video.thumbnail}
            alt={video.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
          <div className="absolute bottom-2 right-2 bg-foreground/80 text-background text-[10px] px-1.5 py-0.5 rounded font-medium">
            {formatDuration(video.duration)}
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center shadow-lg">
              <Play className="w-5 h-5 text-primary-foreground ml-0.5" />
            </div>
          </div>
          {watchProgress > 0 && (
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-muted">
              <div
                className={cn(
                  "h-full transition-all",
                  isCompleted ? "bg-success" : "gradient-secondary"
                )}
                style={{ width: `${Math.min(watchProgress, 100)}%` }}
              />
            </div>
          )}
        </div>
        <div className="flex-1 p-3 flex flex-col justify-between">
          <div>
            <h3 className="font-semibold text-sm text-foreground line-clamp-2">
              {video.title}
            </h3>
            <p className="text-xs text-muted-foreground mt-1">{video.instructor}</p>
          </div>
          <div className="flex items-center gap-3 text-[10px] text-muted-foreground">
            <span className="flex items-center gap-1">
              <Eye className="w-3 h-3" />
              {formatViews(video.views)}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {formatDuration(video.duration)}
            </span>
          </div>
        </div>
      </Card>
    );
  }

  return (
    <Card
      variant="interactive"
      className={cn("overflow-hidden", className)}
      onClick={onClick}
    >
      <div className="relative aspect-video">
        <img
          src={video.thumbnail}
          alt={video.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
        <div className="absolute bottom-3 right-3 bg-foreground/80 text-background text-xs px-2 py-0.5 rounded font-medium">
          {formatDuration(video.duration)}
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-14 h-14 rounded-full gradient-primary flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
            <Play className="w-7 h-7 text-primary-foreground ml-1" />
          </div>
        </div>
        {watchProgress > 0 && (
          <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-muted">
            <div
              className={cn(
                "h-full transition-all",
                isCompleted ? "bg-success" : "gradient-secondary"
              )}
              style={{ width: `${Math.min(watchProgress, 100)}%` }}
            />
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-foreground line-clamp-2">{video.title}</h3>
        <div className="flex items-center justify-between mt-2">
          <p className="text-sm text-muted-foreground">{video.instructor}</p>
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <Eye className="w-3.5 h-3.5" />
            {formatViews(video.views)}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default VideoCard;
