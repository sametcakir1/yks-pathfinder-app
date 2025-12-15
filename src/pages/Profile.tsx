import React from "react";
import MobileLayout from "@/components/layout/MobileLayout";
import { currentUser, subjects, prizeDraws } from "@/data/mockData";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ProgressRing from "@/components/common/ProgressRing";
import {
  Settings,
  ChevronRight,
  Flame,
  Trophy,
  Target,
  Clock,
  BookOpen,
  Gift,
  GraduationCap,
  Calendar,
  HelpCircle,
  LogOut,
  Bell,
  Moon,
  Globe,
} from "lucide-react";
import { cn } from "@/lib/utils";

const Profile: React.FC = () => {
  const totalProgress = Math.round(
    subjects.reduce((sum, s) => sum + (s.completedTopics / s.totalTopics) * 100, 0) / subjects.length
  );

  const menuItems = [
    { icon: GraduationCap, label: "Tercih Robotu", color: "text-primary" },
    { icon: Calendar, label: "Çalışma Planı", color: "text-secondary" },
    { icon: BookOpen, label: "İstatistikler", color: "text-success" },
    { icon: Gift, label: "Çekilişler", color: "text-warning", badge: "2" },
    { icon: Bell, label: "Bildirimler", color: "text-destructive" },
    { icon: Moon, label: "Karanlık Mod", color: "text-muted-foreground" },
    { icon: Globe, label: "Dil", color: "text-muted-foreground", subtitle: "Türkçe" },
    { icon: HelpCircle, label: "Yardım & Destek", color: "text-muted-foreground" },
  ];

  return (
    <MobileLayout>
      <div className="gradient-hero text-primary-foreground p-5 pb-12 safe-area-top">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-xl font-bold">Profilim</h1>
          <Button variant="glass" size="icon">
            <Settings className="w-5 h-5" />
          </Button>
        </div>

        {/* Profile Card */}
        <Card variant="glass" className="p-4">
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="w-20 h-20 rounded-2xl overflow-hidden ring-2 ring-primary-foreground/30">
                <img
                  src={currentUser.avatar}
                  alt={currentUser.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-1 -right-1 w-7 h-7 rounded-full gradient-accent flex items-center justify-center text-xs font-bold shadow-lg">
                {currentUser.grade}
              </div>
            </div>
            <div className="flex-1">
              <h2 className="font-bold text-lg text-foreground">{currentUser.name}</h2>
              <p className="text-sm text-muted-foreground">{currentUser.email}</p>
              <div className="flex items-center gap-3 mt-2">
                <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-warning/20">
                  <Flame className="w-3.5 h-3.5 text-warning" />
                  <span className="text-xs font-bold text-foreground">{currentUser.streak} gün</span>
                </div>
                <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-primary/20">
                  <Trophy className="w-3.5 h-3.5 text-primary" />
                  <span className="text-xs font-bold text-foreground">#{currentUser.rank}</span>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Stats Overview */}
      <div className="-mt-6 px-4 mb-6">
        <Card variant="gradient" className="p-4">
          <div className="flex items-center gap-4">
            <ProgressRing progress={totalProgress} size={64} variant="success">
              <span className="text-sm font-bold">{totalProgress}%</span>
            </ProgressRing>
            <div className="flex-1">
              <p className="text-sm font-medium text-foreground">Genel İlerleme</p>
              <p className="text-xs text-muted-foreground mt-0.5">
                {subjects.reduce((sum, s) => sum + s.completedTopics, 0)} /{" "}
                {subjects.reduce((sum, s) => sum + s.totalTopics, 0)} konu tamamlandı
              </p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3 mt-4 pt-4 border-t border-border/50">
            <div className="text-center">
              <Target className="w-5 h-5 mx-auto text-primary mb-1" />
              <p className="text-lg font-bold text-foreground">{currentUser.totalQuestions.toLocaleString()}</p>
              <p className="text-[10px] text-muted-foreground">Soru</p>
            </div>
            <div className="text-center">
              <Clock className="w-5 h-5 mx-auto text-secondary mb-1" />
              <p className="text-lg font-bold text-foreground">{Math.floor(currentUser.studyTime / 60)}s</p>
              <p className="text-[10px] text-muted-foreground">Çalışma</p>
            </div>
            <div className="text-center">
              <Trophy className="w-5 h-5 mx-auto text-warning mb-1" />
              <p className="text-lg font-bold text-foreground">{currentUser.points.toLocaleString()}</p>
              <p className="text-[10px] text-muted-foreground">Puan</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Badges */}
      <div className="px-4 mb-6">
        <h2 className="font-semibold text-foreground mb-3">Rozetlerim</h2>
        <div className="flex gap-3 overflow-x-auto pb-2 -mx-4 px-4 scrollbar-hide">
          {currentUser.badges.map((badge) => (
            <Card
              key={badge.id}
              variant="gradient"
              className="p-3 flex-shrink-0 w-24 text-center"
            >
              <div className="text-3xl mb-1">{badge.icon}</div>
              <p className="text-xs font-medium text-foreground line-clamp-1">{badge.name}</p>
            </Card>
          ))}
          <Card
            variant="gradient"
            className="p-3 flex-shrink-0 w-24 text-center border-dashed"
          >
            <div className="text-3xl mb-1 opacity-30">🔒</div>
            <p className="text-xs text-muted-foreground">+12</p>
          </Card>
        </div>
      </div>

      {/* Prize Draws */}
      <div className="px-4 mb-6">
        <h2 className="font-semibold text-foreground mb-3">Çekilişler</h2>
        <div className="space-y-3">
          {prizeDraws.slice(0, 1).map((draw) => (
            <Card key={draw.id} variant="interactive" className="overflow-hidden">
              <div className="flex items-center gap-3 p-4">
                <img
                  src={draw.prizeImage}
                  alt={draw.prize}
                  className="w-16 h-16 rounded-xl object-cover"
                />
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground">{draw.title}</h3>
                  <p className="text-sm text-muted-foreground">{draw.prize}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <Gift className="w-3.5 h-3.5 text-warning" />
                    <span className="text-xs font-medium text-warning">
                      {draw.userEntries} katılım hakkın var
                    </span>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-muted-foreground" />
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Menu */}
      <div className="px-4 mb-6">
        <Card variant="gradient" className="divide-y divide-border/50 overflow-hidden">
          {menuItems.map((item, index) => (
            <button
              key={index}
              className="flex items-center gap-3 p-4 w-full text-left hover:bg-muted/50 transition-colors"
            >
              <div className={cn("w-10 h-10 rounded-xl bg-muted flex items-center justify-center", item.color)}>
                <item.icon className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <p className="font-medium text-foreground">{item.label}</p>
                {item.subtitle && (
                  <p className="text-xs text-muted-foreground">{item.subtitle}</p>
                )}
              </div>
              {item.badge && (
                <span className="px-2 py-0.5 rounded-full bg-destructive text-destructive-foreground text-xs font-bold">
                  {item.badge}
                </span>
              )}
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </button>
          ))}
        </Card>
      </div>

      {/* Logout */}
      <div className="px-4 mb-8">
        <Button variant="outline" className="w-full text-destructive border-destructive/50">
          <LogOut className="w-4 h-4" />
          Çıkış Yap
        </Button>
      </div>
    </MobileLayout>
  );
};

export default Profile;
