import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function WriterInfo({ author, date }: { author: string; date: string }) {
  return (
    <Card className="mb-8">
      <CardContent className="flex items-center gap-4 p-4">
        <Avatar>
          <AvatarImage src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/profile%20pic.jpg-zNxV5VEq3oZk7ElHShFYJ3BgOY6fRk.jpeg" alt={author} />
          <AvatarFallback>{author.split(' ').map(n => n[0]).join('').toUpperCase()}</AvatarFallback>
        </Avatar>
        <div>
          <h3 className="font-semibold">{author}</h3>
          <p className="text-sm text-muted-foreground">{date}</p>
        </div>
      </CardContent>
    </Card>
  )
}
