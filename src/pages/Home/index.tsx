import { useContext } from 'react'

import { PostContext } from '../../context/PostsContext'

import { PostComp } from '../../components/Post'
import { ProfileComp } from '../../components/Profile'
import { SearchComp } from '../../components/Search'

import { HomeBlog, PostsListContainer } from './styles'

export function HomePage() {
  const { posts } = useContext(PostContext)

  return (
    <HomeBlog>
      <ProfileComp />
      <SearchComp />
      <PostsListContainer>
        {posts.map((post) => (
          <PostComp key={post.id} post={post} />
        ))}
      </PostsListContainer>
    </HomeBlog>
  )
}
