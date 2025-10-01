import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table"
import { Badge } from "../ui/badge"
import { Button } from "../ui/button"
import { Eye, Pencil, Trash2 } from "lucide-react"
import type { User } from "@/types/user"

interface DesktopUserTableProps {
  users: User[]
  handleDelete: (id: string) => void
}

const DesktopUserTable = ({ users, handleDelete }: DesktopUserTableProps) => {
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
    <div className="hidden md:block overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow className="hover:bg-transparent">
            <TableHead className="text-muted-foreground font-semibold">Profile</TableHead>
            <TableHead className="text-muted-foreground font-semibold">Name</TableHead>
            <TableHead className="text-muted-foreground font-semibold">Email</TableHead>
            <TableHead className="text-muted-foreground font-semibold">Phone</TableHead>
            <TableHead className="text-muted-foreground font-semibold">Status</TableHead>
            <TableHead className="text-muted-foreground font-semibold">Gender</TableHead>
            <TableHead className="text-muted-foreground font-semibold">Location</TableHead>
            <TableHead className="text-muted-foreground font-semibold">Created</TableHead>
            <TableHead className="text-muted-foreground font-semibold text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user, index) => (
            <motion.tr
              key={user._id}
              custom={index}
              variants={tableRowVariants}
              initial="hidden"
              animate="visible"
              className="hover:bg-muted/50 transition-colors duration-200 group"
            >
              <TableCell>
                {user.profile ? (
                  <motion.img
                    src={user.profile || "/placeholder.svg"}
                    alt={`${user.firstName} ${user.lastName}`}
                    className="w-10 h-10 rounded-full object-cover ring-2 ring-border group-hover:ring-primary transition-all duration-200"
                    whileHover={{ scale: 1.1 }}
                  />
                ) : (
                  <motion.div
                    className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center ring-2 ring-border group-hover:ring-primary transition-all duration-200"
                    whileHover={{ scale: 1.1 }}
                  >
                    <span className="text-primary font-semibold text-sm">
                      {user.firstName[0]}
                      {user.lastName[0]}
                    </span>
                  </motion.div>
                )}
              </TableCell>
              <TableCell className="font-medium text-foreground">
                {user.firstName} {user.lastName}
              </TableCell>
              <TableCell className="text-muted-foreground">{user.email}</TableCell>
              <TableCell className="text-muted-foreground">{user.phone}</TableCell>
              <TableCell>
                <Badge variant={user.status === "active" ? "default" : "secondary"}>
                  {user.status}
                </Badge>
              </TableCell>
              <TableCell className="text-muted-foreground capitalize">{user.gender}</TableCell>
              <TableCell className="text-muted-foreground">{user.location || "N/A"}</TableCell>
              <TableCell className="text-muted-foreground text-sm">
                {new Date(user.createdAt).toLocaleDateString()}
              </TableCell>
              <TableCell>
                <div className="flex gap-2 justify-end">
                  <Link to={`/view/${user._id}`}>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button
                        variant="outline"
                        size="sm"
                        className="gap-1.5 transition-all duration-200"
                      >
                        <Eye className="w-4 h-4" />
                        View
                      </Button>
                    </motion.div>
                  </Link>
                  <Link to={`/edit/${user._id}`}>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button
                        variant="outline"
                        size="sm"
                        className="gap-1.5 transition-all duration-200"
                      >
                        <Pencil className="w-4 h-4" />
                        Edit
                      </Button>
                    </motion.div>
                  </Link>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleDelete(user._id)}
                      className="gap-1.5 hover:bg-destructive/10 hover:border-destructive hover:text-destructive transition-all duration-200"
                    >
                      <Trash2 className="w-4 h-4" />
                      Delete
                    </Button>
                  </motion.div>
                </div>
              </TableCell>
            </motion.tr>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default DesktopUserTable