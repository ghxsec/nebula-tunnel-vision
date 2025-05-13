
import React, { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import StatusCard from '@/components/StatusCard';
import ServerCard from '@/components/ServerCard';
import IPAddressCard from '@/components/IPAddressCard';
import PerformanceMetrics from '@/components/PerformanceMetrics';
import DataUsageCard from '@/components/DataUsageCard';
import QuickAccess from '@/components/QuickAccess';
import { Button } from '@/components/ui/button';
import { useToast } from "@/hooks/use-toast";
import { useIsMobile } from '@/hooks/use-mobile';
import { Menu } from 'lucide-react';

const VPNDashboard = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [connected, setConnected] = useState(false);
  const [selectedProtocol, setSelectedProtocol] = useState('WireGuard');
  const { toast } = useToast();
  const isMobile = useIsMobile();

  const handleToggleConnection = () => {
    setConnected(!connected);
    toast({
      title: connected ? 'VPN Disconnected' : 'VPN Connected',
      description: connected 
        ? 'Your connection is no longer secure' 
        : 'Your connection is now secure',
    });
  };

  const protocols = ['WireGuard', 'OpenVPN', 'IKEv2'];
  
  const currentServer = {
    country: 'United States',
    city: 'New York',
    flag: '🇺🇸',
    latency: 42,
    load: 65,
  };

  const weeklyData = [
    { label: 'Mon', value: 35 },
    { label: 'Tue', value: 48 },
    { label: 'Wed', value: 62 },
    { label: 'Thu', value: 45 },
    { label: 'Fri', value: 78 },
    { label: 'Sat', value: 55 },
    { label: 'Sun', value: 40 },
  ];

  return (
    <div className="flex min-h-screen">
      <Sidebar collapsed={sidebarCollapsed} setCollapsed={setSidebarCollapsed} />
      
      <div className="flex-1">
        <header className="px-6 py-4 flex items-center justify-between">
          {isMobile && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
              className="text-white"
            >
              <Menu />
            </Button>
          )}
          <div className="flex-1" />
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-gradient-to-r from-vpn-neon to-blue-500" />
            <div className="text-sm font-medium">Pro User</div>
          </div>
        </header>
        
        <main className="px-6 pb-10">
          <div className="mb-8">
            <h1 className="text-2xl font-bold">VPN Dashboard</h1>
            <p className="text-muted-foreground">Monitor and control your secure connection</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-1">
              <StatusCard 
                connected={connected} 
                onToggleConnection={handleToggleConnection} 
              />
            </div>
            
            <div className="lg:col-span-1">
              <ServerCard currentServer={currentServer} />
            </div>
            
            <div className="lg:col-span-1">
              <IPAddressCard
                originalIP="192.168.1.105"
                maskedIP="45.86.112.23"
                connected={connected}
              />
            </div>
            
            <div className="lg:col-span-1">
              <QuickAccess 
                protocols={protocols}
                selectedProtocol={selectedProtocol}
                onProtocolChange={setSelectedProtocol}
              />
            </div>

            <div className="lg:col-span-1">
              <PerformanceMetrics />
            </div>
            
            <div className="lg:col-span-1">
              <DataUsageCard
                totalUsed={512}
                totalLimit={1024}
                usagePercent={50}
                weeklyData={weeklyData}
              />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default VPNDashboard;
