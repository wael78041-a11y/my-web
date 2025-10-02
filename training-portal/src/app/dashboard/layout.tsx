import AuthGuard from "@/components/AuthGuard";
import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <AuthGuard>
      <div className="min-h-screen grid grid-rows-[56px_1fr] md:grid-cols-[1fr_256px] md:grid-rows-[56px_1fr]">
        <Topbar />
        <div className="md:col-start-2 md:row-span-2 md:row-start-1"><Sidebar /></div>
        <main className="p-4 md:p-6 container-page">{children}</main>
      </div>
    </AuthGuard>
  );
}
