import { Thermometer, Droplets, Sprout, Wind, TrendingUp, TrendingDown } from "lucide-react";
import greenhouseBg from "@/assets/greenhouse-bg.jpg";

const DashboardPage = () => {
  const stats = [
    { label: "Température", value: "24.6", unit: "°C", icon: Thermometer, trend: "+1.2", up: true, color: "text-warning" },
    { label: "Humidité Air", value: "68", unit: "%", icon: Droplets, trend: "-3", up: false, color: "text-water" },
    { label: "Humidité Sol", value: "27", unit: "%", icon: Sprout, trend: "-8", up: false, color: "text-danger", alert: true },
    { label: "Gaz / COV", value: "4.2", unit: "kΩ", icon: Wind, trend: "+0.1", up: true, color: "text-leaf" },
  ];

  return (
    <div className="space-y-8 max-w-6xl mx-auto">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-3xl glass-card p-8">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url(${greenhouseBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative z-10">
          <p className="text-xs font-medium uppercase tracking-widest text-primary mb-2">
            🌱 GreenHouse OS 4.0
          </p>
          <h1 className="font-heading text-3xl sm:text-4xl font-bold text-foreground glow-text mb-2">
            Bienvenue dans votre serre
          </h1>
          <p className="text-sm text-muted-foreground max-w-lg">
            Vue d'ensemble de votre système d'agriculture de précision. Tous les capteurs sont opérationnels.
          </p>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((s) => (
          <div
            key={s.label}
            className={`glass-card-hover p-5 ${s.alert ? "ring-1 ring-danger/30" : ""}`}
          >
            <div className="flex items-start justify-between mb-3">
              <p className="text-[11px] font-medium uppercase tracking-widest text-muted-foreground">
                {s.label}
              </p>
              <s.icon className={`h-4 w-4 ${s.color}`} />
            </div>
            <p className="font-heading text-4xl font-bold text-foreground mb-1">
              {s.value}
              <span className="text-base font-normal text-muted-foreground ml-1">{s.unit}</span>
            </p>
            <div className="flex items-center gap-1">
              {s.up ? (
                <TrendingUp className="h-3 w-3 text-primary" />
              ) : (
                <TrendingDown className="h-3 w-3 text-danger" />
              )}
              <span className={`text-xs ${s.up ? "text-primary" : "text-danger"}`}>{s.trend}</span>
              <span className="text-[10px] text-muted-foreground">vs 1h</span>
            </div>
            {s.alert && (
              <p className="mt-2 text-[10px] font-medium text-danger animate-pulse-soft">
                ⚠ Seuil critique atteint
              </p>
            )}
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <QuickAction emoji="📡" title="Capteurs IoT" desc="4 capteurs actifs" href="/telemetry" />
        <QuickAction emoji="🤖" title="Audit IA" desc="Générer un rapport" href="/ai-audit" />
        <QuickAction emoji="🔬" title="Vision IA" desc="Détection maladies" href="/ai-vision" />
      </div>
    </div>
  );
};

const QuickAction = ({ emoji, title, desc, href }: { emoji: string; title: string; desc: string; href: string }) => (
  <a
    href={href}
    className="glass-card-hover p-5 flex items-center gap-4 group cursor-pointer no-underline"
  >
    <span className="text-2xl animate-float">{emoji}</span>
    <div>
      <p className="text-sm font-heading font-semibold text-foreground group-hover:text-primary transition-colors">
        {title}
      </p>
      <p className="text-xs text-muted-foreground">{desc}</p>
    </div>
  </a>
);

export default DashboardPage;
