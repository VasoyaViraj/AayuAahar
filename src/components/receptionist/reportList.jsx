import { useState } from "react"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Separator } from "@/components/ui/separator"
import { FileText, Clock, User, Stethoscope, Utensils, Eye } from "lucide-react"
import { mockReports } from "@/services/mockData"

// ✅ Reusable Report Component
export function ReportsList({
  doctorId = null,     // filter by doctor
  patId = null,        // filter by patient
  onlyToday = false,   // show only today's reports
  title = "Reports"    // custom heading
}) {
  const [selectedReport, setSelectedReport] = useState(null)

  // Helper: check if report is from today
  const isToday = (dateString) => {
    const today = new Date().toISOString().slice(0, 10)
    return dateString.slice(0, 10) === today
  }

  // Apply filters
  let filteredReports = mockReports

  if (doctorId) {
    filteredReports = filteredReports.filter((r) => r.docID === doctorId)
  }

  if (patId) {
    filteredReports = filteredReports.filter((r) => r.patID === patId)
  }

  if (onlyToday) {
    filteredReports = filteredReports.filter((r) => isToday(r.$createdAt))
  }

  const getVisitTypeColor = (type) => {
    switch (type) {
      case "New Patient":
        return "bg-blue-100 text-blue-800 border-blue-200"
      case "Follow-up":
        return "bg-green-100 text-green-800 border-green-200"
      case "Consultation":
        return "bg-purple-100 text-purple-800 border-purple-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-primary" />
              {title}
            </CardTitle>
            <CardDescription>
              View and manage consultation reports
            </CardDescription>
          </div>
          <div className="text-sm text-muted-foreground">
            {filteredReports.length} reports
          </div>
        </div>
      </CardHeader>

      <CardContent>
        <div className="grid gap-4">
          {filteredReports.map((report) => (
            <Dialog key={report.$id}>
              <DialogTrigger asChild>
                <Card className="cursor-pointer hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <Avatar className="h-12 w-12">
                          <AvatarFallback>
                            {report.patName[0]}
                          </AvatarFallback>
                        </Avatar>
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <h3 className="font-semibold">{report.patName}</h3>
                            <Badge
                              className={getVisitTypeColor(report.visitType)}
                              variant="outline"
                            >
                              {report.visitType}
                            </Badge>
                          </div>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <User className="h-3 w-3" />
                              {report.patAge}y, {report.patGender}
                            </div>
                            {!doctorId && (
                              <div className="flex items-center gap-1">
                                <Stethoscope className="h-3 w-3" />
                                {report.docName}
                              </div>
                            )}
                            <div className="flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              {formatDate(report.$createdAt)}
                            </div>
                          </div>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        <Eye className="h-4 w-4 mr-2" />
                        View Report
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </DialogTrigger>

              {/* Full Report Dialog */}
              <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5" />
                    Medical Report - {report.patName}
                  </DialogTitle>
                  <DialogDescription>
                    Consultation report by {report.docName} on {formatDate(report.$createdAt)}
                  </DialogDescription>
                </DialogHeader>

                {/* Patient Info, Assessment, Medical Details, Diet Chart same as before */}
                {/* ... keep your existing detail rendering here ... */}
              </DialogContent>
            </Dialog>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center p-3 bg-muted/50 rounded-lg">
            <div className="text-2xl font-bold text-blue-600">
              {filteredReports.filter((r) => r.visitType === "New Patient").length}
            </div>
            <div className="text-sm text-muted-foreground">New Patients</div>
          </div>
          <div className="text-center p-3 bg-muted/50 rounded-lg">
            <div className="text-2xl font-bold text-green-600">
              {filteredReports.filter((r) => r.visitType === "Follow-up").length}
            </div>
            <div className="text-sm text-muted-foreground">Follow-ups</div>
          </div>
          <div className="text-center p-3 bg-muted/50 rounded-lg">
            <div className="text-2xl font-bold text-purple-600">
              {filteredReports.filter((r) => r.visitType === "Consultation").length}
            </div>
            <div className="text-sm text-muted-foreground">Consultations</div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
