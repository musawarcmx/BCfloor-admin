// app/dashboard/layout.tsx

import { AppSidebar } from "@/components/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import React from "react";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex min-h-screen w-full">
            <SidebarProvider>
                {/* Sidebar */}
                <AppSidebar variant="inset" />

                {/* Main content */}
                <div className="flex-1">
                    <SidebarInset />
                    {children}
                </div>
            </SidebarProvider>
        </div>
    );
}
