import React, { createContext, useContext, useState } from 'react'
import { fetchQuestions } from '../services/questionsBiic.service'
import toast from 'react-hot-toast'

const questionContext = createContext()

export default function QuestionProvider(props) {
    const { children } = props

    const [questions, setQuestions] = useState([])
    const [answers, setAnswers] = useState([])
    const [current, setCurrent] = useState({})

    const getQuestionList = async (licenseCode) => {
        try {
            let data = await fetchQuestions(licenseCode)
            setQuestions(data)
            setAnswers(data.map(() => ({})))
            setCurrent({position: 0, question: data[0]})
        } catch (error) {
            toast.error(error.message)
        }
    }

    const nextQuestion = () => {
        if (current.position < questions?.length - 1) {
            setCurrent((prev) => {
                return { position: prev.position + 1, question: questions[prev.position + 1] }
            })
        }
    }

    const registerAnswer = (position, answer) => {
        let data = answers
        data[position] = answer
        setAnswers(data)
    }
   
    const getCorrectAnswers = () => questions?.reduce((acc, item, index, arr) => {
        return item.RESPUESTA === answers[index].value ? acc + 1 : acc
    }, 0)

    const dataProvider = {
        questions,
        current,
        answers,
        getQuestionList,
        nextQuestion,
        registerAnswer,
        getCorrectAnswers,
    }

    return (
        <questionContext.Provider value={dataProvider}>
            {children}
        </questionContext.Provider>
    )
}

export function useQuestionContext() {
    return useContext(questionContext)
}
