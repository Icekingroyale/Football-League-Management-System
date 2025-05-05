import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { UpcomingFixtures } from "@/components/upcoming-fixtures"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CalendarDays } from "lucide-react"

export default function FixturesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-green-900 text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Fixtures</h1>
                <p className="max-w-[700px] text-gray-200 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  View all upcoming matches in the Nigerian University Football League
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <Tabs defaultValue="upcoming" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="upcoming">Upcoming Fixtures</TabsTrigger>
                <TabsTrigger value="all">All Fixtures</TabsTrigger>
              </TabsList>
              <TabsContent value="upcoming" className="p-4 bg-white rounded-md mt-2">
                <UpcomingFixtures />
              </TabsContent>
              <TabsContent value="all" className="p-4 bg-white rounded-md mt-2">
                <div className="space-y-8">
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Week 11</h3>
                    <div className="grid gap-4">
                      {Array.from({ length: 4 }).map((_, i) => (
                        <Card key={i}>
                          <CardContent className="p-4">
                            <div className="flex flex-col space-y-3">
                              <div className="flex items-center text-sm text-muted-foreground">
                                <CalendarDays className="mr-1 h-4 w-4" />
                                <span>
                                  {new Date(2024, 4, 20 + i).toLocaleDateString("en-NG", {
                                    weekday: "long",
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric",
                                  })}{" "}
                                  at 15:00
                                </span>
                              </div>
                              <div className="flex items-center justify-between">
                                <div className="text-right w-[40%]">
                                  <p className="font-medium">University of Lagos</p>
                                </div>
                                <div className="flex items-center justify-center w-[20%]">
                                  <span className="px-2 py-1 rounded-md bg-green-100 text-green-800 font-medium">
                                    VS
                                  </span>
                                </div>
                                <div className="w-[40%]">
                                  <p className="font-medium">University of Ibadan</p>
                                </div>
                              </div>
                              <div className="text-sm text-muted-foreground">
                                <p>Venue: UNILAG Sports Complex</p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Week 12</h3>
                    <div className="grid gap-4">
                      {Array.from({ length: 4 }).map((_, i) => (
                        <Card key={i}>
                          <CardContent className="p-4">
                            <div className="flex flex-col space-y-3">
                              <div className="flex items-center text-sm text-muted-foreground">
                                <CalendarDays className="mr-1 h-4 w-4" />
                                <span>
                                  {new Date(2024, 4, 27 + i).toLocaleDateString("en-NG", {
                                    weekday: "long",
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric",
                                  })}{" "}
                                  at 15:00
                                </span>
                              </div>
                              <div className="flex items-center justify-between">
                                <div className="text-right w-[40%]">
                                  <p className="font-medium">Obafemi Awolowo University</p>
                                </div>
                                <div className="flex items-center justify-center w-[20%]">
                                  <span className="px-2 py-1 rounded-md bg-green-100 text-green-800 font-medium">
                                    VS
                                  </span>
                                </div>
                                <div className="w-[40%]">
                                  <p className="font-medium">University of Nigeria</p>
                                </div>
                              </div>
                              <div className="text-sm text-muted-foreground">
                                <p>Venue: OAU Sports Complex</p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
