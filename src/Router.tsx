import { Routes, Route } from 'react-router-dom'

import { DefaultLayout } from './layouts/DefaultLayout'

import { HomePage } from './pages/Home'
import { PostPage } from './pages/Post'
import { NotFoundPage } from './pages/NotFound'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/post/:postId/" element={<PostPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}
