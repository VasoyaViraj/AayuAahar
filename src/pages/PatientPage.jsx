import { DashboardLayout } from "@/components/Dashboard-layout"
import { PageHeader } from "@/components/page-header"
import { PatientProfile } from "@/components/patient/patient-profile"
import { TodaysReports } from "@/components/receptionist/reportListV2"
import { userContext } from "@/contexts/UserContext"
import { useContext } from "react"

export default function PatientPage() {

  const {user} = useContext(userContext)

  return (
      <DashboardLayout>
        <div className="space-y-6 min-h-screen">
          <PageHeader title="Patient Dashboard" description="View your profile information and medical reports" />

          <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-3">
            {/* Profile Section - Takes 1 column */}
            <div className="lg:col-span-1">
              <PatientProfile />
            </div>

            {/* Reports Section - Takes 2 columns */}
            <div className="lg:col-span-2">
              {/* <PatientReports /> */}
              <TodaysReports patId={user.id}  />
            </div>
          </div>
        </div>
      </DashboardLayout>
  )
}