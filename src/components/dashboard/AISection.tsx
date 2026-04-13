import { useState } from "react";
import { Zap, Eye, Upload, Video } from "lucide-react";
import { Button } from "@/components/ui/button";

const AuditCard = () => {
  const [auditText, setAuditText] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleGenerate = () => {
    setLoading(true);
    setTimeout(() => {
      setAuditText(
        "🌿 Audit GreenHouse OS — 13/04/2026\n\n• Température stable (24.6°C), dans la plage optimale.\n• ⚠️ Humidité sol critique (27%) — irrigation recommandée sous 2h.\n• Qualité de l'air nominale (COV : 4.2 kΩ).\n• Prévision : pluie à 16h, reporter l'arrosage externe.\n\nRecommandation IA : Activer la pompe hydraulique pendant 15 min."
      );
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
      <div className="mb-4 flex items-center gap-2">
        <Zap className="h-5 w-5 text-ai-blue" />
        <h3 className="text-sm font-semibold text-foreground">Audit Automatisé</h3>
        <span className="rounded bg-ai-indigo-light px-1.5 py-0.5 text-[10px] font-semibold text-ai-indigo">
          GEMINI
        </span>
      </div>
      <Button
        onClick={handleGenerate}
        disabled={loading}
        className="mb-4 w-full bg-foreground text-primary-foreground hover:bg-foreground/90"
      >
        {loading ? "Génération en cours…" : "Générer Audit"}
      </Button>
      <div className="min-h-[120px] rounded-lg bg-muted p-4 text-xs leading-relaxed text-foreground/80 whitespace-pre-line">
        {auditText ?? "Les résultats de l'audit apparaîtront ici…"}
      </div>
    </div>
  );
};

const VisionCard = () => {
  const [analyzing, setAnalyzing] = useState(false);
  const [result, setResult] = useState<null | { disease: string; confidence: number; alert: string }>(null);

  const handleAnalyze = () => {
    setAnalyzing(true);
    setTimeout(() => {
      setResult({ disease: "Mildiou (Phytophthora)", confidence: 94.2, alert: "Traitement urgent" });
      setAnalyzing(false);
    }, 2000);
  };

  return (
    <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <Eye className="h-5 w-5 text-ai-indigo" />
          <h3 className="text-sm font-semibold text-foreground">Vision Edge AI</h3>
          <span className="rounded bg-ai-indigo-light px-1.5 py-0.5 text-[10px] font-semibold text-ai-indigo">
            YOLOv12
          </span>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="h-7 text-xs">
            <Upload className="mr-1 h-3 w-3" /> Upload
          </Button>
          <Button variant="outline" size="sm" className="h-7 text-xs">
            <Video className="mr-1 h-3 w-3" /> Webcam
          </Button>
        </div>
      </div>

      <div className="flex flex-col gap-4 sm:flex-row">
        {/* Scanner screen */}
        <div className="relative flex h-[150px] w-full items-center justify-center overflow-hidden rounded-lg bg-foreground sm:w-[150px] shrink-0">
          <div className="absolute left-0 h-[2px] w-full bg-ai-blue/70 shadow-[0_0_8px_2px_hsl(217,91%,60%,0.5)] animate-scanner" />
          <span className="text-[10px] text-muted-foreground/40 font-mono">FEED</span>
        </div>

        {/* Results */}
        <div className="flex flex-1 flex-col justify-between">
          {result ? (
            <div className="space-y-2">
              <div>
                <p className="text-xs text-muted-foreground">Pathologie détectée</p>
                <p className="text-sm font-semibold text-foreground">{result.disease}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Confiance</p>
                <p className="font-display text-2xl font-bold text-foreground">{result.confidence}%</p>
              </div>
              <span className="inline-block rounded-full bg-destructive/10 px-2.5 py-0.5 text-[11px] font-semibold text-destructive">
                {result.alert}
              </span>
            </div>
          ) : (
            <p className="text-xs text-muted-foreground">
              {analyzing ? "Analyse en cours…" : "Aucune analyse en cours. Lancez le flux vidéo."}
            </p>
          )}
          <Button
            onClick={handleAnalyze}
            disabled={analyzing}
            className="mt-4 bg-ai-indigo text-accent-foreground hover:bg-ai-indigo/90"
          >
            {analyzing ? "Analyse…" : "Analyser le Flux Vidéo"}
          </Button>
        </div>
      </div>
    </div>
  );
};

const AISection = () => (
  <section>
    <h2 className="mb-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
      Modules d'Intelligence Artificielle
    </h2>
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
      <AuditCard />
      <VisionCard />
    </div>
  </section>
);

export default AISection;
