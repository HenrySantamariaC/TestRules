import React, { useEffect, useState } from 'react'
import CardQuestion from '../components/Question/CardQuestion'
import { useQuestionContext } from '../providers/QuestionProvider'
import { useNavigate } from 'react-router-dom'
import Timer from '../components/Question/Timer'
import { GraduationCap } from 'iconoir-react'
import ScreenLayout from '../layouts/ScreenLayout'
import HeaderScreen from '../components/General/HeaderScreen'

export default function Question() {
    const { questions, current, nextQuestion } = useQuestionContext()
    const [endTest, setEndTest] = useState(false)
    const navigate = useNavigate()

    const handleNextQuestion = () => {
        setEndTest((questions?.length - 1) === (current.position + 1))
        nextQuestion()
    }

    useEffect(() => {
        (questions.length === 0) && navigate('/')
    }, [])

    return (
        <ScreenLayout>
            <HeaderScreen>
                <Timer />
            </HeaderScreen>
            <div className='px-4'>
                <div className='flex gap-4 my-4 items-end text-xl font-bold'>
                    <GraduationCap className='w-8 h-8' />
                    <span>
                        Pregunta {current.position + 1}
                    </span>
                </div>
                <CardQuestion
                    current={current.question}
                    position={current.position}
                    endTest={endTest}
                    handleNextQuestion={handleNextQuestion}
                />
            </div>
        </ScreenLayout>
    )
}
