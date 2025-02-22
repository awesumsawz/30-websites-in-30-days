import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function BacklogPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-foreground">Backlog</h1>
      <Card className="bg-card">
        <CardHeader>
          <CardTitle className="text-foreground">Add New Ticket</CardTitle>
          <CardDescription className="text-muted-foreground">Create a new ticket to add to the backlog</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="grid w-full gap-1.5">
              <Label htmlFor="title" className="text-foreground">
                Title
              </Label>
              <Input id="title" placeholder="Enter ticket title" className="bg-input text-foreground" />
            </div>
            <div className="grid w-full gap-1.5">
              <Label htmlFor="description" className="text-foreground">
                Description
              </Label>
              <Textarea id="description" placeholder="Enter ticket description" className="bg-input text-foreground" />
            </div>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Add Ticket</Button>
          </form>
        </CardContent>
      </Card>
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Backlog Items</h2>
        <Card className="bg-card">
          <CardHeader>
            <CardTitle className="text-foreground">Implement user authentication</CardTitle>
            <CardDescription className="text-muted-foreground">Priority: High</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-foreground">
              Set up user authentication system using JWT tokens and bcrypt for password hashing.
            </p>
          </CardContent>
        </Card>
        <Card className="bg-card">
          <CardHeader>
            <CardTitle className="text-foreground">Create dashboard layout</CardTitle>
            <CardDescription className="text-muted-foreground">Priority: Medium</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-foreground">
              Design and implement the main dashboard layout with sidebar navigation and responsive design.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

