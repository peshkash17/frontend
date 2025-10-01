import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { Button } from "../ui/button"
import { Save } from "lucide-react"

interface FormActionButtonsProps {
  isSubmitting: boolean
  isEdit: boolean
}

const FormActionButtons = ({ isSubmitting, isEdit }: FormActionButtonsProps) => {
  return (
    <motion.div
      className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-border"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      <motion.div
        className="flex-1 sm:flex-none"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full gap-2 transition-all duration-200"
        >
          <Save className="w-4 h-4" />
          {isSubmitting ? "Saving..." : isEdit ? "Update User" : "Create User"}
        </Button>
      </motion.div>
      <Link to="/" className="flex-1 sm:flex-none">
        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
          <Button
            type="button"
            variant="outline"
            className="w-full transition-all duration-200"
          >
            Cancel
          </Button>
        </motion.div>
      </Link>
    </motion.div>
  )
}

export default FormActionButtons