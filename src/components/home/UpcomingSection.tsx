import React from "react";
import { liveClasses, homeworks } from "@/data/mockData";
import LiveClassCard from "@/components/common/LiveClassCard";
import HomeworkCard from "@/components/common/HomeworkCard";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const UpcomingSection: React.FC = () => {
  const upcomingLiveClass = liveClasses.find((lc) => lc.isLive || new Date(lc.startTime) > new Date());
  const pendingHomeworks = homeworks.filter((hw) => !hw.isCompleted).slice(0, 2);

  return (
    <div className="px-4 mt-6 space-y-6">
      {/* Live Classes Section */}
      {upcomingLiveClass && (
        <div>
          <div className="flex items-center justify-between mb-3">
            <h2 className="font-bold text-lg text-foreground">Canlı Dersler</h2>
            <Link
              to="/live"
              className="flex items-center gap-1 text-sm text-primary font-medium"
            >
              Tümü
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
          <LiveClassCard liveClass={upcomingLiveClass} />
        </div>
      )}

      {/* Homework Section */}
      {pendingHomeworks.length > 0 && (
        <div>
          <div className="flex items-center justify-between mb-3">
            <h2 className="font-bold text-lg text-foreground">Ödevler</h2>
            <Link
              to="/homework"
              className="flex items-center gap-1 text-sm text-primary font-medium"
            >
              Tümü
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="space-y-3">
            {pendingHomeworks.map((homework) => (
              <HomeworkCard key={homework.id} homework={homework} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default UpcomingSection;
