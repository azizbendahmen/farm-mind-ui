import {
  LayoutDashboard,
  Thermometer,
  BarChart3,
  Settings2,
  Brain,
  ScanEye,
  Leaf,
} from "lucide-react";
import { NavLink } from "@/components/NavLink";


import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
  useSidebar,
} from "@/components/ui/sidebar";

const mainItems = [
  { title: "Tableau de Bord", url: "/", icon: LayoutDashboard },
  { title: "Capteurs IoT", url: "/telemetry", icon: Thermometer },
  { title: "Graphiques", url: "/charts", icon: BarChart3 },
  { title: "Automates", url: "/automation", icon: Settings2 },
];

const aiItems = [
  { title: "Audit IA", url: "/ai-audit", icon: Brain },
  { title: "Vision IA", url: "/ai-vision", icon: ScanEye },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="p-5 border-b border-sidebar-border">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl leaf-gradient flex items-center justify-center shadow-sm">
            <Leaf className="h-5 w-5 text-white" />
          </div>
          {!collapsed && (
            <div>
              <h1 className="font-heading text-base font-bold text-sidebar-foreground tracking-tight">
                GreenHouse
              </h1>
              <span className="text-[10px] font-medium text-sidebar-foreground/50 tracking-wider uppercase">
                OS 4.0
              </span>
            </div>
          )}
        </div>
      </SidebarHeader>

      <SidebarContent className="pt-2">
        <SidebarGroup>
          <SidebarGroupLabel className="text-[10px] uppercase tracking-[0.15em] text-sidebar-foreground/40 font-semibold px-5 mb-1">
            Monitoring
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {mainItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink
                      to={item.url}
                      end={item.url === "/"}
                      className="flex items-center gap-3 rounded-xl px-4 py-2.5 text-sm text-sidebar-foreground/70 transition-all hover:bg-sidebar-accent hover:text-sidebar-foreground mx-2"
                      activeClassName="bg-sidebar-primary/15 text-sidebar-primary font-medium"
                    >
                      <item.icon className="h-[18px] w-[18px] shrink-0" />
                      {!collapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel className="text-[10px] uppercase tracking-[0.15em] text-sidebar-foreground/40 font-semibold px-5 mb-1">
            Intelligence Artificielle
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {aiItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink
                      to={item.url}
                      className="flex items-center gap-3 rounded-xl px-4 py-2.5 text-sm text-sidebar-foreground/70 transition-all hover:bg-sidebar-accent hover:text-sidebar-foreground mx-2"
                      activeClassName="bg-sidebar-primary/15 text-sidebar-primary font-medium"
                    >
                      <item.icon className="h-[18px] w-[18px] shrink-0" />
                      {!collapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-4">
        {!collapsed && (
          <div className="rounded-xl bg-sidebar-accent/50 p-3 border border-sidebar-border">
            <div className="flex items-center gap-2.5">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              <span className="text-xs text-sidebar-foreground/60">Système en ligne</span>
            </div>
            <p className="text-[10px] text-sidebar-foreground/35 mt-1.5 pl-[18px]">
              4 capteurs · 2 automates
            </p>
          </div>
        )}
      </SidebarFooter>
    </Sidebar>
  );
}
