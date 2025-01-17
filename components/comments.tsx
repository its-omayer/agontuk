'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { formatDistance } from 'date-fns'
import { bn } from 'date-fns/locale'

interface Comment {
  id: string
  content: string
  author: string
  date: string
}

export function Comments({ postId }: { postId: string }) {
  const [comments, setComments] = useState<Comment[]>([])
  const [newComment, setNewComment] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!newComment.trim()) return

    const comment: Comment = {
      id: `comment_${Date.now()}`,
      content: newComment,
      author: 'Anonymous',
      date: new Date().toISOString(),
    }

    const updatedComments = [comment, ...comments]
    setComments(updatedComments)
    localStorage.setItem(`comments_${postId}`, JSON.stringify(updatedComments))
    setNewComment('')
  }

  useEffect(() => {
    const storedComments = localStorage.getItem(`comments_${postId}`)
    if (storedComments) {
      setComments(JSON.parse(storedComments))
    }
  }, [postId])

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">মন্তব্য</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <Textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="আপনার মন্তব্য লিখুন..."
          rows={4}
        />
        <Button type="submit">
          মন্তব্য করুন
        </Button>
      </form>

      <div className="space-y-6">
        {comments.map((comment) => (
          <div key={comment.id} className="flex gap-4">
            <Avatar>
              <AvatarImage src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/profile%20pic.jpg-df2A2Hg3I2pDK7SK659sXNMdczY5Ih.jpeg" />
              <AvatarFallback>{comment.author[0]}</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <span className="font-medium">{comment.author}</span>
                <span className="text-sm text-gray-500">
                  {formatDistance(new Date(comment.date), new Date(), {
                    addSuffix: true,
                    locale: bn,
                  })}
                </span>
              </div>
              <p className="text-gray-600 dark:text-gray-300">{comment.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
