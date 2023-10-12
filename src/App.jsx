import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLanding from './components/landing/MainLanding';

/** import all components */
import Username from './components/login/components/Username';
import Password from './components/login/components/Password';
import Register from './components/login/components/Register';
import Profile from './components/login/components/Profile';
import Recovery from './components/login/components/Recovery';
import Reset from './components/login/components/Reset';
import PageNotFound from './components/login/components/PageNotFound';

/** auth middleware */
import { AuthorizeUser, ProtectRoute } from './components/login/middleware/auth'

/** root routes */
const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLanding></MainLanding>
  },
  {
    path: '/username',
    element: <Username></Username>
  },
  {
    path: '/register',
    element: <Register></Register>
  },
  {
    path: '/password',
    element: <ProtectRoute><Password /></ProtectRoute>
  },
  {
    path: '/profile',
    element: <AuthorizeUser><Profile /></AuthorizeUser>
  },
  {
    path: '/recovery',
    element: <Recovery></Recovery>
  },
  {
    path: '/reset',
    element: <Reset></Reset>
  },
  {
    path: '*',
    element: <PageNotFound></PageNotFound>
  },
])

function App() {
  return (
    <>
      <main>
        <RouterProvider router={router}></RouterProvider>
      </main>
    </>
  )
}

export default App;
