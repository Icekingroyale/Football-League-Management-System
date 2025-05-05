import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { ArrowUpDown } from "lucide-react"

// This would come from your database in a real app
const teams = [
  {
    id: 1,
    name: "University of Lagos",
    played: 10,
    won: 8,
    drawn: 1,
    lost: 1,
    goalsFor: 24,
    goalsAgainst: 8,
    points: 25,
  },
  {
    id: 2,
    name: "University of Ibadan",
    played: 10,
    won: 7,
    drawn: 2,
    lost: 1,
    goalsFor: 20,
    goalsAgainst: 10,
    points: 23,
  },
  {
    id: 3,
    name: "Obafemi Awolowo University",
    played: 10,
    won: 6,
    drawn: 2,
    lost: 2,
    goalsFor: 18,
    goalsAgainst: 9,
    points: 20,
  },
  {
    id: 4,
    name: "University of Nigeria",
    played: 10,
    won: 5,
    drawn: 3,
    lost: 2,
    goalsFor: 15,
    goalsAgainst: 10,
    points: 18,
  },
  {
    id: 5,
    name: "Ahmadu Bello University",
    played: 10,
    won: 5,
    drawn: 2,
    lost: 3,
    goalsFor: 14,
    goalsAgainst: 12,
    points: 17,
  },
  {
    id: 6,
    name: "University of Benin",
    played: 10,
    won: 4,
    drawn: 3,
    lost: 3,
    goalsFor: 12,
    goalsAgainst: 11,
    points: 15,
  },
  {
    id: 7,
    name: "University of Port Harcourt",
    played: 10,
    won: 3,
    drawn: 4,
    lost: 3,
    goalsFor: 11,
    goalsAgainst: 12,
    points: 13,
  },
  {
    id: 8,
    name: "University of Ilorin",
    played: 10,
    won: 2,
    drawn: 3,
    lost: 5,
    goalsFor: 9,
    goalsAgainst: 14,
    points: 9,
  },
]

export function LeagueTable() {
  return (
    <div>
      <div className="flex items-center justify-between pb-4">
        <h3 className="text-lg font-semibold">League Table</h3>
        <Button variant="outline" size="sm" className="ml-auto">
          <ArrowUpDown className="mr-2 h-4 w-4" />
          Sort
        </Button>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-12">Pos</TableHead>
              <TableHead>Team</TableHead>
              <TableHead className="w-12 text-center">P</TableHead>
              <TableHead className="w-12 text-center">W</TableHead>
              <TableHead className="w-12 text-center">D</TableHead>
              <TableHead className="w-12 text-center">L</TableHead>
              <TableHead className="w-12 text-center">GF</TableHead>
              <TableHead className="w-12 text-center">GA</TableHead>
              <TableHead className="w-12 text-center">GD</TableHead>
              <TableHead className="w-12 text-center">Pts</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {teams.map((team, index) => (
              <TableRow key={team.id}>
                <TableCell className="font-medium">{index + 1}</TableCell>
                <TableCell>{team.name}</TableCell>
                <TableCell className="text-center">{team.played}</TableCell>
                <TableCell className="text-center">{team.won}</TableCell>
                <TableCell className="text-center">{team.drawn}</TableCell>
                <TableCell className="text-center">{team.lost}</TableCell>
                <TableCell className="text-center">{team.goalsFor}</TableCell>
                <TableCell className="text-center">{team.goalsAgainst}</TableCell>
                <TableCell className="text-center">{team.goalsFor - team.goalsAgainst}</TableCell>
                <TableCell className="font-medium text-center">{team.points}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
