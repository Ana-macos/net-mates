import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { MobileLayout } from "@/components/ui/MobileLayout";
import { BottomNav } from "@/components/ui/BottomNav";
import { Settings, Edit2, Calendar, ChevronRight, LogOut, Trophy, CheckCircle2 } from "lucide-react";

const mockProfile = {
  name: "Rafael Mendes",
  level: "Intermediário",
  gamesPlayed: 24,
  attendanceRate: 95,
  memberSince: "Outubro 2024",
  avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
};

const menuItems = [
  { icon: Edit2, label: "Editar perfil", path: "/edit-profile" },
  { icon: Calendar, label: "Meus jogos", path: "/my-games" },
  { icon: Settings, label: "Configurações", path: "/settings" },
];

export const Profile = () => {
  const navigate = useNavigate();

  return (
    <MobileLayout>
      <div className="flex flex-col min-h-[calc(844px-48px)] pb-24">
        {/* Header */}
        <div className="px-6 pb-6">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-xl font-bold text-foreground">Meu Perfil</h1>
            <button
              onClick={() => navigate("/settings")}
              className="w-10 h-10 rounded-full bg-card flex items-center justify-center hover:bg-muted transition-colors shadow-sm"
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
            <div 
              className="w-24 h-24 rounded-full mx-auto mb-4 avatar-ring bg-cover bg-center"
              style={{ backgroundImage: `url("${mockProfile.avatarUrl}")` }}
            />

            <h2 className="text-xl font-bold text-foreground mb-2">
              {mockProfile.name}
            </h2>

            <span className="level-badge bg-primary/20 text-primary">
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
                className={`w-full flex items-center justify-between p-4 hover:bg-muted/50 transition-colors ${
                  index !== menuItems.length - 1 ? "border-b border-border" : ""
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
