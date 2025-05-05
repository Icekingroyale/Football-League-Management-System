import { Card, CardContent } from "@/components/ui/card"
import { CalendarDays } from "lucide-react"

// This would come from your database in a real app
const fixtures = [
  {
    id: 1,
    homeTeam: "University of Lagos",
    awayTeam: "University of Ibadan",
    date: "2024-05-10T15:00:00",
    venue: "UNILAG Sports Complex",
  },
  {
    id: 2,
    homeTeam: "Obafemi Awolowo University",
    awayTeam: "University of Nigeria",
    date: "2024-05-11T14:00:00",
    venue: "OAU Sports Complex",
  },
  {
    id: 3,
    homeTeam: "Ahmadu Bello University",
    awayTeam: "University of Benin",
    date: "2024-05-12T16:00:00",
    venue: "ABU Sports Complex",
  },
  {
    id: 4,
    homeTeam: "University of Port Harcourt",
    awayTeam: "University of Ilorin",
    date: "2024-05-13T15:00:00",
    venue: "UNIPORT Sports Complex",
  },
]

export function UpcomingFixtures() {
  return (
    <div>
      <div className="flex items-center justify-between pb-4">
        <h3 className="text-lg font-semibold">Upcoming Fixtures</h3>
      </div>
      <div className="grid gap-4">
        {fixtures.map((fixture) => {
          const date = new Date(fixture.date)
          return (
            <Card key={fixture.id}>
              <CardContent className="p-4">
                <div className="flex flex-col space-y-3">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <CalendarDays className="mr-1 h-4 w-4" />
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
                      <p className="font-medium">{fixture.homeTeam}</p>
                    </div>
                    <div className="flex items-center justify-center w-[20%]">
                      <span className="px-2 py-1 rounded-md bg-green-100 text-green-800 font-medium">VS</span>
                    </div>
                    <div className="w-[40%]">
                      <p className="font-medium">{fixture.awayTeam}</p>
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
  )
}
