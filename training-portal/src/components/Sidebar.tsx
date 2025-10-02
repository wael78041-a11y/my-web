"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const links = [
  { href: "/dashboard", label: "لوحة التحكم" },
  { href: "/dashboard/shipments", label: "الشحنات" },
  { href: "/dashboard/trips", label: "الرحلات" },
  { href: "/dashboard/vehicles", label: "المركبات" },
  { href: "/dashboard/drivers", label: "السائقون" },
  { href: "/dashboard/commissions", label: "العمولات" },
  { href: "/track", label: "تتبع شحنة" },
];

export default function Sidebar() {
  const pathname = usePathname();
  return (
    <aside className="h-full w-64 bg-white border-l border-gray-200 p-4 hidden md:block">
      <div className="text-sm text-gray-500 mb-2">نظام إدارة التدريب</div>
      <nav className="space-y-1">
        {links.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className={clsx(
              "block rounded-lg px-3 py-2 text-sm font-medium",
              pathname === l.href
                ? "bg-[var(--brand-600)] text-white"
                : "text-gray-700 hover:bg-gray-100"
            )}
          >
            {l.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
