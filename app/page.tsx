import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Facebook, Instagram, Twitter } from 'lucide-react'
import { posts } from '@/data/posts'

const socialLinks = [
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/agonttok',
    icon: Instagram,
  },
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/agonttok',
    icon: Facebook,
  },
  {
    name: 'X',
    url: 'https://x.com/b_omayer',
    icon: Twitter,
  },
]

export default function Home() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="py-20 text-center space-y-6">
  <h1 className="text-4xl md:text-6xl font-bold max-w-3xl mx-auto leading-tight">
    <span className="text-emerald-600 dark:text-emerald-500">মুসাফির-আগন্তুক</span>
  </h1>
  <div className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
    {/* Replace <p> tag with <div> or other suitable elements */}
    <div className="flex justify-center">
      <Button variant="outline" size="lg" asChild>
        <Link href="/about">আমার সম্পর্কে</Link>
      </Button>
    </div>
  </div>
</section>


      {/* Featured Posts */}
      <section className="space-y-8">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">Recent Posts</h2>
          <Button variant="ghost" asChild>
            <Link href="/posts">
              All
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.slice(0, 3).map((post) => (
            <Card key={post.id} className="flex flex-col">
              <Link href={`/posts/${post.id}`} className="p-6 flex-1 space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold line-clamp-2">{post.title}</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  <span>{post.author}</span>
                  <span className="mx-2">•</span>
                  <span>{post.date}</span>
                </div>
              </Link>
            </Card>
          ))}
        </div>
      </section>  

      {/* Social Media Section */}
      <section className="py-16 px-6 bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl text-center space-y-6">
        <h2 className="text-2xl md:text-3xl font-bold">
          Follow me in Social Media
        </h2>
        <div className="flex justify-center gap-6">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-white dark:bg-gray-800 rounded-full hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              <link.icon className="w-6 h-6" />
              <span className="sr-only">{link.name}</span>
            </a>
          ))}
        </div>
      </section>
    </div>
  )
}
