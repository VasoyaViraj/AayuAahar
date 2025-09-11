import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
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
import { mockPatients,  mockReports } from "@/services/mockData"

export function TodaysReports({
    doctorId = null,
    patId = null, 
    onlyToday = false,
    title = "Reports",
    doctorFilter = false
    }) {
  const [selectedReport, setSelectedReport] = useState(null)

//   const filteredReports = doctorFilter
//     ? todaysReports.filter((report) => report.docID === "doc_001") // Replace with actual current doctor ID
//     : todaysReports

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
              {/* {doctorFilter ? "My Today's Reports" : "Today's Reports"} */}
              {title}
            </CardTitle>
            <CardDescription>
              {doctorFilter
                ? "View and manage your consultation reports from today"
                : "View and manage consultation reports from today"}
            </CardDescription>
          </div>
          <div className="text-sm text-muted-foreground">{filteredReports.length} reports</div>
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
                            {report.patName}
                          </AvatarFallback>
                        </Avatar>
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <h3 className="font-semibold">{report.patName}</h3>
                            <Badge className={getVisitTypeColor(report.visitType)} variant="outline">
                              {report.visitType}
                            </Badge>
                          </div>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <User className="h-3 w-3" />
                              {report.patAge}y, {report.patGender}
                            </div>
                            {!doctorFilter && (
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

                <div className="space-y-6">
                  {/* Patient Information */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div>
                      <label className="text-sm font-medium text-muted-foreground">Age</label>
                      <p className="text-sm">{report.patAge} years</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-muted-foreground">Gender</label>
                      <p className="text-sm">{report.patGender}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-muted-foreground">Height</label>
                      <p className="text-sm">{report.patHeight}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-muted-foreground">Weight</label>
                      <p className="text-sm">{report.patWeight}</p>
                    </div>
                  </div>

                  <Separator />

                  {/* Ayurvedic Assessment */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="text-sm font-medium text-muted-foreground">Prakriti</label>
                      <p className="text-sm">{report.prakriti}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-muted-foreground">Lifestyle</label>
                      <p className="text-sm">{report.lifestyle}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-muted-foreground">Diet Preference</label>
                      <p className="text-sm">{report.dietPref}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-muted-foreground">Bowel Movements</label>
                      <p className="text-sm">{report.bowelMovements}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-muted-foreground">Water Intake</label>
                      <p className="text-sm">{report.waterIntake}</p>
                    </div>
                  </div>

                  <Separator />

                  {/* Medical Details */}
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium text-muted-foreground">Conditions</label>
                      <p className="text-sm">{report.conditions}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-muted-foreground">Treatment Goal</label>
                      <p className="text-sm">{report.goal}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-muted-foreground">Problem Description</label>
                      <p className="text-sm">{report.problemDescByDoctor}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-muted-foreground">Solution & Treatment</label>
                      <p className="text-sm">{report.solutionByDoctor}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-muted-foreground">Follow-up Date</label>
                      <p className="text-sm">{new Date(report.followUpDate).toLocaleDateString("en-IN")}</p>
                    </div>
                  </div>

                  <Separator />

                  {/* Diet Chart */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                      <Utensils className="h-5 w-5" />
                      Prescribed Diet Chart
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {Object.entries(report.dietChart).map(([mealTime, meal]) => (
                        <Card key={mealTime} className="p-4">
                          <h4 className="font-medium capitalize mb-2">{mealTime.replace(/([A-Z])/g, " $1")}</h4>
                          <div className="space-y-1 text-sm">
                            <p>
                              <span className="font-medium">Food:</span> {meal.name}
                            </p>
                            <p>
                              <span className="font-medium">Quantity:</span> {meal.grams}
                            </p>
                            <p>
                              <span className="font-medium">Calories:</span> {meal.calories} kcal
                            </p>
                          </div>
                        </Card>
                      ))}
                    </div>
                    <div className="mt-4 p-3 bg-muted/50 rounded-lg">
                      <p className="text-sm font-medium">
                        Total Daily Calories:{" "}
                        {Object.values(report.dietChart).reduce((total, meal) => total + meal.calories, 0)} kcal
                      </p>
                    </div>
                  </div>
                </div>
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
