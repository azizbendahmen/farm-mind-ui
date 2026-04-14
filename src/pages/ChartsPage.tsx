import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis, Line, LineChart } from "recharts";

const tempData = [
  { time: "06:00", temp: 18, humAir: 72, humSol: 45 },
  { time: "08:00", temp: 20, humAir: 70, humSol: 42 },
  { time: "10:00", temp: 23, humAir: 65, humSol: 38 },
  { time: "12:00", temp: 26, humAir: 58, humSol: 34 },
  { time: "14:00", temp: 28, humAir: 55, humSol: 30 },
  { time: "16:00", temp: 26, humAir: 60, humSol: 28 },
  { time: "18:00", temp: 24, humAir: 64, humSol: 27 },
  { time: "20:00", temp: 21, humAir: 68, humSol: 29 },
];

const gasData = [
  { time: "06:00", cov: 3.8 },
  { time: "08:00", cov: 3.9 },
  { time: "10:00", cov: 4.0 },
  { time: "12:00", cov: 4.3 },
  { time: "14:00", cov: 4.5 },
  { time: "16:00", cov: 4.2 },
  { time: "18:00", cov: 4.1 },
  { time: "20:00", cov: 4.0 },
];

const tooltipStyle = {
  backgroundColor: "#ffffff",
  border: "1px solid hsl(120, 12%, 88%)",
  borderRadius: "12px",
  fontSize: "11px",
  color: "hsl(150, 25%, 12%)",
  boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
};

const ChartsPage = () => (
  <div className="space-y-8 max-w-6xl mx-auto">
    <div>
      <h1 className="font-heading text-2xl font-bold text-foreground mb-1">Graphiques</h1>
      <p className="text-sm text-muted-foreground">Évolution temporelle des données capteurs</p>
    </div>

    <div className="botanical-card p-6 sm:p-8">
      <h3 className="font-heading text-lg font-semibold text-foreground mb-1">Télémétrie Temporelle</h3>
      <p className="text-xs text-muted-foreground mb-8">Température, humidité air & sol — dernières 14h</p>
      <ResponsiveContainer width="100%" height={340}>
        <AreaChart data={tempData}>
          <defs>
            <linearGradient id="gTemp" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="hsl(30, 85%, 52%)" stopOpacity={0.15} />
              <stop offset="95%" stopColor="hsl(30, 85%, 52%)" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="gHumAir" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="hsl(200, 70%, 50%)" stopOpacity={0.15} />
              <stop offset="95%" stopColor="hsl(200, 70%, 50%)" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="gHumSol" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="hsl(152, 55%, 38%)" stopOpacity={0.15} />
              <stop offset="95%" stopColor="hsl(152, 55%, 38%)" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(120, 12%, 90%)" />
          <XAxis dataKey="time" tick={{ fontSize: 11, fill: "hsl(150, 10%, 45%)" }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fontSize: 11, fill: "hsl(150, 10%, 45%)" }} axisLine={false} tickLine={false} />
          <Tooltip contentStyle={tooltipStyle} />
          <Area type="monotone" dataKey="temp" stroke="hsl(30, 85%, 52%)" fill="url(#gTemp)" strokeWidth={2.5} name="Temp °C" dot={false} />
          <Area type="monotone" dataKey="humAir" stroke="hsl(200, 70%, 50%)" fill="url(#gHumAir)" strokeWidth={2.5} name="Hum. Air %" dot={false} />
          <Area type="monotone" dataKey="humSol" stroke="hsl(152, 55%, 38%)" fill="url(#gHumSol)" strokeWidth={2.5} name="Hum. Sol %" dot={false} />
        </AreaChart>
      </ResponsiveContainer>
    </div>

    <div className="botanical-card p-6 sm:p-8">
      <h3 className="font-heading text-lg font-semibold text-foreground mb-1">Qualité de l'Air (COV)</h3>
      <p className="text-xs text-muted-foreground mb-8">Résistance du capteur MQ-135 en kΩ</p>
      <ResponsiveContainer width="100%" height={220}>
        <LineChart data={gasData}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(120, 12%, 90%)" />
          <XAxis dataKey="time" tick={{ fontSize: 11, fill: "hsl(150, 10%, 45%)" }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fontSize: 11, fill: "hsl(150, 10%, 45%)" }} axisLine={false} tickLine={false} domain={[3.5, 5]} />
          <Tooltip contentStyle={tooltipStyle} />
          <Line type="monotone" dataKey="cov" stroke="hsl(152, 55%, 38%)" strokeWidth={2.5} dot={false} name="COV kΩ" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  </div>
);

export default ChartsPage;
