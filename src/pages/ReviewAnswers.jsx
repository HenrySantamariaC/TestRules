import { Link, useNavigate } from "react-router-dom"
import { useQuestionContext } from "../providers/QuestionProvider"
import { useEffect } from "react"
import AnswersItem from "../components/Answers/AnswersItem"
import { PublicRoutes } from "../router/routes"

export default function ReviewAnswers() {
    const { questions, answers } = useQuestionContext()
    const navigate = useNavigate()

    useEffect(() => {
        (answers.length === 0) && navigate('/')
    }, [])

  return (
    <div className="w-full p-4">
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
                className="block mb-4 rounded-xl border border-ui-primary bg-ui-primary py-3 text-center text-ui-secondary 
                hover:bg-ui-primary/70 focus:outline-none focus:ring active:text-ui-primary"
                to={PublicRoutes.HOME}
            >
                Ir a Inicio
            </Link>
        </div>
  )
}