import React from "react";
import { cn } from "@/lib/utils";
import BottomNavigation from "./BottomNavigation";

interface MobileLayoutProps {
  children: React.ReactNode;
  showNav?: boolean;
  className?: string;
}

const MobileLayout: React.FC<MobileLayoutProps> = ({
  children,
  showNav = true,
  className,
}) => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <main
        className={cn(
          "flex-1 overflow-y-auto",
          showNav && "pb-20",
          className
        )}
      >
        {children}
      </main>
      {showNav && <BottomNavigation />}
    </div>
  );
};

export default MobileLayout;
