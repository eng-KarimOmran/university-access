import type { IStatCard } from "@/pages/dashboard-overview/components/change-yesterday";
import ChangeYesterday from "@/pages/dashboard-overview/components/change-yesterday";
import CustomSection from "@/components/common/custom-section";
import { IconCancel, IconListCheck, IconUserFilled } from "@tabler/icons-react";

export default function DashboardOverview() {
  const settings = {
    title: "Dashboard Overview",
    description: "Monitor gate access and student entry statistics",
  };
  const dashboardStatistics: IStatCard[] = [
    {
      title: "Total Category Entries Today",
      number: "1,247",
      icon: <IconListCheck />,
      trend: { type: "up", value: "12" },
      numberColor: "text-primary",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-500",
    },
    {
      title: "Rejected Category Entries Today",
      number: "23",
      icon: <IconCancel />,
      trend: { type: "down", value: "5" },
    },
    {
      title: "Total Students Entered Today",
      number: "892",
      icon: <IconUserFilled />,
      trend: { type: "up", value: "8" },
    },
  ];

  return (
    <CustomSection {...settings}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {dashboardStatistics.map((statistic) => (
          <ChangeYesterday key={statistic.title} {...statistic} />
        ))}
      </div>
    </CustomSection>
  );
}
