import { motion } from "framer-motion"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import { Textarea } from "../ui/textarea"

interface ContactInfoSectionProps {
  values: any
  handleChange: (e: any) => void
  errors: any
  touched: any
}

const ContactInfoSection = ({ values, handleChange, errors, touched }: ContactInfoSectionProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
    >
      <h2 className="text-lg font-semibold text-foreground mb-4 pb-2 border-b border-border">
        Contact Information
      </h2>
      <div className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="email" className="text-foreground">
            Email <span className="text-destructive">*</span>
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={values.email || ""}
            onChange={handleChange}
            className={`transition-all duration-200 ${
              errors.email && touched.email ? "border-destructive" : ""
            }`}
            placeholder="john.doe@example.com"
          />
          {errors.email && touched.email && (
            <motion.p
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-destructive text-sm"
            >
              {errors.email}
            </motion.p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone" className="text-foreground">
            Phone <span className="text-destructive">*</span>
          </Label>
          <Input
            id="phone"
            name="phone"
            value={values.phone || ""}
            onChange={handleChange}
            className={`transition-all duration-200 ${
              errors.phone && touched.phone ? "border-destructive" : ""
            }`}
            placeholder="+1 (555) 000-0000"
          />
          {errors.phone && touched.phone && (
            <motion.p
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-destructive text-sm"
            >
              {errors.phone}
            </motion.p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="address" className="text-foreground">
            Address
          </Label>
          <Textarea
            id="address"
            name="address"
            value={values.address || ""}
            onChange={handleChange}
            className={`transition-all duration-200 min-h-[100px] ${
              errors.address && touched.address ? "border-destructive" : ""
            }`}
            placeholder="123 Main St, City, State, ZIP"
          />
          {errors.address && touched.address && (
            <motion.p
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-destructive text-sm"
            >
              {errors.address}
            </motion.p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="location" className="text-foreground">
            Location
          </Label>
          <Input
            id="location"
            name="location"
            value={values.location || ""}
            onChange={handleChange}
            className={`transition-all duration-200 ${
              errors.location && touched.location ? "border-destructive" : ""
            }`}
            placeholder="New York, USA"
          />
          {errors.location && touched.location && (
            <motion.p
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-destructive text-sm"
            >
              {errors.location}
            </motion.p>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default ContactInfoSection