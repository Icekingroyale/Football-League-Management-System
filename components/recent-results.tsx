import { Card, CardContent } from "@/components/ui/card"
import { CalendarDays } from "lucide-react"

// This would come from your database in a real app
const results = [
  {
    id: 1,
    homeTeam: "University of Lagos",
    awayTeam: "University of Benin",
    homeScore: 3,
    awayScore: 1,
    date: "2024-04-28T15:00:00",
    venue: "UNILAG Sports Complex",
  },
  {
    id: 2,
    homeTeam: "University of Ibadan",
    awayTeam: "University of Port Harcourt",
    homeScore: 2,
    awayScore: 0,
    date: "2024-04-27T14:00:00",
    venue: "UI Sports Complex",
  },
  {
    id: 3,
    homeTeam: "Obafemi Awolowo University",
    awayTeam: "Ahmadu Bello University",
    homeScore: 1,
    awayScore: 1,
    date: "2024-04-26T16:00:00",
    venue: "OAU Sports Complex",
  },
  {
    id: 4,
    homeTeam: "University of Nigeria",
    awayTeam: "University of Ilorin",
    homeScore: 2,
    awayScore: 1,
    date: "2024-04-25T15:00:00",
    venue: "UNN Sports Complex",
  },
]

export function RecentResults() {
  return (
    <div>
      <div className="flex items-center justify-between pb-4">
        <h3 className="text-lg font-semibold">Recent Results</h3>
      </div>
      <div className="grid gap-4">
        {results.map((result) => {
          const date = new Date(result.date)
          return (
            <Card key={result.id}>
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
                      })}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-right w-[40%]">
                      <p className="font-medium">{result.homeTeam}</p>
                    </div>
                    <div className="flex items-center justify-center w-[20%]">
                      <span className="px-2 py-1 rounded-md bg-gray-100 font-bold">
                        {result.homeScore} - {result.awayScore}
                      </span>
                    </div>
                    <div className="w-[40%]">
                      <p className="font-medium">{result.awayTeam}</p>
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
  )
}
