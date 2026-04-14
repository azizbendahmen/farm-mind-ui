import { useState } from "react";
import { Sparkles, FileText, Clock, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const AIAuditPage = () => {
  const [auditText, setAuditText] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleGenerate = () => {
    setLoading(true);
    setTimeout(() => {
      setAuditText(
        `📊 Résumé Exécutif
• Température stable à 24.6°C — dans la plage optimale (20-28°C).
• ⚠️ Humidité sol CRITIQUE : 27% (seuil min: 30%).
• Qualité de l'air nominale — COV : 4.2 kΩ.
• Humidité air : 68% — conditions favorables.

🔴 Alertes
1. Humidité sol sous le seuil critique depuis 2h.
   → Action : Activer la pompe hydraulique pendant 15 min.

☁️ Météo
• Pluie prévue à 16h (probabilité 78%).
   → Reporter l'arrosage externe.

💡 Recommandations IA
1. Activer la pompe hydraulique immédiatement (priorité haute).
2. Réduire la ventilation à 50% après 16h.
3. Planifier une inspection visuelle des plants Bac 3.`
      );
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      <div>
        <h1 className="font-heading text-2xl font-bold text-foreground mb-1">Audit IA</h1>
        <p className="text-sm text-muted-foreground">Rapport automatisé généré par intelligence artificielle</p>
      </div>

      {/* Professional header card */}
      <div className="botanical-card overflow-hidden">
        <div className="leaf-gradient px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <FileText className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Audit Automatisé</h3>
                <p className="text-sm text-white/70">Analyse complète propulsée par Gemini 2.0</p>
              </div>
            </div>
            <span className="hidden sm:inline-flex rounded-full bg-white/15 backdrop-blur-sm border border-white/20 px-3 py-1 text-[11px] font-bold text-white tracking-wider">
              GEMINI 2.0
            </span>
          </div>
        </div>

        <div className="p-6 sm:p-8 space-y-6">
          {/* Info chips */}
          <div className="flex flex-wrap gap-3">
            <div className="flex items-center gap-2 rounded-full bg-muted px-3 py-1.5 text-xs text-muted-foreground">
              <Clock className="h-3 w-3" />
              <span>Dernière analyse : {auditText ? "Aujourd'hui" : "Aucune"}</span>
            </div>
            <div className="flex items-center gap-2 rounded-full bg-muted px-3 py-1.5 text-xs text-muted-foreground">
              <CheckCircle2 className="h-3 w-3" />
              <span>4 capteurs analysés</span>
            </div>
          </div>

          <Button
            onClick={handleGenerate}
            disabled={loading}
            className="w-full leaf-gradient text-white hover:opacity-90 h-12 text-sm font-semibold rounded-xl border-0 shadow-md"
          >
            <Sparkles className="h-4 w-4 mr-2" />
            {loading ? "Analyse en cours…" : "Générer l'Audit Complet"}
          </Button>

          <div className="rounded-2xl bg-muted/50 border border-border p-6 min-h-[220px]">
            {auditText ? (
              <pre className="text-sm leading-relaxed text-foreground/85 whitespace-pre-wrap font-sans">
                {auditText}
              </pre>
            ) : (
              <div className="flex flex-col items-center justify-center h-[200px] text-muted-foreground">
                <div className="h-16 w-16 rounded-2xl bg-muted flex items-center justify-center mb-4">
                  <FileText className="h-7 w-7 text-muted-foreground/40" />
                </div>
                <p className="text-sm font-medium">Les résultats apparaîtront ici</p>
                <p className="text-xs mt-1 text-muted-foreground/60">Cliquez sur le bouton pour lancer l'analyse</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIAuditPage;
