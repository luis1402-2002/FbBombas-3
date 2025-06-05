import React, { ReactNode } from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid
} from "recharts";

interface ChartConfig {
  [key: string]: {
    label: string;
    theme: "solid" | "dashed" | "dotted";
  };
}

interface ChartProps {
  "aria-label"?: string;
  type: "line" | "bar" | "area";
  data: any[];
  children?: ReactNode;
  className?: string;
  config?: ChartConfig;
  margin?: {
    top?: number;
    right?: number;
    bottom?: number;
    left?: number;
  };
}

export const Chart = ({
  "aria-label": ariaLabel,
  type = "line",
  data = [],
  children,
  className,
  config,
  margin,
  ...props
}: ChartProps) => {
  const getStrokeDashArray = (theme: string) => {
    switch (theme) {
      case "dashed":
        return "5 5";
      case "dotted":
        return "1 5";
      default:
        return "0";
    }
  };

  return (
    <div
      className={className}
      aria-label={ariaLabel}
      role="img"
      {...props}
    >
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={margin}
        >
          {children ? (
            children
          ) : (
            <>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis 
                dataKey="flow" 
                label={{ 
                  value: "Vazão (m³/h)", 
                  position: "insideBottom", 
                  offset: -5
                }}
              />
              <YAxis 
                label={{ 
                  value: "Altura (m)", 
                  angle: -90, 
                  position: "insideLeft",
                  offset: -5
                }}
              />
              <Tooltip 
                formatter={(value: any, name: any) => {
                  if (name === "pumpHead" || name === "Curva da Bomba") {
                    return [`${Number(value).toFixed(1)} m`, "Curva da Bomba"];
                  }
                  if (name === "systemHead" || name === "Curva do Sistema") {
                    return [`${Number(value).toFixed(1)} m`, "Curva do Sistema"];
                  }
                  return [value, name];
                }}
                labelFormatter={(value) => `Vazão: ${Number(value).toFixed(1)} m³/h`}
              />
              <Legend 
                verticalAlign="top"
                height={36}
              />
              {/* Curva da Bomba - sempre renderizada diretamente */}
              <Line
                type="monotone"
                dataKey="pumpHead"
                stroke="#E30613"
                strokeWidth={3}
                dot={false}
                activeDot={{ r: 8, fill: "#E30613", stroke: "#fff", strokeWidth: 2 }}
                name="Curva da Bomba"
                connectNulls={true}
              />
              {/* Curva do Sistema - sempre renderizada diretamente */}
              <Line
                type="monotone"
                dataKey="systemHead"
                stroke="#003B71"
                strokeWidth={2.5}
                strokeDasharray="4 4"
                dot={false}
                activeDot={{ r: 6, fill: "#003B71", stroke: "#fff", strokeWidth: 2 }}
                name="Curva do Sistema"
                connectNulls={true}
              />
              {/* Adicionar outras curvas do config se existirem */}
              {config && Object.keys(config)
                .filter(key => key !== "pumpHead" && key !== "systemHead")
                .map((key) => (
                  <Line
                    key={key}
                    type="monotone"
                    dataKey={key}
                    stroke={"#8884d8"}
                    strokeWidth={2}
                    strokeDasharray={getStrokeDashArray(config[key].theme)}
                    dot={false}
                    activeDot={{ r: 6 }}
                    name={config[key].label}
                    connectNulls={true}
                  />
                ))
              }
            </>
          )}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};