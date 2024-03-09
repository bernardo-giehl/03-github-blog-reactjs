import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'

import { Router } from './Router'
import { PostContextProvider } from './context/PostsContext'
import { ProfileContextProvider } from './context/ProfileContext'

import { GlobalStyle } from './styles/global'
import { themeDefault } from './styles/themes/default'
// import { themeDark } from './styles/themes/dark'

export function App() {
  return (
    <ThemeProvider theme={themeDefault}>
      <PostContextProvider>
        <ProfileContextProvider>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </ProfileContextProvider>
      </PostContextProvider>
      <GlobalStyle />
    </ThemeProvider>
  )
}
