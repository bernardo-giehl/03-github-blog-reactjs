import Markdown from 'react-markdown'
import { format, formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

import { PostType } from '../../context/PostsContext'

import { PostCard, PostTitle, PostDescription } from './styles'

interface postProps {
  post: PostType
}

export function PostComp({ post }: postProps) {
  let body = post.body
  if (!body) {
    body = ' '
  } else if (body.length > 200) {
    body = post.body.substring(0, 200) + '...'
  }

  return (
    <PostCard to={'/post/' + post.id} title="Voltar">
      <PostTitle>
        <h3>
          <Markdown>{post.title}</Markdown>
        </h3>
        <time
          title={format(
            post.created_at,
            "d 'de' LLLL 'de' yyyy 'às' HH:mm'h'",
            {
              locale: ptBR,
            },
          )}
          dateTime={format(post.created_at, 'dd/MM/yyyy HH:mm', {
            locale: ptBR,
          })}
        >
          {formatDistanceToNow(post.created_at, {
            locale: ptBR,
            addSuffix: true,
          })}
        </time>
      </PostTitle>
      <PostDescription>
        <Markdown>{body}</Markdown>
      </PostDescription>
    </PostCard>
  )
}
