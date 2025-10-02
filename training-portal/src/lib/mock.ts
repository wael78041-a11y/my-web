export type ShipmentStatus = "pending" | "in_transit" | "delivered" | "received";

export type Shipment = {
  id: string;
  customerName: string;
  city: string;
  goodsValue: number;
  collectibleAmount: number;
  date: string; // ISO
  status: ShipmentStatus;
};

export type Vehicle = { id: string; number: string; type: string; owner: string; ownerPhone: string; capacityTons: number; status: "active" | "inactive" };
export type Driver = { id: string; name: string; phone: string; location: string; status: "active" | "inactive" };

const sampleShipments: Shipment[] = [
  { id: "SHP-B8BFD841", customerName: "سارة", city: "لفكة", goodsValue: 300, collectibleAmount: 370, date: "2025-09-06", status: "received" },
  { id: "SHP-586BD4CA", customerName: "أحمد", city: "إركان", goodsValue: 800, collectibleAmount: 850, date: "2025-09-05", status: "pending" },
  { id: "SHP-1B820DFD", customerName: "محمد", city: "نيقوسيا", goodsValue: 300, collectibleAmount: 339, date: "2025-09-05", status: "received" },
];

const sampleVehicles: Vehicle[] = [
  { id: "v1", number: "998877", type: "Nissan", owner: "محمود", ownerPhone: "05688774412", capacityTons: 2, status: "active" },
  { id: "v2", number: "223344", type: "Toyota Camry", owner: "—", ownerPhone: "—", capacityTons: 1, status: "active" },
];

const sampleDrivers: Driver[] = [
  { id: "d1", name: "سالم", phone: "05488992233", location: "لفكوشا", status: "active" },
  { id: "d2", name: "جابر", phone: "05699557733", location: "إركان", status: "active" },
  { id: "d3", name: "سلمان", phone: "05699334455", location: "—", status: "active" },
  { id: "d4", name: "إسماعيل", phone: "0547553344", location: "نيقوسيا", status: "active" },
];

export const db = {
  shipments: [...sampleShipments],
  vehicles: [...sampleVehicles],
  drivers: [...sampleDrivers],
};

export function getMockDashboardStats() {
  const totalShipments = db.shipments.length;
  const pendingShipments = db.shipments.filter((s) => s.status === "pending").length;
  const inTransit = db.shipments.filter((s) => s.status === "in_transit").length;
  const delivered = db.shipments.filter((s) => s.status === "delivered" || s.status === "received").length;
  return { totalShipments, pendingShipments, inTransit, delivered };
}
