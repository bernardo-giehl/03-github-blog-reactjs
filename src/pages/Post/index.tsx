import { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import { format, formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import {
  ArrowSquareOut,
  CalendarBlank,
  CaretLeft,
  ChatCircle,
  GithubLogo,
} from 'phosphor-react'

import { PostContext } from '../../context/PostsContext'

import {
  PostBlog,
  PostCard,
  PostNavegation,
  PostTitle,
  PostInfo,
  PostDetails,
} from './styles'

export function PostPage() {
  const { postId } = useParams()
  const { posts } = useContext(PostContext)

  const postInfo = posts.find((post) => post.id === Number(postId))

  if (!postInfo?.id) {
    return (
      <PostBlog>
        <PostCard>
          <PostNavegation>
            <Link to="/" title="Voltar">
              <CaretLeft size={14} weight="bold" /> <span>Voltar</span>
            </Link>
          </PostNavegation>
          <PostTitle>Publicação não encontrada</PostTitle>
        </PostCard>
      </PostBlog>
    )
  }

  return (
    <PostBlog>
      <PostCard>
        <PostNavegation>
          <Link to="/" title="Voltar">
            <CaretLeft size={14} weight="bold" /> <span>Voltar</span>
          </Link>
          <Link to={postInfo.html_url} title="Ver github">
            <span>Ver no Github</span>{' '}
            <ArrowSquareOut size={14} weight="bold" />
          </Link>
        </PostNavegation>
        <PostTitle>{postInfo.title}</PostTitle>
        <PostInfo>
          <span>
            <GithubLogo size={16} weight="fill" /> {postInfo.user.login}
          </span>
          <span>
            <CalendarBlank size={18} weight="fill" />
            <time
              title={format(
                postInfo.created_at,
                "d 'de' LLLL 'de' yyyy 'às' HH:mm'h'",
                {
                  locale: ptBR,
                },
              )}
              dateTime={format(postInfo.created_at, 'dd/MM/yyyy HH:mm', {
                locale: ptBR,
              })}
            >
              {formatDistanceToNow(postInfo.created_at, {
                locale: ptBR,
                addSuffix: true,
              })}
            </time>
          </span>
          <span>
            <ChatCircle size={18} weight="fill" /> {postInfo.comments}{' '}
            comentários
          </span>
        </PostInfo>
      </PostCard>
      <PostDetails>
        <Markdown remarkPlugins={[remarkGfm]}>{postInfo.body}</Markdown>
      </PostDetails>
    </PostBlog>
  )
}
