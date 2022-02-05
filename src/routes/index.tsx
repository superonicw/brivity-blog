import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AuthLayout, MainLayout } from 'containers/layouts'
import { SignIn, SignUp, Posts, Post, NotFound } from 'containers/pages'
import { withAuth } from './withAuth'

const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path="login" element={withAuth(<SignIn />, false)} />
        <Route path="register" element={withAuth(<SignUp />, false)} />
      </Route>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Posts />} />
        <Route path="post/:postId" element={<Post />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
)

export default AppRoutes
