import React, { createContext, useContext, useState } from 'react'
import TestProvider from './TestProvider'
import QuestionProvider from './QuestionProvider'

const testContext = createContext()
const questionsContext = createContext()
const answersContext = createContext()

export function AppProvider(props) {
  const { children } = props
  const [questions, setQuestions] = useState()
  const [answers, setAnswers] = useState()

  return (
    <TestProvider>
      <QuestionProvider>
        <answersContext.Provider value={answers}>
          {children}
        </answersContext.Provider>
      </QuestionProvider>
    </TestProvider>
  )
}