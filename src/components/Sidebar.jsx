import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { LayoutDashboard, FileText, Users, User, LogOut, ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"

export function Sidebar({ className }) {
  const [isCollapsed, setIsCollapsed] = useState(false)

  const dashboardItems = [
    {
      label: "Overview",
      icon: LayoutDashboard,
      path: "/dashboard",
    },
    {
      label: "Reports",
      icon: FileText,
      path: "/reports",
    },
    {
      label: "Patients",
      icon: Users,
      path: "/patients",
    },
  ]

  const accountItems = [
    {
      label: "Profile",
      icon: User,
      path: "/profile",
    },
    {
      label: "Logout",
      icon: LogOut,
      path: "/logout",
    },
  ]

  return (
    <div
      className={cn(
        "relative flex flex-col border-r bg-sidebar transition-all duration-300",
        isCollapsed ? "w-16" : "w-64",
        className,
      )}
    >
      {/* Collapse Toggle */}
      <Button
        variant="ghost"
        size="sm"
        className="absolute -right-3 top-6 z-10 h-6 w-6 rounded-full border bg-background shadow-md"
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        {isCollapsed ? <ChevronRight className="h-3 w-3" /> : <ChevronLeft className="h-3 w-3" />}
      </Button>

      {/* Sidebar Content */}
      <div className="flex-1 overflow-hidden">
        <div className="p-4">
          {/* Dashboard Section */}
          <div className="mb-6">
            {!isCollapsed && <h3 className="mb-3 text-sm font-medium text-sidebar-foreground">Dashboard</h3>}
            <nav className="space-y-1">
              {dashboardItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={cn(
                    "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                    "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                    isCollapsed && "justify-center px-2",
                  )}
                >
                  <item.icon className="h-4 w-4 flex-shrink-0" />
                  {!isCollapsed && <span>{item.label}</span>}
                </Link>
              ))}
            </nav>
          </div>

          {/* Account Section */}
          <div>
            {!isCollapsed && <h3 className="mb-3 text-sm font-medium text-sidebar-foreground">Account</h3>}
            <nav className="space-y-1">
              {accountItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={cn(
                    "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                    "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                    isCollapsed && "justify-center px-2",
                  )}
                >
                  <item.icon className="h-4 w-4 flex-shrink-0" />
                  {!isCollapsed && <span>{item.label}</span>}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </div>
  )
}
