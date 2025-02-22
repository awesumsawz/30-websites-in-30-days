import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function LoginPage() {
  return (
    <div className="flex justify-center items-center h-[calc(100vh-theme(space.32))]">
      <Card className="w-[350px] bg-card">
        <CardHeader>
          <CardTitle className="text-foreground">Login</CardTitle>
          <CardDescription className="text-muted-foreground">
            Enter your credentials to access your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email" className="text-foreground">
                  Email
                </Label>
                <Input id="email" placeholder="Enter your email" type="email" className="bg-input text-foreground" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password" className="text-foreground">
                  Password
                </Label>
                <Input
                  id="password"
                  placeholder="Enter your password"
                  type="password"
                  className="bg-input text-foreground"
                />
              </div>
              <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">Login</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

