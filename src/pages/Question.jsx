import React, { useEffect, useState } from 'react'
import CardQuestion from '../components/Question/CardQuestion'
import ProgressQuestions from '../components/Question/ProgressQuestions'
import { useQuestionContext } from '../providers/QuestionProvider'

export default function Question() {
    const {questions, current, getQuestionList, nextQuestion} = useQuestionContext()
    const [endTest, setEndTest] = useState(false)

    const handdleNextQuestion = () => {
        setEndTest((questions?.length - 1) === (current.position + 1))
        nextQuestion()
    }

    useEffect(() => {
        getQuestionList()
    }, [])

    return (
        <div className='px-4'>
            <ProgressQuestions currentProgress={current.position} totalQuestions={questions?.length} />
            <CardQuestion 
                current={current.question} 
                position={current.position} 
                endTest={endTest} 
                handdleNextQuestion={handdleNextQuestion}
            />
        </div>
    )
}
