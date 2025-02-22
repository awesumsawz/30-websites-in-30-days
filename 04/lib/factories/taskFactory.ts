import { prisma } from '@/lib/db'
import { Task } from '@/lib/types'

type TaskFactoryData = Partial<Omit<Task, 'id' | 'createdAt' | 'updatedAt'>>

const defaultData = {
  title: 'Test Task',
  description: 'This is a test task description',
  status: 'backlog',
  priority: 'medium',
  order: 0,
}

const statuses = ['backlog', 'in-progress', 'completed']
const priorities = ['low', 'medium', 'high']

export class TaskFactory {
  private data: TaskFactoryData = { ...defaultData }

  static create(): TaskFactory {
    return new TaskFactory()
  }

  withTitle(title: string): TaskFactory {
    this.data.title = title
    return this
  }

  withDescription(description: string): TaskFactory {
    this.data.description = description
    return this
  }

  withStatus(status: string): TaskFactory {
    this.data.status = status
    return this
  }

  withPriority(priority: string): TaskFactory {
    this.data.priority = priority
    return this
  }

  withOrder(order: number): TaskFactory {
    this.data.order = order
    return this
  }

  async make(): Promise<Task> {
    return await prisma.task.create({
      data: this.data
    })
  }

  async makeMany(count: number): Promise<Task[]> {
    const tasks: Task[] = []
    for (let i = 0; i < count; i++) {
      const randomStatus = statuses[Math.floor(Math.random() * statuses.length)]
      const randomPriority = priorities[Math.floor(Math.random() * priorities.length)]
      const task = await prisma.task.create({
        data: {
          ...this.data,
          title: `${this.data.title} ${i + 1}`,
          status: randomStatus,
          priority: randomPriority,
          order: this.data.order !== undefined ? this.data.order + i : i
        }
      })
      tasks.push(task)
    }
    return tasks
  }

  // Helper method to create tasks with random data
  static async createRandomTasks(count: number): Promise<Task[]> {
    const taskTitles = [
      'Implement user authentication',
      'Fix navigation bug',
      'Update documentation',
      'Add new feature',
      'Optimize database queries',
      'Write unit tests',
      'Review pull requests',
      'Deploy to production',
      'Create backup system',
      'Refactor legacy code'
    ]

    const taskDescriptions = [
      'This needs to be done ASAP',
      'Take your time with this one',
      'Make sure to test thoroughly',
      'Coordinate with the design team',
      'This is a critical feature'
    ]

    return await Promise.all(
      Array.from({ length: count }, async (_, i) => {
        const randomTitle = taskTitles[Math.floor(Math.random() * taskTitles.length)]
        const randomDesc = taskDescriptions[Math.floor(Math.random() * taskDescriptions.length)]
        const randomStatus = statuses[Math.floor(Math.random() * statuses.length)]
        const randomPriority = priorities[Math.floor(Math.random() * priorities.length)]

        return await prisma.task.create({
          data: {
            title: `${randomTitle} ${i + 1}`,
            description: randomDesc,
            status: randomStatus,
            priority: randomPriority,
            order: i
          }
        })
      })
    )
  }
} 