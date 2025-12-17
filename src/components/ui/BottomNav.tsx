import { Home, Search, MessageCircle, User } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const navItems = [
  { icon: Home, label: "Home", path: "/home" },
  { icon: Search, label: "Buscar", path: "/search" },
  { icon: MessageCircle, label: "Msgs", path: "/chat" },
  { icon: User, label: "Perfil", path: "/profile" },
];

export const BottomNav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="bottom-nav">
      <button
        onClick={() => navigate("/home")}
        className={`nav-item ${location.pathname === "/home" ? "active" : ""}`}
      >
        <Home className="w-6 h-6" />
        <span className="text-[10px] font-bold">Home</span>
      </button>
      
      <button
        onClick={() => navigate("/search")}
        className={`nav-item ${location.pathname === "/search" ? "active" : ""}`}
      >
        <Search className="w-6 h-6" />
        <span className="text-[10px] font-medium">Buscar</span>
      </button>
      
      {/* Central FAB spacer */}
      <div className="size-12 shrink-0" />
      
      {/* Central FAB */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
        <button 
          onClick={() => navigate("/create-game")}
          className="fab"
        >
          <span className="text-2xl">🎾</span>
        </button>
      </div>
      
      <button
        onClick={() => navigate("/chat")}
        className={`nav-item ${location.pathname === "/chat" ? "active" : ""}`}
      >
        <MessageCircle className="w-6 h-6" />
        <span className="text-[10px] font-medium">Msgs</span>
      </button>
      
      <button
        onClick={() => navigate("/profile")}
        className={`nav-item ${location.pathname === "/profile" ? "active" : ""}`}
      >
        <User className="w-6 h-6" />
        <span className="text-[10px] font-medium">Perfil</span>
      </button>
      
      {/* Home indicator */}
      <div className="absolute bottom-1 left-1/2 -translate-x-1/2">
        <div className="w-32 h-1 bg-foreground/20 rounded-full" />
      </div>
    </div>
  );
};
