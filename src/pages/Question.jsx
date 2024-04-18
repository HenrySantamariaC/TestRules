import React, { useEffect, useState } from 'react'
import CardQuestion from '../components/Question/CardQuestion'
import ProgressQuestions from '../components/Question/ProgressQuestions'
import { useQuestionContext } from '../providers/QuestionProvider'
import { useNavigate } from 'react-router-dom'
import Timer from '../hooks/Timer'
import { GraduationCap } from 'iconoir-react'
import BackRouteButton from '../components/General/BackRouteButton'

export default function Question() {
    const { questions, current, nextQuestion } = useQuestionContext()
    const [endTest, setEndTest] = useState(false)
    const navigate = useNavigate()

    const handdleNextQuestion = () => {
        setEndTest((questions?.length - 1) === (current.position + 1))
        nextQuestion()
    }

    useEffect(() => {
        (questions.length === 0) && navigate('/')
    }, [])

    return (
        <div className='p-4'>
            {/* <ProgressQuestions currentProgress={current.position} totalQuestions={questions?.length} /> */}
            <div className='flex items-center justify-between'>
                <BackRouteButton label='Atrás' />
                <Timer />
            </div>
            <div className='px-4'>
                <div className='flex gap-2 my-8 items-end text-xl font-bold'>
                    <GraduationCap className='w-8 h-8' />
                    <span>
                        Pregunta {current.position + 1}
                    </span>
                </div>
                <CardQuestion
                    current={current.question}
                    position={current.position}
                    endTest={endTest}
                    handdleNextQuestion={handdleNextQuestion}
                />
            </div>
        </div>
    )
}
