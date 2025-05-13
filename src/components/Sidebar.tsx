
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";
import { 
  Settings, 
  Globe, 
  Activity, 
  Server, 
  Download, 
  Upload, 
  Clock
} from "lucide-react";

interface SidebarProps {
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ collapsed, setCollapsed }) => {
  const isMobile = useIsMobile();

  const menuItems = [
    { icon: Globe, label: "Dashboard", path: "/" },
    { icon: Server, label: "Servers", path: "#" },
    { icon: Activity, label: "Usage", path: "#" },
    { icon: Settings, label: "Settings", path: "#" },
  ];

  return (
    <aside
      className={cn(
        "glass h-screen sticky top-0 transition-all duration-300 flex flex-col",
        collapsed ? "w-16" : "w-64",
        isMobile && collapsed ? "-translate-x-full" : "translate-x-0"
      )}
    >
      <div className="p-4 flex items-center justify-between">
        <div className={cn("flex items-center", collapsed && "justify-center w-full")}>
          {!collapsed && (
            <span className="text-xl font-bold ml-2 neon-text">QuantumVPN</span>
          )}
          {collapsed && <div className="h-8 w-8 rounded-full bg-vpn-neon animate-pulse" />}
        </div>
        {!isMobile && (
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setCollapsed(!collapsed)}
            className="text-white hover:bg-vpn-card-hover"
          >
            {collapsed ? "→" : "←"}
          </Button>
        )}
      </div>

      <div className="flex-1 py-8">
        <nav className="space-y-2 px-2">
          {menuItems.map((item) => (
            <Link
              key={item.label}
              to={item.path}
              className={cn(
                "flex items-center py-3 px-4 rounded-lg transition-all hover:bg-vpn-card-hover group",
                item.label === "Dashboard" && "bg-vpn-card-hover border-l-2 border-vpn-neon"
              )}
            >
              <item.icon className="h-5 w-5 text-vpn-neon" />
              {!collapsed && <span className="ml-3 text-sm">{item.label}</span>}
            </Link>
          ))}
        </nav>
      </div>

      <div className="p-4">
        <div className={cn(
          "glass rounded-lg p-4",
          collapsed ? "items-center justify-center" : ""
        )}>
          {!collapsed ? (
            <div className="space-y-2">
              <p className="text-xs text-muted-foreground">Plan Status</p>
              <p className="text-sm font-medium">Premium Plan</p>
              <div className="h-1 bg-secondary rounded-full w-full overflow-hidden">
                <div className="h-full bg-vpn-neon w-3/4 rounded-full" />
              </div>
              <p className="text-xs text-muted-foreground">Expires in 21 days</p>
            </div>
          ) : (
            <div className="flex justify-center">
              <div className="h-8 w-8 rounded-full bg-gradient-to-r from-vpn-neon to-blue-500" />
            </div>
          )}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
