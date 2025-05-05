"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
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
import { Plus, Pencil, Trash2 } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

// This would come from your database in a real app
const initialTeams = [
  {
    id: 1,
    name: "University of Lagos",
    shortName: "UNILAG",
    coach: "Dr. Adebayo Johnson",
    founded: "1962",
    stadium: "UNILAG Sports Complex",
    capacity: 5000,
  },
  {
    id: 2,
    name: "University of Ibadan",
    shortName: "UI",
    coach: "Prof. Oladele Ajayi",
    founded: "1948",
    stadium: "UI Sports Complex",
    capacity: 4500,
  },
  {
    id: 3,
    name: "Obafemi Awolowo University",
    shortName: "OAU",
    coach: "Dr. Chukwu Emmanuel",
    founded: "1961",
    stadium: "OAU Sports Complex",
    capacity: 4800,
  },
  {
    id: 4,
    name: "University of Nigeria",
    shortName: "UNN",
    coach: "Dr. Nnamdi Okafor",
    founded: "1960",
    stadium: "UNN Sports Complex",
    capacity: 4200,
  },
]

type Team = {
  id: number
  name: string
  shortName: string
  coach: string
  founded: string
  stadium: string
  capacity: number
}

export function TeamManagement() {
  const [teams, setTeams] = useState<Team[]>(initialTeams)
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)
  const [currentTeam, setCurrentTeam] = useState<Team | null>(null)
  const [formData, setFormData] = useState<Omit<Team, "id">>({
    name: "",
    shortName: "",
    coach: "",
    founded: "",
    stadium: "",
    capacity: 0,
  })
  const { toast } = useToast()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: name === "capacity" ? Number.parseInt(value) || 0 : value,
    })
  }

  const handleAddTeam = () => {
    const newTeam = {
      id: teams.length + 1,
      ...formData,
    }
    setTeams([...teams, newTeam])
    setIsAddDialogOpen(false)
    setFormData({
      name: "",
      shortName: "",
      coach: "",
      founded: "",
      stadium: "",
      capacity: 0,
    })
    toast({
      title: "Team Added",
      description: `${formData.name} has been added successfully.`,
    })
  }

  const handleEditClick = (team: Team) => {
    setCurrentTeam(team)
    setFormData({
      name: team.name,
      shortName: team.shortName,
      coach: team.coach,
      founded: team.founded,
      stadium: team.stadium,
      capacity: team.capacity,
    })
    setIsEditDialogOpen(true)
  }

  const handleUpdateTeam = () => {
    if (!currentTeam) return

    const updatedTeams = teams.map((team) => (team.id === currentTeam.id ? { ...team, ...formData } : team))
    setTeams(updatedTeams)
    setIsEditDialogOpen(false)
    setCurrentTeam(null)
    toast({
      title: "Team Updated",
      description: `${formData.name} has been updated successfully.`,
    })
  }

  const handleDeleteTeam = (id: number) => {
    const teamToDelete = teams.find((team) => team.id === id)
    if (!teamToDelete) return

    const updatedTeams = teams.filter((team) => team.id !== id)
    setTeams(updatedTeams)
    toast({
      title: "Team Deleted",
      description: `${teamToDelete.name} has been deleted.`,
      variant: "destructive",
    })
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Team Management</h2>
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" /> Add Team
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Team</DialogTitle>
              <DialogDescription>Add a new university team to the league.</DialogDescription>
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
                <Label htmlFor="shortName" className="text-right">
                  Short Name
                </Label>
                <Input
                  id="shortName"
                  name="shortName"
                  value={formData.shortName}
                  onChange={handleInputChange}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="coach" className="text-right">
                  Coach
                </Label>
                <Input
                  id="coach"
                  name="coach"
                  value={formData.coach}
                  onChange={handleInputChange}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="founded" className="text-right">
                  Founded
                </Label>
                <Input
                  id="founded"
                  name="founded"
                  value={formData.founded}
                  onChange={handleInputChange}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="stadium" className="text-right">
                  Stadium
                </Label>
                <Input
                  id="stadium"
                  name="stadium"
                  value={formData.stadium}
                  onChange={handleInputChange}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="capacity" className="text-right">
                  Capacity
                </Label>
                <Input
                  id="capacity"
                  name="capacity"
                  type="number"
                  value={formData.capacity}
                  onChange={handleInputChange}
                  className="col-span-3"
                />
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsAddDialogOpen(false)}>
                Cancel
              </Button>
              <Button onClick={handleAddTeam}>Add Team</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Edit Team</DialogTitle>
              <DialogDescription>Update team information.</DialogDescription>
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
                <Label htmlFor="edit-shortName" className="text-right">
                  Short Name
                </Label>
                <Input
                  id="edit-shortName"
                  name="shortName"
                  value={formData.shortName}
                  onChange={handleInputChange}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="edit-coach" className="text-right">
                  Coach
                </Label>
                <Input
                  id="edit-coach"
                  name="coach"
                  value={formData.coach}
                  onChange={handleInputChange}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="edit-founded" className="text-right">
                  Founded
                </Label>
                <Input
                  id="edit-founded"
                  name="founded"
                  value={formData.founded}
                  onChange={handleInputChange}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="edit-stadium" className="text-right">
                  Stadium
                </Label>
                <Input
                  id="edit-stadium"
                  name="stadium"
                  value={formData.stadium}
                  onChange={handleInputChange}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="edit-capacity" className="text-right">
                  Capacity
                </Label>
                <Input
                  id="edit-capacity"
                  name="capacity"
                  type="number"
                  value={formData.capacity}
                  onChange={handleInputChange}
                  className="col-span-3"
                />
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsEditDialogOpen(false)}>
                Cancel
              </Button>
              <Button onClick={handleUpdateTeam}>Update Team</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Short Name</TableHead>
              <TableHead>Coach</TableHead>
              <TableHead>Founded</TableHead>
              <TableHead>Stadium</TableHead>
              <TableHead>Capacity</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {teams.map((team) => (
              <TableRow key={team.id}>
                <TableCell className="font-medium">{team.name}</TableCell>
                <TableCell>{team.shortName}</TableCell>
                <TableCell>{team.coach}</TableCell>
                <TableCell>{team.founded}</TableCell>
                <TableCell>{team.stadium}</TableCell>
                <TableCell>{team.capacity.toLocaleString()}</TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button variant="ghost" size="icon" onClick={() => handleEditClick(team)}>
                      <Pencil className="h-4 w-4" />
                      <span className="sr-only">Edit</span>
                    </Button>
                    <Button variant="ghost" size="icon" onClick={() => handleDeleteTeam(team.id)}>
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
