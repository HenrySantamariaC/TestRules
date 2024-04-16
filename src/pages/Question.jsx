import React, { useEffect, useState } from 'react'
import CardQuestion from '../components/Question/CardQuestion'
import ProgressQuestions from '../components/Question/ProgressQuestions'
import { useQuestionContext } from '../providers/QuestionProvider'
import { useNavigate } from 'react-router-dom'
import Timer from '../hooks/Timer'

export default function Question() {
    const {questions, current, nextQuestion} = useQuestionContext()
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
        <div className='px-4'>
            <ProgressQuestions currentProgress={current.position} totalQuestions={questions?.length} />
            <Timer/>
            <CardQuestion 
                current={current.question} 
                position={current.position} 
                endTest={endTest} 
                handdleNextQuestion={handdleNextQuestion}
            />
        </div>
    )
}
