import { useState } from "react";
import { Eye, Upload, Video, AlertTriangle, CheckCircle2 } from "lucide-react";
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

      <div className="glass-card p-6 space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-ai-glow/10">
              <Eye className="h-5 w-5 text-ai-glow" />
            </div>
            <div>
              <h3 className="font-heading text-base font-semibold text-foreground">Analyse Visuelle</h3>
              <p className="text-xs text-muted-foreground">Modèle YOLOv12 — Inférence Edge</p>
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="h-8 text-xs">
              <Upload className="h-3 w-3 mr-1.5" /> Upload Fichier
            </Button>
            <Button variant="outline" size="sm" className="h-8 text-xs">
              <Video className="h-3 w-3 mr-1.5" /> Activer Webcam
            </Button>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Video Feed */}
          <div className="relative w-full lg:w-[300px] h-[250px] lg:h-[300px] rounded-2xl bg-foreground/95 overflow-hidden shrink-0 flex items-center justify-center">
            <div className="absolute left-0 h-[2px] w-full bg-ai-glow/60 shadow-[0_0_12px_4px_hsl(260,80%,65%,0.4)] animate-scanner" />
            <div className="absolute inset-0 border-2 border-ai-glow/10 rounded-2xl" />
            {/* Corner markers */}
            <div className="absolute top-3 left-3 w-5 h-5 border-t-2 border-l-2 border-ai-glow/40 rounded-tl-md" />
            <div className="absolute top-3 right-3 w-5 h-5 border-t-2 border-r-2 border-ai-glow/40 rounded-tr-md" />
            <div className="absolute bottom-3 left-3 w-5 h-5 border-b-2 border-l-2 border-ai-glow/40 rounded-bl-md" />
            <div className="absolute bottom-3 right-3 w-5 h-5 border-b-2 border-r-2 border-ai-glow/40 rounded-br-md" />
            <div className="text-center">
              <p className="text-xs text-muted-foreground/30 font-mono tracking-wider">LIVE FEED</p>
              <p className="text-[10px] text-muted-foreground/20 mt-1">640×480 @ 30fps</p>
            </div>
          </div>

          {/* Results Panel */}
          <div className="flex-1 flex flex-col">
            {result ? (
              <div className="space-y-5 flex-1">
                <div className="glass-card p-4 ring-1 ring-danger/20">
                  <div className="flex items-center gap-2 mb-2">
                    <AlertTriangle className="h-4 w-4 text-danger" />
                    <span className="text-xs font-semibold text-danger">{result.alert}</span>
                  </div>
                  <p className="font-heading text-lg font-bold text-foreground">{result.disease}</p>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="glass-card p-4">
                    <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-1">Confiance</p>
                    <p className="font-heading text-3xl font-bold text-primary">{result.confidence}%</p>
                  </div>
                  <div className="glass-card p-4">
                    <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-1">Sévérité</p>
                    <p className="font-heading text-lg font-bold text-danger">{result.severity}</p>
                  </div>
                </div>

                <div className="glass-card p-4">
                  <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-2">Recommandation</p>
                  <p className="text-sm text-foreground/80 leading-relaxed">{result.recommendation}</p>
                </div>
              </div>
            ) : (
              <div className="flex-1 flex flex-col items-center justify-center text-center glass-card p-8">
                <Eye className="h-10 w-10 text-muted-foreground/20 mb-4" />
                <p className="text-sm text-muted-foreground mb-1">
                  {analyzing ? "Analyse du flux vidéo en cours…" : "Aucune analyse en cours"}
                </p>
                <p className="text-xs text-muted-foreground/60">
                  {analyzing ? "Détection de pathologies via YOLOv12" : "Uploadez une image ou activez la webcam"}
                </p>
                {analyzing && (
                  <div className="mt-4 w-32 h-1.5 rounded-full bg-secondary overflow-hidden">
                    <div className="h-full w-1/2 bg-ai-glow rounded-full animate-pulse" />
                  </div>
                )}
              </div>
            )}

            <Button
              onClick={handleAnalyze}
              disabled={analyzing}
              className="mt-4 bg-ai-glow text-foreground hover:bg-ai-glow/90 h-12 text-sm font-medium w-full"
            >
              <Eye className="h-4 w-4 mr-2" />
              {analyzing ? "Analyse en cours…" : "Analyser le Flux Vidéo"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIVisionPage;
