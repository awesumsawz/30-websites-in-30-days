import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-primary">Welcome to Your Forest-Inspired Ticketing System</h1>
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="bg-card border-primary/20">
          <CardHeader>
            <CardTitle className="text-primary">Total Tickets</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold text-secondary">42</p>
          </CardContent>
        </Card>
        <Card className="bg-card border-primary/20">
          <CardHeader>
            <CardTitle className="text-primary">Open Tickets</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold text-secondary">18</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

