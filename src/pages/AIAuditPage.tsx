import { useState } from "react";
import { Zap, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const AIAuditPage = () => {
  const [auditText, setAuditText] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleGenerate = () => {
    setLoading(true);
    setTimeout(() => {
      setAuditText(
        `🌿 Audit GreenHouse OS — 13/04/2026

📊 Résumé Exécutif
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

      <div className="glass-card p-6 space-y-5">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-ai-glow/10">
            <Zap className="h-5 w-5 text-ai-glow" />
          </div>
          <div>
            <h3 className="font-heading text-base font-semibold text-foreground">Audit Automatisé</h3>
            <p className="text-xs text-muted-foreground">Analyse complète propulsée par Gemini</p>
          </div>
          <span className="ml-auto rounded-full bg-ai-glow/10 px-2.5 py-0.5 text-[10px] font-bold text-ai-glow">
            GEMINI 2.0
          </span>
        </div>

        <Button
          onClick={handleGenerate}
          disabled={loading}
          className="w-full bg-foreground text-background hover:bg-foreground/90 h-12 text-sm font-medium"
        >
          <Sparkles className="h-4 w-4 mr-2" />
          {loading ? "Analyse en cours…" : "Générer l'Audit Complet"}
        </Button>

        <div className="rounded-2xl bg-secondary/50 border border-border p-6 min-h-[200px]">
          {auditText ? (
            <pre className="text-sm leading-relaxed text-foreground/85 whitespace-pre-wrap font-sans">
              {auditText}
            </pre>
          ) : (
            <div className="flex flex-col items-center justify-center h-[200px] text-muted-foreground">
              <Zap className="h-8 w-8 mb-3 opacity-30" />
              <p className="text-sm">Les résultats apparaîtront ici</p>
              <p className="text-xs mt-1">Cliquez sur le bouton pour lancer l'analyse</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AIAuditPage;
