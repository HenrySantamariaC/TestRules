import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import useTests from '../hooks/useTests'
import useSelectQuestions from '../hooks/useSelectQuestions'
import RadioOption from '../components/Question/RadioOption'

export default function Question() {
    const { testId } = useParams()
    const { test, getTestById } = useTests()
    const { questions, selectRandomQuestions } = useSelectQuestions()
    const [response, setResponse] = useState('')
    const [options, setOptions] = useState()
    const [ruta, setRuta] = useState({ current: 0, next: 1 })
    const [current, setCurrent] = useState({})
    const [endTest, setEndTest] = useState(false)

    const handdleOption = (e) => {
        setResponse(e.target.value)
    }

    const handdleNextQuestion = () => {
        let temp = { current: 0, next: 1 }

        if (questions.length > ruta.next) {
            temp.current = ruta.next
            temp.next = ruta.next + 1
            setResponse('')
            setRuta(temp)
        }
        if (questions.length - 1 === ruta.next) {
            setEndTest(true)
        }
    }

    useEffect(() => {
        setOptions([
            { description: current?.a, value: 'a' },
            { description: current?.b, value: 'b' },
            { description: current?.c, value: 'c' },
            { description: current?.d, value: 'd' },
        ])
    }, [current])

    useEffect(() => {
        setCurrent(questions[ruta.current])
    }, [questions, ruta])

    useEffect(() => {
        getTestById(testId)
        selectRandomQuestions();
    }, [])

    return (
        <div className='px-4'>
            <div className='my-4'>
                <span id="ProgressLabel" className="sr-only">Loading</span>
                <span
                    role="progressbar"
                    aria-labelledby="ProgressLabel"
                    aria-valuenow="75"
                    className="block rounded-full bg-slate-50"
                >
                    <span className="block h-3 rounded-full bg-ui-colors-primary" style={{ width: `${((ruta.current + 1) / 40) * 100}%` }}></span>
                </span>
                <span className='block text-center mt-2 text-ui-colors-primary'>{ruta.current + 1}/40</span>
            </div>
            <div className="w-full">
                <h4 className="text-lg text-center">{current?.PREGUNTA}</h4>
                <ul className="my-6 space-y-3">
                    {
                        options?.map((item, index) => ( 
                            item.description !== '' 
                            ? <RadioOption option={item.description} value={item.value} response={response} key={index} handdleOption={handdleOption} />
                            : ''
                        ))
                    }
                </ul>
                {
                    endTest ?
                        (
                            <button
                                className={`block w-full rounded-xl border border-ui-colors-primary bg-ui-colors-primary py-3 text-center text-slate-50
                                 active:text-ui-colors-primary`}
                                disabled={(response === '')}
                            >
                                Finalizar evaluación
                            </button>
                        ) :
                        (
                            <button
                                className={`block w-full rounded-xl border border-ui-colors-primary bg-ui-colors-primary py-3 text-center text-slate-50 
                                active:opacity-80`}
                                disabled={(response === '')}
                                onClick={handdleNextQuestion}
                            >
                                Siguiente
                            </button>
                        )
                }
            </div>
        </div>
    )
}
