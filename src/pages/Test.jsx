import React, { useEffect, useState } from 'react'
import { TimerSolid } from 'iconoir-react'
import { Link, useParams } from 'react-router-dom'
import { PATHROUTES, replaceParam } from './../router/routes.js'
import BackRouteButton from '../components/General/BackRouteButton'
import { useTestContext } from '../providers/TestProvider.jsx'

export default function Test() {
    const { id } = useParams()
    const {selectedTest, changeSelectedTest} = useTestContext()

    useEffect(() => {
        changeSelectedTest(id)
    }, [])


    return (
        <div>
            <div className='flex flex-col gap-4 my-4'>
                <div className='flex justify-between items-center'>
                    <div className='flex gap-2'>
                        <span className="whitespace-nowrap rounded-full border-2 font-bold border-ui-colors-primary px-2.5 py-0.5 text-sm text-ui-colors-primary">
                            Simulacro
                        </span>
                        <span className="whitespace-nowrap rounded-full bg-ui-colors-primary px-2.5 py-0.5 text-sm text-slate-50">
                            Licencia {selectedTest?.clase} {selectedTest?.categoria}
                        </span>
                    </div>
                    <BackRouteButton/>
                </div>
                <h2 className='text-2xl font-bold'>Evaluación {selectedTest?.clase} {selectedTest?.categoria}</h2>
                <span className='flex items-center gap-2 text-ui-colors-accent'>
                    Tiempo {selectedTest?.duracion} min.
                    <TimerSolid />
                </span>
            </div>
            <div className='flex flex-col gap-2 bg-ui-colors-neutral p-4 mb-4 rounded-xl'>
                <h3 className='text-xl font-bold'>Descripción</h3>
                <p>El examen contiene {selectedTest?.totalPreguntas} preguntas y tiene una duración de {selectedTest?.duracion} minutos. Para su aprobación, el postulante deberá acertar por lo menos {selectedTest?.minAprobar} respuestas de las {selectedTest?.totalPreguntas} preguntas. </p>
                <p>Los componentes de este examen son temas de: Obligaciones del Conductor en materia de tránsito, Inspección Técnica Vehicular, Reglamento Nacional de Vehículos, Reglamento Nacional de Responsabilidad Civil y Seguros Obligatorios de Accidentes de Tránsito, Reglamento de Placa Única Nacional de Rodaje y Primeros Auxilios, en caso de accidentes de tránsito.</p>
                <p>Finalizada la prueba, usted tendrá acceso a la revision de todas las respuestas correctas para que identifique los temas que le falta reforzar, con miras a estar aptos para el examen de Licencia de Conducir.</p>
            </div>
            <Link
                className="block rounded-xl border border-ui-colors-primary bg-ui-colors-primary py-3 text-center text-slate-50 
                hover:bg-transparent hover:text-ui-colors-primary focus:outline-none focus:ring active:text-ui-colors-primary"
                to={replaceParam(PATHROUTES.QUESTION,':testId', selectedTest?.id)}
            >
                Iniciar
            </Link>
        </div>
    )
}
