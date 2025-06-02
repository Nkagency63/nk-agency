
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Power, Settings } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const MaintenanceToggle = () => {
  const [isMaintenanceMode, setIsMaintenanceMode] = useState(false);
  const { toast } = useToast();

  const toggleMaintenance = () => {
    setIsMaintenanceMode(!isMaintenanceMode);
    toast({
      title: isMaintenanceMode ? "Site activé" : "Mode maintenance activé",
      description: isMaintenanceMode 
        ? "Le site est maintenant accessible aux visiteurs" 
        : "Le site est maintenant en mode maintenance",
      variant: isMaintenanceMode ? "default" : "destructive"
    });
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Button
        onClick={toggleMaintenance}
        variant={isMaintenanceMode ? "destructive" : "default"}
        size="lg"
        className="flex items-center gap-2 shadow-lg"
      >
        {isMaintenanceMode ? (
          <>
            <Power className="h-5 w-5" />
            Activer le site
          </>
        ) : (
          <>
            <Settings className="h-5 w-5" />
            Mode maintenance
          </>
        )}
      </Button>
    </div>
  );
};

export default MaintenanceToggle;
