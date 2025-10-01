import { Card } from "../ui/card"
import { ImageIcon } from "lucide-react"
import type { User } from "@/types/user"

interface ProfileImageSectionProps {
  user: User
}

const ProfileImageSection = ({ user }: ProfileImageSectionProps) => {
  if (!user.profile) {
    return null
  }

  return (
    <div className="space-y-2 md:col-span-2">
      <h4 className="font-semibold text-foreground text-sm uppercase tracking-wide">Profile Image</h4>
      <Card className="flex items-center gap-3 p-4 hover:scale-105 transition-transform duration-200">
        <div className="p-2 bg-primary/10 rounded-lg">
          <ImageIcon className="w-5 h-5 text-primary" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-xs text-muted-foreground mb-1">Image URL</p>
          <a
            href={user.profile}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-primary/80 transition-colors duration-200 text-sm break-all underline"
          >
            {user.profile}
          </a>
        </div>
      </Card>
    </div>
  )
}

export default ProfileImageSection