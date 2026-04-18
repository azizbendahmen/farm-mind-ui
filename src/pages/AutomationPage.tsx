import { CloudRain, Fan, Pipette, Power, Pause, Cloud, CloudDrizzle, Sun, CloudSun, Wind, Droplets, Thermometer, Umbrella, Sunrise, Sunset } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const AutomationPage = () => {
  const [fanActive, setFanActive] = useState(true);
  const [pumpActive, setPumpActive] = useState(false);

  return (
    <div className="space-y-8 max-w-5xl mx-auto">
      <div>
        <h1 className="font-heading text-2xl font-bold text-foreground mb-1">Automates</h1>
        <p className="text-sm text-muted-foreground">Contrôle des équipements et prévisions météo</p>
      </div>

      {/* ===== Creative Weather Forecast ===== */}
      <WeatherForecast />

      {/* Equipment Controls */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <EquipmentCard
          title="Ventilateur"
          description="Extracteur principal — Zone A"
          icon={Fan}
          active={fanActive}
          onActivate={() => setFanActive(true)}
          onDeactivate={() => setFanActive(false)}
          activeColor="text-primary"
          activeBg="bg-primary/8"
          spinning
        />
        <EquipmentCard
          title="Pompe Hydraulique"
          description="Irrigation goutte-à-goutte — Bac 3"
          icon={Pipette}
          active={pumpActive}
          onActivate={() => setPumpActive(true)}
          onDeactivate={() => setPumpActive(false)}
          activeColor="text-water"
          activeBg="bg-water/8"
        />
      </div>
    </div>
  );
};

const EquipmentCard = ({
  title, description, icon: Icon, active, onActivate, onDeactivate, activeColor, activeBg, spinning
}: {
  title: string; description: string; icon: any; active: boolean;
  onActivate: () => void; onDeactivate: () => void;
  activeColor: string; activeBg: string; spinning?: boolean;
}) => (
  <div className={`botanical-card p-6 transition-all ${active ? "ring-1 ring-primary/15" : ""}`}>
    <div className="flex items-start justify-between mb-6">
      <div className="flex items-center gap-3">
        <div className={`p-3 rounded-2xl ${active ? activeBg : "bg-muted"}`}>
          <Icon
            className={`h-6 w-6 ${active ? activeColor : "text-muted-foreground"} ${active && spinning ? "animate-spin" : ""}`}
            style={active && spinning ? { animationDuration: "3s" } : {}}
          />
        </div>
        <div>
          <h3 className="text-base font-semibold text-foreground">{title}</h3>
          <p className="text-xs text-muted-foreground">{description}</p>
        </div>
      </div>
      <span className={`rounded-full px-3 py-1 text-[11px] font-bold tracking-wider ${
        active ? `${activeBg} ${activeColor}` : "bg-muted text-muted-foreground"
      }`}>
        {active ? "ACTIF" : "VEILLE"}
      </span>
    </div>
    <div className="flex gap-3">
      <Button
        onClick={onActivate}
        disabled={active}
        className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90 h-10"
        size="sm"
      >
        <Power className="h-3.5 w-3.5 mr-1.5" /> Activer
      </Button>
      <Button
        onClick={onDeactivate}
        disabled={!active}
        variant="outline"
        className="flex-1 h-10"
        size="sm"
      >
        <Pause className="h-3.5 w-3.5 mr-1.5" /> Arrêter
      </Button>
    </div>
  </div>
);

export default AutomationPage;
