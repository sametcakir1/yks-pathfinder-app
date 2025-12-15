import React from "react";
import MobileLayout from "@/components/layout/MobileLayout";
import Header from "@/components/home/Header";
import QuickStats from "@/components/home/QuickStats";
import DailyProgress from "@/components/home/DailyProgress";
import UpcomingSection from "@/components/home/UpcomingSection";
import SubjectsOverview from "@/components/home/SubjectsOverview";

const Index: React.FC = () => {
  return (
    <MobileLayout>
      <Header />
      <QuickStats />
      <DailyProgress />
      <UpcomingSection />
      <SubjectsOverview />
    </MobileLayout>
  );
};

export default Index;
