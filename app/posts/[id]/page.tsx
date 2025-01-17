import { notFound } from 'next/navigation'
import { posts } from '@/data/posts'
import { WriterInfo } from '@/components/writer-info'
import { Comments } from '@/components/comments'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { ShareButtons } from '@/components/ShareButtons'
import { TextToSpeech } from '@/components/TextToSpeech'

export default function PostPage({ params }: { params: { id: string } }) {
  const post = posts.find(post => post.id === params.id)
  
  if (!post) {
    notFound()
  }

  return (
    <div className="max-w-4xl mx-auto">
      <Breadcrumbs />
      <article className="space-y-8">
        <WriterInfo author={post.author} date={post.date} />
        
        <div className="prose dark:prose-invert max-w-none">
          <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
          <div className="text-sm text-purple-600 dark:text-purple-400 mb-8">
            {post.category}
          </div>
          {post.imageUrl && (
            <img 
              src={post.imageUrl} 
              alt={post.title}
              className="w-full rounded-lg mb-8 hover-card"
            />
          )}
          <div className="whitespace-pre-wrap leading-relaxed">{post.content}</div>
          <TextToSpeech text={post.content} />
        </div>

        <ShareButtons 
          title={post.title} 
          url={typeof window !== 'undefined' ? window.location.href : ''}
        />

        <hr className="my-12 border-gray-200 dark:border-gray-700" />
        
        <Comments postId={post.id} />
      </article>
    </div>
  )
}

export async function generateStaticParams() {
  return posts.map((post) => ({
    id: post.id,
  }))
}
