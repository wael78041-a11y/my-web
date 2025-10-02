import { getMockDashboardStats } from "@/lib/mock";

export default function DashboardHome() {
  const stats = getMockDashboardStats();
  const cards = [
    { label: "إجمالي الشحنات", value: stats.totalShipments, tone: "info" },
    { label: "شحنات قيد الانتظار", value: stats.pendingShipments, tone: "warning" },
    { label: "شحنات في الطريق", value: stats.inTransit, tone: "info" },
    { label: "شحنات مُسلمة", value: stats.delivered, tone: "success" },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">لوحة التحكم</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {cards.map((c) => (
          <div key={c.label} className="card p-5">
            <div className="text-sm text-gray-500">{c.label}</div>
            <div className="text-3xl mt-1 font-bold">{c.value}</div>
          </div>
        ))}
      </div>
      <div className="card p-6">
        <h2 className="font-semibold mb-2">آخر التحديثات</h2>
        <p className="text-gray-500 text-sm">هذه نسخة تجريبية ببيانات وهمية قابلة للتطوير لاحقاً.</p>
      </div>
    </div>
  );
}
