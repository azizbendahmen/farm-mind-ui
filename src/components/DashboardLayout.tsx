import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { Outlet } from "react-router-dom";
import greenhouseBg from "@/assets/greenhouse-bg.jpg";

const DashboardLayout = () => (
  <SidebarProvider>
    <div className="min-h-screen flex w-full relative">
      {/* Background image overlay */}
      <div
        className="fixed inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage: `url(${greenhouseBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <AppSidebar />

      <div className="flex-1 flex flex-col relative z-10">
        <header className="sticky top-0 z-20 flex h-14 items-center gap-3 border-b border-border bg-background/80 backdrop-blur-xl px-4">
          <SidebarTrigger className="text-muted-foreground hover:text-foreground" />
          <div className="ml-auto flex items-center gap-3">
            <span className="text-xs text-muted-foreground hidden sm:inline">
              Dernière MAJ : {new Date().toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" })}
            </span>
          </div>
        </header>

        <main className="flex-1 p-4 sm:p-6 lg:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  </SidebarProvider>
);

export default DashboardLayout;
