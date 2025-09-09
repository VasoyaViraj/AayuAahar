import { LoginForm } from "@/components/auth/login-form"
import { Navbar } from "@/components/navbar"
import { Leaf } from "lucide-react"
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar/>
      <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center px-4 py-12">
        <div className="w-full max-w-md space-y-8">
          {/* Header */}
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Leaf className="h-6 w-6 text-primary" />
              </div>
            </div>
            <h1 className="text-2xl font-heading font-semibold text-foreground">Welcome back</h1>
            <p className="mt-2 text-sm text-muted-foreground">Sign in to your AayuAahar account to continue</p>
          </div>

          {/* Login Form */}
          <LoginForm />

          {/* Footer */}
          <div className="text-center text-sm text-muted-foreground">
            <p>
              Don't have an account?{" "}
              <Link href="/register" className="font-medium text-primary hover:underline">
                Contact your administrator
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
