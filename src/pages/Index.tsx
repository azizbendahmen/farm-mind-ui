import Navbar from "@/components/dashboard/Navbar";
import TelemetryCards from "@/components/dashboard/TelemetryCards";
import TelemetryChart from "@/components/dashboard/TelemetryChart";
import StatusPanel from "@/components/dashboard/StatusPanel";
import AISection from "@/components/dashboard/AISection";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <main className="mx-auto max-w-7xl space-y-6 p-4 sm:p-6 lg:p-8">
      <TelemetryCards />

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <TelemetryChart />
        </div>
        <StatusPanel />
      </div>

      <AISection />
    </main>
  </div>
);

export default Index;
