import { DashboardLayout } from "@/components/Dashboard-layout"
import { PageHeader } from "@/components/Page-header"
import { RegisterPatientForm } from "@/components/receptionist/register-patient-form"
// import { TodaysReports } from "@/components/receptionist/todays-reports"
import { Button } from "@/components/ui/button"
import { Calendar, Search } from "lucide-react"
import { TodaysReports } from "@/components/receptionist/reportListV2" 

export default function ReceptionistPage() {
  return (
      <DashboardLayout>
        <div className="space-y-6 min-h-screen">
          <PageHeader title="Receptionist Dashboard" description="Manage patient registrations and daily visits">
            <div className="flex items-center gap-2">
              {/* <Button variant="outline" size="sm">
                <Search className="h-4 w-4 mr-2" />
                Find Patient
              </Button>
              <Button variant="outline" size="sm">
                <Calendar className="h-4 w-4 mr-2" />
                Appointments
              </Button> */}
            </div>
          </PageHeader> 

          <div className="grid gap-6 lg:grid-cols-2">
            {/* Register Patient Form - Left Column */}
            <div className="space-y-6">
              <RegisterPatientForm />
            </div>

            {/* Today's Reports - Right Column */}
            <div className="space-y-6">
              <TodaysReports onlyToday={true}/>
            </div>
          </div>
        </div>
      </DashboardLayout>
  )
}
