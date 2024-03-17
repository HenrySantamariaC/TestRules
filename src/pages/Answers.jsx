import React from 'react'
import { useQuestionContext } from '../providers/QuestionProvider'
import AnswersItem from '../components/Answers/AnswersItem'
import { Link } from 'react-router-dom'

export default function Answers() {
    const {questions, answers} = useQuestionContext()

    return (
        <div className="w-full">
            <h4 className="text-2xl text-center font-bold">Revisión de las respuestas</h4>
            <ul className="my-6 space-y-3">
                {
                    questions.map((item, index) => (
                        <AnswersItem question={item} answer={answers[index]} key={index}/>
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
