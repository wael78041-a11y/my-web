"use client";

import { useMemo, useState } from "react";
import { db } from "@/lib/mock";
import Link from "next/link";

export default function TrackPage() {
  const [id, setId] = useState("");
  const shipment = useMemo(() => db.shipments.find((s) => s.id === id), [id]);

  return (
    <div className="min-h-screen p-6 container-page space-y-6">
      <nav className="flex items-center justify-between">
        <Link href="/" className="btn btn-secondary">الرئيسية</Link>
        <Link href="/login" className="btn btn-primary">تسجيل الدخول</Link>
      </nav>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="card p-6">
          <h1 className="text-xl font-bold mb-4">تتبع شحنتك</h1>
          <div className="flex items-center gap-2">
            <input value={id} onChange={(e) => setId(e.target.value)} placeholder="أدخل رقم الشحنة" className="input" />
            <button className="btn btn-primary" onClick={() => setId(id.trim())}>تتبع</button>
          </div>
        </div>
        <div className="card p-6">
          <h2 className="text-lg font-semibold mb-2">تفاصيل الشحنة</h2>
          {shipment ? (
            <div className="space-y-1 text-sm">
              <div>الرقم: <span className="font-mono">{shipment.id}</span></div>
              <div>العميل: {shipment.customerName}</div>
              <div>المدينة: {shipment.city}</div>
              <div>الحالة: {shipment.status}</div>
              <div>آخر تحديث: {shipment.date}</div>
            </div>
          ) : (
            <p className="text-gray-500">أدخل رقماً صالحاً لعرض التفاصيل.</p>
          )}
        </div>
      </div>
    </div>
  );
}
