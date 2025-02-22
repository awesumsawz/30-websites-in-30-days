'use client'

import { AddTicketModal } from "@/components/add-ticket-modal"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { useTasks } from "@/lib/hooks/useTasks"
import { Loader2 } from "lucide-react"

export default function Backlog() {
  const { tasks, loading, error } = useTasks()

  // Filter only backlog tasks
  const backlogTasks = tasks.filter(task => task.status === 'backlog')

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-[400px] text-destructive">
        Error loading tasks: {error}
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-primary">Backlog ({backlogTasks.length})</h1>
        <AddTicketModal />
      </div>
      <div className="bg-card rounded-lg p-6">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-primary">ID</TableHead>
              <TableHead className="text-primary">Title</TableHead>
              <TableHead className="text-primary">Description</TableHead>
              <TableHead className="text-primary">Priority</TableHead>
              <TableHead className="text-primary">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {backlogTasks.length === 0 ? (
              <TableRow>
                <TableCell colSpan={5} className="text-center text-muted-foreground">
                  No tasks in backlog
                </TableCell>
              </TableRow>
            ) : (
              backlogTasks.map((task) => (
                <TableRow key={task.id}>
                  <TableCell className="text-muted-foreground font-mono">{task.id.slice(0, 8)}</TableCell>
                  <TableCell className="text-muted-foreground">{task.title}</TableCell>
                  <TableCell className="text-muted-foreground">{task.description || '-'}</TableCell>
                  <TableCell className="text-muted-foreground">
                    <span className={`px-2 py-1 rounded text-sm ${
                      task.priority === 'high' ? 'bg-red-100 text-red-700' :
                      task.priority === 'medium' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-green-100 text-green-700'
                    }`}>
                      {task.priority.charAt(0).toUpperCase() + task.priority.slice(1)}
                    </span>
                  </TableCell>
                  <TableCell>
                    <button className="text-primary hover:text-primary-foreground hover:bg-primary/20 px-2 py-1 rounded">
                      Edit
                    </button>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

