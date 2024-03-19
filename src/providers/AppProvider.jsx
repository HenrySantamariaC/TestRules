import React, { createContext, useContext, useState } from 'react'
import TestProvider from './TestProvider'
import QuestionProvider from './QuestionProvider'

export function AppProvider(props) {
  const { children } = props

  return (
    <TestProvider>
      <QuestionProvider>
        {children}
      </QuestionProvider>
    </TestProvider>
  )
}