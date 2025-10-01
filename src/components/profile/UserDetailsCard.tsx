import { Card, CardContent, CardHeader } from "../ui/card"
import { Separator } from "../ui/separator"
import PersonalDetailsSection from "./PersonalDetailsSection"
import ContactLocationSection from "./ContactLocationSection"
import MetadataSection from "./MetadataSection"
import ProfileImageSection from "./ProfileImageSection"
import type { User } from "@/types/user"

interface UserDetailsCardProps {
  user: User
}

const UserDetailsCard = ({ user }: UserDetailsCardProps) => {
  return (
    <div className="lg:col-span-2">
      <Card>
        <CardHeader>
          <h3 className="text-2xl font-semibold text-foreground">User Information</h3>
          <p className="text-muted-foreground text-lg">Complete details and comprehensive metadata</p>
        </CardHeader>
        <Separator />
        <CardContent className="pt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <PersonalDetailsSection user={user} />
            <ContactLocationSection user={user} />
            <MetadataSection user={user} />
            <ProfileImageSection user={user} />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default UserDetailsCard