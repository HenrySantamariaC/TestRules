import React from 'react'

export default function AnswersItem(props) {
    const { question, answer, num } = props

    const isAnswerCorrect = (answer.value == question.RESPUESTA)

    const correctAnswer = (question.OPCIONES.find(({ value }) => (value === question.RESPUESTA)))

    return (
        <div className="w-full bg-ui-colors-neutral p-4 rounded-xl">
            <h4 className="font-bold">{(num + 1).toString().padStart(2, '0') + '.'} {question?.PREGUNTA}</h4>
            <div className="my-6 space-y-3">
                <ul>
                    {
                        question?.OPCIONES?.map((item, index) => (
                            <li className='text-slate-400' key={index}>
                                <span className={item.value === answer.value ? "line-through" : ""}>{item.description}</span>
                            </li>
                        ))
                    }
                </ul>
                {
                    (answer.value) &&
                    <>
                        <h3 className='font-bold'>{isAnswerCorrect ? 'Respuesta correcta. ¡Excelente!' : 'Tu respuesta fue:'}</h3>
                        <div role="alert" className={`rounded-xl border-s-4 p-2 ${isAnswerCorrect ? "border-green-600 bg-green-600/30" : "border-red-600 bg-red-600/30"}`}>
                            <span className="mt-2 text-sm">
                                {answer.description}
                            </span>
                        </div>
                    </>
                }
                {
                    (!isAnswerCorrect) &&
                    <>
                        <h3 className='font-bold'>La respuesta correcta es:</h3>
                        <div role="alert" className="rounded-xl border-s-4 p-2 border-green-600 bg-green-600/30">
                            <span className="mt-2 text-sm">
                                {correctAnswer.description}
                            </span>
                        </div>
                    </>
                }
                {
                    (question.FUNDAMENTO !== '') &&
                    <>
                        <h3 className='font-bold'>Fundamentación</h3>
                        <div role="alert" className="rounded-xl border-s-4 p-2 border-blue-600 bg-blue-600/30">
                            <span className="mt-2 text-sm">
                                {question.FUNDAMENTO}
                            </span>
                        </div>
                    </>
                }
            </div>
        </div>
    )
}
