import Image from "next/image";

// Cards
import BaseCard from "@/components/Cards/BaseCard";
import StatCard from "@/components/Cards/StatCard";
import PieChartCard from "@/components/Cards/PieChartCard";
import AreaChartCard from "@/components/Cards/AreaChartCard";
import TableCard from "@/components/Cards/TableCard";
import TimeLineCard from "@/components/Cards/TimeLineCard";

export default function Home() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <PieChartCard />
      <AreaChartCard />
      <TimeLineCard />
    </div>
  );
}
