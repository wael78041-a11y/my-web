"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Topbar() {
  const router = useRouter();
  const logout = () => {
    localStorage.removeItem("training_portal_auth");
    router.replace("/login");
  };
  return (
    <header className="h-14 bg-white border-b border-gray-200 flex items-center justify-between px-4">
      <div className="font-semibold">بوابة التدريب الصيفي</div>
      <div className="flex items-center gap-2">
        <Link href="/" className="btn btn-secondary">الصفحة الرئيسية</Link>
        <button onClick={logout} className="btn btn-primary">خروج</button>
      </div>
    </header>
  );
}
