import React from 'react'

import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import { PATHROUTES } from './router/routes.js'
import Layout from './layouts/Layout';
import Home from './pages/Home';
import Test from './pages/Test.jsx';
import Question from './pages/Question.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={PATHROUTES.HOME} element={<Layout />} >
      <Route index element={<Home />} />
      <Route path={PATHROUTES.TEST} element={<Test />} />
      <Route path={PATHROUTES.QUESTION} element={<Question />} />
    </Route>
  )
)


export default function App() {
  return (
    <RouterProvider router={router} />
  )
}
