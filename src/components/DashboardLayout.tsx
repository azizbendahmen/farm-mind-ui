import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { Outlet } from "react-router-dom";
import { Clock } from "lucide-react";

const DashboardLayout = () => (
  <SidebarProvider>
    <div className="min-h-screen flex w-full bg-background">
      <AppSidebar />
      <div className="flex-1 flex flex-col">
        <header className="sticky top-0 z-20 flex h-16 items-center gap-3 border-b border-border bg-card/80 backdrop-blur-md px-6">
          <SidebarTrigger className="text-muted-foreground hover:text-foreground" />
          <div className="ml-auto flex items-center gap-4">
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Clock className="h-3.5 w-3.5" />
              <span>
                Dernière MAJ : {new Date().toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" })}
              </span>
            </div>
            <div className="flex items-center gap-2 rounded-full bg-primary/8 border border-primary/15 px-3 py-1.5">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              <span className="text-xs font-medium text-primary">Online</span>
            </div>
          </div>
        </header>

        <main className="flex-1 p-5 sm:p-8 lg:p-10">
          <Outlet />
        </main>
      </div>
    </div>
  </SidebarProvider>
);

export default DashboardLayout;
