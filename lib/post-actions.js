'use server'

import { revalidatePath } from 'next/cache';
import { dbConnect } from '@/lib/mongodb';

export async function getPosts() {
  await dbConnect();
  const posts = await // TODO: Implement database operations;
  return JSON.parse(JSON.stringify(posts));;
}

export async function createPost(formData) {
  await dbConnect();
  const post = await // TODO: Implement database operations;
  revalidatePath('/admin');
  return JSON.parse(JSON.stringify(post));;
}

export async function updatePost(id, formData) {
  await dbConnect();
  const post = await // TODO: Implement database operations;
  revalidatePath('/admin');
  return JSON.parse(JSON.stringify(post));;
}

export async function deletePost(id) {
  await dbConnect();
  await // TODO: Implement database operations;
  revalidatePath('/admin');
}
