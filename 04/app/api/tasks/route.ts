import { prisma } from '@/lib/db'
import { NextResponse } from 'next/server'

// GET all tasks
export async function GET() {
  try {
    const tasks = await prisma.task.findMany({
      orderBy: {
        order: 'asc'
      }
    })
    return NextResponse.json(tasks)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch tasks' }, { status: 500 })
  }
}

// POST new task
export async function POST(request: Request) {
  try {
    const body = await request.json()
    const task = await prisma.task.create({
      data: {
        title: body.title,
        description: body.description,
        status: body.status || 'backlog',
        priority: body.priority || 'medium',
        order: body.order || 0
      }
    })
    return NextResponse.json(task)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create task' }, { status: 500 })
  }
}

// PUT update task
export async function PUT(request: Request) {
  try {
    const body = await request.json()
    const task = await prisma.task.update({
      where: {
        id: body.id
      },
      data: {
        title: body.title,
        description: body.description,
        status: body.status,
        priority: body.priority,
        order: body.order
      }
    })
    return NextResponse.json(task)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update task' }, { status: 500 })
  }
} 