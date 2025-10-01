import { motion, type Variants } from "framer-motion"
import { Link } from "react-router-dom"
import { ArrowLeft, UserCog, UserPlus } from "lucide-react"

interface PageHeaderProps {
  isEdit: boolean
}

const PageHeader = ({ isEdit }: PageHeaderProps) => {
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.4, 0, 0.2, 1] as any,
      },
    },
  }

  return (
    <motion.div className="mb-8" variants={itemVariants}>
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-200 mb-4"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Users
      </Link>
      <div className="flex items-center gap-3">
        <motion.div
          className="p-2 bg-primary/10 rounded-lg"
          whileHover={{ scale: 1.05, rotate: 5 }}
          whileTap={{ scale: 0.95 }}
        >
          {isEdit ? <UserCog className="w-6 h-6 text-primary" /> : <UserPlus className="w-6 h-6 text-primary" />}
        </motion.div>
        <div>
          <h1 className="text-3xl font-bold text-foreground">{isEdit ? "Edit User" : "Add New User"}</h1>
          <p className="text-muted-foreground">
            {isEdit ? "Update user information" : "Fill in the details to create a new user"}
          </p>
        </div>
      </div>
    </motion.div>
  )
}

export default PageHeader