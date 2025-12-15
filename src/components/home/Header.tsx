import React from "react";
import { currentUser } from "@/data/mockData";
import { Bell, Settings, Flame } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  notificationCount?: number;
}

const Header: React.FC<HeaderProps> = ({ notificationCount = 3 }) => {
  const greeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Günaydın";
    if (hour < 18) return "İyi günler";
    return "İyi akşamlar";
  };

  return (
    <header className="gradient-hero text-primary-foreground p-5 pb-8 safe-area-top">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl overflow-hidden ring-2 ring-primary-foreground/30">
            <img
              src={currentUser.avatar}
              alt={currentUser.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <p className="text-sm text-primary-foreground/80">{greeting()}</p>
            <h1 className="font-bold text-lg">{currentUser.name}</h1>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-primary-foreground/10 backdrop-blur-sm">
            <Flame className="w-4 h-4 text-warning" />
            <span className="text-sm font-bold">{currentUser.streak}</span>
          </div>
          <Button variant="glass" size="icon" className="relative">
            <Bell className="w-5 h-5" />
            {notificationCount > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-destructive text-destructive-foreground text-[10px] font-bold flex items-center justify-center">
                {notificationCount}
              </span>
            )}
          </Button>
          <Button variant="glass" size="icon">
            <Settings className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
