"use client";

import * as React from "react"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"
import Link from "next/link"
import { usePathname } from "next/navigation";
import { Bell, Calendar, File, LogOut, PanelTop, Search, Settings, Sliders, UserCheck } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
// This is sample data.
const data = {
  versions: ["1.0.1", "1.1.0-alpha", "2.0.0-beta1"],
  navMain: [
    {
      title: "DATA",
      url: "#",
      items: [
        {
          title: "Calendar",
          url: "/dashboard/calendar",
          icon: Calendar,
        },
        {
          title: "Listings",
          url: "/dashboard/listings",
          icon: File,
        },
        {
          title: "Orders",
          url: "/dashboard/orders",
          icon: File,
        },
        {
          title: "Services",
          url: "/dashboard/services",
          icon: Settings,
        },
        {
          title: "Notifications",
          url: "/dashboard/notifications",
          icon: Bell,
        },
        {
          title: "Billing",
          url: "/dashboard/billing",
          icon: PanelTop,
        },
      ],
    },
    {
      title: "PEOPLE",
      url: "#",
      items: [
        {
          title: "Agents",
          url: "/dashboard/agents",
          icon: UserCheck,
        },
        {
          title: "Sub Accounts",
          url: "/dashboard/sub-accounts",
          icon: Calendar,
        },
        {
          title: "Vendors",
          url: "/dashboard/vendors",
          icon: Calendar,
        },
        {
          title: "Admin",
          url: "/dashboard/admin",
          icon: Calendar,
        },
      ],
    },
    {
      title: "GENERAL",
      url: "#",
      items: [
        {
          title: "Global Settings",
          url: "/dashboard/global-settings",
          icon: Sliders,
        },
      ],
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname();

  return (
    <Sidebar {...props} className="w-[250px] p-0">
      <SidebarHeader className="bg-[#4290E9]">
        <div className="flex items-center justify-between p-4 gap-x-2.5">
          <Avatar className="h-8 w-8">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <p className="text-[14px] font-normal text-white">BC Floor Plans</p>
            <p className="text-[14px] font-normal text-white">Media Company Owner</p>
            <p className="text-[12px] font-normal text-white">Taylor Tayburn</p>
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent className="bg-[#E4E4E4] pt-[60px] px-[25px]">
        {/* We create a SidebarGroup for each parent. */}
        {data.navMain.map((item) => (
          <SidebarGroup key={item.title}>
            <SidebarGroupLabel className="font-extrabold text-[12px] text-[#BBBBBB]">{item.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              {item?.items && (
                <SidebarMenu>
                  {item.items.map((subItem) => {
                    const isActive = pathname === subItem.url;

                    return (
                      <SidebarMenuItem key={subItem.title}>
                        <SidebarMenuButton
                          asChild
                          isActive={isActive}
                          className={`text-[16px] font-normal ${isActive ? "text-[#4290E9] !font-bold" : "text-[#7D7D7D]"}`}
                        >
                          <Link href={subItem.url} className={`text-[16px] flex items-center gap-2 font-normal ${isActive ? "!text-[#4290E9] !font-bold" : "text-[#7D7D7D]"}`}>
                            {subItem.icon && (
                              <subItem.icon
                                className={`h-4 w-4 ${isActive ? "text-[#4290E9] " : "text-[#7D7D7D]"}`}
                              />
                            )}
                            {subItem.title}
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>

                    );
                  })}

                </SidebarMenu>
              )}
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
        <SidebarGroup>
          <SidebarGroupLabel className="font-extrabold text-[12px] text-[#BBBBBB]">SEARCH</SidebarGroupLabel>
          <SidebarGroupContent>
            <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg shadow-sm border w-full max-w-sm">

              <input
                type="text"
                placeholder="This page..."
                className="bg-transparent outline-none w-full text-sm text-gray-700 placeholder-gray-400"
              />
              <Search className="h-5 w-5 text-[#4290E9]" />
            </div>
            <div className="flex items-center gap-x-2.5 pt-[196px] pb-[24px]">
              <LogOut className="text-[#7D7D7D] h-[18px] w-[18px]" />
              <p className="text-[#7D7D7D] text-[16px] font-normal">Log Out</p>
            </div>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarRail />
    </Sidebar>
  )
}
