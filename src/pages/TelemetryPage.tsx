import { Thermometer, Droplets, Sprout, Wind } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const sensors = [
  {
    label: "Température",
    value: 24.6,
    unit: "°C",
    min: 15,
    max: 40,
    optimal: [20, 28],
    icon: Thermometer,
    color: "bg-warning",
    description: "Capteur DHT22 — Zone A",
  },
  {
    label: "Humidité Air",
    value: 68,
    unit: "%",
    min: 0,
    max: 100,
    optimal: [60, 80],
    icon: Droplets,
    color: "bg-water",
    description: "Capteur DHT22 — Zone A",
  },
  {
    label: "Humidité Sol",
    value: 27,
    unit: "%",
    min: 0,
    max: 100,
    optimal: [30, 60],
    icon: Sprout,
    color: "bg-danger",
    alert: true,
    description: "Capteur capacitif — Bac 3",
  },
  {
    label: "Gaz / COV",
    value: 4.2,
    unit: "kΩ",
    min: 0,
    max: 10,
    optimal: [3, 8],
    icon: Wind,
    color: "bg-leaf",
    description: "Capteur MQ-135 — Zone A",
  },
];

const TelemetryPage = () => (
  <div className="space-y-8 max-w-5xl mx-auto">
    <div>
      <h1 className="font-heading text-2xl font-bold text-foreground mb-1">Capteurs IoT</h1>
      <p className="text-sm text-muted-foreground">Données temps réel de vos capteurs connectés</p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      {sensors.map((s) => {
        const percent = ((s.value - s.min) / (s.max - s.min)) * 100;
        const inRange = s.value >= s.optimal[0] && s.value <= s.optimal[1];
        return (
          <div
            key={s.label}
            className={`glass-card p-6 space-y-4 ${s.alert ? "ring-1 ring-danger/40" : ""}`}
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">{s.label}</p>
                <p className="text-[11px] text-muted-foreground/60 mt-0.5">{s.description}</p>
              </div>
              <div className={`p-2 rounded-xl ${s.alert ? "bg-danger/10" : "bg-secondary"}`}>
                <s.icon className={`h-5 w-5 ${s.alert ? "text-danger" : "text-muted-foreground"}`} />
              </div>
            </div>

            <div>
              <p className="font-heading text-5xl font-bold text-foreground">
                {s.value}
                <span className="text-lg font-normal text-muted-foreground ml-1">{s.unit}</span>
              </p>
            </div>

            <div className="space-y-2">
              <div className="h-2 rounded-full bg-secondary overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all duration-1000 ${s.color}`}
                  style={{ width: `${Math.min(percent, 100)}%` }}
                />
              </div>
              <div className="flex justify-between text-[10px] text-muted-foreground">
                <span>Min: {s.min}{s.unit}</span>
                <span className={inRange ? "text-primary font-medium" : "text-danger font-medium"}>
                  {inRange ? "✓ Dans la plage" : "✗ Hors plage"}
                </span>
                <span>Max: {s.max}{s.unit}</span>
              </div>
              <p className="text-[10px] text-muted-foreground/60">
                Plage optimale : {s.optimal[0]}–{s.optimal[1]} {s.unit}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  </div>
);

export default TelemetryPage;
