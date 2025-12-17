import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { MobileLayout } from "@/components/ui/MobileLayout";
import { BottomNav } from "@/components/ui/BottomNav";
import { Plus, ArrowRight, Star, MapPin, Calendar, TrendingUp } from "lucide-react";

const mockGames = [
  {
    id: "1",
    type: "featured",
    title: "Clube Pinheiros",
    date: "19:00 • Hoje",
    level: "Intermediário",
    slots: "2/4 Vagas",
    image: "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?q=80&w=2670&auto=format&fit=crop",
    isPartner: true,
  },
  {
    id: "2",
    type: "standard",
    gameType: "Partida Amistosa",
    title: "Parque Ibirapuera",
    subtitle: "Quadra 3 • Cimento",
    date: "Amanhã, 08:00",
    level: "Nível 4.0",
    color: "bg-green-500",
    image: "https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: "3",
    type: "standard",
    gameType: "Treino",
    title: "Academia Play Tennis",
    subtitle: "Quadra Coberta • Saibro",
    date: "Sáb, 10:00",
    level: "Iniciante",
    color: "bg-blue-500",
    image: "https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: "4",
    type: "standard",
    gameType: "Duplas",
    title: "Condomínio Jardins",
    subtitle: "Privado • Rápida",
    date: "Dom, 16:30",
    level: "Misto",
    color: "bg-orange-500",
    image: "https://images.unsplash.com/photo-1587280501635-68a0e82cd5ff?q=80&w=200&auto=format&fit=crop",
  },
];

export const Home = () => {
  const navigate = useNavigate();

  return (
    <MobileLayout>
      <div className="flex flex-col min-h-screen pb-24 overflow-x-hidden">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between p-5 pt-8 sticky top-0 z-10 glass-effect"
        >
          <div className="flex items-center gap-3">
            <div 
              className="size-12 rounded-full bg-cover bg-center ring-2 ring-primary/20"
              style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop")' }}
            />
            <div className="flex flex-col">
              <h2 className="text-foreground text-xl font-bold leading-tight tracking-tight">Olá, Rafael! 🎾</h2>
              <p className="text-muted-foreground text-sm font-medium">Bora jogar hoje?</p>
            </div>
          </div>
          <button className="flex items-center justify-center size-10 rounded-full bg-card shadow-sm hover:bg-muted transition-colors text-foreground">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
          </button>
        </motion.div>

        {/* Create Game CTA */}
        <div className="px-5 pb-2">
          <motion.button
            whileTap={{ scale: 0.98 }}
            onClick={() => navigate("/create-game")}
            className="w-full flex items-center justify-between p-4 bg-primary rounded-xl shadow-primary-lg hover:shadow-glow transition-shadow group cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <div className="bg-primary-foreground/10 p-2 rounded-full">
                <Plus className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-primary-foreground text-lg font-bold">Criar novo jogo</span>
            </div>
            <ArrowRight className="w-6 h-6 text-primary-foreground group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>

        {/* Filters */}
        <div className="flex gap-3 px-5 py-4 overflow-x-auto no-scrollbar">
          <button className="chip selected">Todos</button>
          <button className="chip">Hoje</button>
          <button className="chip">Nível 3.5-4.0</button>
          <button className="chip">Clubes Parceiros</button>
        </div>

        {/* Games Feed */}
        <div className="flex flex-col gap-4 px-5 pt-2">
          <div className="flex items-center justify-between">
            <h3 className="text-foreground text-lg font-bold">Jogos Próximos</h3>
            <button className="text-sm font-bold text-muted-foreground hover:text-foreground transition-colors">Ver todos</button>
          </div>

          {mockGames.map((game, index) => (
            <motion.div
              key={game.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => navigate(`/game/${game.id}`)}
              className="cursor-pointer"
            >
              {game.type === "featured" ? (
                <div className="tennis-card-featured p-4">
                  {/* Partner Badge */}
                  <div className="absolute top-4 left-4 z-10 partner-badge">
                    <Star className="w-3.5 h-3.5" />
                    <span>Clube Parceiro</span>
                  </div>
                  <div 
                    className="w-full aspect-[2/1] bg-cover bg-center rounded-lg overflow-hidden relative mb-4"
                    style={{ backgroundImage: `url("${game.image}")` }}
                  >
                    <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-white" />
                      <span className="text-white text-xs font-bold">{game.title}</span>
                    </div>
                  </div>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-2 text-foreground">
                        <span className="text-primary">⏰</span>
                        <p className="text-base font-bold">{game.date}</p>
                      </div>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="level-badge">{game.level}</span>
                        <span className="level-badge">{game.slots}</span>
                      </div>
                    </div>
                    <button className="h-10 px-5 rounded-full bg-foreground text-background font-bold text-sm hover:opacity-90 transition-opacity">
                      Entrar
                    </button>
                  </div>
                </div>
              ) : (
                <div className="tennis-card flex gap-4 p-4">
                  <div className="flex-1 flex flex-col justify-between gap-2">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <div className={`size-2 rounded-full ${game.color}`} />
                        <p className="text-muted-foreground text-xs font-semibold uppercase tracking-wider">{game.gameType}</p>
                      </div>
                      <h4 className="text-foreground text-lg font-bold leading-tight">{game.title}</h4>
                      <p className="text-foreground text-sm mt-1">{game.subtitle}</p>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <div className="flex items-center gap-1 bg-muted/50 px-2 py-1 rounded-md">
                        <Calendar className="w-3.5 h-3.5 text-muted-foreground" />
                        <span className="text-foreground text-xs font-medium">{game.date}</span>
                      </div>
                      <div className="flex items-center gap-1 bg-muted/50 px-2 py-1 rounded-md">
                        <TrendingUp className="w-3.5 h-3.5 text-muted-foreground" />
                        <span className="text-foreground text-xs font-medium">{game.level}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-end justify-between gap-2">
                    <div 
                      className="size-16 bg-cover bg-center rounded-xl"
                      style={{ backgroundImage: `url("${game.image}")` }}
                    />
                    <button className="size-10 rounded-full bg-muted flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <BottomNav />
      </div>
    </MobileLayout>
  );
};

export default Home;
