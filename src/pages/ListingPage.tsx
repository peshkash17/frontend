"use client"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { toast } from "react-toastify"
import { motion, AnimatePresence, type Variants } from "framer-motion"
import { getUsers, searchUsers, exportUsers, deleteUser } from "../services/api"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../components/ui/table"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Card } from "../components/ui/card"
import { Badge } from "../components/ui/badge"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../components/ui/pagination"
import { Search, Download, Plus, Eye, Pencil, Trash2, Users, X } from "lucide-react"
import type { User } from "@/types/user"

const containerVariants:Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants:Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.4, 0, 0.2, 1],
    },
  },
}

const tableRowVariants:Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: (index: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: index * 0.05,
      duration: 0.3,
      ease: [0.4, 0, 0.2, 1],
    },
  }),
}

const ListingPage = () => {
  const [users, setUsers] = useState<User[]>([])
  const [total, setTotal] = useState(0)
  const [page, setPage] = useState(1)
  const [limit] = useState(10)
  const [searchQuery, setSearchQuery] = useState("")
  const [debouncedSearchQuery, setDebouncedSearchQuery] = useState("")
  const [loading, setLoading] = useState(false)

  const fetchUsers = async () => {
    setLoading(true)
    try {
      console.log('Fetching users with searchQuery:', debouncedSearchQuery, 'page:', page)
      const res = debouncedSearchQuery ? await searchUsers(debouncedSearchQuery) : await getUsers(page, limit)
      console.log('API response:', res)
      setUsers(res.data)
      setTotal(res.total || res.data.length)
    } catch (err) {
      console.error('Error fetching users:', err)
      toast.error(err as string)
    }
    setLoading(false)
  }

  // Debounce search query
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearchQuery(searchQuery)
      setPage(1) // Reset to first page when searching
    }, 300)

    return () => clearTimeout(timer)
  }, [searchQuery])

  useEffect(() => {
    fetchUsers()
  }, [page, debouncedSearchQuery])

  const handleDelete = async (id: string) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      try {
        await deleteUser(id)
        setUsers(users.filter((u) => u._id !== id))
        toast.success("User deleted successfully")
      } catch (err) {
        toast.error(err as string)
      }
    }
  }

  const handleExport = async () => {
    try {
      const res = await exportUsers()
      const url = window.URL.createObjectURL(new Blob([res]))
      const link = document.createElement("a")
      link.href = url
      link.setAttribute("download", "users.csv")
      document.body.appendChild(link)
      link.click()
      link.remove()
      toast.success("Users exported successfully")
    } catch (err) {
      toast.error(err as string)
    }
  }

  const totalPages = Math.ceil(total / limit)

  return (
    <div className="min-h-screen">
      <motion.div
        className="container mx-auto px-4 py-8 max-w-7xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Header Section */}
        <motion.div className="mb-8" variants={itemVariants}>
          <div className="flex items-center gap-3 mb-2">
            <motion.div
              className="p-2 bg-primary/10 rounded-lg backdrop-blur-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Users className="w-6 h-6 text-primary" />
            </motion.div>
            <h1 className="text-3xl font-bold text-foreground">User Management</h1>
          </div>
          <p className="text-muted-foreground">Manage and organize your user database</p>
        </motion.div>

        {/* Controls Card */}
        <motion.div variants={itemVariants}>
          <Card className="p-6 mb-6">
            <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
              {/* Search Input */}
              <div className="relative flex-1 w-full lg:max-w-md">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Search by name or email..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-10 transition-all duration-200"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
                {loading && debouncedSearchQuery && (
                  <div className="absolute right-3 top-1/2 -translate-y-1/2">
                    <div className="w-4 h-4 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 w-full lg:w-auto">
                <motion.div className="flex-1 lg:flex-none" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    onClick={handleExport}
                    variant="outline"
                    className="w-full gap-2 transition-all duration-200"
                  >
                    <Download className="w-4 h-4" />
                    <span className="hidden sm:inline">Export CSV</span>
                  </Button>
                </motion.div>
                <Link to="/add" className="flex-1 lg:flex-none">
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button className="w-full gap-2 transition-all duration-200">
                      <Plus className="w-4 h-4" />
                      Add User
                    </Button>
                  </motion.div>
                </Link>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Table Card */}
        <motion.div variants={itemVariants}>
          <Card className="overflow-hidden">
            <AnimatePresence mode="wait">
              {loading ? (
                <motion.div
                  key="loading"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col justify-center items-center h-64 gap-4"
                >
                  <div className="relative w-12 h-12">
                    <div className="absolute inset-0 rounded-full border-4 border-primary/20"></div>
                    <motion.div
                      className="absolute inset-0 rounded-full border-4 border-primary border-t-transparent"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                    />
                  </div>
                  <p className="text-muted-foreground">Loading users...</p>
                </motion.div>
              ) : users.length === 0 ? (
                <motion.div
                  key="empty"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="flex flex-col justify-center items-center h-64 gap-4"
                >
                  <Users className="w-16 h-16 text-muted-foreground/50" />
                  <div className="text-center">
                    <p className="text-lg font-medium text-foreground">No users found</p>
                    <p className="text-sm text-muted-foreground">
                      {debouncedSearchQuery ? "Try adjusting your search" : "Get started by adding your first user"}
                    </p>
                  </div>
                </motion.div>
              ) : (
                <motion.div key="content" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                  {/* Desktop Table View */}
                  <div className="hidden md:block overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow className="border-white/20 hover:bg-transparent">
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
                            className="border-white/20 hover:bg-white/30 transition-colors duration-200 group"
                          >
                            <TableCell>
                              {user.profile ? (
                                <motion.img
                                  src={user.profile || "/placeholder.svg"}
                                  alt={`${user.firstName} ${user.lastName}`}
                                  className="w-10 h-10 rounded-full object-cover ring-2 ring-white/30 group-hover:ring-primary transition-all duration-200"
                                  whileHover={{ scale: 1.1 }}
                                />
                              ) : (
                                <motion.div
                                  className="w-10 h-10 rounded-full bg-primary/10 backdrop-blur-sm flex items-center justify-center ring-2 ring-white/30 group-hover:ring-primary transition-all duration-200"
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
                              <Badge
                                variant={user.status === "active" ? "default" : "secondary"}
                                className={
                                  user.status === "active"
                                    ? "bg-primary/20 text-primary border-primary/30 hover:bg-primary/30 backdrop-blur-sm"
                                    : "bg-white/40 text-muted-foreground border-white/40 backdrop-blur-sm"
                                }
                              >
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
                                      variant="ghost"
                                      size="sm"
                                      className="gap-1.5 hover:bg-primary/10 hover:text-primary transition-all duration-200"
                                    >
                                      <Eye className="w-4 h-4" />
                                      <span className="hidden xl:inline">View</span>
                                    </Button>
                                  </motion.div>
                                </Link>
                                <Link to={`/edit/${user._id}`}>
                                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                    <Button
                                      variant="ghost"
                                      size="sm"
                                      className="gap-1.5 hover:bg-primary/10 hover:text-primary transition-all duration-200"
                                    >
                                      <Pencil className="w-4 h-4" />
                                      <span className="hidden xl:inline">Edit</span>
                                    </Button>
                                  </motion.div>
                                </Link>
                                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                  <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={() => handleDelete(user._id)}
                                    className="gap-1.5 hover:bg-destructive/10 hover:text-destructive transition-all duration-200"
                                  >
                                    <Trash2 className="w-4 h-4" />
                                    <span className="hidden xl:inline">Delete</span>
                                  </Button>
                                </motion.div>
                              </div>
                            </TableCell>
                          </motion.tr>
                        ))}
                      </TableBody>
                    </Table>
                  </div>

                  {/* Mobile Card View */}
                  <div className="md:hidden divide-y divide-white/20">
                    {users.map((user, index) => (
                      <motion.div
                        key={user._id}
                        custom={index}
                        variants={tableRowVariants}
                        initial="hidden"
                        animate="visible"
                        className="p-4 hover:bg-white/30 transition-colors duration-200"
                      >
                        <div className="flex items-start gap-4 mb-4">
                          {user.profile ? (
                            <motion.img
                              src={user.profile || "/placeholder.svg"}
                              alt={`${user.firstName} ${user.lastName}`}
                              className="w-12 h-12 rounded-full object-cover ring-2 ring-white/30"
                              whileHover={{ scale: 1.1 }}
                            />
                          ) : (
                            <motion.div
                              className="w-12 h-12 rounded-full bg-primary/10 backdrop-blur-sm flex items-center justify-center ring-2 ring-white/30"
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
                              <Badge
                                variant={user.status === "active" ? "default" : "secondary"}
                                className={
                                  user.status === "active"
                                    ? "bg-primary/20 text-primary border-primary/30 backdrop-blur-sm"
                                    : "bg-white/40 text-muted-foreground border-white/40 backdrop-blur-sm"
                                }
                              >
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
                                className="w-full gap-1.5 hover:bg-primary/10 hover:border-primary transition-all duration-200 bg-white/30 backdrop-blur-sm"
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
                                className="w-full gap-1.5 hover:bg-primary/10 hover:border-primary transition-all duration-200 bg-white/30 backdrop-blur-sm"
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
                              className="w-full gap-1.5 hover:bg-destructive/10 hover:border-destructive hover:text-destructive transition-all duration-200 bg-white/30 backdrop-blur-sm"
                            >
                              <Trash2 className="w-4 h-4" />
                              Delete
                            </Button>
                          </motion.div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </Card>
        </motion.div>

        {/* Pagination */}
        {!debouncedSearchQuery && totalPages > 1 && (
          <motion.div variants={itemVariants} className="mt-6">
            <Pagination>
              <PaginationContent className="gap-2">
                <PaginationItem>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <PaginationPrevious
                      onClick={() => page > 1 && setPage(page - 1)}
                      className={`transition-all duration-200 backdrop-blur-sm ${
                        page === 1
                          ? "pointer-events-none opacity-50"
                          : "hover:bg-primary/10 hover:text-primary cursor-pointer bg-white/30"
                      }`}
                    />
                  </motion.div>
                </PaginationItem>
                {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => {
                  let pageNum
                  if (totalPages <= 5) {
                    pageNum = i + 1
                  } else if (page <= 3) {
                    pageNum = i + 1
                  } else if (page >= totalPages - 2) {
                    pageNum = totalPages - 4 + i
                  } else {
                    pageNum = page - 2 + i
                  }
                  return (
                    <PaginationItem key={pageNum}>
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <PaginationLink
                          onClick={() => setPage(pageNum)}
                          isActive={page === pageNum}
                          className={`transition-all duration-200 cursor-pointer backdrop-blur-sm ${
                            page === pageNum
                              ? "bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg"
                              : "hover:bg-primary/10 hover:text-primary bg-white/30"
                          }`}
                        >
                          {pageNum}
                        </PaginationLink>
                      </motion.div>
                    </PaginationItem>
                  )
                })}
                <PaginationItem>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <PaginationNext
                      onClick={() => page < totalPages && setPage(page + 1)}
                      className={`transition-all duration-200 backdrop-blur-sm ${
                        page === totalPages
                          ? "pointer-events-none opacity-50"
                          : "hover:bg-primary/10 hover:text-primary cursor-pointer bg-white/30"
                      }`}
                    />
                  </motion.div>
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </motion.div>
        )}
      </motion.div>
    </div>
  )
}

export default ListingPage
