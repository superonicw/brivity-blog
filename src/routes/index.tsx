import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AuthLayout, MainLayout } from 'containers/layouts'
import { SignIn, SignUp, Dashboard, NotFound } from 'containers/pages'
import { withAuth } from './withAuth'

const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path="login" element={withAuth(<SignIn />, false)} />
        <Route path="register" element={withAuth(<SignUp />, false)} />
      </Route>
      <Route path="/" element={<MainLayout />}>
        <Route index element={withAuth(<Dashboard />, true)} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
)

export default AppRoutes
