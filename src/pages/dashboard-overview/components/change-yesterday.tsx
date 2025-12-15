import { IconArrowNarrowDown, IconArrowNarrowUp } from "@tabler/icons-react";
import type { ReactNode } from "react";

interface Trend {
  type: "up" | "down";
  value: string;
}

export interface IStatCard {
  title: string;
  number: string;
  icon: ReactNode;
  trend: Trend;
  numberColor?: string;
  iconBg?: string;
  iconColor?: string;
}

export default function ChangeYesterday({
  title,
  number,
  icon,
  trend,
  numberColor,
  iconBg,
  iconColor,
}: IStatCard) {
  return (
    <div className="p-5 rounded-md bg-muted space-y-2 shadow-sm">
      <h3 className="text-muted-foreground font-semibold">{title}</h3>

      <main className="flex items-center justify-between">
        <span
          className={`text-3xl font-bold ${
            numberColor ||
            (trend.type === "up" ? "text-green-500" : "text-red-500")
          }`}
        >
          {number}
        </span>

        <span
          className={`flex h-12 w-12 items-center justify-center rounded-md ${
            iconBg || (trend.type === "up" ? "bg-green-100" : "bg-red-100")
          } ${
            iconColor ||
            (trend.type === "up" ? "text-green-500" : "text-red-500")
          }`}
        >
          {icon}
        </span>
      </main>

      <footer
        className={`flex items-center gap-1 ${
          trend.type === "up" ? "text-green-500" : "text-red-500"
        }`}
      >
        <span>
          {trend.type === "up" ? (
            <IconArrowNarrowUp />
          ) : (
            <IconArrowNarrowDown />
          )}
        </span>
        <span>{trend.type === "up" ? "+" : "-"}</span>
        <span>{trend.value}% from yesterday</span>
      </footer>
    </div>
  );
}
