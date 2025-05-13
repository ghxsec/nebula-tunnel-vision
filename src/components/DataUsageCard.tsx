
import React from "react";
import { Progress } from "@/components/ui/progress";
import { BarChart } from "lucide-react";

interface DataPoint {
  label: string;
  value: number;
}

interface DataUsageCardProps {
  totalUsed: number;
  totalLimit: number;
  usagePercent: number;
  weeklyData: DataPoint[];
}

const DataUsageCard: React.FC<DataUsageCardProps> = ({
  totalUsed,
  totalLimit,
  usagePercent,
  weeklyData,
}) => {
  const formattedTotal = (totalUsed / 1024).toFixed(2);
  const formattedLimit = (totalLimit / 1024).toFixed(0);

  return (
    <div className="glass rounded-2xl p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-medium">Data Usage</h2>
        <div className="h-8 w-8 rounded-full bg-vpn-card flex items-center justify-center">
          <BarChart className="h-4 w-4 text-vpn-neon" />
        </div>
      </div>

      <div className="mb-6">
        <div className="flex justify-between mb-2 text-sm">
          <span>{formattedTotal} GB Used</span>
          <span>{formattedLimit} GB Limit</span>
        </div>
        <Progress value={usagePercent} className="h-2 bg-secondary" />
      </div>

      <div className="grid grid-cols-7 gap-1 h-36">
        {weeklyData.map((day, i) => (
          <div key={i} className="flex flex-col items-center justify-end h-full">
            <div 
              className="w-full rounded-sm bg-vpn-neon/30 hover:bg-vpn-neon/50 transition-all"
              style={{ height: `${day.value}%` }}
            ></div>
            <span className="text-xs mt-2 text-muted-foreground">{day.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DataUsageCard;
