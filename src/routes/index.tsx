import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AuthLayout, MainLayout } from 'containers/layouts'
import { SignIn, SignUp, Dashboard, NotFound } from 'containers/pages'

const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path="login" element={<SignIn />} />
        <Route path="register" element={<SignUp />} />
      </Route>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Dashboard />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
)

export default AppRoutes
