import { Link } from 'react-router-dom'

import effectLeft from '../../assets/effectLeft.svg'
import effectRight from '../../assets/effectRight.svg'
import logoDefault from '../../assets/logoDefault.svg'
// import logoDark from '../../assets/logoDark.svg'

import { HeaderContainer, HeaderContent } from './styles'

export function HeaderComp() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={effectLeft} alt="" />
        <Link to="/" title="Voltar a pagina inicial">
          <img src={logoDefault} alt="" />
        </Link>
        <img src={effectRight} alt="" />
      </HeaderContent>
    </HeaderContainer>
  )
}
