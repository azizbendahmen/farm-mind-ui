import { Thermometer, Droplets, Sprout, Wind } from "lucide-react";

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
    iconColor: "text-warning",
    bgColor: "bg-warning/8",
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
    iconColor: "text-water",
    bgColor: "bg-water/8",
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
    iconColor: "text-danger",
    bgColor: "bg-danger/8",
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
    color: "bg-primary",
    iconColor: "text-primary",
    bgColor: "bg-primary/8",
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
            className={`botanical-card p-6 space-y-5 ${s.alert ? "border-l-4 border-l-danger" : ""}`}
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{s.label}</p>
                <p className="text-[11px] text-muted-foreground/60 mt-0.5">{s.description}</p>
              </div>
              <div className={`p-2.5 rounded-xl ${s.bgColor}`}>
                <s.icon className={`h-5 w-5 ${s.iconColor}`} />
              </div>
            </div>

            <p className="font-heading text-5xl font-bold text-foreground">
              {s.value}
              <span className="text-lg font-sans font-normal text-muted-foreground ml-1">{s.unit}</span>
            </p>

            <div className="space-y-2.5">
              <div className="h-2.5 rounded-full bg-muted overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all duration-1000 ${s.color}`}
                  style={{ width: `${Math.min(percent, 100)}%` }}
                />
              </div>
              <div className="flex justify-between text-[11px] text-muted-foreground">
                <span>Min: {s.min}{s.unit}</span>
                <span className={`font-medium ${inRange ? "text-primary" : "text-danger"}`}>
                  {inRange ? "✓ Dans la plage optimale" : "✗ Hors plage optimale"}
                </span>
                <span>Max: {s.max}{s.unit}</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  </div>
);

export default TelemetryPage;
