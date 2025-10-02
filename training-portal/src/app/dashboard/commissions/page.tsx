import { db } from "@/lib/mock";

export default function CommissionsPage() {
  const total = db.shipments.reduce((acc, s) => acc + s.collectibleAmount, 0);
  const paid = Math.round(total * 0.5);
  const pending = total - paid;

  return (
    <div className="space-y-6">
      <h1 className="text-xl font-bold">عمولات السائقين</h1>
      <div className="grid sm:grid-cols-3 gap-4">
        <div className="card p-5">
          <div className="text-sm text-gray-500">إجمالي العمولات</div>
          <div className="text-2xl font-bold mt-1">{total} USD</div>
        </div>
        <div className="card p-5">
          <div className="text-sm text-gray-500">المدفوع</div>
          <div className="text-2xl font-bold mt-1">{paid} USD</div>
        </div>
        <div className="card p-5">
          <div className="text-sm text-gray-500">قيد الدفع</div>
          <div className="text-2xl font-bold mt-1">{pending} USD</div>
        </div>
      </div>
      <div className="card p-6">
        <h2 className="font-semibold mb-2">ملخص السائقين</h2>
        <p className="text-gray-500 text-sm">بيانات توضيحية لغرض العرض فقط.</p>
      </div>
    </div>
  );
}
