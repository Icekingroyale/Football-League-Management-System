import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, Calendar, MapPin } from "lucide-react"
import Link from "next/link"

// This would come from your database in a real app
const teams = [
  {
    id: 1,
    name: "University of Lagos",
    shortName: "UNILAG",
    coach: "Dr. Adebayo Johnson",
    founded: "1962",
    stadium: "UNILAG Sports Complex",
    capacity: 5000,
    description: "One of the strongest teams in the league with a history of developing talented players.",
  },
  {
    id: 2,
    name: "University of Ibadan",
    shortName: "UI",
    coach: "Prof. Oladele Ajayi",
    founded: "1948",
    stadium: "UI Sports Complex",
    capacity: 4500,
    description: "The oldest university team with a strong emphasis on tactical discipline.",
  },
  {
    id: 3,
    name: "Obafemi Awolowo University",
    shortName: "OAU",
    coach: "Dr. Chukwu Emmanuel",
    founded: "1961",
    stadium: "OAU Sports Complex",
    capacity: 4800,
    description: "Known for their attacking style of play and passionate fan base.",
  },
  {
    id: 4,
    name: "University of Nigeria",
    shortName: "UNN",
    coach: "Dr. Nnamdi Okafor",
    founded: "1960",
    stadium: "UNN Sports Complex",
    capacity: 4200,
    description: "A team with a strong focus on youth development and technical skills.",
  },
  {
    id: 5,
    name: "Ahmadu Bello University",
    shortName: "ABU",
    coach: "Prof. Ibrahim Mohammed",
    founded: "1962",
    stadium: "ABU Sports Complex",
    capacity: 5200,
    description: "Known for their physical style and strong defensive organization.",
  },
  {
    id: 6,
    name: "University of Benin",
    shortName: "UNIBEN",
    coach: "Dr. Osaro Eguavoen",
    founded: "1970",
    stadium: "UNIBEN Sports Complex",
    capacity: 4000,
    description: "A team that emphasizes quick counter-attacks and fluid movement.",
  },
  {
    id: 7,
    name: "University of Port Harcourt",
    shortName: "UNIPORT",
    coach: "Dr. Tamuno Johnson",
    founded: "1975",
    stadium: "UNIPORT Sports Complex",
    capacity: 4300,
    description: "Has produced many national team players with their excellent training facilities.",
  },
  {
    id: 8,
    name: "University of Ilorin",
    shortName: "UNILORIN",
    coach: "Dr. Musa Ibrahim",
    founded: "1975",
    stadium: "UNILORIN Sports Complex",
    capacity: 3800,
    description: "A team known for their disciplined approach and team cohesion.",
  },
]

export default function TeamsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-green-900 text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Teams</h1>
                <p className="max-w-[700px] text-gray-200 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  All participating universities in the Nigerian University Football League
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {teams.map((team) => (
                <Card key={team.id} className="overflow-hidden">
                  <CardHeader className="p-0">
                    <div className="h-48 w-full bg-green-100 flex items-center justify-center">
                      <div className="text-4xl font-bold text-green-800">{team.shortName}</div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <CardTitle>{team.name}</CardTitle>
                    <CardDescription className="mt-2">{team.description}</CardDescription>
                    <div className="mt-4 space-y-2">
                      <div className="flex items-center text-sm">
                        <Users className="mr-2 h-4 w-4 text-muted-foreground" />
                        <span>Coach: {team.coach}</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <Calendar className="mr-2 h-4 w-4 text-muted-foreground" />
                        <span>Founded: {team.founded}</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <MapPin className="mr-2 h-4 w-4 text-muted-foreground" />
                        <span>
                          Stadium: {team.stadium} ({team.capacity.toLocaleString()} capacity)
                        </span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="bg-muted/50 p-6">
                    <Button asChild className="w-full">
                      <Link href={`/teams/${team.id}`}>View Team Profile</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
