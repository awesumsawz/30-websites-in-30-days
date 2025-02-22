import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const columns = [
  {
    title: "To Do",
    tickets: [
      { id: 1, title: "Design login page" },
      { id: 2, title: "Implement API endpoints" },
    ],
  },
  {
    title: "In Progress",
    tickets: [
      { id: 3, title: "Refactor database schema" },
      { id: 4, title: "Write unit tests" },
    ],
  },
  {
    title: "Done",
    tickets: [
      { id: 5, title: "Set up CI/CD pipeline" },
      { id: 6, title: "Create project documentation" },
    ],
  },
]

export default function Kanban() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-primary">Kanban Board</h1>
      <div className="grid gap-6 md:grid-cols-3">
        {columns.map((column) => (
          <Card key={column.title} className="bg-card border-primary/20">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-primary">{column.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {column.tickets.map((ticket) => (
                  <li
                    key={ticket.id}
                    className="rounded-lg bg-accent p-3 shadow-md transition-all duration-200 hover:shadow-lg hover:bg-accent/80"
                  >
                    <p className="text-sm text-accent-foreground">{ticket.title}</p>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

