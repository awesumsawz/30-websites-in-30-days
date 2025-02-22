"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Trash2 } from "lucide-react"

interface CompletedTask {
  id: number
  title: string
  completedDate: string
}

export default function Completed() {
  const [completedTasks, setCompletedTasks] = useState<CompletedTask[]>([])

  useEffect(() => {
    // In a real application, you would fetch this data from an API or database
    const mockCompletedTasks = [
      { id: 1, title: "Implement user registration", completedDate: "2023-05-15" },
      { id: 2, title: "Create dashboard widgets", completedDate: "2023-05-18" },
      { id: 3, title: "Optimize database queries", completedDate: "2023-05-20" },
    ]
    setCompletedTasks(mockCompletedTasks)
  }, [])

  const clearCompletedTasks = () => {
    // In a real application, you would also update the backend
    setCompletedTasks([])
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-primary">Completed Tasks</h1>
        <Button
          onClick={clearCompletedTasks}
          className="bg-destructive hover:bg-destructive/90 text-destructive-foreground"
        >
          <Trash2 className="mr-2 h-4 w-4" />
          Clear All
        </Button>
      </div>
      <div className="bg-card rounded-lg p-6">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-primary">ID</TableHead>
              <TableHead className="text-primary">Title</TableHead>
              <TableHead className="text-primary">Completed Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {completedTasks.map((task) => (
              <TableRow key={task.id}>
                <TableCell className="text-muted-foreground">{task.id}</TableCell>
                <TableCell className="text-muted-foreground">{task.title}</TableCell>
                <TableCell className="text-muted-foreground">{task.completedDate}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        {completedTasks.length === 0 && <p className="text-center text-muted-foreground mt-4">No completed tasks</p>}
      </div>
    </div>
  )
}

