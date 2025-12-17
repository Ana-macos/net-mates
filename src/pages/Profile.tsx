import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { MobileLayout } from "@/components/ui/MobileLayout";
import { BottomNav } from "@/components/ui/BottomNav";
import {
  Settings,
  Edit2,
  Trophy,
  Calendar,
  CheckCircle2,
  ChevronRight,
  LogOut,
} from "lucide-react";

const mockProfile = {
  name: "Rafael Mendes",
  avatar: "RM",
  level: "Intermediário",
  gamesPlayed: 24,
  attendanceRate: 95,
  memberSince: "Outubro 2024",
};

const menuItems = [
  { icon: Edit2, label: "Editar perfil", path: "/edit-profile" },
  { icon: Calendar, label: "Meus jogos", path: "/my-games" },
  { icon: Settings, label: "Configurações", path: "/settings" },
];

export const Profile = () => {
  const navigate = useNavigate();

  const getLevelColor = () => {
    switch (mockProfile.level.toLowerCase()) {
      case "iniciante":
        return "bg-emerald-500/20 text-emerald-400";
      case "intermediário":
        return "bg-blue-500/20 text-blue-400";
      case "avançado":
        return "bg-purple-500/20 text-purple-400";
      default:
        return "bg-secondary text-secondary-foreground";
    }
  };

  return (
    <MobileLayout>
      <div className="flex flex-col h-[calc(100%-48px)] pb-24">
        {/* Header */}
        <div className="px-6 pb-6">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-xl font-bold text-foreground">Meu Perfil</h1>
            <button
              onClick={() => navigate("/settings")}
              className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center hover:bg-secondary/80 transition-colors"
            >
              <Settings className="w-5 h-5 text-muted-foreground" />
            </button>
          </div>

          {/* Profile Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="tennis-card p-6 text-center"
          >
            <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4 avatar-ring">
              <span className="text-3xl font-bold text-primary">
                {mockProfile.avatar}
              </span>
            </div>

            <h2 className="text-xl font-bold text-foreground mb-2">
              {mockProfile.name}
            </h2>

            <span className={`level-badge ${getLevelColor()}`}>
              {mockProfile.level}
            </span>

            <p className="text-sm text-muted-foreground mt-3">
              Membro desde {mockProfile.memberSince}
            </p>
          </motion.div>
        </div>

        {/* Stats */}
        <div className="px-6 mb-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="tennis-card p-4 text-center">
              <Trophy className="w-6 h-6 text-primary mx-auto mb-2" />
              <p className="text-2xl font-bold text-foreground">
                {mockProfile.gamesPlayed}
              </p>
              <p className="text-xs text-muted-foreground">Jogos realizados</p>
            </div>
            <div className="tennis-card p-4 text-center">
              <CheckCircle2 className="w-6 h-6 text-primary mx-auto mb-2" />
              <p className="text-2xl font-bold text-foreground">
                {mockProfile.attendanceRate}%
              </p>
              <p className="text-xs text-muted-foreground">Taxa de presença</p>
            </div>
          </motion.div>
        </div>

        {/* Menu Items */}
        <div className="flex-1 px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="tennis-card overflow-hidden"
          >
            {menuItems.map((item, index) => (
              <button
                key={item.path}
                onClick={() => navigate(item.path)}
                className={`w-full flex items-center justify-between p-4 hover:bg-secondary/50 transition-colors ${
                  index !== menuItems.length - 1 ? "border-b border-border/50" : ""
                }`}
              >
                <div className="flex items-center gap-3">
                  <item.icon className="w-5 h-5 text-muted-foreground" />
                  <span className="font-medium text-foreground">
                    {item.label}
                  </span>
                </div>
                <ChevronRight className="w-5 h-5 text-muted-foreground" />
              </button>
            ))}
          </motion.div>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            onClick={() => navigate("/")}
            className="w-full flex items-center justify-center gap-2 p-4 mt-4 text-destructive hover:bg-destructive/10 rounded-xl transition-colors"
          >
            <LogOut className="w-5 h-5" />
            <span className="font-medium">Sair da conta</span>
          </motion.button>
        </div>

        <BottomNav />
      </div>
    </MobileLayout>
  );
};

export default Profile;
