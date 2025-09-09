import { Link, useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Leaf, Menu, X } from "lucide-react"
import { useContext, useEffect, useState } from "react"
import { userContext } from "@/contexts/UserContext"
import { DBService } from "@/services/appwriteConfig"

export function Navbar() {
  const navigate = useNavigate()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const { user, setUser } = useContext(userContext)

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "Patient", path: "/patient" },
    { label: "Doctor", path: "/doctor" },
    { label: "Receptionist", path: "/receptionist" },
    { label: "Admin", path: "/admin" },
  ]

  const handleLogout = async () => {
    try {
      await DBService.logoutAuthSession()
      setUser({ id: null, name: null, email: null, role: "patient" }) // reset user
      navigate("/")
    } catch (e) {
      console.log("Logout failed:", e)
    }
  }

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
            <Leaf className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="text-xl font-heading font-bold text-foreground">AayuAahar</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <Link
            key={"/"}
            to={"/"}
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            Home
          </Link>
          {navLinks
            .filter((obj) => obj.label.toLowerCase() === user.role?.toLowerCase())
            .map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
        </div>

        {/* Desktop Actions */}
        {user.email ? (
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" size="sm" onClick={handleLogout}>
              Logout
            </Button>
          </div>
        ) : (
          <div className="hidden md:flex items-center space-x-4">
            <Button asChild variant="outline" size="sm">
              <Link to="/login">Login</Link>
            </Button>
          </div>
        )}

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="sm"
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <div className="container px-4 py-4 space-y-3">
            <Link
              key={"/"}
              to={"/"}
              className="block text-sm font-medium text-muted-foreground hover:text-primary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            {navLinks
              .filter((obj) => obj.label.toLowerCase() === user.role?.toLowerCase())
              .map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="block text-sm font-medium text-muted-foreground hover:text-primary"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}

            {user.email ? (
              <div className="pt-2 border-t">
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full bg-transparent"
                  onClick={handleLogout}
                >
                  Logout
                </Button>
              </div>
            ) : (
              <div className="pt-2 border-t">
                <Button asChild variant="outline" size="sm" className="w-full bg-transparent">
                  <Link to="/login">Login</Link>
                </Button>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  )
}