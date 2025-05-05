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
const initialResults = [
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

type Result = {
  id: number
  homeTeam: string
  awayTeam: string
  homeScore: number
  awayScore: number
  date: string
  venue: string
}

export function ResultManagement() {
  const [results, setResults] = useState<Result[]>(initialResults)
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)
  const [currentResult, setCurrentResult] = useState<Result | null>(null)
  const [selectedFixture, setSelectedFixture] = useState<number | null>(null)
  const [formData, setFormData] = useState<Omit<Result, "id">>({
    homeTeam: "",
    awayTeam: "",
    homeScore: 0,
    awayScore: 0,
    date: "",
    venue: "",
  })
  const { toast } = useToast()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: ["homeScore", "awayScore"].includes(name) ? Number.parseInt(value) || 0 : value,
    })
  }

  const handleFixtureSelect = (fixtureId: string) => {
    const id = Number.parseInt(fixtureId)
    setSelectedFixture(id)
    const fixture = fixtures.find((f) => f.id === id)
    if (fixture) {
      setFormData({
        homeTeam: fixture.homeTeam,
        awayTeam: fixture.awayTeam,
        homeScore: 0,
        awayScore: 0,
        date: fixture.date,
        venue: fixture.venue,
      })
    }
  }

  const handleAddResult = () => {
    const newResult = {
      id: results.length + 1,
      ...formData,
    }
    setResults([...results, newResult])
    setIsAddDialogOpen(false)
    setFormData({
      homeTeam: "",
      awayTeam: "",
      homeScore: 0,
      awayScore: 0,
      date: "",
      venue: "",
    })
    setSelectedFixture(null)
    toast({
      title: "Result Added",
      description: `${formData.homeTeam} ${formData.homeScore}-${formData.awayScore} ${formData.awayTeam} has been added successfully.`,
    })
  }

  const handleEditClick = (result: Result) => {
    setCurrentResult(result)
    setFormData({
      homeTeam: result.homeTeam,
      awayTeam: result.awayTeam,
      homeScore: result.homeScore,
      awayScore: result.awayScore,
      date: result.date,
      venue: result.venue,
    })
    setIsEditDialogOpen(true)
  }

  const handleUpdateResult = () => {
    if (!currentResult) return

    const updatedResults = results.map((result) =>
      result.id === currentResult.id ? { ...result, ...formData } : result,
    )
    setResults(updatedResults)
    setIsEditDialogOpen(false)
    setCurrentResult(null)
    toast({
      title: "Result Updated",
      description: `${formData.homeTeam} ${formData.homeScore}-${formData.awayScore} ${formData.awayTeam} has been updated successfully.`,
    })
  }

  const handleDeleteResult = (id: number) => {
    const resultToDelete = results.find((result) => result.id === id)
    if (!resultToDelete) return

    const updatedResults = results.filter((result) => result.id !== id)
    setResults(updatedResults)
    toast({
      title: "Result Deleted",
      description: `${resultToDelete.homeTeam} ${resultToDelete.homeScore}-${resultToDelete.awayScore} ${resultToDelete.awayTeam} has been deleted.`,
      variant: "destructive",
    })
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Result Management</h2>
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" /> Add Result
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add Match Result</DialogTitle>
              <DialogDescription>Record the result of a completed match.</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="fixture" className="text-right">
                  Select Fixture
                </Label>
                <Select onValueChange={handleFixtureSelect} value={selectedFixture?.toString() || ""}>
                  <SelectTrigger className="col-span-3">
                    <SelectValue placeholder="Select a fixture" />
                  </SelectTrigger>
                  <SelectContent>
                    {fixtures.map((fixture) => (
                      <SelectItem key={fixture.id} value={fixture.id.toString()}>
                        {fixture.homeTeam} vs {fixture.awayTeam} ({new Date(fixture.date).toLocaleDateString()})
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="homeTeam" className="text-right">
                  Home Team
                </Label>
                <Input
                  id="homeTeam"
                  name="homeTeam"
                  value={formData.homeTeam}
                  onChange={handleInputChange}
                  className="col-span-3"
                  disabled
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="homeScore" className="text-right">
                  Home Score
                </Label>
                <Input
                  id="homeScore"
                  name="homeScore"
                  type="number"
                  min="0"
                  value={formData.homeScore}
                  onChange={handleInputChange}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="awayTeam" className="text-right">
                  Away Team
                </Label>
                <Input
                  id="awayTeam"
                  name="awayTeam"
                  value={formData.awayTeam}
                  onChange={handleInputChange}
                  className="col-span-3"
                  disabled
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="awayScore" className="text-right">
                  Away Score
                </Label>
                <Input
                  id="awayScore"
                  name="awayScore"
                  type="number"
                  min="0"
                  value={formData.awayScore}
                  onChange={handleInputChange}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="date" className="text-right">
                  Date
                </Label>
                <Input
                  id="date"
                  name="date"
                  type="datetime-local"
                  value={formData.date}
                  onChange={handleInputChange}
                  className="col-span-3"
                  disabled
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="venue" className="text-right">
                  Venue
                </Label>
                <Input
                  id="venue"
                  name="venue"
                  value={formData.venue}
                  onChange={handleInputChange}
                  className="col-span-3"
                  disabled
                />
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsAddDialogOpen(false)}>
                Cancel
              </Button>
              <Button onClick={handleAddResult}>Add Result</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Edit Result</DialogTitle>
              <DialogDescription>Update match result information.</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="edit-homeTeam" className="text-right">
                  Home Team
                </Label>
                <Input id="edit-homeTeam" name="homeTeam" value={formData.homeTeam} className="col-span-3" disabled />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="edit-homeScore" className="text-right">
                  Home Score
                </Label>
                <Input
                  id="edit-homeScore"
                  name="homeScore"
                  type="number"
                  min="0"
                  value={formData.homeScore}
                  onChange={handleInputChange}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="edit-awayTeam" className="text-right">
                  Away Team
                </Label>
                <Input id="edit-awayTeam" name="awayTeam" value={formData.awayTeam} className="col-span-3" disabled />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="edit-awayScore" className="text-right">
                  Away Score
                </Label>
                <Input
                  id="edit-awayScore"
                  name="awayScore"
                  type="number"
                  min="0"
                  value={formData.awayScore}
                  onChange={handleInputChange}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="edit-date" className="text-right">
                  Date
                </Label>
                <Input
                  id="edit-date"
                  name="date"
                  type="datetime-local"
                  value={formData.date}
                  className="col-span-3"
                  disabled
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="edit-venue" className="text-right">
                  Venue
                </Label>
                <Input id="edit-venue" name="venue" value={formData.venue} className="col-span-3" disabled />
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsEditDialogOpen(false)}>
                Cancel
              </Button>
              <Button onClick={handleUpdateResult}>Update Result</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Home Team</TableHead>
              <TableHead>Score</TableHead>
              <TableHead>Away Team</TableHead>
              <TableHead>Venue</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {results.map((result) => {
              const date = new Date(result.date)
              return (
                <TableRow key={result.id}>
                  <TableCell>
                    {date.toLocaleDateString("en-NG", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </TableCell>
                  <TableCell className="font-medium">{result.homeTeam}</TableCell>
                  <TableCell>
                    <span className="font-bold">
                      {result.homeScore} - {result.awayScore}
                    </span>
                  </TableCell>
                  <TableCell>{result.awayTeam}</TableCell>
                  <TableCell>{result.venue}</TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button variant="ghost" size="icon" onClick={() => handleEditClick(result)}>
                        <Pencil className="h-4 w-4" />
                        <span className="sr-only">Edit</span>
                      </Button>
                      <Button variant="ghost" size="icon" onClick={() => handleDeleteResult(result.id)}>
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
