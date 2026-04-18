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

/* ===================== Creative Weather Forecast ===================== */
const HOURLY = [
  { h: "12h", t: 22, p: 5,  icon: Sun },
  { h: "13h", t: 23, p: 10, icon: CloudSun },
  { h: "14h", t: 22, p: 25, icon: Cloud },
  { h: "15h", t: 21, p: 55, icon: CloudDrizzle },
  { h: "16h", t: 19, p: 78, icon: CloudRain, peak: true },
  { h: "17h", t: 18, p: 65, icon: CloudRain },
  { h: "18h", t: 18, p: 40, icon: CloudDrizzle },
  { h: "19h", t: 19, p: 15, icon: Cloud },
];

const WeatherForecast = () => (
  <div className="relative overflow-hidden rounded-3xl border border-border shadow-sm">
    {/* Sky gradient */}
    <div
      className="absolute inset-0"
      style={{
        background:
          "linear-gradient(135deg, hsl(210 65% 88%) 0%, hsl(220 50% 78%) 45%, hsl(230 35% 55%) 100%)",
      }}
    />
    {/* Animated rain */}
    <div className="absolute inset-0 opacity-40 pointer-events-none overflow-hidden">
      {Array.from({ length: 30 }).map((_, i) => (
        <span
          key={i}
          className="absolute block w-px bg-gradient-to-b from-transparent via-white to-transparent"
          style={{
            left: `${(i * 3.4) % 100}%`,
            top: `-${Math.random() * 40}%`,
            height: `${20 + Math.random() * 40}px`,
            animation: `rain-fall ${0.6 + Math.random() * 0.8}s linear ${Math.random()}s infinite`,
          }}
        />
      ))}
    </div>
    {/* Soft clouds */}
    <div className="absolute -top-10 -right-10 h-48 w-48 rounded-full bg-white/30 blur-3xl" />
    <div className="absolute top-20 left-1/3 h-32 w-32 rounded-full bg-white/20 blur-2xl" />

    <div className="relative z-10 p-6 sm:p-8 text-white">
      <div className="flex flex-wrap items-start justify-between gap-4 mb-8">
        <div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.15em] mb-3">
            <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
            Live · Météo France
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold leading-tight">
            Pluie attendue à 16h
          </h2>
          <p className="text-sm text-white/80 mt-1">
            Probabilité <span className="font-bold text-white">78%</span> · Reportez l'arrosage externe
          </p>
        </div>
        <div className="flex items-center gap-4">
          <CloudRain className="h-16 w-16 text-white drop-shadow-lg animate-float" />
          <div>
            <p className="font-heading text-5xl font-bold leading-none">19°</p>
            <p className="text-xs text-white/70 mt-1">Ressenti 17°</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-8">
        <MiniStat icon={Droplets} label="Précipitations" value="12 mm" />
        <MiniStat icon={Wind} label="Vent" value="15 km/h" sub="NO" />
        <MiniStat icon={Umbrella} label="Humidité" value="84%" />
        <MiniStat icon={Thermometer} label="Pression" value="1008 hPa" />
      </div>

      <div className="rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 p-4 sm:p-5">
        <div className="flex items-center justify-between mb-4">
          <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-white/80">
            Prévisions horaires · Probabilité de pluie
          </p>
          <div className="flex items-center gap-3 text-[10px] text-white/60">
            <span className="flex items-center gap-1"><Sunrise className="h-3 w-3" /> 06:42</span>
            <span className="flex items-center gap-1"><Sunset className="h-3 w-3" /> 21:18</span>
          </div>
        </div>

        <div className="grid grid-cols-8 gap-1.5 sm:gap-3">
          {HOURLY.map((slot) => {
            const Icon = slot.icon;
            return (
              <div key={slot.h} className="flex flex-col items-center gap-2">
                <span className={`text-[11px] font-bold ${slot.peak ? "text-white" : "text-white/70"}`}>
                  {slot.p}%
                </span>
                <div className="relative w-full h-16 rounded-full bg-white/10 overflow-hidden">
                  <div
                    className={`absolute bottom-0 left-0 right-0 rounded-full transition-all duration-700 ${
                      slot.peak
                        ? "bg-gradient-to-t from-white to-white/60"
                        : "bg-gradient-to-t from-white/70 to-white/30"
                    }`}
                    style={{ height: `${slot.p}%` }}
                  />
                  {slot.peak && (
                    <span className="absolute -top-1 left-1/2 -translate-x-1/2 h-2 w-2 rounded-full bg-warning animate-pulse ring-2 ring-warning/40" />
                  )}
                </div>
                <Icon className={`h-4 w-4 ${slot.peak ? "text-white" : "text-white/70"}`} />
                <span className="text-[10px] font-medium text-white/80">{slot.t}°</span>
                <span className={`text-[10px] ${slot.peak ? "font-bold text-white" : "text-white/60"}`}>
                  {slot.h}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>

    <style>{`
      @keyframes rain-fall {
        0%   { transform: translateY(-20px); opacity: 0; }
        20%  { opacity: 1; }
        100% { transform: translateY(400px); opacity: 0; }
      }
    `}</style>
  </div>
);

const MiniStat = ({ icon: Icon, label, value, sub }: { icon: any; label: string; value: string; sub?: string }) => (
  <div className="rounded-xl bg-white/10 backdrop-blur-md border border-white/15 px-3 py-2.5">
    <div className="flex items-center gap-1.5 text-white/70 mb-1">
      <Icon className="h-3 w-3" />
      <span className="text-[10px] uppercase tracking-wider font-semibold">{label}</span>
    </div>
    <p className="text-sm font-bold text-white">
      {value} {sub && <span className="text-[10px] font-normal text-white/60 ml-0.5">{sub}</span>}
    </p>
  </div>
);

export default AutomationPage;
