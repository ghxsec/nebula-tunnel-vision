
import React from "react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Globe, WifiOff } from "lucide-react";
import { cn } from "@/lib/utils";

interface StatusCardProps {
  connected: boolean;
  onToggleConnection: () => void;
}

const StatusCard: React.FC<StatusCardProps> = ({ 
  connected, 
  onToggleConnection 
}) => {
  return (
    <div className="glass rounded-2xl p-6 relative overflow-hidden">
      {connected && (
        <div className="absolute -top-10 -left-10 h-40 w-40 bg-vpn-neon/10 rounded-full blur-3xl" />
      )}
      
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-medium">Connection Status</h2>
        <Switch 
          checked={connected} 
          onCheckedChange={onToggleConnection}
          className={cn(
            "data-[state=checked]:bg-vpn-neon",
            connected && "animate-glow-pulse"
          )}
        />
      </div>
      
      <div className="flex flex-col items-center justify-center py-8 space-y-4">
        <div className={cn(
          "h-24 w-24 rounded-full flex items-center justify-center transition-all duration-300",
          connected ? "bg-vpn-neon/20 animate-float" : "bg-destructive/20"
        )}>
          <div className={cn(
            "h-16 w-16 rounded-full flex items-center justify-center",
            connected ? "bg-vpn-neon/30" : "bg-destructive/30"
          )}>
            {connected ? (
              <Globe className="h-8 w-8 text-vpn-neon" />
            ) : (
              <WifiOff className="h-8 w-8 text-destructive" />
            )}
          </div>
        </div>
        
        <div className="text-center">
          <h3 className={cn(
            "text-2xl font-bold",
            connected ? "text-vpn-neon" : "text-destructive"
          )}>
            {connected ? "Connected" : "Disconnected"}
          </h3>
          <p className="text-muted-foreground mt-1">
            {connected 
              ? "Your connection is secure" 
              : "Your connection is not secure"
            }
          </p>
        </div>
      </div>
      
      <Button
        onClick={onToggleConnection}
        className={cn(
          "w-full py-6", 
          connected 
            ? "bg-destructive hover:bg-destructive/90" 
            : "bg-vpn-neon text-black hover:bg-vpn-neon/90"
        )}
      >
        {connected ? "Disconnect" : "Connect Now"}
      </Button>
      
      {connected && (
        <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
          <div>
            <p className="text-muted-foreground">Connected Time</p>
            <p className="font-medium">00:42:13</p>
          </div>
          <div>
            <p className="text-muted-foreground">Protocol</p>
            <p className="font-medium">WireGuard</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default StatusCard;
