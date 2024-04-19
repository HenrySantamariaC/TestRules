import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import { PrivateRoutes, PublicRoutes } from './router/routes.js'
import AuthGuard from './guards/AuthGuard.jsx';
import AppProvider from './providers/AppProvider.jsx';
import { Answers, Home, Loader, Login, Profile, Question, Test } from './pages';
import { Suspense, lazy } from 'react';
import ReviewAnswers from './pages/ReviewAnswers.jsx';
import Settings from './pages/Settings.jsx';

const Layout = lazy(() => import ('./layouts/Layout'))

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<AppProvider />} >
      <Route path={PublicRoutes.HOME} element={<Layout />} >
        <Route index element={<Home />} />
        <Route path={PublicRoutes.SETTINGS} element={<Settings />} />
        <Route path={PublicRoutes.TEST} element={<Test />} />
        <Route path={PublicRoutes.QUESTION} element={<Question />} />
        <Route path={PublicRoutes.SCORE} element={<Answers />} />
        <Route path={PublicRoutes.REVIEW} element={<ReviewAnswers />} />
        <Route path={PublicRoutes.LOGIN} element={<Login />} />
        <Route path={PublicRoutes.SIGNUP} element={<Answers />} />
        <Route element={<AuthGuard />} >
          <Route path={PrivateRoutes.PROFILE} element={<Profile />} />
        </Route>
      </Route>
    </Route>
  )
)

export default function App() {
  return (
    <Suspense fallback={<Loader/>}>
      <RouterProvider router={router} />
    </Suspense>
  )
}
