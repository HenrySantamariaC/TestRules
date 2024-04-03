import TestProvider from './TestProvider'
import QuestionProvider from './QuestionProvider'
import AuthProvider from './AuthProvider'
import { Outlet } from 'react-router-dom'

export default function AppProvider() {
  return (
    <AuthProvider>
      <TestProvider>
        <QuestionProvider>
          <Outlet />
        </QuestionProvider>
      </TestProvider>
    </AuthProvider>
  )
}