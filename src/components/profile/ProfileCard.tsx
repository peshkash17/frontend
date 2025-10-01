import { Badge } from "../ui/badge"
import { Card, CardContent, CardHeader } from "../ui/card"
import { Separator } from "../ui/separator"
import { Mail, Phone, MapPin } from "lucide-react"
import type { User } from "@/types/user"

interface ProfileCardProps {
  user: User
}

const ProfileCard = ({ user }: ProfileCardProps) => {
  return (
    <div>
      <Card className="lg:col-span-1">
        <CardHeader className="text-center pb-6">
          {user.profile ? (
            <div className="relative mx-auto mb-4">
              <img
                src={user.profile || "/placeholder.svg"}
                alt={`${user.firstName} ${user.lastName}`}
                className="w-36 h-36 rounded-full object-cover ring-4 ring-primary/30 shadow-lg mx-auto hover:scale-110 transition-all duration-500"
              />
              <div className="absolute bottom-0 right-1/2 translate-x-1/2 translate-y-1/2">
                <Badge variant={user.status === "active" ? "default" : "secondary"}>
                  {user.status}
                </Badge>
              </div>
            </div>
          ) : (
            <div className="relative mx-auto mb-4">
              <div className="w-36 h-36 rounded-full bg-primary/20 flex items-center justify-center ring-4 ring-primary/30 shadow-lg mx-auto hover:scale-110 transition-all duration-500">
                <span className="text-primary-foreground font-bold text-5xl">
                  {user.firstName[0]}
                  {user.lastName[0]}
                </span>
              </div>
              <div className="absolute bottom-0 right-1/2 translate-x-1/2 translate-y-1/2">
                <Badge variant={user.status === "active" ? "default" : "secondary"}>
                  {user.status}
                </Badge>
              </div>
            </div>
          )}
          <h2 className="text-3xl font-bold text-foreground mb-2">
            {user.firstName} {user.lastName}
          </h2>
          <p className="text-muted-foreground capitalize text-lg font-medium">{user.gender}</p>
        </CardHeader>
        <Separator />
        <CardContent className="pt-6 space-y-4">
          <div className="flex items-center gap-3 text-sm hover:translate-x-1 transition-transform duration-200">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Mail className="w-4 h-4 text-primary" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-muted-foreground text-xs">Email</p>
              <p className="text-foreground truncate">{user.email}</p>
            </div>
          </div>
          <div className="flex items-center gap-3 text-sm hover:translate-x-1 transition-transform duration-200">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Phone className="w-4 h-4 text-primary" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-muted-foreground text-xs">Phone</p>
              <p className="text-foreground">{user.phone}</p>
            </div>
          </div>
          {user.location && (
            <div className="flex items-center gap-3 text-sm hover:translate-x-1 transition-transform duration-200">
              <div className="p-2 bg-primary/10 rounded-lg">
                <MapPin className="w-4 h-4 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-muted-foreground text-xs">Location</p>
                <p className="text-foreground">{user.location}</p>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

export default ProfileCard