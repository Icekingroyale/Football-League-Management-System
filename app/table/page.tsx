import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { LeagueTable } from "@/components/league-table"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function TablePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-green-900 text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">League Table</h1>
                <p className="max-w-[700px] text-gray-200 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Current standings in the Nigerian University Football League
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <Tabs defaultValue="current" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="current">Current Season</TabsTrigger>
                <TabsTrigger value="history">Historical</TabsTrigger>
              </TabsList>
              <TabsContent value="current" className="p-4 bg-white rounded-md mt-2">
                <LeagueTable />
              </TabsContent>
              <TabsContent value="history" className="p-4 bg-white rounded-md mt-2">
                <div className="space-y-8">
                  <Card>
                    <CardHeader>
                      <CardTitle>2022/2023 Season</CardTitle>
                      <CardDescription>Final standings from the previous season</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="rounded-md border">
                        <table className="w-full">
                          <thead>
                            <tr className="border-b bg-muted/50">
                              <th className="p-2 text-left font-medium">Pos</th>
                              <th className="p-2 text-left font-medium">Team</th>
                              <th className="p-2 text-center font-medium">P</th>
                              <th className="p-2 text-center font-medium">W</th>
                              <th className="p-2 text-center font-medium">D</th>
                              <th className="p-2 text-center font-medium">L</th>
                              <th className="p-2 text-center font-medium">GD</th>
                              <th className="p-2 text-center font-medium">Pts</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="border-b">
                              <td className="p-2 font-medium">1</td>
                              <td className="p-2">University of Ibadan</td>
                              <td className="p-2 text-center">14</td>
                              <td className="p-2 text-center">10</td>
                              <td className="p-2 text-center">3</td>
                              <td className="p-2 text-center">1</td>
                              <td className="p-2 text-center">+18</td>
                              <td className="p-2 text-center font-medium">33</td>
                            </tr>
                            <tr className="border-b">
                              <td className="p-2 font-medium">2</td>
                              <td className="p-2">University of Lagos</td>
                              <td className="p-2 text-center">14</td>
                              <td className="p-2 text-center">9</td>
                              <td className="p-2 text-center">3</td>
                              <td className="p-2 text-center">2</td>
                              <td className="p-2 text-center">+15</td>
                              <td className="p-2 text-center font-medium">30</td>
                            </tr>
                            <tr className="border-b">
                              <td className="p-2 font-medium">3</td>
                              <td className="p-2">Obafemi Awolowo University</td>
                              <td className="p-2 text-center">14</td>
                              <td className="p-2 text-center">8</td>
                              <td className="p-2 text-center">4</td>
                              <td className="p-2 text-center">2</td>
                              <td className="p-2 text-center">+12</td>
                              <td className="p-2 text-center font-medium">28</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>2021/2022 Season</CardTitle>
                      <CardDescription>Final standings from two seasons ago</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="rounded-md border">
                        <table className="w-full">
                          <thead>
                            <tr className="border-b bg-muted/50">
                              <th className="p-2 text-left font-medium">Pos</th>
                              <th className="p-2 text-left font-medium">Team</th>
                              <th className="p-2 text-center font-medium">P</th>
                              <th className="p-2 text-center font-medium">W</th>
                              <th className="p-2 text-center font-medium">D</th>
                              <th className="p-2 text-center font-medium">L</th>
                              <th className="p-2 text-center font-medium">GD</th>
                              <th className="p-2 text-center font-medium">Pts</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="border-b">
                              <td className="p-2 font-medium">1</td>
                              <td className="p-2">University of Lagos</td>
                              <td className="p-2 text-center">14</td>
                              <td className="p-2 text-center">11</td>
                              <td className="p-2 text-center">2</td>
                              <td className="p-2 text-center">1</td>
                              <td className="p-2 text-center">+20</td>
                              <td className="p-2 text-center font-medium">35</td>
                            </tr>
                            <tr className="border-b">
                              <td className="p-2 font-medium">2</td>
                              <td className="p-2">University of Nigeria</td>
                              <td className="p-2 text-center">14</td>
                              <td className="p-2 text-center">9</td>
                              <td className="p-2 text-center">2</td>
                              <td className="p-2 text-center">3</td>
                              <td className="p-2 text-center">+14</td>
                              <td className="p-2 text-center font-medium">29</td>
                            </tr>
                            <tr className="border-b">
                              <td className="p-2 font-medium">3</td>
                              <td className="p-2">University of Ibadan</td>
                              <td className="p-2 text-center">14</td>
                              <td className="p-2 text-center">8</td>
                              <td className="p-2 text-center">3</td>
                              <td className="p-2 text-center">3</td>
                              <td className="p-2 text-center">+11</td>
                              <td className="p-2 text-center font-medium">27</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </CardContent>
                  </Card>
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
