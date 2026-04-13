import { CloudRain, Fan, Pipette } from "lucide-react";

const StatusPanel = () => (
  <div className="flex flex-col gap-4">
    {/* Weather Banner */}
    <div className="flex items-center gap-4 rounded-xl border border-border bg-alert-orange-light p-4 shadow-sm">
      <CloudRain className="h-8 w-8 text-alert-orange" />
      <div>
        <p className="text-sm font-semibold text-foreground">Prévision Météo</p>
        <p className="text-xs text-muted-foreground">Pluie attendue à 16h — probabilité 78%</p>
      </div>
    </div>

    {/* Fan Status */}
    <div className="flex items-center justify-between rounded-xl border border-border bg-card p-4 shadow-sm">
      <div className="flex items-center gap-3">
        <Fan className="h-5 w-5 text-muted-foreground" />
        <div>
          <p className="text-sm font-medium text-foreground">Ventilateur</p>
          <p className="text-xs text-muted-foreground">Extracteur principal</p>
        </div>
      </div>
      <span className="rounded-full bg-emerald-light px-2.5 py-0.5 text-[11px] font-semibold text-emerald">
        ACTIF
      </span>
    </div>

    {/* Pump Status */}
    <div className="flex items-center justify-between rounded-xl border border-border bg-card p-4 shadow-sm">
      <div className="flex items-center gap-3">
        <Pipette className="h-5 w-5 text-muted-foreground" />
        <div>
          <p className="text-sm font-medium text-foreground">Pompe Hydraulique</p>
          <p className="text-xs text-muted-foreground">Irrigation goutte-à-goutte</p>
        </div>
      </div>
      <span className="rounded-full bg-secondary px-2.5 py-0.5 text-[11px] font-semibold text-muted-foreground">
        VEILLE
      </span>
    </div>
  </div>
);

export default StatusPanel;
