import { Outlet } from 'react-router-dom'

import { HeaderComp } from '../../components/Header'

import { LayoutContent, LayoutContainer } from './styles'

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <HeaderComp />
      <LayoutContent>
        <Outlet />
      </LayoutContent>
    </LayoutContainer>
  )
}
