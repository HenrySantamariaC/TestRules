import { Suspense, lazy } from 'react';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import { PrivateRoutes, PublicRoutes } from './router/routes.js'

const Loader = lazy(() => import('./pages/Loader.jsx'));
const AppProvider = lazy(() => import('./providers/AppProvider.jsx'));
const Layout = lazy(() => import('./layouts/Layout'))
const Home = lazy(() => import('./pages/Home.jsx'));
const Test = lazy(() => import('./pages/Test.jsx'));
const Question = lazy(() => import('./pages/Question.jsx'));
const Answers = lazy(() => import('./pages/Answers.jsx'));
const ReviewAnswers = lazy(() => import('./pages/ReviewAnswers.jsx'));
const Login = lazy(() => import('./pages/Login.jsx'));
const AuthLoader = lazy(() => import('./pages/AuthLoader.jsx'))
const AuthGuard = lazy(() => import('./guards/AuthGuard.jsx'));
const Settings = lazy(() => import('./pages/Settings.jsx'));
const Profile = lazy(() => import('./pages/Profile.jsx'));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<AppProvider />} >
      <Route path={PublicRoutes.HOME} element={<Layout />} >
        <Route index element={<Home />} />
        <Route path={PublicRoutes.TEST} element={<Test />} />
        <Route path={PublicRoutes.QUESTION} element={<Question />} />
        <Route path={PublicRoutes.SCORE} element={<Answers />} />
        <Route path={PublicRoutes.REVIEW} element={<ReviewAnswers />} />
        <Route path={PublicRoutes.LOGIN} element={<Login />} />
        <Route path={PublicRoutes.AUTH_LOADING} element={<AuthLoader />} />
        <Route path={PublicRoutes.SIGNUP} element={<Answers />} />
        <Route element={<AuthGuard />} >
          <Route path={PrivateRoutes.SETTINGS} element={<Settings />} />
          <Route path={PrivateRoutes.PROFILE} element={<Profile />} />
        </Route>
      </Route>
    </Route>
  )
)

export default function App() {
  return (
    <Suspense fallback={<Loader />}>
      <RouterProvider router={router} />
    </Suspense>
  )
}
