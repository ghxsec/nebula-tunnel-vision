
import React from "react";
import { Card } from "@/components/ui/card";
import { Download, Upload, Clock, Activity } from "lucide-react";

interface MetricCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  unit: string;
  trend?: number;
}

const MetricCard: React.FC<MetricCardProps> = ({ icon, title, value, unit, trend }) => {
  return (
    <Card className="glass p-4 rounded-xl">
      <div className="flex items-center justify-between mb-3">
        <span className="text-sm text-muted-foreground">{title}</span>
        <div className="h-8 w-8 rounded-full bg-vpn-card flex items-center justify-center text-vpn-neon">
          {icon}
        </div>
      </div>
      <div className="flex items-baseline">
        <span className="text-2xl font-bold mr-1">{value}</span>
        <span className="text-xs text-muted-foreground">{unit}</span>
      </div>
      {trend !== undefined && (
        <div className="mt-2 text-xs flex items-center">
          <div className={`h-2 w-2 rounded-full mr-1 ${trend > 0 ? 'bg-green-500' : 'bg-red-500'}`}></div>
          <span className={trend > 0 ? 'text-green-500' : 'text-red-500'}>
            {trend > 0 ? '+' : ''}{trend}% from average
          </span>
        </div>
      )}
    </Card>
  );
};

const PerformanceMetrics: React.FC = () => {
  return (
    <div className="glass rounded-2xl p-6">
      <h2 className="text-lg font-medium mb-6">Performance Metrics</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <MetricCard
          icon={<Download className="h-4 w-4" />}
          title="Download"
          value="86.4"
          unit="Mbps"
          trend={3}
        />
        
        <MetricCard
          icon={<Upload className="h-4 w-4" />}
          title="Upload"
          value="35.2"
          unit="Mbps"
          trend={-2}
        />
        
        <MetricCard
          icon={<Clock className="h-4 w-4" />}
          title="Latency"
          value="42"
          unit="ms"
        />
        
        <MetricCard
          icon={<Activity className="h-4 w-4" />}
          title="Packet Loss"
          value="0.1"
          unit="%"
        />
      </div>
    </div>
  );
};

export default PerformanceMetrics;
