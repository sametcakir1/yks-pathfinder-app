import React from "react";
import { subjects } from "@/data/mockData";
import SubjectCard from "@/components/common/SubjectCard";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const SubjectsOverview: React.FC = () => {
  const topSubjects = subjects.slice(0, 4);

  return (
    <div className="px-4 mt-6 mb-6">
      <div className="flex items-center justify-between mb-3">
        <h2 className="font-bold text-lg text-foreground">Derslerim</h2>
        <Link
          to="/subjects"
          className="flex items-center gap-1 text-sm text-primary font-medium"
        >
          Tümü
          <ChevronRight className="w-4 h-4" />
        </Link>
      </div>
      <div className="space-y-3">
        {topSubjects.map((subject) => (
          <SubjectCard key={subject.id} subject={subject} />
        ))}
      </div>
    </div>
  );
};

export default SubjectsOverview;
