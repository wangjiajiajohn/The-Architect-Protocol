"use client";

import { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

interface SalesChartProps {
  data: any[];
  brands: { id: number | string; name: string; color: string }[];
}

interface GroupedDataNode {
  name: string;
  isCurrent: boolean;
  [key: string]: string | number | boolean;
}

export default function SalesChart({ data, brands }: SalesChartProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Transform data for Recharts
  const groupedData: Record<string, GroupedDataNode> = {};
  data.forEach((item) => {
    const d = new Date(item.date);
    const dateStr = `${d.getMonth() + 1}月`;
    if (!groupedData[dateStr]) {
      groupedData[dateStr] = { name: dateStr, isCurrent: false };
    }
    groupedData[dateStr][item.brand.name] = item.amount;
  });

  const currentMonthStr = `${new Date().getMonth() + 1}月`;
  const chartData = Object.values(groupedData).map((node) => ({
    ...node,
    isCurrent: node.name === currentMonthStr
  }));

  if (!isMounted) {
    return (
      <div 
        suppressHydrationWarning 
        style={{ width: "100%", height: 350, position: "relative", opacity: 0 }} 
      />
    );
  }

  return (
    <div 
      suppressHydrationWarning 
      style={{ width: "100%", height: 350, position: "relative" }}
    >
      <ResponsiveContainer width="100%" height="100%" debounce={100}>
        <BarChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }} barGap={6}>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" vertical={false} />
          <XAxis 
            dataKey="name" 
            stroke="var(--text-muted)" 
            fontSize={12}
            tickLine={false}
            axisLine={false}
            tickFormatter={(val: string) => val === currentMonthStr ? `${val} (实时)` : val}
          />
          <YAxis 
            stroke="var(--text-muted)" 
            fontSize={12}
            tickLine={false}
            axisLine={false}
            tickFormatter={(value: number) => `${value/1000}k`}
          />
          <Tooltip 
            cursor={{ fill: 'rgba(255, 255, 255, 0.05)' }}
            contentStyle={{ 
              background: "rgba(15, 23, 42, 0.9)", 
              border: "1px solid var(--card-border)",
              borderRadius: "12px",
              backdropFilter: "blur(10px)"
            }}
            itemStyle={{ fontSize: "12px" }}
            formatter={(value: any, name: any, props: any) => {
              const suffix = props.payload.isCurrent ? " (MTD)" : "";
              return [`${(value || 0).toLocaleString()} ${suffix}`, name];
            }}
          />
          <Legend iconType="circle" />
          {brands.map((brand) => (
            <Bar
              key={brand.id}
              dataKey={brand.name}
              fill={brand.color}
              radius={[10, 10, 0, 0]}
              barSize={12}
              animationDuration={1500}
            />
          ))}
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
