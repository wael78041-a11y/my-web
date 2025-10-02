"use client";

import { useState } from "react";
import { db, Driver } from "@/lib/mock";

export default function DriversPage() {
  const [open, setOpen] = useState(false);
  const [driver, setDriver] = useState<Driver>({ id: "", name: "", phone: "", location: "", status: "active" });

  const addDriver = () => {
    const d = { ...driver, id: Math.random().toString(36).slice(2) };
    db.drivers.unshift(d);
    setOpen(false);
    setDriver({ id: "", name: "", phone: "", location: "", status: "active" });
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold">السائقون</h1>
        <button className="btn btn-primary" onClick={() => setOpen(true)}>إضافة سائق</button>
      </div>
      <div className="card overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50">
            <tr className="text-gray-600">
              <th className="p-3 text-right">الاسم</th>
              <th className="p-3 text-right">الهاتف</th>
              <th className="p-3 text-right">الموقع</th>
              <th className="p-3 text-right">الحالة</th>
            </tr>
          </thead>
          <tbody>
            {db.drivers.map((v) => (
              <tr key={v.id} className="border-t">
                <td className="p-3">{v.name}</td>
                <td className="p-3">{v.phone}</td>
                <td className="p-3">{v.location}</td>
                <td className="p-3">{v.status === "active" ? <span className="badge badge-success">نشط</span> : "متوقف"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {open && (
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center p-4">
          <div className="card w-full max-w-2xl p-6">
            <h2 className="text-lg font-semibold mb-4">إضافة سائق</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">الاسم</label>
                <input className="input" value={driver.name} onChange={(e) => setDriver({ ...driver, name: e.target.value })} />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">الهاتف</label>
                <input className="input" value={driver.phone} onChange={(e) => setDriver({ ...driver, phone: e.target.value })} />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">الموقع</label>
                <input className="input" value={driver.location} onChange={(e) => setDriver({ ...driver, location: e.target.value })} />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">الحالة</label>
                <select
                  className="input"
                  value={driver.status}
                  onChange={(e) => setDriver({ ...driver, status: e.target.value as typeof driver.status })}
                >
                  <option value="active">نشط</option>
                  <option value="inactive">متوقف</option>
                </select>
              </div>
            </div>
            <div className="flex items-center justify-end gap-2 mt-6">
              <button className="btn btn-secondary" onClick={() => setOpen(false)}>إلغاء</button>
              <button className="btn btn-primary" onClick={addDriver}>إضافة</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
