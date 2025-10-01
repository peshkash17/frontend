import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { Badge } from "../ui/badge"
import { Button } from "../ui/button"
import { Eye, Pencil, Trash2 } from "lucide-react"
import type { User } from "@/types/user"

interface MobileUserCardProps {
  user: User
  index: number
  handleDelete: (id: string) => void
}

const MobileUserCard = ({ user, index, handleDelete }: MobileUserCardProps) => {
  const tableRowVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (index: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: index * 0.05,
        duration: 0.3,
        ease: [0.4, 0, 0.2, 1] as any,
      },
    }),
  }

  return (
    <motion.div
      key={user._id}
      custom={index}
      variants={tableRowVariants}
      initial="hidden"
      animate="visible"
      className="p-4 hover:bg-muted/50 transition-colors duration-200"
    >
      <div className="flex items-start gap-4 mb-4">
        {user.profile ? (
          <motion.img
            src={user.profile || "/placeholder.svg"}
            alt={`${user.firstName} ${user.lastName}`}
            className="w-12 h-12 rounded-full object-cover ring-2 ring-border"
            whileHover={{ scale: 1.1 }}
          />
        ) : (
          <motion.div
            className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center ring-2 ring-border"
            whileHover={{ scale: 1.1 }}
          >
            <span className="text-primary font-semibold">
              {user.firstName[0]}
              {user.lastName[0]}
            </span>
          </motion.div>
        )}
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-foreground truncate">
            {user.firstName} {user.lastName}
          </h3>
          <p className="text-sm text-muted-foreground truncate">{user.email}</p>
          <div className="flex items-center gap-2 mt-2">
            <Badge variant={user.status === "active" ? "default" : "secondary"}>
              {user.status}
            </Badge>
            <span className="text-xs text-muted-foreground capitalize">{user.gender}</span>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2">
        <Link to={`/view/${user._id}`} className="w-full">
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button
              variant="outline"
              size="sm"
              className="w-full gap-1.5 transition-all duration-200"
            >
              <Eye className="w-4 h-4" />
              View
            </Button>
          </motion.div>
        </Link>
        <Link to={`/edit/${user._id}`} className="w-full">
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button
              variant="outline"
              size="sm"
              className="w-full gap-1.5 transition-all duration-200"
            >
              <Pencil className="w-4 h-4" />
              Edit
            </Button>
          </motion.div>
        </Link>
        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
          <Button
            variant="outline"
            size="sm"
            onClick={() => handleDelete(user._id)}
            className="w-full gap-1.5 hover:bg-destructive/10 hover:border-destructive hover:text-destructive transition-all duration-200"
          >
            <Trash2 className="w-4 h-4" />
            Delete
          </Button>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default MobileUserCard