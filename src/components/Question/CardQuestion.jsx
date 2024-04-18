import React, { useEffect } from 'react'
import { useState } from 'react'
import RadioOption from './RadioOption'
import { useQuestionContext } from '../../providers/QuestionProvider'
import { useNavigate } from 'react-router-dom'

export default function CardQuestion(props) {
    const { current, position, endTest, handdleNextQuestion } = props
    const {registerAnswer} = useQuestionContext()
    const [selectedOption, setSelectedOption] = useState('')
    const navigate = useNavigate()

    const handdleSelectedOption = (e) => {
        let answer = current.OPCIONES.find(({value}) => (value === e.target.value))
        setSelectedOption(e.target.value)
        registerAnswer(position, answer)
    }

    const handdleFinishTest = () => {
        navigate('/review-answers')
    }

    useEffect(() => {
        return () => {
            setSelectedOption('')
        }
    }, [current])


    return (
        <div className="w-full">
            <h4 className="text-lg">{current?.PREGUNTA}</h4>
            <ul className="my-6 space-y-3">
                {
                    current?.OPCIONES?.map((item, index) => (
                        (item.description !== '') 
                        &&  <RadioOption 
                                option={item} 
                                selected={selectedOption} 
                                key={index} 
                                handdleSelectedOption={handdleSelectedOption} 
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
                            onClick={handdleFinishTest}
                        >
                            Finalizar evaluación
                        </button>
                    ) :
                    (
                        <button
                            className={`block w-full rounded-xl border border-ui-primary bg-ui-primary py-3 text-center text-slate-50 
                                active:opacity-80`}
                            disabled={(selectedOption === '')}
                            onClick={handdleNextQuestion}
                        >
                            Siguiente
                        </button>
                    )
            }
        </div>
    )
}
