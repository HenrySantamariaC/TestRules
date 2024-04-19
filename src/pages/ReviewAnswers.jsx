import { Link, useNavigate } from "react-router-dom"
import { useQuestionContext } from "../providers/QuestionProvider"
import { useEffect } from "react"
import AnswersItem from "../components/Answers/AnswersItem"
import { PublicRoutes } from "../router/routes"
import ScreenLayout from "../layouts/ScreenLayout"
import HeaderScreen from "../components/General/HeaderScreen"

export default function ReviewAnswers() {
    const { questions, answers } = useQuestionContext()
    const navigate = useNavigate()

    useEffect(() => {
        (questions.length === 0) && navigate('/')
    }, [])

    return (
        <ScreenLayout>
            <HeaderScreen title='Revisión de las respuestas' />
            <ul className="shrink space-y-4">
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
        </ScreenLayout>
    )
}