import { Badge } from "../ui/badge"
import type { User } from "@/types/user"

interface PersonalDetailsSectionProps {
  user: User
}

const PersonalDetailsSection = ({ user }: PersonalDetailsSectionProps) => {
  return (
    <div className="space-y-4">
      <h4 className="font-semibold text-foreground text-sm uppercase tracking-wide">Personal Details</h4>

      <div className="space-y-3">
        <div>
          <p className="text-xs text-muted-foreground mb-1">First Name</p>
          <p className="text-foreground font-medium">{user.firstName}</p>
        </div>

        <div>
          <p className="text-xs text-muted-foreground mb-1">Last Name</p>
          <p className="text-foreground font-medium">{user.lastName}</p>
        </div>

        <div>
          <p className="text-xs text-muted-foreground mb-1">Gender</p>
          <p className="text-foreground font-medium capitalize">{user.gender}</p>
        </div>

        <div>
          <p className="text-xs text-muted-foreground mb-1">Status</p>
          <Badge variant={user.status === "active" ? "default" : "secondary"}>
            {user.status}
          </Badge>
        </div>
      </div>
    </div>
  )
}

export default PersonalDetailsSection