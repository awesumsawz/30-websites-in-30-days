export interface Ticket {
  id: string
  title: string
  status: "todo" | "in-progress" | "done"
  description: string
}

export interface ProjectStats {
  openTickets: number
  completedTickets: number
  inProgressTickets: number
  sprintGoalPercentage: number
}

export interface ActivityItem {
  id: string
  description: string
}

