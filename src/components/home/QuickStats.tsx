import React from "react";
import { currentUser } from "@/data/mockData";
import StatCard from "@/components/common/StatCard";
import { Target, CheckCircle2, Clock, Trophy } from "lucide-react";

const formatStudyTime = (minutes: number): string => {
  const hours = Math.floor(minutes / 60);
  return `${hours}s ${minutes % 60}dk`;
};

const QuickStats: React.FC = () => {
  const correctRate = Math.round(
    (currentUser.correctAnswers / currentUser.totalQuestions) * 100
  );

  return (
    <div className="px-4 -mt-4">
      <div className="grid grid-cols-2 gap-3">
        <StatCard
          icon={Target}
          label="Çözülen Soru"
          value={currentUser.totalQuestions.toLocaleString()}
          subtext="Bu ay: 847"
          variant="primary"
          trend="up"
          trendValue="+12%"
        />
        <StatCard
          icon={CheckCircle2}
          label="Başarı Oranı"
          value={`${correctRate}%`}
          subtext={`${currentUser.correctAnswers} doğru`}
          variant="success"
          trend="up"
          trendValue="+3%"
        />
        <StatCard
          icon={Clock}
          label="Çalışma Süresi"
          value={formatStudyTime(currentUser.studyTime)}
          subtext="Bu hafta: 24s"
          variant="secondary"
        />
        <StatCard
          icon={Trophy}
          label="Türkiye Sıralaması"
          value={`#${currentUser.rank.toLocaleString()}`}
          subtext="İlk %8'desin!"
          variant="accent"
          trend="up"
          trendValue="↑156"
        />
      </div>
    </div>
  );
};

export default QuickStats;
