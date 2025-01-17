'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { useRouter } from 'next/navigation'
import { useToast } from '@/hooks/use-toast'
import { posts as initialPosts, type Post } from '@/data/posts'

interface Comment {
  id: string
  content: string
  author: string
  date: string
  replies?: Comment[]
}

export default function AdminPage() {
  const router = useRouter()
  const { toast } = useToast()
  const [posts, setPosts] = useState<Post[]>(initialPosts)
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    author: 'আগন্তুক',
    category: '',
  })
  const [comments, setComments] = useState<Comment[]>([])
  const [replyContent, setReplyContent] = useState('')
  const [replyingTo, setReplyingTo] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const newPost: Post = {
        ...formData,
        id: Date.now().toString(),
        date: new Date().toLocaleDateString('bn-BD'),
        excerpt: formData.content.slice(0, 150) + '...',
      }

      const updatedPosts = [newPost, ...posts]
      setPosts(updatedPosts)
      localStorage.setItem('posts', JSON.stringify(updatedPosts))
      
      toast({
        title: "সফল!",
        description: "পোস্টটি সফলভাবে প্রকাশিত হয়েছে।",
      })

      // Reset form
      setFormData({
        title: '',
        content: '',
        author: 'আগন্তুক',
        category: '',
      })

      router.refresh()
    } catch (error) {
      toast({
        title: "ত্রুটি!",
        description: "পোস্ট প্রকাশ করা যায়নি। আবার চেষ্টা করুন।",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handleDelete = async (id: string) => {
    try {
      setPosts(posts.filter(post => post.id !== id))
      toast({
        title: "সফল!",
        description: "পোস্টটি মুছে ফেলা হয়েছে।",
      })
      router.refresh()
    } catch (error) {
      toast({
        title: "ত্রুটি!",
        description: "পোস্ট মুছে ফেলা যায়নি। আবার চেষ্টা করুন।",
        variant: "destructive",
      })
    }
  }

  const handleReply = (commentId: string) => {
    if (replyContent.trim() === '') return

    setComments(prevComments => {
      return prevComments.map(comment => {
        if (comment.id === commentId) {
          return {
            ...comment,
            replies: [
              ...(comment.replies || []),
              {
                id: `admin_reply_${Date.now()}`,
                content: replyContent,
                author: 'Admin',
                date: new Date().toISOString(),
              }
            ]
          }
        }
        return comment
      })
    })

    setReplyContent('')
    setReplyingTo(null)
  }

  useEffect(() => {
    const storedPosts = localStorage.getItem('posts')
    if (storedPosts) {
      setPosts(JSON.parse(storedPosts))
    }
  }, [])

  useEffect(() => {
    const allComments: Comment[] = []
    posts.forEach(post => {
      const storedComments = localStorage.getItem(`comments_${post.id}`)
      if (storedComments) {
        allComments.push(...JSON.parse(storedComments))
      }
    })
    setComments(allComments)
  }, [posts])

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-2">verify</h1>
        <h2 className="text-3xl font-bold">Blog Admin Panel</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Create New Post Form */}
        <Card className="p-6">
          <h3 className="text-xl font-bold mb-6">Create New Post</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                value={formData.title}
                onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="content">Content</Label>
              <Textarea
                id="content"
                value={formData.content}
                onChange={(e) => setFormData(prev => ({ ...prev, content: e.target.value }))}
                rows={6}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="category">Category</Label>
              <Input
                id="category"
                value={formData.category}
                onChange={(e) => setFormData(prev => ({ ...prev, category: e.target.value }))}
                required
              />
            </div>

            <Button type="submit" disabled={isLoading}>
              {isLoading ? 'প্রকাশ করা হচ্ছে...' : 'পোস্ট করুন'}
            </Button>
          </form>
        </Card>

        {/* All Posts List */}
        <div className="space-y-6">
          <h3 className="text-xl font-bold">All Posts</h3>
          <div className="space-y-4">
            {posts.map((post) => (
              <Card key={post.id} className="p-6">
                <h4 className="text-lg font-semibold mb-2">{post.title}</h4>
                <div className="text-sm text-gray-500 mb-2">
                  By {post.author} | {post.date}
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="flex gap-2">
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => router.push(`/posts/${post.id}`)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => handleDelete(post.id)}
                  >
                    Delete
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Comments Section */}
      <div className="mt-12">
        <h3 className="text-xl font-bold mb-6">Comments</h3>
        <div className="space-y-6">
          {comments.map((comment) => (
            <Card key={comment.id} className="p-6">
              <div className="mb-4">
                <p className="text-gray-600 dark:text-gray-300">{comment.content}</p>
                <div className="text-sm text-gray-500 mt-2">
                  By {comment.author} | {new Date(comment.date).toLocaleString()}
                </div>
              </div>
              {comment.replies && comment.replies.length > 0 && (
                <div className="ml-8 space-y-4 mt-4">
                  {comment.replies.map((reply) => (
                    <div key={reply.id} className="bg-gray-100 dark:bg-gray-700 p-4 rounded-md">
                      <p className="text-gray-600 dark:text-gray-300">{reply.content}</p>
                      <div className="text-sm text-gray-500 mt-2">
                        By {reply.author} | {new Date(reply.date).toLocaleString()}
                      </div>
                    </div>
                  ))}
                </div>
              )}
              {replyingTo === comment.id ? (
                <div className="mt-4">
                  <Textarea
                    value={replyContent}
                    onChange={(e) => setReplyContent(e.target.value)}
                    placeholder="Type your reply..."
                    rows={3}
                  />
                  <div className="mt-2 flex gap-2">
                    <Button onClick={() => handleReply(comment.id)} size="sm">
                      Send Reply
                    </Button>
                    <Button onClick={() => setReplyingTo(null)} variant="outline" size="sm">
                      Cancel
                    </Button>
                  </div>
                </div>
              ) : (
                <Button onClick={() => setReplyingTo(comment.id)} variant="outline" size="sm" className="mt-2">
                  Reply
                </Button>
              )}
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
