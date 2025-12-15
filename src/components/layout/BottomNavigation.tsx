import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, PlayCircle, FileText, Radio, User } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { path: "/", icon: Home, label: "Ana Sayfa" },
  { path: "/videos", icon: PlayCircle, label: "Videolar" },
  { path: "/exams", icon: FileText, label: "Denemeler" },
  { path: "/live", icon: Radio, label: "Canlı" },
  { path: "/profile", icon: User, label: "Profil" },
];

const BottomNavigation: React.FC = () => {
  const location = useLocation();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 glass border-t border-border/50 safe-area-bottom">
      <div className="flex items-center justify-around h-16 max-w-lg mx-auto">
        {navItems.map(({ path, icon: Icon, label }) => {
          const isActive = location.pathname === path;
          return (
            <Link
              key={path}
              to={path}
              className={cn(
                "flex flex-col items-center justify-center gap-1 py-2 px-4 rounded-xl transition-all duration-300",
                isActive
                  ? "text-primary scale-105"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              <div
                className={cn(
                  "p-1.5 rounded-lg transition-all duration-300",
                  isActive && "gradient-primary shadow-md"
                )}
              >
                <Icon
                  className={cn(
                    "w-5 h-5 transition-colors",
                    isActive && "text-primary-foreground"
                  )}
                />
              </div>
              <span className="text-[10px] font-medium">{label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNavigation;
