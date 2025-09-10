import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Navbar } from "@/components/navbar"
import { Leaf, Heart, Users, Calendar } from "lucide-react"

export default function HomePage() {

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <Leaf className="h-8 w-8 text-primary" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-foreground mb-6 text-balance">
            Welcome to AayuAahar
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
            Ayurveda inspired healthcare & diet charts. Experience holistic wellness through traditional wisdom and
            modern technology.
          </p>
          <Button asChild size="lg" className="text-lg px-8">
            <Link to="/login">Get Started</Link>
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-3xl font-heading font-semibold text-center mb-12">Comprehensive Healthcare Management</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="text-center">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Heart className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <CardTitle>Patient Care</CardTitle>
                <CardDescription>Personalized Ayurvedic treatment plans and diet charts</CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <CardTitle>Doctor Portal</CardTitle>
                <CardDescription>Comprehensive patient management and consultation tools</CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Calendar className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <CardTitle>Admin Dashboard</CardTitle>
                <CardDescription>Complete hospital and staff management system</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-heading font-semibold mb-4">Ready to Transform Healthcare?</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Join thousands of healthcare professionals using AayuAahar for better patient outcomes.
          </p>
          <Button asChild size="lg">
            <Link to="/login">Start Your Journey</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}