import { CloudRain, Fan, Pipette, Power, Pause } from "lucide-react";
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

      {/* Weather Banner */}
      <div className="glass-card p-6 ring-1 ring-warning/20">
        <div className="flex items-start gap-4">
          <div className="p-3 rounded-2xl bg-warning/10">
            <CloudRain className="h-8 w-8 text-warning" />
          </div>
          <div className="flex-1">
            <h3 className="font-heading text-lg font-semibold text-foreground mb-1">
              Prévision Météo — API Prédictive
            </h3>
            <p className="text-sm text-muted-foreground mb-3">
              Pluie attendue à 16h00 avec une probabilité de <span className="text-warning font-semibold">78%</span>.
              Recommandation : reporter l'arrosage externe.
            </p>
            <div className="flex gap-6 text-xs text-muted-foreground">
              <span>🌡️ Ext: 19°C</span>
              <span>💧 Précip: 12mm</span>
              <span>💨 Vent: 15 km/h NO</span>
            </div>
          </div>
        </div>
      </div>

      {/* Equipment Controls */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className={`glass-card p-6 ${fanActive ? "ring-1 ring-primary/20" : ""}`}>
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className={`p-3 rounded-2xl ${fanActive ? "bg-primary/10" : "bg-secondary"}`}>
                <Fan className={`h-6 w-6 ${fanActive ? "text-primary animate-spin" : "text-muted-foreground"}`} style={fanActive ? { animationDuration: "3s" } : {}} />
              </div>
              <div>
                <h3 className="font-heading text-base font-semibold text-foreground">Ventilateur</h3>
                <p className="text-xs text-muted-foreground">Extracteur principal — Zone A</p>
              </div>
            </div>
            <span className={`rounded-full px-3 py-1 text-[11px] font-semibold ${
              fanActive ? "bg-primary/10 text-primary" : "bg-secondary text-muted-foreground"
            }`}>
              {fanActive ? "ACTIF" : "VEILLE"}
            </span>
          </div>
          <div className="flex gap-3">
            <Button
              onClick={() => setFanActive(true)}
              disabled={fanActive}
              className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90"
              size="sm"
            >
              <Power className="h-3 w-3 mr-1" /> Activer
            </Button>
            <Button
              onClick={() => setFanActive(false)}
              disabled={!fanActive}
              variant="outline"
              className="flex-1"
              size="sm"
            >
              <Pause className="h-3 w-3 mr-1" /> Arrêter
            </Button>
          </div>
        </div>

        <div className={`glass-card p-6 ${pumpActive ? "ring-1 ring-water/20" : ""}`}>
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className={`p-3 rounded-2xl ${pumpActive ? "bg-water/10" : "bg-secondary"}`}>
                <Pipette className={`h-6 w-6 ${pumpActive ? "text-water" : "text-muted-foreground"}`} />
              </div>
              <div>
                <h3 className="font-heading text-base font-semibold text-foreground">Pompe Hydraulique</h3>
                <p className="text-xs text-muted-foreground">Irrigation goutte-à-goutte — Bac 3</p>
              </div>
            </div>
            <span className={`rounded-full px-3 py-1 text-[11px] font-semibold ${
              pumpActive ? "bg-water/10 text-water" : "bg-secondary text-muted-foreground"
            }`}>
              {pumpActive ? "ACTIF" : "VEILLE"}
            </span>
          </div>
          <div className="flex gap-3">
            <Button
              onClick={() => setPumpActive(true)}
              disabled={pumpActive}
              className="flex-1 bg-water text-foreground hover:bg-water/90"
              size="sm"
            >
              <Power className="h-3 w-3 mr-1" /> Activer
            </Button>
            <Button
              onClick={() => setPumpActive(false)}
              disabled={!pumpActive}
              variant="outline"
              className="flex-1"
              size="sm"
            >
              <Pause className="h-3 w-3 mr-1" /> Arrêter
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AutomationPage;
