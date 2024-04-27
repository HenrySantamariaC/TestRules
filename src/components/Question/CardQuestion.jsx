import React, { useEffect } from 'react'
import { useState } from 'react'
import RadioOption from './RadioOption'
import { useQuestionContext } from '../../providers/QuestionProvider'
import { useNavigate } from 'react-router-dom'
import { PublicRoutes } from '../../router/routes'
import { useTestContext } from '../../providers/TestProvider'

export default function CardQuestion(props) {
    const { current, position, endTest, handleNextQuestion } = props
    const { registerAnswer, getCorrectAnswers } = useQuestionContext()
    const { updateScore } = useTestContext()
    const [selectedOption, setSelectedOption] = useState('')
    const navigate = useNavigate()

    const handleSelectedOption = (e) => {
        let answer = current.OPCIONES.find(({ value }) => (value === e.target.value))
        setSelectedOption(e.target.value)
        registerAnswer(position, answer)
    }

    const handleFinishTest = () => {
        const score = getCorrectAnswers()
        updateScore(score)
        navigate(PublicRoutes.SCORE)
    }

    useEffect(() => {
        return () => {
            setSelectedOption('')
        }
    }, [current])


    return (
        <div className="w-full">
            <h4 className="text-lg">{current?.PREGUNTA}</h4>
            { current?.IMAGEN && <img className="mx-auto" src={`https://sierdgtt.mtc.gob.pe${current.IMAGEN}`} alt={current.IMAGEN} /> }
            <ul className="my-6 space-y-3">
                {
                    current?.OPCIONES?.map((item, index) => (
                        (item.description !== '')
                        && <RadioOption
                            option={item}
                            selected={selectedOption}
                            key={index}
                            handdleSelectedOption={handleSelectedOption}
                        />
                    ))
                }
            </ul>
            {
                endTest ?
                    (
                        <button
                            className={`block w-full rounded-xl border border-ui-accent bg-ui-accent py-3 text-center text-slate-50
                                 active:text-ui-primary`}
                            disabled={(selectedOption === '')}
                            onClick={handleFinishTest}
                        >
                            Finalizar evaluación
                        </button>
                    ) :
                    (
                        <button
                            className={`block w-full rounded-xl border border-ui-primary bg-ui-primary py-3 text-center text-slate-50 
                                active:opacity-80`}
                            disabled={(selectedOption === '')}
                            onClick={handleNextQuestion}
                        >
                            Siguiente
                        </button>
                    )
            }
        </div>
    )
}
