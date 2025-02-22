import { prisma } from '@/lib/db'
import { TaskFactory } from '@/lib/factories/taskFactory'

async function main() {
  // Clear existing data
  await prisma.task.deleteMany()

  // Create some specific tasks
  await TaskFactory.create()
    .withTitle('High Priority Bug Fix')
    .withDescription('Critical bug in production needs immediate attention')
    .withStatus('in-progress')
    .withPriority('high')
    .withOrder(0)
    .make()

  await TaskFactory.create()
    .withTitle('Update Documentation')
    .withDescription('Add new API endpoints to documentation')
    .withStatus('backlog')
    .withPriority('low')
    .withOrder(1)
    .make()

  // Create 10 random tasks
  await TaskFactory.createRandomTasks(10)

  console.log('✅ Database seeded successfully')
}

main()
  .catch((e) => {
    console.error('❌ Error seeding database:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  }) 