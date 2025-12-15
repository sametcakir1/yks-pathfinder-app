import React, { useState } from "react";
import MobileLayout from "@/components/layout/MobileLayout";
import { videos, subjects, topics } from "@/data/mockData";
import VideoCard from "@/components/common/VideoCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Filter, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const Videos: React.FC = () => {
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredVideos = videos.filter((video) => {
    if (selectedSubject && video.subjectId !== selectedSubject) return false;
    if (searchQuery && !video.title.toLowerCase().includes(searchQuery.toLowerCase())) return false;
    return true;
  });

  return (
    <MobileLayout>
      <div className="p-4 safe-area-top">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-foreground">Video Dersler</h1>
          <p className="text-sm text-muted-foreground mt-1">
            3,000+ konu anlatım videosu
          </p>
        </div>

        {/* Search */}
        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input
            placeholder="Video ara..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>

        {/* Subject Filter */}
        <div className="flex gap-2 overflow-x-auto pb-2 mb-4 -mx-4 px-4 scrollbar-hide">
          <Button
            variant={selectedSubject === null ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedSubject(null)}
            className="flex-shrink-0"
          >
            Tümü
          </Button>
          {subjects.slice(0, 6).map((subject) => (
            <Button
              key={subject.id}
              variant={selectedSubject === subject.id ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedSubject(subject.id)}
              className="flex-shrink-0"
            >
              {subject.icon} {subject.name}
            </Button>
          ))}
        </div>

        {/* Continue Watching */}
        <div className="mb-6">
          <h2 className="font-semibold text-foreground mb-3">Kaldığın Yerden Devam Et</h2>
          <div className="flex gap-3 overflow-x-auto pb-2 -mx-4 px-4 scrollbar-hide">
            {videos
              .filter((v) => v.watchedDuration > 0 && v.watchedDuration < v.duration)
              .map((video) => (
                <VideoCard
                  key={video.id}
                  video={video}
                  className="w-72 flex-shrink-0"
                />
              ))}
          </div>
        </div>

        {/* All Videos */}
        <div>
          <h2 className="font-semibold text-foreground mb-3">Tüm Videolar</h2>
          <div className="space-y-3">
            {filteredVideos.map((video) => (
              <VideoCard key={video.id} video={video} variant="horizontal" />
            ))}
          </div>
        </div>
      </div>
    </MobileLayout>
  );
};

export default Videos;
