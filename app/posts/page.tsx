'use client'

import { Card } from '@/components/ui/card'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Post } from '@/data/posts'
import { motion } from 'framer-motion'
import { Breadcrumbs } from '@/components/Breadcrumbs'

export default function PostsPage() {
  const [posts, setPosts] = useState<Post[]>([])

  useEffect(() => {
    // Fetch posts from API or use imported posts
    import('@/data/posts').then((module) => {
      setPosts(module.posts)
    })
  }, [])

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto"
    >
      <Breadcrumbs />
      <div className="space-y-8">
        <motion.h1 
          className="text-3xl font-bold font-fancy"
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          সকল পোস্ট
        </motion.h1>
        <div className="grid gap-6">
          {posts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold font-fancy">
                    <Link 
                      href={`/posts/${post.id}`} 
                      className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                    >
                      {post.title}
                    </Link>
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300">{post.excerpt}</p>
                  <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400">
                    <span>{post.author}</span>
                    <span>{post.date}</span>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
