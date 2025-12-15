import React from "react";
import MobileLayout from "@/components/layout/MobileLayout";
import { liveClasses, quizzes } from "@/data/mockData";
import LiveClassCard from "@/components/common/LiveClassCard";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Radio, Gamepad2, Users, Clock, Gift, Trophy } from "lucide-react";
import { cn } from "@/lib/utils";

const Live: React.FC = () => {
  const liveNow = liveClasses.filter((lc) => lc.isLive);
  const upcoming = liveClasses.filter((lc) => !lc.isLive && new Date(lc.startTime) > new Date());

  return (
    <MobileLayout>
      <div className="p-4 safe-area-top">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-foreground">Canlı</h1>
          <p className="text-sm text-muted-foreground mt-1">
            Canlı dersler & yarışmalar
          </p>
        </div>

        {/* Live Now */}
        {liveNow.length > 0 && (
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-3">
              <Radio className="w-5 h-5 text-destructive animate-pulse" />
              <h2 className="font-semibold text-foreground">Şu An Canlı</h2>
            </div>
            <div className="space-y-3">
              {liveNow.map((liveClass) => (
                <LiveClassCard key={liveClass.id} liveClass={liveClass} />
              ))}
            </div>
          </div>
        )}

        {/* Live Quizzes */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-3">
            <Gamepad2 className="w-5 h-5 text-secondary" />
            <h2 className="font-semibold text-foreground">Canlı Yarışmalar</h2>
          </div>
          <div className="space-y-3">
            {quizzes.map((quiz) => (
              <Card key={quiz.id} variant="interactive" className="p-4">
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 rounded-xl gradient-accent flex items-center justify-center flex-shrink-0">
                    <Trophy className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-foreground">{quiz.title}</h3>
                    <p className="text-sm text-muted-foreground">{quiz.subject}</p>
                    <div className="flex items-center gap-4 mt-2 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Users className="w-3.5 h-3.5" />
                        {quiz.participants} katılımcı
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {quiz.totalQuestions} soru
                      </span>
                    </div>
                    {quiz.prizePool && (
                      <div className="flex items-center gap-1 mt-2 text-xs text-warning font-semibold">
                        <Gift className="w-3.5 h-3.5" />
                        Ödül: {quiz.prizePool}
                      </div>
                    )}
                  </div>
                </div>
                <Button className="w-full mt-4" variant="secondary">
                  Katıl
                </Button>
              </Card>
            ))}
          </div>
        </div>

        {/* Upcoming */}
        <div className="mb-6">
          <h2 className="font-semibold text-foreground mb-3">Yaklaşan Dersler</h2>
          <div className="space-y-3">
            {upcoming.map((liveClass) => (
              <LiveClassCard key={liveClass.id} liveClass={liveClass} />
            ))}
          </div>
        </div>
      </div>
    </MobileLayout>
  );
};

export default Live;
