import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { FileText, Save, Send, User } from "lucide-react"

// Mock patient data - replace with actual API call
const mockPatients = [
  {
    $id: "1",
    patName: "Priya Sharma",
    patAge: 32,
    patGender: "Female",
    patHeight: "165 cm",
    patWeight: "58 kg",
    patBloodGroup: "A+",
    patEmail: "priya.sharma@email.com",
    patMobNumber: "+91 9876543210",
  },
  {
    $id: "2",
    patName: "Rajesh Kumar",
    patAge: 45,
    patGender: "Male",
    patHeight: "175 cm",
    patWeight: "72 kg",
    patBloodGroup: "B+",
    patEmail: "rajesh.kumar@email.com",
    patMobNumber: "+91 9876543211",
  },
  {
    $id: "3",
    patName: "Anjali Mehta",
    patAge: 28,
    patGender: "Female",
    patHeight: "160 cm",
    patWeight: "55 kg",
    patBloodGroup: "O+",
    patEmail: "anjali.mehta@email.com",
    patMobNumber: "+91 9876543212",
  },
]

export function CreatePatientReportForm() {
  const [selectedPatient, setSelectedPatient] = useState(null)
  const [formData, setFormData] = useState({
    visitType: "",
    lifestyle: "",
    prakriti: "",
    conditions: "",
    goal: "",
    bowelMovements: "",
    waterIntake: "",
    dietPref: "",
    problemDescByDoctor: "",
    solutionByDoctor: "",
    followUpDate: "",
  })

  const [dietChart, setDietChart] = useState({
    breakfast: [{ name: "", grams: "", calories: "" }],
    lunch: [{ name: "", grams: "", calories: "" }],
    highTea: [{ name: "", grams: "", calories: "" }],
    dinner: [{ name: "", grams: "", calories: "" }],
  })

  const handlePatientSelect = (patientId) => {
    const patient = mockPatients.find((p) => p.$id === patientId)
    setSelectedPatient(patient)
  }

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const addDietItem = (mealType) => {
    setDietChart((prev) => ({
      ...prev,
      [mealType]: [...prev[mealType], { name: "", grams: "", calories: "" }],
    }))
  }

  const updateDietItem = (mealType, index, field, value) => {
    setDietChart((prev) => ({
      ...prev,
      [mealType]: prev[mealType].map((item, i) => (i === index ? { ...item, [field]: value } : item)),
    }))
  }

  const removeDietItem = (mealType, index) => {
    setDietChart((prev) => ({
      ...prev,
      [mealType]: prev[mealType].filter((_, i) => i !== index),
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!selectedPatient) {
      alert("Please select a patient first")
      return
    }

    const reportData = {
      patID: selectedPatient.$id,
      docID: "current-doctor-id", // Replace with actual doctor ID
      docName: "Dr. Current Doctor", // Replace with actual doctor name
      visitType: formData.visitType,
      patName: selectedPatient.patName,
      patAge: selectedPatient.patAge,
      patGender: selectedPatient.patGender,
      patHeight: selectedPatient.patHeight,
      patWeight: selectedPatient.patWeight,
      lifestyle: formData.lifestyle,
      prakriti: formData.prakriti,
      conditions: formData.conditions,
      goal: formData.goal,
      bowelMovements: formData.bowelMovements,
      waterIntake: formData.waterIntake,
      dietPref: formData.dietPref,
      problemDescByDoctor: formData.problemDescByDoctor,
      solutionByDoctor: formData.solutionByDoctor,
      followUpDate: formData.followUpDate,
      dietChart: dietChart,
    }

    console.log("Report Data:", reportData)
    // Handle database submission here
  }

  const renderDietSection = (mealType, title) => (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <Label className="text-sm font-medium">{title}</Label>
        <Button type="button" variant="outline" size="sm" onClick={() => addDietItem(mealType)}>
          Add Item
        </Button>
      </div>
      {dietChart[mealType].map((item, index) => (
        <div key={index} className="grid grid-cols-12 gap-2 items-end">
          <div className="col-span-5">
            <Input
              placeholder="Food name"
              value={item.name}
              onChange={(e) => updateDietItem(mealType, index, "name", e.target.value)}
            />
          </div>
          <div className="col-span-3">
            <Input
              placeholder="Grams"
              value={item.grams}
              onChange={(e) => updateDietItem(mealType, index, "grams", e.target.value)}
            />
          </div>
          <div className="col-span-3">
            <Input
              placeholder="Calories"
              value={item.calories}
              onChange={(e) => updateDietItem(mealType, index, "calories", e.target.value)}
            />
          </div>
          <div className="col-span-1">
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={() => removeDietItem(mealType, index)}
              className="h-8 w-8 p-0"
            >
              ×
            </Button>
          </div>
        </div>
      ))}
    </div>
  )

  return (
    <div className="space-y-6">
      {/* Patient Selection */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <User className="h-5 w-5 text-primary" />
            Select Patient
          </CardTitle>
          <CardDescription>Choose a patient to create a report for</CardDescription>
        </CardHeader>
        <CardContent>
          <Select onValueChange={handlePatientSelect}>
            <SelectTrigger>
              <SelectValue placeholder="Choose a patient" />
            </SelectTrigger>
            <SelectContent>
              {mockPatients.map((patient) => (
                <SelectItem key={patient.$id} value={patient.$id}>
                  {patient.patName} ({patient.patAge}y, {patient.patGender})
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {selectedPatient && (
            <div className="mt-4 p-4 bg-muted rounded-lg">
              <h4 className="font-medium mb-2">Patient Details</h4>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <span>Height: {selectedPatient.patHeight}</span>
                <span>Weight: {selectedPatient.patWeight}</span>
                <span>Blood Group: {selectedPatient.patBloodGroup}</span>
                <span>Contact: {selectedPatient.patMobNumber}</span>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Report Form */}
      {selectedPatient && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-primary" />
              Create Report for {selectedPatient.patName}
            </CardTitle>
            <CardDescription>Complete consultation report with Ayurvedic assessment</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Basic Information */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="visitType">Visit Type</Label>
                  <Select value={formData.visitType} onValueChange={(value) => handleInputChange("visitType", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select visit type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="consultation">Consultation</SelectItem>
                      <SelectItem value="follow-up">Follow-up</SelectItem>
                      <SelectItem value="emergency">Emergency</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="prakriti">Prakriti (Constitution)</Label>
                  <Select value={formData.prakriti} onValueChange={(value) => handleInputChange("prakriti", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select prakriti" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="vata">Vata</SelectItem>
                      <SelectItem value="pitta">Pitta</SelectItem>
                      <SelectItem value="kapha">Kapha</SelectItem>
                      <SelectItem value="vata-pitta">Vata-Pitta</SelectItem>
                      <SelectItem value="pitta-kapha">Pitta-Kapha</SelectItem>
                      <SelectItem value="vata-kapha">Vata-Kapha</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Lifestyle & Health */}
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="lifestyle">Lifestyle</Label>
                  <Textarea
                    id="lifestyle"
                    placeholder="Describe patient's lifestyle, daily routine, work habits..."
                    value={formData.lifestyle}
                    onChange={(e) => handleInputChange("lifestyle", e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="conditions">Current Conditions</Label>
                  <Textarea
                    id="conditions"
                    placeholder="List current health conditions, symptoms..."
                    value={formData.conditions}
                    onChange={(e) => handleInputChange("conditions", e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="goal">Treatment Goal</Label>
                  <Textarea
                    id="goal"
                    placeholder="What are the treatment objectives..."
                    value={formData.goal}
                    onChange={(e) => handleInputChange("goal", e.target.value)}
                  />
                </div>
              </div>

              {/* Health Metrics */}
              <div className="grid grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="bowelMovements">Bowel Movements</Label>
                  <Input
                    id="bowelMovements"
                    placeholder="e.g., Regular, Constipated"
                    value={formData.bowelMovements}
                    onChange={(e) => handleInputChange("bowelMovements", e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="waterIntake">Water Intake</Label>
                  <Input
                    id="waterIntake"
                    placeholder="e.g., 2-3 liters/day"
                    value={formData.waterIntake}
                    onChange={(e) => handleInputChange("waterIntake", e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="dietPref">Diet Preference</Label>
                  <Select value={formData.dietPref} onValueChange={(value) => handleInputChange("dietPref", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select diet type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="vegetarian">Vegetarian</SelectItem>
                      <SelectItem value="non-vegetarian">Non-Vegetarian</SelectItem>
                      <SelectItem value="vegan">Vegan</SelectItem>
                      <SelectItem value="jain">Jain</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Doctor's Assessment */}
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="problemDescByDoctor">Problem Description</Label>
                  <Textarea
                    id="problemDescByDoctor"
                    placeholder="Doctor's assessment of the problem..."
                    value={formData.problemDescByDoctor}
                    onChange={(e) => handleInputChange("problemDescByDoctor", e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="solutionByDoctor">Treatment Solution</Label>
                  <Textarea
                    id="solutionByDoctor"
                    placeholder="Prescribed treatment, medications, recommendations..."
                    value={formData.solutionByDoctor}
                    onChange={(e) => handleInputChange("solutionByDoctor", e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="followUpDate">Follow-up Date</Label>
                  <Input
                    id="followUpDate"
                    type="date"
                    value={formData.followUpDate}
                    onChange={(e) => handleInputChange("followUpDate", e.target.value)}
                  />
                </div>
              </div>

              {/* Diet Chart */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Diet Chart</h3>
                <div className="space-y-6">
                  {renderDietSection("breakfast", "Breakfast")}
                  {renderDietSection("lunch", "Lunch")}
                  {renderDietSection("highTea", "High Tea")}
                  {renderDietSection("dinner", "Dinner")}
                </div>
              </div>

              {/* Submit Buttons */}
              <div className="flex gap-2 pt-4">
                <Button type="submit" className="flex-1">
                  <Save className="h-4 w-4 mr-2" />
                  Save Report
                </Button>
                <Button type="button" variant="outline" className="flex-1 bg-transparent">
                  <Send className="h-4 w-4 mr-2" />
                  Save & Send
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}
    </div>
  )
}