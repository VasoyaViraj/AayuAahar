import { DashboardLayout } from "@/components/Dashboard-layout"
import { PageHeader } from "@/components/page-header"
// import { TodaysReports } from "@/components/receptionist/todays-reports"
import { CreatePatientReportForm } from "@/components/doctor/create-patient-report-form"
import { Button } from "@/components/ui/button"
import { Calendar, Users } from "lucide-react"
import { TodaysReports } from "@/components/receptionist/reportListV2" 
import { useContext } from "react"
import { userContext } from "@/contexts/UserContext"

export default function DoctorPage() {

    const {user} = useContext(userContext)
    let docID = user.id || "doc_001";

    return (
        <DashboardLayout>
            <div className="space-y-6 min-h-screen">
            <PageHeader title="Doctor Dashboard" description="Manage your patients and create consultation reports">
                <div className="flex items-center gap-2">
                <Button variant="outline" size="sm">
                    <Calendar className="h-4 w-4 mr-2" />
                    Schedule
                </Button>
                <Button variant="outline" size="sm">
                    <Users className="h-4 w-4 mr-2" />
                    All Patients
                </Button>
                </div>
            </PageHeader>

            <div className="grid gap-6 lg:grid-cols-2">
                <div className="space-y-6">
                {/* <TodaysReports doctorFilter={true} /> */}
                <TodaysReports doctorId={docID} doctorFilter={true} onlyToday={true} />
                </div>

                <div className="space-y-6">
                <CreatePatientReportForm />
                </div>
            </div>
            </div>
        </DashboardLayout>
    )
}
