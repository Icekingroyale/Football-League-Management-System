import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Trophy, Users, Calendar, MapPin, Award } from "lucide-react"

// This would come from your database in a real app
const teams = [
  {
    id: "1",
    name: "University of Lagos",
    shortName: "UNILAG",
    coach: "Dr. Adebayo Johnson",
    founded: "1962",
    stadium: "UNILAG Sports Complex",
    capacity: 5000,
    description: "One of the strongest teams in the league with a history of developing talented players.",
    achievements: ["League Champions (2021/2022)", "Runners-up (2022/2023)", "Most Goals Scored (2020/2021)"],
    players: [
      {
        id: 1,
        name: "Chukwu Emmanuel",
        position: "Forward",
        jerseyNumber: 9,
        age: 22,
        goals: 8,
        assists: 3,
      },
      {
        id: 2,
        name: "Oladele Taiwo",
        position: "Midfielder",
        jerseyNumber: 8,
        age: 21,
        goals: 3,
        assists: 2,
      },
      {
        id: 3,
        name: "Adeniyi Oluwasegun",
        position: "Defender",
        jerseyNumber: 4,
        age: 23,
        goals: 1,
        assists: 0,
      },
      {
        id: 4,
        name: "Nwankwo Chisom",
        position: "Goalkeeper",
        jerseyNumber: 1,
        age: 24,
        goals: 0,
        assists: 0,
      },
    ],
    fixtures: [
      {
        id: 1,
        opponent: "University of Ibadan",
        date: "2024-05-10T15:00:00",
        venue: "UNILAG Sports Complex",
        isHome: true,
      },
      {
        id: 2,
        opponent: "University of Benin",
        date: "2024-05-17T14:00:00",
        venue: "UNIBEN Sports Complex",
        isHome: false,
      },
    ],
    results: [
      {
        id: 1,
        opponent: "University of Benin",
        date: "2024-04-28T15:00:00",
        venue: "UNILAG Sports Complex",
        score: "3-1",
        isHome: true,
      },
      {
        id: 2,
        opponent: "Ahmadu Bello University",
        date: "2024-04-21T14:00:00",
        venue: "ABU Sports Complex",
        score: "2-2",
        isHome: false,
      },
    ],
  },
  // Other teams would be here
]

export default function TeamPage({ params }: { params: { id: string } }) {
  // In a real app, you would fetch the team data based on the ID
  const team = teams.find((t) => t.id === params.id) || teams[0]

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-green-900 text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="h-48 w-48 bg-green-100 rounded-full flex items-center justify-center">
                <div className="text-5xl font-bold text-green-800">{team.shortName}</div>
              </div>
              <div className="space-y-4 text-center md:text-left">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">{team.name}</h1>
                <p className="max-w-[700px] text-gray-200 md:text-xl/relaxed">{team.description}</p>
                <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                  <div className="flex items-center text-sm bg-white/10 px-3 py-1 rounded-full">
                    <Trophy className="mr-2 h-4 w-4" />
                    <span>Founded: {team.founded}</span>
                  </div>
                  <div className="flex items-center text-sm bg-white/10 px-3 py-1 rounded-full">
                    <Users className="mr-2 h-4 w-4" />
                    <span>Coach: {team.coach}</span>
                  </div>
                  <div className="flex items-center text-sm bg-white/10 px-3 py-1 rounded-full">
                    <MapPin className="mr-2 h-4 w-4" />
                    <span>Stadium: {team.stadium}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <Tabs defaultValue="squad" className="w-full">
              <TabsList className="grid w-full grid-cols-4 mb-8">
                <TabsTrigger value="squad">Squad</TabsTrigger>
                <TabsTrigger value="fixtures">Fixtures</TabsTrigger>
                <TabsTrigger value="results">Results</TabsTrigger>
                <TabsTrigger value="achievements">Achievements</TabsTrigger>
              </TabsList>
              <TabsContent value="squad" className="p-4 bg-white rounded-md mt-2">
                <div>
                  <div className="flex items-center justify-between pb-4">
                    <h3 className="text-lg font-semibold">Team Squad</h3>
                  </div>
                  <div className="rounded-md border">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Jersey</TableHead>
                          <TableHead>Name</TableHead>
                          <TableHead>Position</TableHead>
                          <TableHead>Age</TableHead>
                          <TableHead className="text-center">Goals</TableHead>
                          <TableHead className="text-center">Assists</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {team.players.map((player) => (
                          <TableRow key={player.id}>
                            <TableCell className="font-medium">{player.jerseyNumber}</TableCell>
                            <TableCell>{player.name}</TableCell>
                            <TableCell>{player.position}</TableCell>
                            <TableCell>{player.age}</TableCell>
                            <TableCell className="text-center">{player.goals}</TableCell>
                            <TableCell className="text-center">{player.assists}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="fixtures" className="p-4 bg-white rounded-md mt-2">
                <div>
                  <div className="flex items-center justify-between pb-4">
                    <h3 className="text-lg font-semibold">Upcoming Fixtures</h3>
                  </div>
                  <div className="grid gap-4">
                    {team.fixtures.map((fixture) => {
                      const date = new Date(fixture.date)
                      return (
                        <Card key={fixture.id}>
                          <CardContent className="p-4">
                            <div className="flex flex-col space-y-3">
                              <div className="flex items-center text-sm text-muted-foreground">
                                <Calendar className="mr-1 h-4 w-4" />
                                <span>
                                  {date.toLocaleDateString("en-NG", {
                                    weekday: "long",
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric",
                                  })}{" "}
                                  at{" "}
                                  {date.toLocaleTimeString("en-NG", {
                                    hour: "2-digit",
                                    minute: "2-digit",
                                  })}
                                </span>
                              </div>
                              <div className="flex items-center justify-between">
                                <div className="text-right w-[40%]">
                                  <p className="font-medium">{fixture.isHome ? team.name : fixture.opponent}</p>
                                </div>
                                <div className="flex items-center justify-center w-[20%]">
                                  <span className="px-2 py-1 rounded-md bg-green-100 text-green-800 font-medium">
                                    VS
                                  </span>
                                </div>
                                <div className="w-[40%]">
                                  <p className="font-medium">{fixture.isHome ? fixture.opponent : team.name}</p>
                                </div>
                              </div>
                              <div className="text-sm text-muted-foreground">
                                <p>Venue: {fixture.venue}</p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      )
                    })}
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="results" className="p-4 bg-white rounded-md mt-2">
                <div>
                  <div className="flex items-center justify-between pb-4">
                    <h3 className="text-lg font-semibold">Recent Results</h3>
                  </div>
                  <div className="grid gap-4">
                    {team.results.map((result) => {
                      const date = new Date(result.date)
                      return (
                        <Card key={result.id}>
                          <CardContent className="p-4">
                            <div className="flex flex-col space-y-3">
                              <div className="flex items-center text-sm text-muted-foreground">
                                <Calendar className="mr-1 h-4 w-4" />
                                <span>
                                  {date.toLocaleDateString("en-NG", {
                                    weekday: "long",
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric",
                                  })}
                                </span>
                              </div>
                              <div className="flex items-center justify-between">
                                <div className="text-right w-[40%]">
                                  <p className="font-medium">{result.isHome ? team.name : result.opponent}</p>
                                </div>
                                <div className="flex items-center justify-center w-[20%]">
                                  <span className="px-2 py-1 rounded-md bg-gray-100 font-bold">{result.score}</span>
                                </div>
                                <div className="w-[40%]">
                                  <p className="font-medium">{result.isHome ? result.opponent : team.name}</p>
                                </div>
                              </div>
                              <div className="text-sm text-muted-foreground">
                                <p>Venue: {result.venue}</p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      )
                    })}
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="achievements" className="p-4 bg-white rounded-md mt-2">
                <div>
                  <div className="flex items-center justify-between pb-4">
                    <h3 className="text-lg font-semibold">Team Achievements</h3>
                  </div>
                  <div className="grid gap-4">
                    {team.achievements.map((achievement, index) => (
                      <Card key={index}>
                        <CardContent className="p-4">
                          <div className="flex items-center">
                            <Award className="h-8 w-8 text-green-600 mr-4" />
                            <div>
                              <p className="font-medium">{achievement}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
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
