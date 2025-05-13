
import React from "react";
import { Button } from "@/components/ui/button";
import { MapPin, Server, Settings } from "lucide-react";

interface ServerCardProps {
  currentServer: {
    country: string;
    city: string;
    flag: string;
    latency: number;
    load: number;
  };
}

const ServerCard: React.FC<ServerCardProps> = ({ currentServer }) => {
  return (
    <div className="glass rounded-2xl p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-medium">Server Location</h2>
        <Button variant="ghost" size="icon">
          <Settings className="h-4 w-4" />
        </Button>
      </div>

      <div className="flex items-center justify-center py-4 space-x-4">
        <div className="h-12 w-12 rounded-full bg-vpn-card flex items-center justify-center">
          <span className="text-2xl">{currentServer.flag}</span>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold">{currentServer.country}</h3>
          <div className="flex items-center text-sm text-muted-foreground">
            <MapPin className="h-3 w-3 mr-1" />
            <span>{currentServer.city}</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-6">
        <div className="glass p-3 rounded-lg">
          <p className="text-xs text-muted-foreground mb-1">Latency</p>
          <div className="flex items-center">
            <span className="text-vpn-neon font-medium">{currentServer.latency}</span>
            <span className="text-xs ml-1">ms</span>
          </div>
        </div>
        
        <div className="glass p-3 rounded-lg">
          <p className="text-xs text-muted-foreground mb-1">Server Load</p>
          <div className="flex items-center">
            <div className="flex-1 h-1 bg-secondary rounded-full overflow-hidden">
              <div 
                className="h-full bg-vpn-neon rounded-full"
                style={{ width: `${currentServer.load}%` }}
              />
            </div>
            <span className="text-xs ml-2">{currentServer.load}%</span>
          </div>
        </div>
      </div>

      <Button variant="outline" className="w-full mt-6 border-vpn-border text-sm">
        <Server className="h-4 w-4 mr-2" />
        Change Server
      </Button>
    </div>
  );
};

export default ServerCard;
