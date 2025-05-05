"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Plus, Pencil, Trash2, Search } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

// This would come from your database in a real app
const initialPlayers = [
  {
    id: 1,
    name: "Chukwu Emmanuel",
    position: "Forward",
    team: "University of Lagos",
    jerseyNumber: 9,
    age: 22,
    height: 180,
    weight: 75,
    status: "Active",
  },
  {
    id: 2,
    name: "Adebayo Oluwaseun",
    position: "Midfielder",
    team: "University of Ibadan",
    jerseyNumber: 10,
    age: 21,
    height: 175,
    weight: 70,
    status: "Active",
  },
  {
    id: 3,
    name: "Okonkwo Chijioke",
    position: "Defender",
    team: "Obafemi Awolowo University",
    jerseyNumber: 4,
    age: 23,
    height: 185,
    weight: 80,
    status: "Active",
  },
  {
    id: 4,
    name: "Ibrahim Mohammed",
    position: "Goalkeeper",
    team: "Ahmadu Bello University",
    jerseyNumber: 1,
    age: 24,
    height: 190,
    weight: 85,
    status: "Injured",
  },
]

const teams = [
  "University of Lagos",
  "University of Ibadan",
  "Obafemi Awolowo University",
  "University of Nigeria",
  "Ahmadu Bello University",
  "University of Benin",
  "University of Port Harcourt",
  "University of Ilorin",
]

const positions = ["Goalkeeper", "Defender", "Midfielder", "Forward"]
const statuses = ["Active", "Injured", "Suspended"]

type Player = {
  id: number
  name: string
  position: string
  team: string
  jerseyNumber: number
  age: number
  height: number
  weight: number
  status: string
}

export function PlayerManagement() {
  const [players, setPlayers] = useState<Player[]>(initialPlayers)
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)
  const [currentPlayer, setCurrentPlayer] = useState<Player | null>(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [formData, setFormData] = useState<Omit<Player, "id">>({
    name: "",
    position: "",
    team: "",
    jerseyNumber: 0,
    age: 0,
    height: 0,
    weight: 0,
    status: "Active",
  })
  const { toast } = useToast()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: ["jerseyNumber", "age", "height", "weight"].includes(name) ? Number.parseInt(value) || 0 : value,
    })
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleAddPlayer = () => {
    const newPlayer = {
      id: players.length + 1,
      ...formData,
    }
    setPlayers([...players, newPlayer])
    setIsAddDialogOpen(false)
    setFormData({
      name: "",
      position: "",
      team: "",
      jerseyNumber: 0,
      age: 0,
      height: 0,
      weight: 0,
      status: "Active",
    })
    toast({
      title: "Player Added",
      description: `${formData.name} has been added successfully.`,
    })
  }

  const handleEditClick = (player: Player) => {
    setCurrentPlayer(player)
    setFormData({
      name: player.name,
      position: player.position,
      team: player.team,
      jerseyNumber: player.jerseyNumber,
      age: player.age,
      height: player.height,
      weight: player.weight,
      status: player.status,
    })
    setIsEditDialogOpen(true)
  }

  const handleUpdatePlayer = () => {
    if (!currentPlayer) return

    const updatedPlayers = players.map((player) =>
      player.id === currentPlayer.id ? { ...player, ...formData } : player,
    )
    setPlayers(updatedPlayers)
    setIsEditDialogOpen(false)
    setCurrentPlayer(null)
    toast({
      title: "Player Updated",
      description: `${formData.name} has been updated successfully.`,
    })
  }

  const handleDeletePlayer = (id: number) => {
    const playerToDelete = players.find((player) => player.id === id)
    if (!playerToDelete) return

    const updatedPlayers = players.filter((player) => player.id !== id)
    setPlayers(updatedPlayers)
    toast({
      title: "Player Deleted",
      description: `${playerToDelete.name} has been deleted.`,
      variant: "destructive",
    })
  }

  const filteredPlayers = players.filter(
    (player) =>
      player.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      player.team.toLowerCase().includes(searchTerm.toLowerCase()) ||
      player.position.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Player Management</h2>
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" /> Add Player
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Player</DialogTitle>
              <DialogDescription>Add a new player to the league.</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="team" className="text-right">
                  Team
                </Label>
                <Select onValueChange={(value) => handleSelectChange("team", value)} defaultValue={formData.team}>
                  <SelectTrigger className="col-span-3">
                    <SelectValue placeholder="Select team" />
                  </SelectTrigger>
                  <SelectContent>
                    {teams.map((team) => (
                      <SelectItem key={team} value={team}>
                        {team}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="position" className="text-right">
                  Position
                </Label>
                <Select
                  onValueChange={(value) => handleSelectChange("position", value)}
                  defaultValue={formData.position}
                >
                  <SelectTrigger className="col-span-3">
                    <SelectValue placeholder="Select position" />
                  </SelectTrigger>
                  <SelectContent>
                    {positions.map((position) => (
                      <SelectItem key={position} value={position}>
                        {position}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="jerseyNumber" className="text-right">
                  Jersey Number
                </Label>
                <Input
                  id="jerseyNumber"
                  name="jerseyNumber"
                  type="number"
                  value={formData.jerseyNumber}
                  onChange={handleInputChange}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="age" className="text-right">
                  Age
                </Label>
                <Input
                  id="age"
                  name="age"
                  type="number"
                  value={formData.age}
                  onChange={handleInputChange}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="height" className="text-right">
                  Height (cm)
                </Label>
                <Input
                  id="height"
                  name="height"
                  type="number"
                  value={formData.height}
                  onChange={handleInputChange}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="weight" className="text-right">
                  Weight (kg)
                </Label>
                <Input
                  id="weight"
                  name="weight"
                  type="number"
                  value={formData.weight}
                  onChange={handleInputChange}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="status" className="text-right">
                  Status
                </Label>
                <Select onValueChange={(value) => handleSelectChange("status", value)} defaultValue={formData.status}>
                  <SelectTrigger className="col-span-3">
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    {statuses.map((status) => (
                      <SelectItem key={status} value={status}>
                        {status}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsAddDialogOpen(false)}>
                Cancel
              </Button>
              <Button onClick={handleAddPlayer}>Add Player</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Edit Player</DialogTitle>
              <DialogDescription>Update player information.</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="edit-name" className="text-right">
                  Name
                </Label>
                <Input
                  id="edit-name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="edit-team" className="text-right">
                  Team
                </Label>
                <Select onValueChange={(value) => handleSelectChange("team", value)} value={formData.team}>
                  <SelectTrigger className="col-span-3">
                    <SelectValue placeholder="Select team" />
                  </SelectTrigger>
                  <SelectContent>
                    {teams.map((team) => (
                      <SelectItem key={team} value={team}>
                        {team}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="edit-position" className="text-right">
                  Position
                </Label>
                <Select onValueChange={(value) => handleSelectChange("position", value)} value={formData.position}>
                  <SelectTrigger className="col-span-3">
                    <SelectValue placeholder="Select position" />
                  </SelectTrigger>
                  <SelectContent>
                    {positions.map((position) => (
                      <SelectItem key={position} value={position}>
                        {position}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="edit-jerseyNumber" className="text-right">
                  Jersey Number
                </Label>
                <Input
                  id="edit-jerseyNumber"
                  name="jerseyNumber"
                  type="number"
                  value={formData.jerseyNumber}
                  onChange={handleInputChange}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="edit-age" className="text-right">
                  Age
                </Label>
                <Input
                  id="edit-age"
                  name="age"
                  type="number"
                  value={formData.age}
                  onChange={handleInputChange}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="edit-height" className="text-right">
                  Height (cm)
                </Label>
                <Input
                  id="edit-height"
                  name="height"
                  type="number"
                  value={formData.height}
                  onChange={handleInputChange}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="edit-weight" className="text-right">
                  Weight (kg)
                </Label>
                <Input
                  id="edit-weight"
                  name="weight"
                  type="number"
                  value={formData.weight}
                  onChange={handleInputChange}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="edit-status" className="text-right">
                  Status
                </Label>
                <Select onValueChange={(value) => handleSelectChange("status", value)} value={formData.status}>
                  <SelectTrigger className="col-span-3">
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    {statuses.map((status) => (
                      <SelectItem key={status} value={status}>
                        {status}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsEditDialogOpen(false)}>
                Cancel
              </Button>
              <Button onClick={handleUpdatePlayer}>Update Player</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <div className="flex items-center gap-2">
        <Search className="h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search players..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-sm"
        />
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Team</TableHead>
              <TableHead>Position</TableHead>
              <TableHead>Jersey</TableHead>
              <TableHead>Age</TableHead>
              <TableHead>Height</TableHead>
              <TableHead>Weight</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredPlayers.map((player) => (
              <TableRow key={player.id}>
                <TableCell className="font-medium">{player.name}</TableCell>
                <TableCell>{player.team}</TableCell>
                <TableCell>{player.position}</TableCell>
                <TableCell>{player.jerseyNumber}</TableCell>
                <TableCell>{player.age}</TableCell>
                <TableCell>{player.height} cm</TableCell>
                <TableCell>{player.weight} kg</TableCell>
                <TableCell>
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      player.status === "Active"
                        ? "bg-green-100 text-green-800"
                        : player.status === "Injured"
                          ? "bg-red-100 text-red-800"
                          : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {player.status}
                  </span>
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button variant="ghost" size="icon" onClick={() => handleEditClick(player)}>
                      <Pencil className="h-4 w-4" />
                      <span className="sr-only">Edit</span>
                    </Button>
                    <Button variant="ghost" size="icon" onClick={() => handleDeletePlayer(player.id)}>
                      <Trash2 className="h-4 w-4" />
                      <span className="sr-only">Delete</span>
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
