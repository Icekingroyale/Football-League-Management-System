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
import { Plus, Pencil, Trash2 } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

// This would come from your database in a real app
const initialFixtures = [
  {
    id: 1,
    homeTeam: "University of Lagos",
    awayTeam: "University of Ibadan",
    date: "2024-05-10T15:00:00",
    venue: "UNILAG Sports Complex",
    status: "Scheduled",
  },
  {
    id: 2,
    homeTeam: "Obafemi Awolowo University",
    awayTeam: "University of Nigeria",
    date: "2024-05-11T14:00:00",
    venue: "OAU Sports Complex",
    status: "Scheduled",
  },
  {
    id: 3,
    homeTeam: "Ahmadu Bello University",
    awayTeam: "University of Benin",
    date: "2024-05-12T16:00:00",
    venue: "ABU Sports Complex",
    status: "Scheduled",
  },
  {
    id: 4,
    homeTeam: "University of Port Harcourt",
    awayTeam: "University of Ilorin",
    date: "2024-05-13T15:00:00",
    venue: "UNIPORT Sports Complex",
    status: "Scheduled",
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

const venues = [
  "UNILAG Sports Complex",
  "UI Sports Complex",
  "OAU Sports Complex",
  "UNN Sports Complex",
  "ABU Sports Complex",
  "UNIBEN Sports Complex",
  "UNIPORT Sports Complex",
  "UNILORIN Sports Complex",
]

const statuses = ["Scheduled", "Postponed", "Cancelled"]

type Fixture = {
  id: number
  homeTeam: string
  awayTeam: string
  date: string
  venue: string
  status: string
}

export function FixtureManagement() {
  const [fixtures, setFixtures] = useState<Fixture[]>(initialFixtures)
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)
  const [currentFixture, setCurrentFixture] = useState<Fixture | null>(null)
  const [formData, setFormData] = useState<Omit<Fixture, "id">>({
    homeTeam: "",
    awayTeam: "",
    date: "",
    venue: "",
    status: "Scheduled",
  })
  const { toast } = useToast()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleAddFixture = () => {
    if (formData.homeTeam === formData.awayTeam) {
      toast({
        title: "Error",
        description: "Home team and away team cannot be the same.",
        variant: "destructive",
      })
      return
    }

    const newFixture = {
      id: fixtures.length + 1,
      ...formData,
    }
    setFixtures([...fixtures, newFixture])
    setIsAddDialogOpen(false)
    setFormData({
      homeTeam: "",
      awayTeam: "",
      date: "",
      venue: "",
      status: "Scheduled",
    })
    toast({
      title: "Fixture Added",
      description: `${formData.homeTeam} vs ${formData.awayTeam} has been added successfully.`,
    })
  }

  const handleEditClick = (fixture: Fixture) => {
    setCurrentFixture(fixture)
    setFormData({
      homeTeam: fixture.homeTeam,
      awayTeam: fixture.awayTeam,
      date: fixture.date,
      venue: fixture.venue,
      status: fixture.status,
    })
    setIsEditDialogOpen(true)
  }

  const handleUpdateFixture = () => {
    if (!currentFixture) return

    if (formData.homeTeam === formData.awayTeam) {
      toast({
        title: "Error",
        description: "Home team and away team cannot be the same.",
        variant: "destructive",
      })
      return
    }

    const updatedFixtures = fixtures.map((fixture) =>
      fixture.id === currentFixture.id ? { ...fixture, ...formData } : fixture,
    )
    setFixtures(updatedFixtures)
    setIsEditDialogOpen(false)
    setCurrentFixture(null)
    toast({
      title: "Fixture Updated",
      description: `${formData.homeTeam} vs ${formData.awayTeam} has been updated successfully.`,
    })
  }

  const handleDeleteFixture = (id: number) => {
    const fixtureToDelete = fixtures.find((fixture) => fixture.id === id)
    if (!fixtureToDelete) return

    const updatedFixtures = fixtures.filter((fixture) => fixture.id !== id)
    setFixtures(updatedFixtures)
    toast({
      title: "Fixture Deleted",
      description: `${fixtureToDelete.homeTeam} vs ${fixtureToDelete.awayTeam} has been deleted.`,
      variant: "destructive",
    })
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Fixture Management</h2>
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" /> Add Fixture
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Fixture</DialogTitle>
              <DialogDescription>Schedule a new match between two teams.</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="homeTeam" className="text-right">
                  Home Team
                </Label>
                <Select
                  onValueChange={(value) => handleSelectChange("homeTeam", value)}
                  defaultValue={formData.homeTeam}
                >
                  <SelectTrigger className="col-span-3">
                    <SelectValue placeholder="Select home team" />
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
                <Label htmlFor="awayTeam" className="text-right">
                  Away Team
                </Label>
                <Select
                  onValueChange={(value) => handleSelectChange("awayTeam", value)}
                  defaultValue={formData.awayTeam}
                >
                  <SelectTrigger className="col-span-3">
                    <SelectValue placeholder="Select away team" />
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
                <Label htmlFor="date" className="text-right">
                  Date & Time
                </Label>
                <Input
                  id="date"
                  name="date"
                  type="datetime-local"
                  value={formData.date}
                  onChange={handleInputChange}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="venue" className="text-right">
                  Venue
                </Label>
                <Select onValueChange={(value) => handleSelectChange("venue", value)} defaultValue={formData.venue}>
                  <SelectTrigger className="col-span-3">
                    <SelectValue placeholder="Select venue" />
                  </SelectTrigger>
                  <SelectContent>
                    {venues.map((venue) => (
                      <SelectItem key={venue} value={venue}>
                        {venue}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
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
              <Button onClick={handleAddFixture}>Add Fixture</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Edit Fixture</DialogTitle>
              <DialogDescription>Update fixture information.</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="edit-homeTeam" className="text-right">
                  Home Team
                </Label>
                <Select onValueChange={(value) => handleSelectChange("homeTeam", value)} value={formData.homeTeam}>
                  <SelectTrigger className="col-span-3">
                    <SelectValue placeholder="Select home team" />
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
                <Label htmlFor="edit-awayTeam" className="text-right">
                  Away Team
                </Label>
                <Select onValueChange={(value) => handleSelectChange("awayTeam", value)} value={formData.awayTeam}>
                  <SelectTrigger className="col-span-3">
                    <SelectValue placeholder="Select away team" />
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
                <Label htmlFor="edit-date" className="text-right">
                  Date & Time
                </Label>
                <Input
                  id="edit-date"
                  name="date"
                  type="datetime-local"
                  value={formData.date}
                  onChange={handleInputChange}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="edit-venue" className="text-right">
                  Venue
                </Label>
                <Select onValueChange={(value) => handleSelectChange("venue", value)} value={formData.venue}>
                  <SelectTrigger className="col-span-3">
                    <SelectValue placeholder="Select venue" />
                  </SelectTrigger>
                  <SelectContent>
                    {venues.map((venue) => (
                      <SelectItem key={venue} value={venue}>
                        {venue}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
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
              <Button onClick={handleUpdateFixture}>Update Fixture</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Home Team</TableHead>
              <TableHead>Away Team</TableHead>
              <TableHead>Date & Time</TableHead>
              <TableHead>Venue</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {fixtures.map((fixture) => {
              const date = new Date(fixture.date)
              return (
                <TableRow key={fixture.id}>
                  <TableCell className="font-medium">{fixture.homeTeam}</TableCell>
                  <TableCell>{fixture.awayTeam}</TableCell>
                  <TableCell>
                    {date.toLocaleDateString("en-NG", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}{" "}
                    {date.toLocaleTimeString("en-NG", {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </TableCell>
                  <TableCell>{fixture.venue}</TableCell>
                  <TableCell>
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        fixture.status === "Scheduled"
                          ? "bg-green-100 text-green-800"
                          : fixture.status === "Postponed"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-red-100 text-red-800"
                      }`}
                    >
                      {fixture.status}
                    </span>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button variant="ghost" size="icon" onClick={() => handleEditClick(fixture)}>
                        <Pencil className="h-4 w-4" />
                        <span className="sr-only">Edit</span>
                      </Button>
                      <Button variant="ghost" size="icon" onClick={() => handleDeleteFixture(fixture.id)}>
                        <Trash2 className="h-4 w-4" />
                        <span className="sr-only">Delete</span>
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
