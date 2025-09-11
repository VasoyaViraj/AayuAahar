import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { User, Phone, Calendar, Ruler, Weight, Edit } from "lucide-react"
import { userContext } from "@/contexts/UserContext"
import { mockPatients } from "@/services/mockData"
import { useContext } from "react"

// Mock patient data - in a real app, this would come from your database/API
// let patientData = {
//   name: "Priya Sharma",
//   age: 32,
//   contact: "+91 98765 43210",
//   height: "5'4\"",
//   weight: "58 kg",
//   bloodGroup: "O+",
//   joinDate: "March 2024",
// }

export function PatientProfile() {

    const { user } = useContext(userContext)

    const patientData = mockPatients.filter((obj) => obj.$id == user.id)[0]
    console.log(patientData.patName)

    return (
    <Card className="h-fit">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="flex items-center gap-2">
              <User className="h-5 w-5 text-primary" />
              My Profile
            </CardTitle>
            <CardDescription>Your personal information and health details</CardDescription>
          </div>
          <Button variant="outline" size="sm">
            <Edit className="h-4 w-4 mr-2" />
            Edit
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Name */}
        <div className="flex items-center justify-between py-2 border-b border-border/50">
          <span className="text-sm font-medium text-muted-foreground">Name</span>
          <span className="font-medium">{patientData.patName}</span>
        </div>

        {/* Age */}
        <div className="flex items-center justify-between py-2 border-b border-border/50">
          <span className="text-sm font-medium text-muted-foreground flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            Age
          </span>
          <span className="font-medium">{patientData.patAge} years</span>
        </div>

        {/* Contact */}
        <div className="flex items-center justify-between py-2 border-b border-border/50">
          <span className="text-sm font-medium text-muted-foreground flex items-center gap-2">
            <Phone className="h-4 w-4" />
            Contact
          </span>
          <span className="font-medium">{patientData.patMobNumber}</span>
        </div>

        {/* Height */}
        <div className="flex items-center justify-between py-2 border-b border-border/50">
          <span className="text-sm font-medium text-muted-foreground flex items-center gap-2">
            <Ruler className="h-4 w-4" />
            Height
          </span>
          <span className="font-medium">{patientData.patHeight}</span>
        </div>

        {/* Weight */}
        <div className="flex items-center justify-between py-2 border-b border-border/50">
          <span className="text-sm font-medium text-muted-foreground flex items-center gap-2">
            <Weight className="h-4 w-4" />
            Weight
          </span>
          <span className="font-medium">{patientData.patWeight}</span>
        </div>

        {/* Additional Info */}
        <div className="pt-4 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-muted-foreground">Blood Group</span>
            <Badge variant="secondary">{patientData.patBloodGroup}</Badge>
          </div>
          {/* <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-muted-foreground">Member Since</span>
            <span className="text-sm">{patientData.joinDate}</span>
          </div> */}
        </div>
      </CardContent>
    </Card>
  )
}
