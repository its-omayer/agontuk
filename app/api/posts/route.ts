import { NextResponse } from 'next/server'
import fs from 'fs/promises'
import path from 'path'

export async function POST(req: Request) {
  try {
    const post = await req.json()
    const posts = await getPosts()
    post.id = Date.now().toString()
    posts.unshift(post)
    await savePosts(posts)
    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create post' }, { status: 500 })
  }
}

async function getPosts() {
  try {
    const filePath = path.join(process.cwd(), 'data', 'posts.json')
    const data = await fs.readFile(filePath, 'utf8')
    return JSON.parse(data)
  } catch {
    return []
  }
}

async function savePosts(posts: any[]) {
  const filePath = path.join(process.cwd(), 'data', 'posts.json')
  await fs.writeFile(filePath, JSON.stringify(posts, null, 2))
}
