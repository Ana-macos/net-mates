import { ReactNode } from "react";
import { motion } from "framer-motion";

interface MobileLayoutProps {
  children: ReactNode;
  showNav?: boolean;
  showStatusBar?: boolean;
  className?: string;
}

export const MobileLayout = ({ children, showStatusBar = true, className = "" }: MobileLayoutProps) => {
  return (
    <div className="min-h-screen bg-muted flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className={`mobile-container w-full max-w-[390px] min-h-[844px] rounded-[40px] overflow-hidden border border-border/30 shadow-2xl relative bg-background ${className}`}
      >
        {/* Status bar mockup */}
        {showStatusBar && (
          <div className="h-12 px-6 flex items-center justify-between text-xs text-foreground sticky top-0 z-50 bg-background/95 backdrop-blur-sm">
            <span className="font-medium">9:41</span>
            <div className="flex items-center gap-1">
              <div className="w-4 h-2 border border-foreground/50 rounded-sm relative">
                <div className="absolute inset-0.5 bg-primary rounded-[1px]" style={{ width: "70%" }} />
              </div>
            </div>
          </div>
        )}
        
        {children}
      </motion.div>
    </div>
  );
};
