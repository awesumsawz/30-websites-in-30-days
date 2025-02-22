import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const backlogItems = [
  { id: 1, title: "Implement user authentication", priority: "High" },
  { id: 2, title: "Design dashboard layout", priority: "Medium" },
  { id: 3, title: "Add email notifications", priority: "Low" },
]

export default function Backlog() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-primary">Backlog</h1>
        <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Add New Item</Button>
      </div>
      <div className="bg-card rounded-lg p-6">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-primary">ID</TableHead>
              <TableHead className="text-primary">Title</TableHead>
              <TableHead className="text-primary">Priority</TableHead>
              <TableHead className="text-primary">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {backlogItems.map((item) => (
              <TableRow key={item.id}>
                <TableCell className="text-muted-foreground">{item.id}</TableCell>
                <TableCell className="text-muted-foreground">{item.title}</TableCell>
                <TableCell className="text-muted-foreground">{item.priority}</TableCell>
                <TableCell>
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-primary border-primary hover:bg-primary/20 hover:text-primary-foreground"
                  >
                    Edit
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

