import { motion } from "framer-motion"
import { Input } from "../ui/input"
import { Label } from "../ui/label"

interface PersonalInfoSectionProps {
  values: any
  handleChange: (e: any) => void
  errors: any
  touched: any
}

const PersonalInfoSection = ({ values, handleChange, errors, touched }: PersonalInfoSectionProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <h2 className="text-lg font-semibold text-foreground mb-4 pb-2 border-b border-border">
        Personal Information
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div className="space-y-2" whileFocus={{ scale: 1.01 }} transition={{ duration: 0.2 }}>
          <Label htmlFor="firstName" className="text-foreground">
            First Name <span className="text-destructive">*</span>
          </Label>
          <Input
            id="firstName"
            name="firstName"
            value={values.firstName || ""}
            onChange={handleChange}
            className={`transition-all duration-200 ${
              errors.firstName && touched.firstName ? "border-destructive" : ""
            }`}
            placeholder="John"
          />
          {errors.firstName && touched.firstName && (
            <motion.p
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-destructive text-sm"
            >
              {errors.firstName}
            </motion.p>
          )}
        </motion.div>

        <motion.div className="space-y-2" whileFocus={{ scale: 1.01 }} transition={{ duration: 0.2 }}>
          <Label htmlFor="lastName" className="text-foreground">
            Last Name <span className="text-destructive">*</span>
          </Label>
          <Input
            id="lastName"
            name="lastName"
            value={values.lastName || ""}
            onChange={handleChange}
            className={`transition-all duration-200 ${
              errors.lastName && touched.lastName ? "border-destructive" : ""
            }`}
            placeholder="Doe"
          />
          {errors.lastName && touched.lastName && (
            <motion.p
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-destructive text-sm"
            >
              {errors.lastName}
            </motion.p>
          )}
        </motion.div>
      </div>
    </motion.div>
  )
}

export default PersonalInfoSection