import { Thermometer, Droplets, Sprout, Wind } from "lucide-react";
import type { ReactNode } from "react";

interface SensorCardProps {
  label: string;
  value: string;
  unit: string;
  icon: ReactNode;
  alert?: boolean;
}

const SensorCard = ({ label, value, unit, icon, alert }: SensorCardProps) => (
  <div
    className={`relative rounded-xl border bg-card p-5 shadow-sm transition-all ${
      alert ? "border-l-4 border-l-destructive border-t-border border-r-border border-b-border" : "border-border"
    }`}
  >
    <div className="flex items-start justify-between">
      <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
        {label}
      </p>
      <span className="text-muted-foreground/50">{icon}</span>
    </div>
    <p className="mt-3 font-display text-4xl font-bold tracking-tight text-foreground">
      {value}
      <span className="ml-1 text-lg font-normal text-muted-foreground">{unit}</span>
    </p>
  </div>
);

const TelemetryCards = () => {
  const soilHumidity = 27;
  const sensors = [
    { label: "Température", value: "24.6", unit: "°C", icon: <Thermometer className="h-4 w-4" /> },
    { label: "Humidité Air", value: "68", unit: "%", icon: <Droplets className="h-4 w-4" /> },
    { label: "Humidité Sol", value: String(soilHumidity), unit: "%", icon: <Sprout className="h-4 w-4" />, alert: soilHumidity < 30 },
    { label: "Gaz / COV", value: "4.2", unit: "kΩ", icon: <Wind className="h-4 w-4" /> },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {sensors.map((s) => (
        <SensorCard key={s.label} {...s} />
      ))}
    </div>
  );
};

export default TelemetryCards;
