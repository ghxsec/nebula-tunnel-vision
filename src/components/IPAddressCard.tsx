
import React from "react";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

interface IPAddressCardProps {
  originalIP: string;
  maskedIP: string;
  connected: boolean;
}

const IPAddressCard: React.FC<IPAddressCardProps> = ({ originalIP, maskedIP, connected }) => {
  return (
    <div className="glass rounded-2xl p-6">
      <h2 className="text-lg font-medium mb-6">IP Address</h2>

      <div className="space-y-6">
        <div className="glass rounded-lg p-4">
          <p className="text-xs text-muted-foreground mb-2">Original IP</p>
          <div className="flex items-center space-x-2">
            <div className={cn(
              "h-2 w-2 rounded-full",
              connected ? "bg-muted-foreground" : "bg-red-500"
            )} />
            <p className="font-mono">{originalIP}</p>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="h-8 flex items-center">
            <ArrowRight className="h-5 w-5 text-vpn-neon" />
          </div>
        </div>

        <div className={cn(
          "glass rounded-lg p-4",
          connected && "border border-vpn-neon shadow-[0_0_10px_rgba(0,245,255,0.1)]"
        )}>
          <p className="text-xs text-muted-foreground mb-2">Masked IP</p>
          <div className="flex items-center space-x-2">
            <div className={cn(
              "h-2 w-2 rounded-full",
              connected ? "bg-vpn-neon" : "bg-muted-foreground"
            )} />
            <p className="font-mono">{connected ? maskedIP : "Not connected"}</p>
          </div>
        </div>
      </div>

      <div className="mt-6 text-xs text-center text-muted-foreground">
        {connected ? (
          <p>Your real IP address is hidden</p>
        ) : (
          <p>Connect to mask your IP address</p>
        )}
      </div>
    </div>
  );
};

export default IPAddressCard;
