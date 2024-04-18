import React, { useEffect, useState } from 'react'
import { useQuestionContext } from '../providers/QuestionProvider'
import { Link, useNavigate } from 'react-router-dom'
import SuccessResult from '../components/Answers/SuccessResult'
import { Xmark } from 'iconoir-react'
import { PublicRoutes } from '../router/routes'
import FailedResult from '../components/Answers/FailedResult'
import { useTestContext } from '../providers/TestProvider'

export default function Answers() {
    const [correctAnswers, setCorrectAnswers] = useState(0)
    const { questions, answers } = useQuestionContext()
    const { test, selectedTest, changeSelectedTest, getTestList } = useTestContext()

    const navigate = useNavigate()
    const countCorrectAnswers = () => questions?.reduce((acc, item, index) => {
        return item.RESPUESTA === answers[index] ? acc + 1 : acc
    }, 0)

    useEffect(() => {
        // (answers.length === 0) && navigate('/')
        setCorrectAnswers(countCorrectAnswers())
    }, [])


    return (
        <div className='min-h-dvh p-4 flex flex-col justify-between'>
            <div className='flex justify-between items-center'>
                <Link to={PublicRoutes.HOME} className='p-1 bg-ui-neutral-400 rounded-md border border-ui-neutral-200' >
                    <Xmark className='w-8' />
                </Link>
                <span className='sr-only'>Simulacro finalizado</span>
                {correctAnswers}
            </div>
            {
                (correctAnswers >= selectedTest?.minAprobar)
                    ? <SuccessResult correctAnswers={correctAnswers} totalQuestions={questions?.length} />
                    : <FailedResult correctAnswers={correctAnswers} totalQuestions={questions?.length} />
            }
            <div className='space-y-4'>
                <Link
                    to={PublicRoutes.REVIEW}
                    className="block w-full px-4 py-2 bg-ui-primary hover:bg-ui-primary/70 active:bg-ui-primary text-center rounded-md duration-150"
                >
                    Revisa tus respuestas
                </Link>
                <button
                    className="w-full px-4 py-2 border border-ui-neutral-200 rounded-md bg-ui-neutral-400 hover:bg-ui-neutral-200 duration-150 active:bg-ui-neutral-400"
                >
                    Ir al inicio
                </button>
            </div>
        </div>
    )
}
