"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { db, Shipment } from "@/lib/mock";

export default function ShipmentsPage() {
  const [query, setQuery] = useState("");
  const shipments = db.shipments;
  const filtered = useMemo(() => {
    if (!query) return shipments;
    return shipments.filter((s) =>
      [s.id, s.customerName, s.city].some((f) => f.toLowerCase().includes(query.toLowerCase()))
    );
  }, [query, shipments]);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold">إدارة الشحنات</h1>
        <Link href="/dashboard/shipments/new" className="btn btn-primary">إضافة شحنة جديدة</Link>
      </div>
      <div className="card p-4">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="ابحث برقم الشحنة أو الاسم أو المدينة"
          className="input"
        />
      </div>
      <div className="card overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50">
            <tr className="text-gray-600">
              <th className="p-3 text-right">رقم الشحنة</th>
              <th className="p-3 text-right">العميل</th>
              <th className="p-3 text-right">المدينة</th>
              <th className="p-3 text-right">قيمة البضاعة</th>
              <th className="p-3 text-right">المبلغ المحصل</th>
              <th className="p-3 text-right">التاريخ</th>
              <th className="p-3 text-right">الحالة</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((s: Shipment) => (
              <tr key={s.id} className="border-t">
                <td className="p-3 font-mono">{s.id}</td>
                <td className="p-3">{s.customerName}</td>
                <td className="p-3">{s.city}</td>
                <td className="p-3">{s.goodsValue} USD</td>
                <td className="p-3">{s.collectibleAmount} USD</td>
                <td className="p-3">{s.date}</td>
                <td className="p-3">
                  {s.status === "received" && <span className="badge badge-success">مستلمة</span>}
                  {s.status === "pending" && <span className="badge badge-warning">قيد الانتظار</span>}
                  {s.status === "in_transit" && <span className="badge badge-info">في الطريق</span>}
                  {s.status === "delivered" && <span className="badge badge-success">مُسلمة</span>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
