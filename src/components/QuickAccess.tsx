
import React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { MapPin, Settings, WifiOff } from "lucide-react";

interface QuickAccessProps {
  protocols: string[];
  selectedProtocol: string;
  onProtocolChange: (protocol: string) => void;
}

const QuickAccess: React.FC<QuickAccessProps> = ({
  protocols,
  selectedProtocol,
  onProtocolChange,
}) => {
  return (
    <div className="glass rounded-2xl p-6">
      <h2 className="text-lg font-medium mb-6">Quick Access</h2>

      <div className="space-y-4">
        <div>
          <h3 className="text-sm text-muted-foreground mb-2">Protocol</h3>
          <div className="grid grid-cols-3 gap-2">
            {protocols.map((protocol) => (
              <Button
                key={protocol}
                variant="ghost"
                className={cn(
                  "h-10 px-3 text-sm border border-vpn-border",
                  selectedProtocol === protocol
                    ? "bg-vpn-neon/20 text-vpn-neon border-vpn-neon"
                    : "bg-vpn-card hover:bg-vpn-card-hover"
                )}
                onClick={() => onProtocolChange(protocol)}
              >
                {protocol}
              </Button>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm text-muted-foreground mb-2">Favorite Servers</h3>
          <div className="space-y-2">
            {[
              { flag: "🇺🇸", name: "US - New York" },
              { flag: "🇯🇵", name: "JP - Tokyo" },
              { flag: "🇩🇪", name: "DE - Frankfurt" },
            ].map((server) => (
              <Button
                key={server.name}
                variant="ghost"
                className="w-full justify-start h-10 bg-vpn-card hover:bg-vpn-card-hover"
              >
                <div className="mr-2 text-lg">{server.flag}</div>
                <div className="text-sm">{server.name}</div>
              </Button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 pt-2">
          <Button
            variant="ghost"
            className="flex flex-col h-16 space-y-1 bg-vpn-card hover:bg-vpn-card-hover"
          >
            <WifiOff className="h-4 w-4" />
            <span className="text-xs">Kill Switch</span>
          </Button>
          
          <Button
            variant="ghost"
            className="flex flex-col h-16 space-y-1 bg-vpn-card hover:bg-vpn-card-hover"
          >
            <MapPin className="h-4 w-4" />
            <span className="text-xs">Auto Connect</span>
          </Button>
          
          <Button
            variant="ghost"
            className="flex flex-col h-16 space-y-1 bg-vpn-card hover:bg-vpn-card-hover"
          >
            <Settings className="h-4 w-4" />
            <span className="text-xs">Settings</span>
          </Button>
          
          <Button
            variant="ghost"
            className="flex flex-col h-16 space-y-1 bg-vpn-card hover:bg-vpn-card-hover"
          >
            <div className="h-4 w-4 rounded-full bg-vpn-neon" />
            <span className="text-xs">Support</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default QuickAccess;
