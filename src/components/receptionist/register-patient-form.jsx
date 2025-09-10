import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { UserPlus, Save, Calendar } from "lucide-react"

export function RegisterPatientForm() {
  const [formData, setFormData] = useState({
    patName: "",
    patEmail: "",
    patPassword: "",
    patMobNumber: "",
    patAddress: "",
    patAge: "",
    patHeight: "",
    patWeight: "",
    patBloodGroup: "",
    patGender: "",
  })

  const [isLoading, setIsLoading] = useState(false)

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    await new Promise((resolve) => setTimeout(resolve, 2000))

    console.log("New patient registration:", formData)

    setFormData({
      patName: "",
      patEmail: "",
      patPassword: "",
      patMobNumber: "",
      patAddress: "",
      patAge: "",
      patHeight: "",
      patWeight: "",
      patBloodGroup: "",
      patGender: "",
    })

    setIsLoading(false)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <UserPlus className="h-5 w-5 text-primary" />
          Register New Patient
        </CardTitle>
        <CardDescription>Add a new patient to the system</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Basic Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="patName">Full Name *</Label>
              <Input
                id="patName"
                placeholder="Enter patient's full name"
                value={formData.patName}
                onChange={(e) => handleInputChange("patName", e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="patAge">Age *</Label>
              <Input
                id="patAge"
                type="number"
                placeholder="Age in years"
                value={formData.patAge}
                onChange={(e) => handleInputChange("patAge", e.target.value)}
                required
                min="1"
                max="120"
              />
            </div>
          </div>

          {/* Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="patMobNumber">Mobile Number *</Label>
              <Input
                id="patMobNumber"
                placeholder="+91 XXXXX XXXXX"
                value={formData.patMobNumber}
                onChange={(e) => handleInputChange("patMobNumber", e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="patEmail">Email Address *</Label>
              <Input
                id="patEmail"
                type="email"
                placeholder="patient@example.com"
                value={formData.patEmail}
                onChange={(e) => handleInputChange("patEmail", e.target.value)}
                required
              />
            </div>
          </div>

          {/* Password */}
          <div className="space-y-2">
            <Label htmlFor="patPassword">Password *</Label>
            <Input
              id="patPassword"
              type="password"
              placeholder="Create a secure password"
              value={formData.patPassword}
              onChange={(e) => handleInputChange("patPassword", e.target.value)}
              required
              minLength={6}
            />
          </div>

          {/* Physical Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="patGender">Gender *</Label>
              <Select value={formData.patGender} onValueChange={(value) => handleInputChange("patGender", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select gender" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Male">Male</SelectItem>
                  <SelectItem value="Female">Female</SelectItem>
                  <SelectItem value="Other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="patBloodGroup">Blood Group</Label>
              <Select
                value={formData.patBloodGroup}
                onValueChange={(value) => handleInputChange("patBloodGroup", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select blood group" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="A+">A+</SelectItem>
                  <SelectItem value="A-">A-</SelectItem>
                  <SelectItem value="B+">B+</SelectItem>
                  <SelectItem value="B-">B-</SelectItem>
                  <SelectItem value="AB+">AB+</SelectItem>
                  <SelectItem value="AB-">AB-</SelectItem>
                  <SelectItem value="O+">O+</SelectItem>
                  <SelectItem value="O-">O-</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="patHeight">Height *</Label>
              <Input
                id="patHeight"
                placeholder="168 cm or 5'6&quot;"
                value={formData.patHeight}
                onChange={(e) => handleInputChange("patHeight", e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="patWeight">Weight *</Label>
              <Input
                id="patWeight"
                placeholder="65 kg"
                value={formData.patWeight}
                onChange={(e) => handleInputChange("patWeight", e.target.value)}
                required
              />
            </div>
          </div>

          {/* Address */}
          <div className="space-y-2">
            <Label htmlFor="patAddress">Address *</Label>
            <Textarea
              id="patAddress"
              placeholder="Enter complete address"
              value={formData.patAddress}
              onChange={(e) => handleInputChange("patAddress", e.target.value)}
              className="min-h-[60px]"
              required
            />
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2 pt-4">
            <Button type="submit" className="flex-1" disabled={isLoading}>
              {isLoading ? (
                <>
                  <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-background border-t-transparent" />
                  Registering...
                </>
              ) : (
                <>
                  <Save className="h-4 w-4 mr-2" />
                  Register Patient
                </>
              )}
            </Button>
            <Button type="button" variant="outline" className="bg-transparent">
              <Calendar className="h-4 w-4 mr-2" />
              Register & Schedule
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}