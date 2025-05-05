"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Trophy, Calendar, Users, BarChart3, Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { UserNav } from "@/components/user-nav"

export function SiteHeader() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const routes = [
    {
      href: "/",
      label: "Home",
      active: pathname === "/",
    },
    {
      href: "/fixtures",
      label: "Fixtures",
      icon: Calendar,
      active: pathname === "/fixtures",
    },
    {
      href: "/table",
      label: "League Table",
      icon: Trophy,
      active: pathname === "/table",
    },
    {
      href: "/teams",
      label: "Teams",
      icon: Users,
      active: pathname === "/teams",
    },
    {
      href: "/stats",
      label: "Statistics",
      icon: BarChart3,
      active: pathname === "/stats",
    },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="pr-0">
            <div className="px-7">
              <Link href="/" className="flex items-center" onClick={() => setIsOpen(false)}>
                <Trophy className="h-6 w-6 text-green-600 mr-2" />
                <span className="font-bold">NUFL</span>
              </Link>
            </div>
            <nav className="flex flex-col gap-4 mt-8 px-7">
              {routes.map((route) => (
                <Link
                  key={route.href}
                  href={route.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "flex items-center text-sm font-medium text-muted-foreground",
                    route.active && "text-foreground",
                  )}
                >
                  {route.icon && <route.icon className="mr-2 h-4 w-4" />}
                  {route.label}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="flex items-center space-x-2">
            <Trophy className="h-6 w-6 text-green-600" />
            <span className="font-bold">NUFL</span>
          </Link>
        </div>
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium flex-1">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "transition-colors hover:text-foreground/80",
                route.active ? "text-foreground" : "text-foreground/60",
              )}
            >
              {route.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center">
          <Link href="/admin" className="mr-4">
            <Button variant="outline" size="sm">
              Admin
            </Button>
          </Link>
          <UserNav />
        </div>
      </div>
    </header>
  )
}
