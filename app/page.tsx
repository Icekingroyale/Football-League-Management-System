import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CalendarDays, Medal, Trophy, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { LeagueTable } from "@/components/league-table"
import { UpcomingFixtures } from "@/components/upcoming-fixtures"
import { RecentResults } from "@/components/recent-results"
import { TopScorers } from "@/components/top-scorers"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-green-900 to-green-800 text-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Nigerian University Football League
                  </h1>
                  <p className="max-w-[600px] text-gray-200 md:text-xl">
                    The premier football competition for Nigerian universities. Follow your favorite team, check
                    fixtures, and stay updated with the latest results.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/fixtures">
                    <Button size="lg" className="bg-white text-green-900 hover:bg-gray-100">
                      View Fixtures
                    </Button>
                  </Link>
                  <Link href="/table">
                    <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
                      League Table
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  width={600}
                  height={400}
                  alt="Nigerian University Football League"
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-900">
                  League Overview
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Follow the Action</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Stay updated with the latest standings, fixtures, results, and player statistics from the Nigerian
                  University Football League.
                </p>
              </div>
            </div>
            <div className="mx-auto grid gap-6 py-12 md:grid-cols-2 lg:grid-cols-4">
              <Card className="flex flex-col items-center justify-center p-6 text-center">
                <Trophy className="h-12 w-12 text-green-600 mb-4" />
                <h3 className="text-xl font-bold">League Table</h3>
                <p className="text-sm text-gray-500 mt-2">Track your team's position in the league standings.</p>
              </Card>
              <Card className="flex flex-col items-center justify-center p-6 text-center">
                <CalendarDays className="h-12 w-12 text-green-600 mb-4" />
                <h3 className="text-xl font-bold">Fixtures</h3>
                <p className="text-sm text-gray-500 mt-2">View upcoming matches and plan your schedule.</p>
              </Card>
              <Card className="flex flex-col items-center justify-center p-6 text-center">
                <Users className="h-12 w-12 text-green-600 mb-4" />
                <h3 className="text-xl font-bold">Teams</h3>
                <p className="text-sm text-gray-500 mt-2">Explore university teams and their players.</p>
              </Card>
              <Card className="flex flex-col items-center justify-center p-6 text-center">
                <Medal className="h-12 w-12 text-green-600 mb-4" />
                <h3 className="text-xl font-bold">Statistics</h3>
                <p className="text-sm text-gray-500 mt-2">Check top scorers, assists, and player performance.</p>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-blue-700">League Dashboard</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Everything you need to know about the Nigerian University Football League.
                </p>
              </div>
            </div>
            <div className="mx-auto py-8">
              <Tabs defaultValue="table" className="w-full">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="table">Table</TabsTrigger>
                  <TabsTrigger value="fixtures">Fixtures</TabsTrigger>
                  <TabsTrigger value="results">Results</TabsTrigger>
                  <TabsTrigger value="scorers">Top Scorers</TabsTrigger>
                </TabsList>
                <TabsContent value="table" className="p-4 bg-gray-600 rounded-md mt-2">
                  <LeagueTable />
                </TabsContent>
                <TabsContent value="fixtures" className="p-4 bg-white rounded-md mt-2">
                  <UpcomingFixtures />
                </TabsContent>
                <TabsContent value="results" className="p-4 bg-white rounded-md mt-2">
                  <RecentResults />
                </TabsContent>
                <TabsContent value="scorers" className="p-4 bg-white rounded-md mt-2">
                  <TopScorers />
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
