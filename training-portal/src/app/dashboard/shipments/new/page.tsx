"use client";

import { useState } from "react";
import { db } from "@/lib/mock";
import { useRouter } from "next/navigation";

export default function NewShipment() {
  const [id, setId] = useState("SHP-" + Math.random().toString(36).slice(2, 10).toUpperCase());
  const [customerName, setCustomerName] = useState("");
  const [city, setCity] = useState("");
  const [goodsValue, setGoodsValue] = useState(0);
  const [collectibleAmount, setCollectibleAmount] = useState(0);
  const router = useRouter();

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    db.shipments.unshift({ id, customerName, city, goodsValue, collectibleAmount, date: new Date().toISOString().slice(0,10), status: "pending" });
    router.push("/dashboard/shipments");
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <a href="/dashboard/shipments" className="btn btn-secondary">رجوع</a>
        <h1 className="text-xl font-bold">إضافة شحنة</h1>
      </div>
      <form onSubmit={submit} className="card p-6 space-y-4">
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">رقم الشحنة</label>
            <input className="input" value={id} onChange={(e) => setId(e.target.value)} />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">اسم العميل</label>
            <input className="input" value={customerName} onChange={(e) => setCustomerName(e.target.value)} />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">المدينة</label>
            <input className="input" value={city} onChange={(e) => setCity(e.target.value)} />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">قيمة البضاعة</label>
            <input className="input" type="number" value={goodsValue} onChange={(e) => setGoodsValue(Number(e.target.value))} />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">المبلغ المحصل</label>
            <input className="input" type="number" value={collectibleAmount} onChange={(e) => setCollectibleAmount(Number(e.target.value))} />
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button className="btn btn-secondary" type="button" onClick={() => history.back()}>إلغاء</button>
          <button className="btn btn-primary" type="submit">إضافة الشحنة</button>
        </div>
      </form>
    </div>
  );
}
