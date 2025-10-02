"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AuthGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  useEffect(() => {
    const raw = typeof window !== "undefined" && localStorage.getItem("training_portal_auth");
    if (!raw) {
      router.replace("/login");
    }
  }, [router]);
  return <>{children}</>;
}
