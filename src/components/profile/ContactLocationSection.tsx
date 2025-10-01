import type { User } from "@/types/user"

interface ContactLocationSectionProps {
  user: User
}

const ContactLocationSection = ({ user }: ContactLocationSectionProps) => {
  return (
    <div className="space-y-4">
      <h4 className="font-semibold text-foreground text-sm uppercase tracking-wide">
        Contact & Location
      </h4>

      <div className="space-y-3">
        <div>
          <p className="text-xs text-muted-foreground mb-1">Email Address</p>
          <p className="text-foreground font-medium break-all">{user.email}</p>
        </div>

        <div>
          <p className="text-xs text-muted-foreground mb-1">Phone Number</p>
          <p className="text-foreground font-medium">{user.phone}</p>
        </div>

        <div>
          <p className="text-xs text-muted-foreground mb-1">Location</p>
          <p className="text-foreground font-medium">{user.location || "Not specified"}</p>
        </div>

        <div>
          <p className="text-xs text-muted-foreground mb-1">Address</p>
          <p className="text-foreground font-medium">{user.address || "Not specified"}</p>
        </div>
      </div>
    </div>
  )
}

export default ContactLocationSection