import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import { toast } from "react-toastify"
import { getUser } from "../services/api"
import { Card } from "../components/ui/card"
import { Button } from "../components/ui/button"
import ProfileCard from "../components/profile/ProfileCard"
import UserDetailsCard from "../components/profile/UserDetailsCard"
import { ArrowLeft, UserIcon, Edit } from "lucide-react"
import type { User } from "@/types/user"

const ViewPage = () => {
  const { id } = useParams<{ id: string }>()
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getUser(id!)
      .then((res) => {
        setUser(res.data)
        setLoading(false)
      })
      .catch((err) => {
        toast.error(err)
        setLoading(false)
      })
  }, [id])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
          <p className="text-muted-foreground">Loading user details...</p>
        </div>
      </div>
    )
  }

  if (!user) {
    return (
      <div className="min-h-screen">
        <div className="container mx-auto px-4 py-8 max-w-3xl">
          <Card className="text-center p-8">
            <div className="flex flex-col items-center gap-4">
              <div className="p-4 bg-destructive/10 rounded-full">
                <UserIcon className="w-12 h-12 text-destructive" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-foreground mb-2">User Not Found</h1>
                <p className="text-muted-foreground">
                  The user you're looking for doesn't exist or has been removed.
                </p>
              </div>
              <Link to="/" className="mt-4">
                <Button variant="secondary" className="gap-2">
                  <ArrowLeft className="w-4 h-4" />
                  Back to Users
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-all duration-300 mb-6 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
            Back to Users
          </Link>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-4xl font-bold text-foreground mb-2">User Profile</h1>
              <p className="text-muted-foreground text-lg">Detailed information and comprehensive user data</p>
            </div>
            <Link to={`/edit/${user._id}`}>
              <Button size="lg" className="gap-3 font-semibold">
                <Edit className="w-5 h-5" />
                Edit User
              </Button>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Profile Card */}
          <ProfileCard user={user} />

          {/* Details Card */}
          <UserDetailsCard user={user} />
        </div>
      </div>
    </div>
  )
}

export default ViewPage