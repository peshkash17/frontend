import { Card } from "../ui/card"
import { Calendar } from "lucide-react"
import type { User } from "@/types/user"

interface MetadataSectionProps {
  user: User
}

const MetadataSection = ({ user }: MetadataSectionProps) => {
  return (
    <div className="space-y-4 md:col-span-2">
      <h4 className="font-semibold text-foreground text-sm uppercase tracking-wide">Metadata</h4>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Card className="flex items-center gap-3 p-4 hover:scale-105 transition-transform duration-200">
          <div className="p-2 bg-primary/10 rounded-lg">
            <Calendar className="w-5 h-5 text-primary" />
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Created At</p>
            <p className="text-foreground font-medium">
              {new Date(user.createdAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
            <p className="text-xs text-muted-foreground">
              {new Date(user.createdAt).toLocaleTimeString("en-US", {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </p>
          </div>
        </Card>

        <Card className="flex items-center gap-3 p-4 hover:scale-105 transition-transform duration-200">
          <div className="p-2 bg-primary/10 rounded-lg">
            <Calendar className="w-5 h-5 text-primary" />
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Last Updated</p>
            <p className="text-foreground font-medium">
              {new Date(user.updatedAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
            <p className="text-xs text-muted-foreground">
              {new Date(user.updatedAt).toLocaleTimeString("en-US", {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </p>
          </div>
        </Card>
      </div>
    </div>
  )
}

export default MetadataSection