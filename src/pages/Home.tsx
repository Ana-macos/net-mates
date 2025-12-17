import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { MobileLayout } from "@/components/ui/MobileLayout";
import { BottomNav } from "@/components/ui/BottomNav";
import { GameCard } from "@/components/ui/GameCard";
import { Plus, Bell, MapPin } from "lucide-react";

const mockGames = [
  {
    id: "1",
    date: "Hoje, 18 Dez",
    time: "18:00",
    level: "Intermediário",
    location: "Tennis Club São Paulo",
    players: 2,
    maxPlayers: 4,
    isPartner: true,
  },
  {
    id: "2",
    date: "Amanhã, 19 Dez",
    time: "09:00",
    level: "Iniciante",
    location: "Parque Ibirapuera",
    players: 1,
    maxPlayers: 2,
    isPartner: false,
  },
  {
    id: "3",
    date: "Sex, 20 Dez",
    time: "19:30",
    level: "Avançado",
    location: "Academia Prime Tennis",
    players: 3,
    maxPlayers: 4,
    isPartner: true,
  },
  {
    id: "4",
    date: "Sáb, 21 Dez",
    time: "10:00",
    level: "Intermediário",
    location: "Quadra Municipal Centro",
    players: 1,
    maxPlayers: 2,
    isPartner: false,
  },
];

export const Home = () => {
  const navigate = useNavigate();

  return (
    <MobileLayout>
      <div className="flex flex-col h-[calc(100%-48px)] pb-24">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="px-6 pb-4"
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <p className="text-muted-foreground text-sm">Olá, Rafael 👋</p>
              <h1 className="text-xl font-bold text-foreground">
                Pronto para jogar?
              </h1>
            </div>
            <button className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center relative">
              <Bell className="w-5 h-5 text-muted-foreground" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full" />
            </button>
          </div>

          {/* Location */}
          <div className="flex items-center gap-2 text-muted-foreground text-sm mb-6">
            <MapPin className="w-4 h-4 text-primary" />
            <span>São Paulo, SP</span>
          </div>

          {/* Create Game Button */}
          <motion.button
            whileTap={{ scale: 0.98 }}
            onClick={() => navigate("/create-game")}
            className="w-full tennis-button flex items-center justify-center gap-3 mb-6"
          >
            <Plus className="w-5 h-5" />
            Criar novo jogo
          </motion.button>
        </motion.div>

        {/* Games List */}
        <div className="flex-1 px-6 overflow-y-auto">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-foreground">
              Jogos próximos
            </h2>
            <button className="text-sm text-primary font-medium">
              Ver todos
            </button>
          </div>

          <div className="space-y-4">
            {mockGames.map((game, index) => (
              <GameCard key={game.id} {...game} delay={index * 0.1} />
            ))}
          </div>
        </div>

        <BottomNav />
      </div>
    </MobileLayout>
  );
};

export default Home;
