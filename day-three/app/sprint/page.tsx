import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function SprintPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-foreground">Current Sprint</h1>
      <div className="grid gap-6 md:grid-cols-3">
        <Card className="bg-card">
          <CardHeader>
            <CardTitle className="text-foreground">To Do</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Card className="bg-muted">
              <CardHeader>
                <CardTitle className="text-sm text-foreground">Set up CI/CD pipeline</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xs text-muted-foreground">
                  Configure GitHub Actions for automated testing and deployment
                </p>
                <Select>
                  <SelectTrigger className="w-full mt-2 bg-input text-foreground">
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="todo">To Do</SelectItem>
                    <SelectItem value="in-progress">In Progress</SelectItem>
                    <SelectItem value="done">Done</SelectItem>
                  </SelectContent>
                </Select>
              </CardContent>
            </Card>
          </CardContent>
        </Card>
        <Card className="bg-card">
          <CardHeader>
            <CardTitle className="text-foreground">In Progress</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Card className="bg-muted">
              <CardHeader>
                <CardTitle className="text-sm text-foreground">Implement user stories</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xs text-muted-foreground">Create and implement user stories for core features</p>
                <Select defaultValue="in-progress">
                  <SelectTrigger className="w-full mt-2 bg-input text-foreground">
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="todo">To Do</SelectItem>
                    <SelectItem value="in-progress">In Progress</SelectItem>
                    <SelectItem value="done">Done</SelectItem>
                  </SelectContent>
                </Select>
              </CardContent>
            </Card>
          </CardContent>
        </Card>
        <Card className="bg-card">
          <CardHeader>
            <CardTitle className="text-foreground">Done</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Card className="bg-muted">
              <CardHeader>
                <CardTitle className="text-sm text-foreground">Set up project structure</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xs text-muted-foreground">
                  Initialize Next.js project and set up basic folder structure
                </p>
                <Select defaultValue="done">
                  <SelectTrigger className="w-full mt-2 bg-input text-foreground">
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="todo">To Do</SelectItem>
                    <SelectItem value="in-progress">In Progress</SelectItem>
                    <SelectItem value="done">Done</SelectItem>
                  </SelectContent>
                </Select>
              </CardContent>
            </Card>
          </CardContent>
        </Card>
      </div>
      <div className="flex justify-end">
        <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Complete Sprint</Button>
      </div>
    </div>
  )
}

