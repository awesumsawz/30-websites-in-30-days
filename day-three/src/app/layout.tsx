import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { PlusCircle, Smartphone, BarChart2, CheckCircle2 } from "lucide-react"
import type { ProjectStats, ActivityItem } from "@/types"

// This would typically come from an API or database
const projectStats: ProjectStats = {
  openTickets: 12,
  completedTickets: 8,
  inProgressTickets: 5,
  sprintGoalPercentage: 75,
}

const recentActivity: ActivityItem[] = [
  { id: "1", description: "User authentication feature completed" },
  { id: "2", description: "New sprint planning meeting scheduled" },
  { id: "3", description: "Dashboard UI improvements in progress" },
]

export default function HomePage() {
  return (
    <div className="space-y-8">
      <section className="text-center">
        <h1 className="text-4xl font-bold text-foreground mb-4">Welcome to Your Project Hub</h1>
        <p className="text-xl text-muted-foreground">
          Streamline your workflow with our Dracula-inspired ticketing system
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="text-foreground flex items-center gap-2">
              <PlusCircle className="h-5 w-5" />
              Quick Actions
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button asChild className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="/backlog">Create New Ticket</Link>
            </Button>
            <Button asChild variant="secondary" className="w-full">
              <Link href="/sprint">View Current Sprint</Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-foreground flex items-center gap-2">
              <BarChart2 className="h-5 w-5" />
              Project Overview
            </CardTitle>
          </CardHeader>
          <CardContent>
            <dl className="grid grid-cols-2 gap-4 text-center">
              <div>
                <dt className="text-sm text-muted-foreground">Open Tickets</dt>
                <dd className="text-2xl font-bold text-foreground">{projectStats.openTickets}</dd>
              </div>
              <div>
                <dt className="text-sm text-muted-foreground">Completed</dt>
                <dd className="text-2xl font-bold text-foreground">{projectStats.completedTickets}</dd>
              </div>
              <div>
                <dt className="text-sm text-muted-foreground">In Progress</dt>
                <dd className="text-2xl font-bold text-foreground">{projectStats.inProgressTickets}</dd>
              </div>
              <div>
                <dt className="text-sm text-muted-foreground">Sprint Goal</dt>
                <dd className="text-2xl font-bold text-foreground">{projectStats.sprintGoalPercentage}%</dd>
              </div>
            </dl>
          </CardContent>
        </Card>
      </section>

      <section>
        <Card>
          <CardHeader>
            <CardTitle className="text-foreground flex items-center gap-2">
              <Smartphone className="h-5 w-5" />
              Recent Activity
            </CardTitle>
            <CardDescription>Latest updates from your team</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {recentActivity.map((item) => (
                <li key={item.id} className="flex items-center gap-2 text-foreground">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  <span>{item.description}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}


