import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const data = [
  { time: "06:00", temp: 18, humAir: 72, humSol: 45 },
  { time: "08:00", temp: 20, humAir: 70, humSol: 42 },
  { time: "10:00", temp: 23, humAir: 65, humSol: 38 },
  { time: "12:00", temp: 26, humAir: 58, humSol: 34 },
  { time: "14:00", temp: 28, humAir: 55, humSol: 30 },
  { time: "16:00", temp: 26, humAir: 60, humSol: 28 },
  { time: "18:00", temp: 24, humAir: 64, humSol: 27 },
  { time: "20:00", temp: 21, humAir: 68, humSol: 29 },
];

const TelemetryChart = () => (
  <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
    <h3 className="mb-1 text-sm font-semibold text-foreground">Télémétrie Temporelle</h3>
    <p className="mb-6 text-xs text-muted-foreground">Données capteurs sur les dernières 14h</p>
    <ResponsiveContainer width="100%" height={280}>
      <AreaChart data={data}>
        <defs>
          <linearGradient id="gTemp" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="hsl(25, 95%, 53%)" stopOpacity={0.15} />
            <stop offset="95%" stopColor="hsl(25, 95%, 53%)" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="gHumAir" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="hsl(217, 91%, 60%)" stopOpacity={0.15} />
            <stop offset="95%" stopColor="hsl(217, 91%, 60%)" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="gHumSol" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="hsl(160, 84%, 39%)" stopOpacity={0.15} />
            <stop offset="95%" stopColor="hsl(160, 84%, 39%)" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" stroke="hsl(214, 32%, 91%)" />
        <XAxis dataKey="time" tick={{ fontSize: 11, fill: "hsl(215, 16%, 47%)" }} axisLine={false} tickLine={false} />
        <YAxis tick={{ fontSize: 11, fill: "hsl(215, 16%, 47%)" }} axisLine={false} tickLine={false} />
        <Tooltip
          contentStyle={{
            backgroundColor: "white",
            border: "1px solid hsl(214, 32%, 91%)",
            borderRadius: "0.5rem",
            fontSize: "12px",
          }}
        />
        <Area type="monotone" dataKey="temp" stroke="hsl(25, 95%, 53%)" fill="url(#gTemp)" strokeWidth={2} name="Temp °C" />
        <Area type="monotone" dataKey="humAir" stroke="hsl(217, 91%, 60%)" fill="url(#gHumAir)" strokeWidth={2} name="Hum. Air %" />
        <Area type="monotone" dataKey="humSol" stroke="hsl(160, 84%, 39%)" fill="url(#gHumSol)" strokeWidth={2} name="Hum. Sol %" />
      </AreaChart>
    </ResponsiveContainer>
  </div>
);

export default TelemetryChart;
