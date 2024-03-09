import { Link } from 'react-router-dom'
import { CaretLeft } from 'phosphor-react'

import {
  NotFoundContent,
  NotFoundContentCard,
  NotFoundNavegation,
  NotFoundTitle,
} from './styles'

export function NotFoundPage() {
  return (
    <NotFoundContent>
      <NotFoundContentCard>
        <NotFoundNavegation>
          <Link to="/" title="Voltar">
            <CaretLeft size={14} weight="bold" /> <span>Voltar</span>
          </Link>
        </NotFoundNavegation>
        <NotFoundTitle>Pagina não encontrada (404)</NotFoundTitle>
      </NotFoundContentCard>
    </NotFoundContent>
  )
}
