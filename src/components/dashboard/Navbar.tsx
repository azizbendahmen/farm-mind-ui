import { Cpu, Wifi } from "lucide-react";

const Navbar = () => {
  const now = new Date();
  const timeStr = now.toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" });

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between border-b border-border bg-card px-6 py-3 backdrop-blur-sm">
      <div className="flex items-center gap-2.5">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald text-emerald-foreground">
          <Cpu className="h-4 w-4" />
        </div>
        <span className="text-lg font-bold tracking-tight text-foreground">
          GreenHouse <span className="font-light">OS</span>
        </span>
        <span className="ml-1 rounded-md bg-secondary px-1.5 py-0.5 text-[10px] font-semibold text-muted-foreground">
          4.0
        </span>
      </div>

      <div className="flex items-center gap-4">
        <span className="hidden text-xs text-muted-foreground sm:inline">
          Dernière MAJ : {timeStr}
        </span>
        <div className="flex items-center gap-1.5 rounded-full bg-emerald-light px-3 py-1">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald" />
          </span>
          <span className="text-xs font-medium text-emerald">Online</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
