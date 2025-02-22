import { useState, useEffect } from 'react'
import { Task } from '@/lib/types'

export function useTasks() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchTasks = async () => {
    try {
      const response = await fetch('/api/tasks')
      if (!response.ok) throw new Error('Failed to fetch tasks')
      const data = await response.json()
      setTasks(data)
      setError(null)
    } catch (err) {
      setError('Failed to fetch tasks')
    } finally {
      setLoading(false)
    }
  }

  const addTask = async (task: Omit<Task, 'id' | 'createdAt' | 'updatedAt'>) => {
    try {
      const response = await fetch('/api/tasks', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(task)
      })
      if (!response.ok) throw new Error('Failed to add task')
      await fetchTasks()
      setError(null)
    } catch (err) {
      setError('Failed to add task')
    }
  }

  const updateTask = async (task: Task) => {
    try {
      const response = await fetch('/api/tasks', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(task)
      })
      if (!response.ok) throw new Error('Failed to update task')
      await fetchTasks()
      setError(null)
    } catch (err) {
      setError('Failed to update task')
    }
  }

  const clearCompletedTasks = async () => {
    try {
      const response = await fetch('/api/tasks/clear-completed', {
        method: 'DELETE'
      })
      if (!response.ok) throw new Error('Failed to clear completed tasks')
      await fetchTasks()
      setError(null)
    } catch (err) {
      setError('Failed to clear completed tasks')
    }
  }

  useEffect(() => {
    fetchTasks()
  }, [])

  return {
    tasks,
    loading,
    error,
    addTask,
    updateTask,
    clearCompletedTasks,
    refetch: fetchTasks
  }
} 