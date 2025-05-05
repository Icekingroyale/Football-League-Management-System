"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AdminHeader } from "@/components/admin/header"
import { AdminSidebar } from "@/components/admin/sidebar"
import { TeamManagement } from "@/components/admin/team-management"
import { FixtureManagement } from "@/components/admin/fixture-management"
import { PlayerManagement } from "@/components/admin/player-management"
import { ResultManagement } from "@/components/admin/result-management"
import { Overview } from "@/components/admin/overview"

export function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="flex min-h-screen flex-col">
      <AdminHeader />
      <div className="flex-1 flex">
        <AdminSidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        <main className="flex-1 p-6 bg-gray-100">
          <div className="mx-auto max-w-7xl">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
              <TabsList className="grid w-full grid-cols-5">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="teams">Teams</TabsTrigger>
                <TabsTrigger value="players">Players</TabsTrigger>
                <TabsTrigger value="fixtures">Fixtures</TabsTrigger>
                <TabsTrigger value="results">Results</TabsTrigger>
              </TabsList>
              <TabsContent value="overview" className="space-y-4">
                <Overview />
              </TabsContent>
              <TabsContent value="teams" className="space-y-4">
                <TeamManagement />
              </TabsContent>
              <TabsContent value="players" className="space-y-4">
                <PlayerManagement />
              </TabsContent>
              <TabsContent value="fixtures" className="space-y-4">
                <FixtureManagement />
              </TabsContent>
              <TabsContent value="results" className="space-y-4">
                <ResultManagement />
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  )
}
