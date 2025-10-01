import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Card } from "../ui/card"
import { Search, Download, Plus, X } from "lucide-react"

interface SearchAndControlsProps {
  searchQuery: string
  setSearchQuery: (query: string) => void
  loading: boolean
  debouncedSearchQuery: string
  handleExport: () => void
}

const SearchAndControls = ({ 
  searchQuery, 
  setSearchQuery, 
  loading, 
  debouncedSearchQuery, 
  handleExport 
}: SearchAndControlsProps) => {
  const itemVariants = {
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
  )
}

export default SearchAndControls