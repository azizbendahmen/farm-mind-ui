import { CloudRain, Fan, Pipette, Power, Pause, Cloud, CloudDrizzle, Sun, CloudSun, Wind, Droplets, Thermometer, Umbrella, Sunrise, Sunset, Sparkles, Hand } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

type Mode = "auto" | "manual";

const AutomationPage = () => {
  const [fanActive, setFanActive] = useState(true);
  const [fanMode, setFanMode] = useState<Mode>("manual");
  const [pumpActive, setPumpActive] = useState(false);
  const [pumpMode, setPumpMode] = useState<Mode>("auto");

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      <div>
        <h1 className="font-heading text-2xl font-bold text-foreground mb-1">Automates</h1>
        <p className="text-sm text-muted-foreground">Contrôle des équipements et prévisions météo</p>
      </div>

      {/* ===== Compact Creative Weather Forecast ===== */}
      <WeatherForecast />

      {/* Equipment Controls */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <EquipmentCard
          title="Ventilateur"
          description="Extracteur principal — Zone A"
          icon={Fan}
          active={fanActive}
          mode={fanMode}
          onModeChange={setFanMode}
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
          mode={pumpMode}
          onModeChange={setPumpMode}
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
  title, description, icon: Icon, active, mode, onModeChange,
  onActivate, onDeactivate, activeColor, activeBg, spinning
}: {
  title: string; description: string; icon: any; active: boolean;
  mode: Mode; onModeChange: (m: Mode) => void;
  onActivate: () => void; onDeactivate: () => void;
  activeColor: string; activeBg: string; spinning?: boolean;
}) => {
  const isAuto = mode === "auto";
  return (
    <div className={`botanical-card p-6 transition-all ${active ? "ring-1 ring-primary/15" : ""}`}>
      <div className="flex items-start justify-between mb-5">
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

      {/* Mode Toggle */}
      <div className="mb-4">
        <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground mb-2">Mode de fonctionnement</p>
        <div className="grid grid-cols-2 gap-1.5 p-1 bg-muted rounded-xl">
          <button
            onClick={() => onModeChange("auto")}
            className={`flex items-center justify-center gap-1.5 py-2 rounded-lg text-xs font-semibold transition-all ${
              isAuto ? "bg-card text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <Sparkles className={`h-3.5 w-3.5 ${isAuto ? activeColor : ""}`} />
            Automatique
          </button>
          <button
            onClick={() => onModeChange("manual")}
            className={`flex items-center justify-center gap-1.5 py-2 rounded-lg text-xs font-semibold transition-all ${
              !isAuto ? "bg-card text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <Hand className="h-3.5 w-3.5" />
            Manuel
          </button>
        </div>
      </div>

      {isAuto ? (
        <div className={`rounded-xl ${activeBg} border border-border/50 px-4 py-3 flex items-center gap-2.5`}>
          <Sparkles className={`h-4 w-4 ${activeColor} shrink-0`} />
          <p className="text-xs text-foreground/80 leading-relaxed">
            Piloté par l'IA selon les <span className="font-semibold">capteurs</span> et la <span className="font-semibold">météo</span>.
          </p>
        </div>
      ) : (
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
      )}
    </div>
  );
};

/* ===================== Compact Creative Weather Forecast ===================== */
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
  <div className="relative overflow-hidden rounded-2xl border border-border shadow-sm">
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
      {Array.from({ length: 20 }).map((_, i) => (
        <span
          key={i}
          className="absolute block w-px bg-gradient-to-b from-transparent via-white to-transparent"
          style={{
            left: `${(i * 5) % 100}%`,
            top: `-${Math.random() * 40}%`,
            height: `${15 + Math.random() * 25}px`,
            animation: `rain-fall ${0.6 + Math.random() * 0.8}s linear ${Math.random()}s infinite`,
          }}
        />
      ))}
    </div>
    {/* Soft clouds */}
    <div className="absolute -top-8 -right-8 h-32 w-32 rounded-full bg-white/30 blur-3xl" />
    <div className="absolute top-10 left-1/3 h-20 w-20 rounded-full bg-white/20 blur-2xl" />

    <div className="relative z-10 p-4 sm:p-5 text-white">
      <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
        <div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 px-2.5 py-0.5 text-[9px] font-semibold uppercase tracking-[0.15em] mb-1.5">
            <span className="h-1 w-1 rounded-full bg-white animate-pulse" />
            Live · Météo France
          </span>
          <h2 className="font-heading text-xl sm:text-2xl font-bold leading-tight">
            Pluie attendue à 16h
          </h2>
          <p className="text-[11px] text-white/80 mt-0.5">
            Probabilité <span className="font-bold text-white">78%</span> · Reportez l'arrosage
          </p>
        </div>
        <div className="flex items-center gap-3">
          <CloudRain className="h-10 w-10 text-white drop-shadow-lg animate-float" />
          <div>
            <p className="font-heading text-3xl font-bold leading-none">19°</p>
            <p className="text-[10px] text-white/70 mt-0.5">Ressenti 17°</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-1.5 mb-4">
        <MiniStat icon={Droplets} label="Précip." value="12 mm" />
        <MiniStat icon={Wind} label="Vent" value="15 km/h" />
        <MiniStat icon={Umbrella} label="Humidité" value="84%" />
        <MiniStat icon={Thermometer} label="Pression" value="1008" />
      </div>

      <div className="rounded-xl bg-white/10 backdrop-blur-md border border-white/20 p-3">
        <div className="flex items-center justify-between mb-3">
          <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-white/80">
            Prévisions horaires
          </p>
          <div className="flex items-center gap-2 text-[9px] text-white/60">
            <span className="flex items-center gap-1"><Sunrise className="h-2.5 w-2.5" /> 06:42</span>
            <span className="flex items-center gap-1"><Sunset className="h-2.5 w-2.5" /> 21:18</span>
          </div>
        </div>

        <div className="grid grid-cols-8 gap-1 sm:gap-2">
          {HOURLY.map((slot) => {
            const Icon = slot.icon;
            return (
              <div key={slot.h} className="flex flex-col items-center gap-1.5">
                <span className={`text-[10px] font-bold ${slot.peak ? "text-white" : "text-white/70"}`}>
                  {slot.p}%
                </span>
                <div className="relative w-full h-10 rounded-full bg-white/10 overflow-hidden">
                  <div
                    className={`absolute bottom-0 left-0 right-0 rounded-full transition-all duration-700 ${
                      slot.peak
                        ? "bg-gradient-to-t from-white to-white/60"
                        : "bg-gradient-to-t from-white/70 to-white/30"
                    }`}
                    style={{ height: `${slot.p}%` }}
                  />
                  {slot.peak && (
                    <span className="absolute -top-0.5 left-1/2 -translate-x-1/2 h-1.5 w-1.5 rounded-full bg-warning animate-pulse ring-2 ring-warning/40" />
                  )}
                </div>
                <Icon className={`h-3 w-3 ${slot.peak ? "text-white" : "text-white/70"}`} />
                <span className="text-[9px] font-medium text-white/80">{slot.t}°</span>
                <span className={`text-[9px] ${slot.peak ? "font-bold text-white" : "text-white/60"}`}>
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
        100% { transform: translateY(300px); opacity: 0; }
      }
    `}</style>
  </div>
);

const MiniStat = ({ icon: Icon, label, value }: { icon: any; label: string; value: string }) => (
  <div className="rounded-lg bg-white/10 backdrop-blur-md border border-white/15 px-2.5 py-2">
    <div className="flex items-center gap-1 text-white/70 mb-0.5">
      <Icon className="h-2.5 w-2.5" />
      <span className="text-[9px] uppercase tracking-wider font-semibold">{label}</span>
    </div>
    <p className="text-xs font-bold text-white">{value}</p>
  </div>
);

export default AutomationPage;
