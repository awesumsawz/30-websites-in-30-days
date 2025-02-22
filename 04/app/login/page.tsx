import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Login() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <Card className="w-full max-w-md bg-green-800/50 border-green-700">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center text-green-100">Login to Your Account</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-green-200">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="bg-green-700/50 text-green-100 placeholder-green-300"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password" className="text-green-200">
                Password
              </Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                className="bg-green-700/50 text-green-100 placeholder-green-300"
              />
            </div>
            <Button className="w-full bg-green-600 hover:bg-green-700 text-green-100">Log In</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

