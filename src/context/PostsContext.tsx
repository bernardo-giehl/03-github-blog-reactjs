import { ReactNode, createContext, useEffect, useState } from 'react'

import { api } from '../lib/axios'

export interface PostType {
  html_url: string
  id: number
  title: string
  user: {
    login: string
    avatar_url: string
    html_url: string
  }
  comments: number
  created_at: Date
  body: string
}

interface PostContextType {
  posts: PostType[]
  fetchPosts: (query?: string) => Promise<void>
}

interface PostContextProviderProps {
  children: ReactNode
}

export const PostContext = createContext({} as PostContextType)

export function PostContextProvider({ children }: PostContextProviderProps) {
  const [posts, setPosts] = useState<PostType[]>([])

  async function fetchPosts(query?: string) {
    let q = ' repo:bernardo-giehl/03-github-blog-reactjs'
    if (query) {
      q = query.concat(' in:title,body', q)
    }

    const response = await api.get('search/issues', {
      params: { q },
    })

    setPosts(response.data.items)
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  return (
    <PostContext.Provider value={{ posts, fetchPosts }}>
      {children}
    </PostContext.Provider>
  )
}
