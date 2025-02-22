export interface Task {
  id: string
  title: string
  description?: string
  status: string
  priority: string
  order: number
  createdAt: Date
  updatedAt: Date
} 