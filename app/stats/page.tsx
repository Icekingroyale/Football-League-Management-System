import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { TopScorers } from "@/components/top-scorers"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function StatsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-green-900 text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Statistics</h1>
                <p className="max-w-[700px] text-gray-200 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Player and team statistics for the Nigerian University Football League
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <Tabs defaultValue="scorers" className="w-full">
              <TabsList className="grid w-full grid-cols-4 mb-8">
                <TabsTrigger value="scorers">Top Scorers</TabsTrigger>
                <TabsTrigger value="assists">Top Assists</TabsTrigger>
                <TabsTrigger value="cards">Cards</TabsTrigger>
                <TabsTrigger value="team">Team Stats</TabsTrigger>
              </TabsList>
              <TabsContent value="scorers" className="p-4 bg-white rounded-md mt-2">
                <TopScorers />
              </TabsContent>
              <TabsContent value="assists" className="p-4 bg-white rounded-md mt-2">
                <div>
                  <div className="flex items-center justify-between pb-4">
                    <h3 className="text-lg font-semibold">Top Assists</h3>
                  </div>
                  <div className="rounded-md border">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-12">Rank</TableHead>
                          <TableHead>Player</TableHead>
                          <TableHead>Team</TableHead>
                          <TableHead className="text-center">Assists</TableHead>
                          <TableHead className="text-center">Apps</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell className="font-medium">1</TableCell>
                          <TableCell>Okafor Chinedu</TableCell>
                          <TableCell>University of Port Harcourt</TableCell>
                          <TableCell className="text-center">6</TableCell>
                          <TableCell className="text-center">10</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">2</TableCell>
                          <TableCell>Adebayo Oluwaseun</TableCell>
                          <TableCell>University of Ibadan</TableCell>
                          <TableCell className="text-center">5</TableCell>
                          <TableCell className="text-center">10</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">3</TableCell>
                          <TableCell>Ibrahim Mohammed</TableCell>
                          <TableCell>Ahmadu Bello University</TableCell>
                          <TableCell className="text-center">4</TableCell>
                          <TableCell className="text-center">10</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">4</TableCell>
                          <TableCell>Adeyemi Tunde</TableCell>
                          <TableCell>University of Benin</TableCell>
                          <TableCell className="text-center">3</TableCell>
                          <TableCell className="text-center">10</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">5</TableCell>
                          <TableCell>Chukwu Emmanuel</TableCell>
                          <TableCell>University of Lagos</TableCell>
                          <TableCell className="text-center">3</TableCell>
                          <TableCell className="text-center">10</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="cards" className="p-4 bg-white rounded-md mt-2">
                <div>
                  <div className="flex items-center justify-between pb-4">
                    <h3 className="text-lg font-semibold">Cards</h3>
                  </div>
                  <div className="rounded-md border">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-12">Rank</TableHead>
                          <TableHead>Player</TableHead>
                          <TableHead>Team</TableHead>
                          <TableHead className="text-center">Yellow</TableHead>
                          <TableHead className="text-center">Red</TableHead>
                          <TableHead className="text-center">Total</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell className="font-medium">1</TableCell>
                          <TableCell>Okonkwo Chijioke</TableCell>
                          <TableCell>Obafemi Awolowo University</TableCell>
                          <TableCell className="text-center">4</TableCell>
                          <TableCell className="text-center">1</TableCell>
                          <TableCell className="text-center font-medium">5</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">2</TableCell>
                          <TableCell>Eze Kingsley</TableCell>
                          <TableCell>University of Ilorin</TableCell>
                          <TableCell className="text-center">4</TableCell>
                          <TableCell className="text-center">0</TableCell>
                          <TableCell className="text-center font-medium">4</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">3</TableCell>
                          <TableCell>Ibrahim Mohammed</TableCell>
                          <TableCell>Ahmadu Bello University</TableCell>
                          <TableCell className="text-center">3</TableCell>
                          <TableCell className="text-center">0</TableCell>
                          <TableCell className="text-center font-medium">3</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">4</TableCell>
                          <TableCell>Nwachukwu David</TableCell>
                          <TableCell>University of Nigeria</TableCell>
                          <TableCell className="text-center">2</TableCell>
                          <TableCell className="text-center">1</TableCell>
                          <TableCell className="text-center font-medium">3</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">5</TableCell>
                          <TableCell>Adeyemi Tunde</TableCell>
                          <TableCell>University of Benin</TableCell>
                          <TableCell className="text-center">3</TableCell>
                          <TableCell className="text-center">0</TableCell>
                          <TableCell className="text-center font-medium">3</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="team" className="p-4 bg-white rounded-md mt-2">
                <div>
                  <div className="flex items-center justify-between pb-4">
                    <h3 className="text-lg font-semibold">Team Statistics</h3>
                  </div>
                  <div className="rounded-md border">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Team</TableHead>
                          <TableHead className="text-center">Goals Scored</TableHead>
                          <TableHead className="text-center">Goals Conceded</TableHead>
                          <TableHead className="text-center">Clean Sheets</TableHead>
                          <TableHead className="text-center">Shots</TableHead>
                          <TableHead className="text-center">Possession</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell className="font-medium">University of Lagos</TableCell>
                          <TableCell className="text-center">24</TableCell>
                          <TableCell className="text-center">8</TableCell>
                          <TableCell className="text-center">5</TableCell>
                          <TableCell className="text-center">142</TableCell>
                          <TableCell className="text-center">58%</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">University of Ibadan</TableCell>
                          <TableCell className="text-center">20</TableCell>
                          <TableCell className="text-center">10</TableCell>
                          <TableCell className="text-center">4</TableCell>
                          <TableCell className="text-center">135</TableCell>
                          <TableCell className="text-center">55%</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Obafemi Awolowo University</TableCell>
                          <TableCell className="text-center">18</TableCell>
                          <TableCell className="text-center">9</TableCell>
                          <TableCell className="text-center">4</TableCell>
                          <TableCell className="text-center">128</TableCell>
                          <TableCell className="text-center">52%</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">University of Nigeria</TableCell>
                          <TableCell className="text-center">15</TableCell>
                          <TableCell className="text-center">10</TableCell>
                          <TableCell className="text-center">3</TableCell>
                          <TableCell className="text-center">115</TableCell>
                          <TableCell className="text-center">49%</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Ahmadu Bello University</TableCell>
                          <TableCell className="text-center">14</TableCell>
                          <TableCell className="text-center">12</TableCell>
                          <TableCell className="text-center">3</TableCell>
                          <TableCell className="text-center">105</TableCell>
                          <TableCell className="text-center">47%</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
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
