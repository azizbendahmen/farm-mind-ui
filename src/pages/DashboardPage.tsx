import { Thermometer, Droplets, Sprout, Wind, TrendingUp, TrendingDown, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import greenhouseHero from "@/assets/greenhouse-hero.jpg";

const DashboardPage = () => {
  const stats = [
    { label: "Température", value: "24.6", unit: "°C", icon: Thermometer, trend: "+1.2", up: true, color: "text-warning", bg: "bg-warning/10" },
    { label: "Humidité Air", value: "68", unit: "%", icon: Droplets, trend: "-3", up: false, color: "text-water", bg: "bg-water/10" },
    { label: "Humidité Sol", value: "27", unit: "%", icon: Sprout, trend: "-8", up: false, color: "text-danger", bg: "bg-danger/10", alert: true },
    { label: "Gaz / COV", value: "4.2", unit: "kΩ", icon: Wind, trend: "+0.1", up: true, color: "text-primary", bg: "bg-primary/10" },
  ];

  return (
    <div className="space-y-8 max-w-6xl mx-auto">
      {/* Hero */}
      <div className="relative overflow-hidden rounded-3xl h-[280px]">
        <img
          src={greenhouseHero}
          alt="Greenhouse"
          className="absolute inset-0 w-full h-full object-cover"
          width={1920}
          height={800}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-transparent" />
        <div className="relative z-10 h-full flex flex-col justify-end p-8 sm:p-10">
          <span className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-md border border-primary/30 rounded-full px-3 py-1 text-xs font-medium text-white w-fit mb-3">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            GreenHouse OS 4.0
          </span>
          <h1 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-2">
            Bienvenue dans votre serre
          </h1>
          <p className="text-sm text-white/70 max-w-md">
            Système d'agriculture de précision — tous les capteurs sont opérationnels.
          </p>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((s) => (
          <div
            key={s.label}
            className={`botanical-card-hover p-5 ${s.alert ? "ring-1 ring-danger/30" : ""}`}
          >
            <div className="flex items-start justify-between mb-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                {s.label}
              </p>
              <div className={`p-2 rounded-xl ${s.bg}`}>
                <s.icon className={`h-4 w-4 ${s.color}`} />
              </div>
            </div>
            <p className="font-heading text-4xl font-bold text-foreground mb-1.5">
              {s.value}
              <span className="text-sm font-sans font-normal text-muted-foreground ml-1">{s.unit}</span>
            </p>
            <div className="flex items-center gap-1.5">
              {s.up ? (
                <TrendingUp className="h-3 w-3 text-primary" />
              ) : (
                <TrendingDown className="h-3 w-3 text-danger" />
              )}
              <span className={`text-xs font-medium ${s.up ? "text-primary" : "text-danger"}`}>{s.trend}</span>
              <span className="text-[10px] text-muted-foreground">vs 1h</span>
            </div>
            {s.alert && (
              <p className="mt-3 text-[11px] font-semibold text-danger animate-pulse-soft flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-danger" />
                Seuil critique atteint
              </p>
            )}
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <QuickAction
          emoji="📡"
          title="Capteurs IoT"
          desc="Surveillance temps réel de 4 capteurs"
          href="/telemetry"
          color="bg-primary/5 border-primary/10"
        />
        <QuickAction
          emoji="🧠"
          title="Audit IA"
          desc="Rapport intelligent automatisé"
          href="/ai-audit"
          color="bg-ai-glow-light border-ai-glow/10"
        />
        <QuickAction
          emoji="🔬"
          title="Vision IA"
          desc="Détection de pathologies végétales"
          href="/ai-vision"
          color="bg-ai-glow-light border-ai-glow/10"
        />
      </div>
    </div>
  );
};

const QuickAction = ({ emoji, title, desc, href, color }: { emoji: string; title: string; desc: string; href: string; color: string }) => (
  <Link
    to={href}
    className={`botanical-card-hover p-6 flex items-start gap-4 group cursor-pointer no-underline border ${color}`}
  >
    <span className="text-3xl animate-float">{emoji}</span>
    <div className="flex-1">
      <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors mb-1">
        {title}
      </p>
      <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
    </div>
    <ArrowRight className="h-4 w-4 text-muted-foreground/30 group-hover:text-primary group-hover:translate-x-1 transition-all mt-0.5" />
  </Link>
);

export default DashboardPage;
