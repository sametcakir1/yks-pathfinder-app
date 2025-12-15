import React, { useState } from "react";
import MobileLayout from "@/components/layout/MobileLayout";
import { exams } from "@/data/mockData";
import ExamCard from "@/components/common/ExamCard";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { Trophy, TrendingUp, Target, Calendar } from "lucide-react";

const Exams: React.FC = () => {
  const [examType, setExamType] = useState<"all" | "TYT" | "AYT">("all");

  const completedExams = exams.filter((e) => e.isCompleted);
  const pendingExams = exams.filter((e) => !e.isCompleted);

  const filteredExams = (examList: typeof exams) =>
    examType === "all" ? examList : examList.filter((e) => e.type === examType);

  const avgScore =
    completedExams.length > 0
      ? completedExams.reduce((sum, e) => sum + (e.score || 0), 0) / completedExams.length
      : 0;

  const bestRank = Math.min(...completedExams.filter((e) => e.rank).map((e) => e.rank!));

  return (
    <MobileLayout>
      <div className="p-4 safe-area-top">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-foreground">Denemeler</h1>
          <p className="text-sm text-muted-foreground mt-1">
            TYT & AYT deneme sınavları
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          <Card variant="gradient" className="p-3 text-center">
            <Trophy className="w-6 h-6 mx-auto text-warning mb-1" />
            <p className="text-xl font-bold text-foreground">{completedExams.length}</p>
            <p className="text-[10px] text-muted-foreground">Tamamlanan</p>
          </Card>
          <Card variant="gradient" className="p-3 text-center">
            <TrendingUp className="w-6 h-6 mx-auto text-success mb-1" />
            <p className="text-xl font-bold text-foreground">{avgScore.toFixed(1)}</p>
            <p className="text-[10px] text-muted-foreground">Ort. Net</p>
          </Card>
          <Card variant="gradient" className="p-3 text-center">
            <Target className="w-6 h-6 mx-auto text-primary mb-1" />
            <p className="text-xl font-bold text-foreground">
              {bestRank < Infinity ? `#${bestRank}` : "-"}
            </p>
            <p className="text-[10px] text-muted-foreground">En İyi Sıra</p>
          </Card>
        </div>

        {/* Type Filter */}
        <div className="flex gap-2 mb-4">
          {(["all", "TYT", "AYT"] as const).map((type) => (
            <Button
              key={type}
              variant={examType === type ? "default" : "outline"}
              size="sm"
              onClick={() => setExamType(type)}
            >
              {type === "all" ? "Tümü" : type}
            </Button>
          ))}
        </div>

        {/* Tabs */}
        <Tabs defaultValue="pending" className="w-full">
          <TabsList className="w-full mb-4">
            <TabsTrigger value="pending" className="flex-1">
              Bekleyen ({filteredExams(pendingExams).length})
            </TabsTrigger>
            <TabsTrigger value="completed" className="flex-1">
              Tamamlanan ({filteredExams(completedExams).length})
            </TabsTrigger>
          </TabsList>

          <TabsContent value="pending" className="space-y-3">
            {filteredExams(pendingExams).length === 0 ? (
              <Card variant="gradient" className="p-8 text-center">
                <Calendar className="w-12 h-12 mx-auto text-muted-foreground mb-3" />
                <p className="text-muted-foreground">Bekleyen deneme yok</p>
              </Card>
            ) : (
              filteredExams(pendingExams).map((exam) => (
                <ExamCard key={exam.id} exam={exam} />
              ))
            )}
          </TabsContent>

          <TabsContent value="completed" className="space-y-3">
            {filteredExams(completedExams).length === 0 ? (
              <Card variant="gradient" className="p-8 text-center">
                <Trophy className="w-12 h-12 mx-auto text-muted-foreground mb-3" />
                <p className="text-muted-foreground">Henüz deneme çözmedin</p>
              </Card>
            ) : (
              filteredExams(completedExams).map((exam) => (
                <ExamCard key={exam.id} exam={exam} />
              ))
            )}
          </TabsContent>
        </Tabs>
      </div>
    </MobileLayout>
  );
};

export default Exams;
