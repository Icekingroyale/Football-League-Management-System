import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

// This would come from your database in a real app
const players = [
  {
    id: 1,
    name: "Chukwu Emmanuel",
    team: "University of Lagos",
    goals: 8,
    assists: 3,
    appearances: 10,
  },
  {
    id: 2,
    name: "Adebayo Oluwaseun",
    team: "University of Ibadan",
    goals: 7,
    assists: 5,
    appearances: 10,
  },
  {
    id: 3,
    name: "Okonkwo Chijioke",
    team: "Obafemi Awolowo University",
    goals: 6,
    assists: 2,
    appearances: 9,
  },
  {
    id: 4,
    name: "Ibrahim Mohammed",
    team: "Ahmadu Bello University",
    goals: 5,
    assists: 4,
    appearances: 10,
  },
  {
    id: 5,
    name: "Nwachukwu David",
    team: "University of Nigeria",
    goals: 5,
    assists: 1,
    appearances: 10,
  },
  {
    id: 6,
    name: "Okafor Chinedu",
    team: "University of Port Harcourt",
    goals: 4,
    assists: 6,
    appearances: 10,
  },
  {
    id: 7,
    name: "Adeyemi Tunde",
    team: "University of Benin",
    goals: 4,
    assists: 3,
    appearances: 10,
  },
  {
    id: 8,
    name: "Eze Kingsley",
    team: "University of Ilorin",
    goals: 4,
    assists: 2,
    appearances: 9,
  },
]

export function TopScorers() {
  return (
    <div>
      <div className="flex items-center justify-between pb-4">
        <h3 className="text-lg font-semibold">Top Scorers</h3>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-12">Rank</TableHead>
              <TableHead>Player</TableHead>
              <TableHead>Team</TableHead>
              <TableHead className="text-center">Goals</TableHead>
              <TableHead className="text-center">Assists</TableHead>
              <TableHead className="text-center">Apps</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {players.map((player, index) => (
              <TableRow key={player.id}>
                <TableCell className="font-medium">{index + 1}</TableCell>
                <TableCell>{player.name}</TableCell>
                <TableCell>{player.team}</TableCell>
                <TableCell className="text-center">{player.goals}</TableCell>
                <TableCell className="text-center">{player.assists}</TableCell>
                <TableCell className="text-center">{player.appearances}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
