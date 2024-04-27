import React, { useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { PublicRoutes, replaceParam } from './../router/routes.js'
import { useTestContext } from '../providers/TestProvider.jsx'
import { useQuestionContext } from '../providers/QuestionProvider.jsx'
import QuestionSlide from '../assets/PNG/question-slide.png'
import ScreenLayout from '../layouts/ScreenLayout.jsx'
import HeaderScreen from '../components/General/HeaderScreen.jsx'

export default function Test() {
    const { code } = useParams()
    const navigate = useNavigate()
    const { test, selectedTest, changeSelectedTest, getTestList } = useTestContext()
    const { getQuestionList } = useQuestionContext()

    const loadDataTest = async () => {
        (test.length === 0) && navigate('/')
        await changeSelectedTest(code)
        await getQuestionList(code)
    }

    useEffect(() => {
        loadDataTest()
    }, [])


    return (
        <ScreenLayout>
            <HeaderScreen>
                <div className='flex gap-2'>
                    <span className="whitespace-nowrap rounded-full border-2 font-bold border-ui-primary px-2.5 py-0.5 text-sm text-ui-primary">
                        Simulacro
                    </span>
                    <span className="whitespace-nowrap rounded-full bg-ui-primary px-2.5 py-0.5 text-sm text-slate-50">
                        Licencia {selectedTest?.clase} {selectedTest?.categoria}
                    </span>
                </div>
            </HeaderScreen>
            <img src={QuestionSlide} alt="Quizzly slider" className='rounded-md' />
            <h2 className='text-lg font-bold'>Evaluación {selectedTest?.clase} {selectedTest?.categoria}</h2>
            <div className='grid grid-cols-2 divide-x divide-ui-neutral-200 border-y border-spacing-1 py-1 mxau border-ui-neutral-200'>
                <span className='flex flex-col items-center bg-ui-neutral-600 p-1'>
                    <span className='text-sm font-bold'>{selectedTest?.totalPreguntas}</span>
                    <span className='text-xs text-ui-neutral-100'>Preguntas</span>
                </span>
                <span className='flex flex-col items-center bg-ui-neutral-600 p-1'>
                    <span className='text-sm font-bold'>{selectedTest?.duracion}</span>
                    <span className='text-xs text-ui-neutral-100'>Minutos</span>
                </span>
            </div>
            <div className='flex flex-col gap-2'>
                <h3 className='text-base font-bold'>Descripción</h3>
                <p>El examen contiene {selectedTest?.totalPreguntas} preguntas y tiene una duración de {selectedTest?.duracion} minutos. Para su aprobación, el postulante deberá acertar por lo menos {selectedTest?.minAprobar} respuestas de las {selectedTest?.totalPreguntas} preguntas. </p>
                <p>Los componentes de este examen son temas de: Obligaciones del Conductor en materia de tránsito, Inspección Técnica Vehicular, Reglamento Nacional de Vehículos, Reglamento Nacional de Responsabilidad Civil y Seguros Obligatorios de Accidentes de Tránsito, Reglamento de Placa Única Nacional de Rodaje y Primeros Auxilios, en caso de accidentes de tránsito.</p>
                <p>Finalizada la prueba, usted tendrá acceso a la revision de todas las respuestas correctas para que identifique los temas que le falta reforzar, con miras a estar aptos para el examen de Licencia de Conducir.</p>
            </div>
            <Link
                className="block rounded-xl border border-ui-primary bg-ui-primary py-3 text-center text-slate-50 
                hover:bg-transparent hover:text-ui-primary focus:outline-none focus:ring active:text-ui-primary"
                to={replaceParam(PublicRoutes.QUESTION, ':testId', selectedTest?.id)}
            >
                Iniciar
            </Link>
        </ScreenLayout>
    )
}
