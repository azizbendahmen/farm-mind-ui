import { CloudRain, Fan, Pipette, Power, Pause, Cloud, CloudDrizzle, Sun, CloudSun, Wind, Droplets, Sparkles, Hand, type LucideIcon } from "lucide-react";
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

/* ===================== Simple Weather Forecast =====================
   TODO: Remplacez `weather` par les données de votre API météo.
   Exemple d'intégration :
     const { data: weather } = useQuery({
       queryKey: ["weather"],
       queryFn: async () => {
         const res = await fetch("https://api.openweathermap.org/...");
         const json = await res.json();
         return {
           temp: Math.round(json.main.temp),
           feelsLike: Math.round(json.main.feels_like),
           condition: json.weather[0].main,            // "Rain" | "Clouds" | "Clear" | ...
           description: json.weather[0].description,
           rainProbability: Math.round((json.pop ?? 0) * 100),
           humidity: json.main.humidity,
           wind: Math.round(json.wind.speed * 3.6),
           rainMm: json.rain?.["1h"] ?? 0,
         };
       },
     });
================================================================== */

type WeatherData = {
  temp: number;
  feelsLike: number;
  condition: "Rain" | "Drizzle" | "Clouds" | "Clear" | "PartlyCloudy";
  description: string;
  rainProbability: number;
  humidity: number;
  wind: number;
  rainMm: number;
};

// ⚠️ Données de démo — à remplacer par votre API
const MOCK_WEATHER: WeatherData = {
  temp: 19,
  feelsLike: 17,
  condition: "Rain",
  description: "Pluie attendue à 16h",
  rainProbability: 78,
  humidity: 84,
  wind: 15,
  rainMm: 12,
};

const CONDITION_MAP: Record<WeatherData["condition"], { icon: LucideIcon; label: string }> = {
  Rain:         { icon: CloudRain,    label: "Pluie" },
  Drizzle:      { icon: CloudDrizzle, label: "Bruine" },
  Clouds:       { icon: Cloud,        label: "Nuageux" },
  Clear:        { icon: Sun,          label: "Ensoleillé" },
  PartlyCloudy: { icon: CloudSun,     label: "Éclaircies" },
};

const WeatherForecast = ({ weather = MOCK_WEATHER }: { weather?: WeatherData }) => {
  const { icon: Icon } = CONDITION_MAP[weather.condition];
  const willRain = weather.rainProbability >= 50;

  return (
    <div className="botanical-card p-4 sm:p-5">
      <div className="flex items-center justify-between gap-4">
        {/* Left: condition + advice */}
        <div className="flex items-center gap-3 min-w-0">
          <div className={`p-3 rounded-2xl shrink-0 ${willRain ? "bg-water/10" : "bg-warning/10"}`}>
            <Icon className={`h-7 w-7 ${willRain ? "text-water" : "text-warning"}`} />
          </div>
          <div className="min-w-0">
            <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
              Météo · Aujourd'hui
            </p>
            <h2 className="font-heading text-base sm:text-lg font-bold text-foreground truncate">
              {weather.description}
            </h2>
            {willRain && (
              <p className="text-xs text-water font-medium mt-0.5">
                💧 Reportez l'arrosage
              </p>
            )}
          </div>
        </div>

        {/* Right: temperature */}
        <div className="text-right shrink-0">
          <p className="font-heading text-3xl sm:text-4xl font-bold text-foreground leading-none">
            {weather.temp}°
          </p>
          <p className="text-[11px] text-muted-foreground mt-1">Ressenti {weather.feelsLike}°</p>
        </div>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-3 gap-2 mt-4 pt-4 border-t border-border">
        <MiniStat icon={CloudRain} label="Pluie" value={`${weather.rainProbability}%`} highlight={willRain} />
        <MiniStat icon={Droplets}  label="Humidité" value={`${weather.humidity}%`} />
        <MiniStat icon={Wind}      label="Vent" value={`${weather.wind} km/h`} />
      </div>
    </div>
  );
};

const MiniStat = ({
  icon: Icon, label, value, highlight,
}: { icon: LucideIcon; label: string; value: string; highlight?: boolean }) => (
  <div className="flex items-center gap-2">
    <Icon className={`h-4 w-4 shrink-0 ${highlight ? "text-water" : "text-muted-foreground"}`} />
    <div className="min-w-0">
      <p className="text-[10px] uppercase tracking-wider font-semibold text-muted-foreground leading-none">
        {label}
      </p>
      <p className={`text-sm font-bold leading-tight mt-0.5 ${highlight ? "text-water" : "text-foreground"}`}>
        {value}
      </p>
    </div>
  </div>
);

export default AutomationPage;
