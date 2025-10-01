import { motion } from "framer-motion"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select"

interface AdditionalDetailsSectionProps {
  values: any
  handleChange: (e: any) => void
  errors: any
  touched: any
}

const AdditionalDetailsSection = ({ values, handleChange, errors, touched }: AdditionalDetailsSectionProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
    >
      <h2 className="text-lg font-semibold text-foreground mb-4 pb-2 border-b border-border">
        Additional Details
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="status" className="text-foreground">
            Status <span className="text-destructive">*</span>
          </Label>
          <Select
            value={values.status || "active"}
            onValueChange={(value) => handleChange({ target: { name: "status", value } })}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="inactive">Inactive</SelectItem>
            </SelectContent>
          </Select>
          {errors.status && touched.status && (
            <motion.p
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-destructive text-sm"
            >
              {errors.status}
            </motion.p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="gender" className="text-foreground">
            Gender <span className="text-destructive">*</span>
          </Label>
          <Select
            value={values.gender || "male"}
            onValueChange={(value) => handleChange({ target: { name: "gender", value } })}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select gender" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="male">Male</SelectItem>
              <SelectItem value="female">Female</SelectItem>
            </SelectContent>
          </Select>
          {errors.gender && touched.gender && (
            <motion.p
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-destructive text-sm"
            >
              {errors.gender}
            </motion.p>
          )}
        </div>
      </div>

      <div className="space-y-2 mt-6">
        <Label htmlFor="profile" className="text-foreground">
          Profile Image URL
        </Label>
        <Input
          id="profile"
          name="profile"
          value={values.profile || ""}
          onChange={handleChange}
          className={`transition-all duration-200 ${
            errors.profile && touched.profile ? "border-destructive" : ""
          }`}
          placeholder="https://example.com/profile.jpg"
        />
        {errors.profile && touched.profile && (
          <motion.p
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-destructive text-sm"
          >
            {errors.profile}
          </motion.p>
        )}
      </div>
    </motion.div>
  )
}

export default AdditionalDetailsSection