"use client";

import Link from "next/link";

export default function TripsPage() {
  const trips = [
    { id: "t1", name: "نيقوسيا - إركان", destination: "إركان", driver: "محمود", createdAt: "2025-09-05", shipments: 2, total: 1209, status: "in_transit" },
    { id: "t2", name: "ماغوسا", destination: "ماغوسا", driver: "عمر", createdAt: "2025-09-06", shipments: 0, total: 0, status: "waiting" },
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold">إدارة الرحلات</h1>
        <Link href="#" className="btn btn-primary">إنشاء رحلة جديدة</Link>
      </div>
      <div className="card overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50">
            <tr className="text-gray-600">
              <th className="p-3 text-right">اسم الرحلة</th>
              <th className="p-3 text-right">الوجهة</th>
              <th className="p-3 text-right">السائق</th>
              <th className="p-3 text-right">تاريخ الإنشاء</th>
              <th className="p-3 text-right">عدد الشحنات</th>
              <th className="p-3 text-right">إجمالي التحصيل</th>
              <th className="p-3 text-right">الحالة</th>
              <th className="p-3 text-right">إجراءات</th>
            </tr>
          </thead>
          <tbody>
            {trips.map((t) => (
              <tr key={t.id} className="border-t">
                <td className="p-3">{t.name}</td>
                <td className="p-3">{t.destination}</td>
                <td className="p-3">{t.driver}</td>
                <td className="p-3">{t.createdAt}</td>
                <td className="p-3">{t.shipments}</td>
                <td className="p-3">{t.total} USD</td>
                <td className="p-3">{t.status === "in_transit" ? <span className="badge badge-info">في الطريق</span> : <span className="badge badge-warning">بانتظار</span>}</td>
                <td className="p-3"><Link className="btn btn-secondary" href="#">عرض التفاصيل</Link></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
