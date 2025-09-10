import { DashboardLayout } from "@/components/dashboard-layout"
import { PageHeader } from "@/components/page-header"
import { TodaysReports } from "@/components/receptionist/todays-reports"
import { CreatePatientReportForm } from "@/components/doctor/create-patient-report-form"
import { Button } from "@/components/ui/button"
import { Calendar, Users } from "lucide-react"

export default function DoctorPage() {
    return (
        <DashboardLayout>
            <div className="space-y-6">
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
                <TodaysReports doctorFilter={true} />
                </div>

                <div className="space-y-6">
                <CreatePatientReportForm />
                </div>
            </div>
            </div>
        </DashboardLayout>
    )
}
