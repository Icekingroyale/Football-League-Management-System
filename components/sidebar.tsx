"use client"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Trophy, Users, Calendar, BarChart3, Award, Settings, Home } from "lucide-react"
import Link from "next/link"

interface AdminSidebarProps {
  activeTab: string
  setActiveTab: (tab: string) => void
}

export function AdminSidebar({ activeTab, setActiveTab }: AdminSidebarProps) {
  const sidebarItems = [
    {
      name: "Overview",
      icon: Home,
      value: "overview",
    },
    {
      name: "Teams",
      icon: Trophy,
      value: "teams",
    },
    {
      name: "Players",
      icon: Users,
      value: "players",
    },
    {
      name: "Fixtures",
      icon: Calendar,
      value: "fixtures",
    },
    {
      name: "Results",
      icon: Award,
      value: "results",
    },
    {
      name: "Statistics",
      icon: BarChart3,
      value: "statistics",
    },
    {
      name: "Settings",
      icon: Settings,
      value: "settings",
    },
  ]

  return (
    <div className="hidden border-r bg-background md:block w-64">
      <div className="flex h-full flex-col gap-2 p-4">
        <div className="flex h-14 items-center border-b px-4 py-2">
          <h2 className="text-lg font-semibold">Admin Dashboard</h2>
        </div>
        <div className="flex-1 py-2">
          <nav className="grid gap-1">
            {sidebarItems.map((item) => (
              <Button
                key={item.value}
                variant={activeTab === item.value ? "secondary" : "ghost"}
                className={cn(
                  "w-full justify-start",
                  activeTab === item.value && "bg-green-100 text-green-900 hover:bg-green-200 hover:text-green-900",
                )}
                onClick={() => setActiveTab(item.value)}
              >
                <item.icon className="mr-2 h-4 w-4" />
                {item.name}
              </Button>
            ))}
          </nav>
        </div>
        <div className="border-t pt-4">
          <Link href="/">
            <Button variant="outline" className="w-full justify-start">
              <Home className="mr-2 h-4 w-4" />
              Back to Website
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
