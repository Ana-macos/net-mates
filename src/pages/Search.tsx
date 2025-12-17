import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { MobileLayout } from "@/components/ui/MobileLayout";
import { BottomNav } from "@/components/ui/BottomNav";
import { Search, MapPin, Calendar, TrendingUp, ArrowRight } from "lucide-react";
import { useState } from "react";

const filters = ["Todos", "Hoje", "Amanhã", "Clubes Parceiros", "Iniciante", "Intermediário", "Avançado"];

const searchResults = [
  {
    id: "1",
    gameType: "Partida Amistosa",
    title: "Parque Ibirapuera",
    subtitle: "Quadra 3 • Cimento",
    date: "Amanhã, 08:00",
    level: "Nível 4.0",
    color: "bg-green-500",
    image: "https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: "2",
    gameType: "Treino",
    title: "Academia Play Tennis",
    subtitle: "Quadra Coberta • Saibro",
    date: "Sáb, 10:00",
    level: "Iniciante",
    color: "bg-blue-500",
    image: "https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: "3",
    gameType: "Duplas",
    title: "Clube Pinheiros",
    subtitle: "Quadra 5 • Saibro",
    date: "Dom, 16:30",
    level: "Intermediário",
    color: "bg-orange-500",
    image: "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?q=80&w=200&auto=format&fit=crop",
  },
];

export const SearchPage = () => {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState("Todos");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <MobileLayout>
      <div className="flex flex-col min-h-[calc(844px-48px)] pb-24">
        {/* Header */}
        <div className="px-5 pt-4 pb-2 sticky top-0 z-10 glass-effect">
          <h1 className="text-2xl font-bold text-foreground mb-4">Buscar jogos</h1>
          
          {/* Search Input */}
          <div className="relative mb-4">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Buscar por local, clube ou jogador..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="input-field pl-12"
            />
          </div>

          {/* Filter Chips */}
          <div className="flex gap-2 overflow-x-auto no-scrollbar pb-2 -mx-5 px-5">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`chip shrink-0 ${activeFilter === filter ? "selected" : ""}`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Results */}
        <div className="flex-1 px-5 pt-4">
          <div className="flex items-center justify-between mb-4">
            <p className="text-sm text-muted-foreground">
              {searchResults.length} jogos encontrados
            </p>
            <button className="text-sm font-medium text-primary">
              Filtrar
            </button>
          </div>

          <div className="space-y-4">
            {searchResults.map((game, index) => (
              <motion.div
                key={game.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => navigate(`/game/${game.id}`)}
                className="tennis-card flex gap-4 p-4 cursor-pointer"
              >
                <div className="flex-1 flex flex-col justify-between gap-2">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <div className={`size-2 rounded-full ${game.color}`} />
                      <p className="text-muted-foreground text-xs font-semibold uppercase tracking-wider">
                        {game.gameType}
                      </p>
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
              </motion.div>
            ))}
          </div>

          {/* No Results State */}
          {searchResults.length === 0 && (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-4">
                <Search className="w-8 h-8 text-muted-foreground" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">Nenhum jogo encontrado</h3>
              <p className="text-muted-foreground text-sm max-w-[250px]">
                Tente ajustar seus filtros ou buscar por outro termo
              </p>
            </div>
          )}
        </div>

        <BottomNav />
      </div>
    </MobileLayout>
  );
};

export default SearchPage;
