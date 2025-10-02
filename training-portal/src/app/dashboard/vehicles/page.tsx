"use client";

import { useState } from "react";
import { db, Vehicle } from "@/lib/mock";

export default function VehiclesPage() {
  const [open, setOpen] = useState(false);
  const [vehicle, setVehicle] = useState<Vehicle>({ id: "", number: "", type: "", owner: "", ownerPhone: "", capacityTons: 0, status: "active" });

  const addVehicle = () => {
    const v = { ...vehicle, id: Math.random().toString(36).slice(2) };
    db.vehicles.unshift(v);
    setOpen(false);
    setVehicle({ id: "", number: "", type: "", owner: "", ownerPhone: "", capacityTons: 0, status: "active" });
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold">المركبات</h1>
        <button className="btn btn-primary" onClick={() => setOpen(true)}>إضافة مركبة</button>
      </div>
      <div className="card overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50">
            <tr className="text-gray-600">
              <th className="p-3 text-right">رقم المركبة</th>
              <th className="p-3 text-right">النوع</th>
              <th className="p-3 text-right">اسم المالك</th>
              <th className="p-3 text-right">هاتف المالك</th>
              <th className="p-3 text-right">السعة (طن)</th>
              <th className="p-3 text-right">الحالة</th>
            </tr>
          </thead>
          <tbody>
            {db.vehicles.map((v) => (
              <tr key={v.id} className="border-t">
                <td className="p-3">{v.number}</td>
                <td className="p-3">{v.type}</td>
                <td className="p-3">{v.owner}</td>
                <td className="p-3">{v.ownerPhone}</td>
                <td className="p-3">{v.capacityTons}</td>
                <td className="p-3">{v.status === "active" ? <span className="badge badge-success">نشط</span> : "متوقف"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {open && (
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center p-4">
          <div className="card w-full max-w-2xl p-6">
            <h2 className="text-lg font-semibold mb-4">إضافة مركبة</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">رقم المركبة</label>
                <input className="input" value={vehicle.number} onChange={(e) => setVehicle({ ...vehicle, number: e.target.value })} />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">النوع</label>
                <input className="input" value={vehicle.type} onChange={(e) => setVehicle({ ...vehicle, type: e.target.value })} />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">اسم المالك</label>
                <input className="input" value={vehicle.owner} onChange={(e) => setVehicle({ ...vehicle, owner: e.target.value })} />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">هاتف المالك</label>
                <input className="input" value={vehicle.ownerPhone} onChange={(e) => setVehicle({ ...vehicle, ownerPhone: e.target.value })} />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">السعة (طن)</label>
                <input className="input" type="number" value={vehicle.capacityTons} onChange={(e) => setVehicle({ ...vehicle, capacityTons: Number(e.target.value) })} />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">الحالة</label>
                <select
                  className="input"
                  value={vehicle.status}
                  onChange={(e) =>
                    setVehicle({ ...vehicle, status: e.target.value as typeof vehicle.status })
                  }
                >
                  <option value="active">نشط</option>
                  <option value="inactive">متوقف</option>
                </select>
              </div>
            </div>
            <div className="flex items-center justify-end gap-2 mt-6">
              <button className="btn btn-secondary" onClick={() => setOpen(false)}>إلغاء</button>
              <button className="btn btn-primary" onClick={addVehicle}>إضافة</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
