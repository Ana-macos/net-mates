import { ReactNode } from "react";
import { motion } from "framer-motion";

interface MobileLayoutProps {
  children: ReactNode;
  showNav?: boolean;
  className?: string;
}

export const MobileLayout = ({ children, className = "" }: MobileLayoutProps) => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className={`mobile-container w-full max-w-[390px] min-h-[844px] rounded-[40px] overflow-hidden border border-border/30 shadow-2xl relative ${className}`}
        style={{
          background: "linear-gradient(180deg, hsl(220 20% 12%) 0%, hsl(220 20% 8%) 100%)",
        }}
      >
        {/* Status bar mockup */}
        <div className="h-12 px-6 flex items-center justify-between text-xs text-muted-foreground">
          <span className="font-medium">9:41</span>
          <div className="flex items-center gap-1">
            <div className="w-4 h-2 border border-muted-foreground rounded-sm relative">
              <div className="absolute inset-0.5 bg-primary rounded-[1px]" style={{ width: "70%" }} />
            </div>
          </div>
        </div>
        
        {children}
      </motion.div>
    </div>
  );
};
