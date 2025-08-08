import { Bell, User } from "lucide-react";
import { SidebarTrigger } from "@/components/ui/sidebar";

export function AppNavbar() {
  return (
    <header className="sticky top-0 z-50 bg-blue-800 text-white shadow-sm">
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-3">
          <SidebarTrigger className="text-white hover:text-blue-200" />
          <span className="text-lg font-semibold">DTIS Dashboard</span>
        </div>

        <div className="flex items-center gap-4">
          <button
            type="button"
            className="hover:text-blue-200 transition-colors"
            aria-label="Notifications"
          >
            <Bell className="w-5 h-5" />
          </button>

          <button
            type="button"
            className="hover:text-blue-200 transition-colors"
            aria-label="Profile"
          >
            <User className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  );
}
