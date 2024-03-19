import React, { useEffect } from 'react'
import { useQuestionContext } from '../providers/QuestionProvider'
import AnswersItem from '../components/Answers/AnswersItem'
import { Link, useNavigate } from 'react-router-dom'

export default function Answers() {
    const { questions, answers } = useQuestionContext()
    const navigate = useNavigate()

    useEffect(() => {
        (answers.length === 0) && navigate('/')
    }, [])


    return (
        <div className="w-full">
            <div className='flex justify-between items-center my-4'>
                <h4 className='text-3xl font-bold'>Revisión de las respuestas</h4>
            </div>
            <ul className="my-6 space-y-3">
                {
                    questions.map((item, index) => (
                        <AnswersItem question={item} answer={answers[index]} num={index} key={index} />
                    ))
                }
            </ul>
            <Link
                className="block rounded-xl border border-ui-colors-primary bg-ui-colors-primary py-3 text-center text-slate-50 
                hover:bg-transparent hover:text-ui-colors-primary focus:outline-none focus:ring active:text-ui-colors-primary"
                to={'/'}
            >
                Ir a Inicio
            </Link>
        </div>
    )
}
