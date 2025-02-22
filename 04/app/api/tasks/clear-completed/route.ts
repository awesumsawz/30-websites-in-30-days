import { prisma } from '@/lib/db'
import { NextResponse } from 'next/server'

export async function DELETE() {
  try {
    await prisma.task.deleteMany({
      where: {
        status: 'completed'
      }
    })
    return NextResponse.json({ message: 'Completed tasks cleared successfully' })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to clear completed tasks' }, { status: 500 })
  }
} 