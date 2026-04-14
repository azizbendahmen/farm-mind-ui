import { useState } from "react";
import { ScanEye, Upload, Video, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";

const AIVisionPage = () => {
  const [analyzing, setAnalyzing] = useState(false);
  const [result, setResult] = useState<null | {
    disease: string;
    confidence: number;
    severity: string;
    alert: string;
    recommendation: string;
  }>(null);

  const handleAnalyze = () => {
    setAnalyzing(true);
    setResult(null);
    setTimeout(() => {
      setResult({
        disease: "Mildiou (Phytophthora infestans)",
        confidence: 94.2,
        severity: "Élevée",
        alert: "Traitement urgent requis",
        recommendation: "Appliquer un fongicide à base de cuivre dans les 24h. Isoler les plants du Bac 3.",
      });
      setAnalyzing(false);
    }, 2500);
  };

  return (
    <div className="space-y-8 max-w-5xl mx-auto">
      <div>
        <h1 className="font-heading text-2xl font-bold text-foreground mb-1">Vision Edge AI</h1>
        <p className="text-sm text-muted-foreground">Détection de pathologies par vision par ordinateur</p>
      </div>

      <div className="botanical-card p-6 sm:p-8 space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-ai-glow-light">
              <ScanEye className="h-5 w-5 text-ai-glow" />
            </div>
            <div>
              <h3 className="text-base font-semibold text-foreground">Analyse Visuelle</h3>
              <p className="text-xs text-muted-foreground">Modèle YOLOv12 — Inférence Edge</p>
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="h-9 text-xs rounded-xl">
              <Upload className="h-3 w-3 mr-1.5" /> Upload
            </Button>
            <Button variant="outline" size="sm" className="h-9 text-xs rounded-xl">
              <Video className="h-3 w-3 mr-1.5" /> Webcam
            </Button>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Video Feed */}
          <div className="relative w-full lg:w-[300px] h-[260px] lg:h-[300px] rounded-2xl bg-foreground/95 overflow-hidden shrink-0 flex items-center justify-center">
            <div className="absolute left-0 h-[2px] w-full bg-ai-glow/60 shadow-[0_0_12px_4px_hsl(235,65%,52%,0.3)] animate-scanner" />
            <div className="absolute inset-0 border-2 border-ai-glow/10 rounded-2xl" />
            <div className="absolute top-3 left-3 w-5 h-5 border-t-2 border-l-2 border-ai-glow/30 rounded-tl-md" />
            <div className="absolute top-3 right-3 w-5 h-5 border-t-2 border-r-2 border-ai-glow/30 rounded-tr-md" />
            <div className="absolute bottom-3 left-3 w-5 h-5 border-b-2 border-l-2 border-ai-glow/30 rounded-bl-md" />
            <div className="absolute bottom-3 right-3 w-5 h-5 border-b-2 border-r-2 border-ai-glow/30 rounded-br-md" />
            <div className="text-center">
              <p className="text-xs text-white/20 font-mono tracking-wider">LIVE FEED</p>
              <p className="text-[10px] text-white/10 mt-1">640×480 @ 30fps</p>
            </div>
          </div>

          {/* Results Panel */}
          <div className="flex-1 flex flex-col">
            {result ? (
              <div className="space-y-4 flex-1">
                <div className="botanical-card p-4 border-l-4 border-l-danger">
                  <div className="flex items-center gap-2 mb-1.5">
                    <AlertTriangle className="h-4 w-4 text-danger" />
                    <span className="text-xs font-bold text-danger">{result.alert}</span>
                  </div>
                  <p className="font-heading text-lg font-bold text-foreground">{result.disease}</p>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="botanical-card p-4">
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground mb-1">Confiance</p>
                    <p className="font-heading text-3xl font-bold text-primary">{result.confidence}%</p>
                  </div>
                  <div className="botanical-card p-4">
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground mb-1">Sévérité</p>
                    <p className="font-heading text-lg font-bold text-danger">{result.severity}</p>
                  </div>
                </div>

                <div className="botanical-card p-4">
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground mb-2">Recommandation</p>
                  <p className="text-sm text-foreground/80 leading-relaxed">{result.recommendation}</p>
                </div>
              </div>
            ) : (
              <div className="flex-1 flex flex-col items-center justify-center text-center botanical-card p-8">
                <div className="h-14 w-14 rounded-2xl bg-muted flex items-center justify-center mb-4">
                  <ScanEye className="h-6 w-6 text-muted-foreground/30" />
                </div>
                <p className="text-sm font-medium text-muted-foreground mb-1">
                  {analyzing ? "Analyse du flux vidéo en cours…" : "Aucune analyse en cours"}
                </p>
                <p className="text-xs text-muted-foreground/60">
                  {analyzing ? "Détection de pathologies via YOLOv12" : "Uploadez une image ou activez la webcam"}
                </p>
                {analyzing && (
                  <div className="mt-4 w-32 h-1.5 rounded-full bg-muted overflow-hidden">
                    <div className="h-full w-1/2 bg-ai-glow rounded-full animate-pulse" />
                  </div>
                )}
              </div>
            )}

            <Button
              onClick={handleAnalyze}
              disabled={analyzing}
              className="mt-4 bg-ai-glow text-white hover:bg-ai-glow/90 h-12 text-sm font-semibold w-full rounded-xl"
            >
              <ScanEye className="h-4 w-4 mr-2" />
              {analyzing ? "Analyse en cours…" : "Analyser le Flux Vidéo"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIVisionPage;
