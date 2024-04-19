import { useQuestionContext } from '../providers/QuestionProvider'
import { Link } from 'react-router-dom'
import SuccessResult from '../components/Answers/SuccessResult'
import { PublicRoutes } from '../router/routes'
import FailedResult from '../components/Answers/FailedResult'
import { useTestContext } from '../providers/TestProvider'
import ScreenLayout from '../layouts/ScreenLayout'
import HeaderScreen from '../components/General/HeaderScreen'
import { HomeSimpleDoor, PageEdit } from 'iconoir-react'

export default function Answers() {
    const { questions } = useQuestionContext()
    const { selectedTest, score } = useTestContext()

    return (
        <ScreenLayout>
            <div className='flex flex-col h-[calc(100dvh-32px)] justify-between'>
                <HeaderScreen isClose />
                {
                    (score >= selectedTest?.minAprobar)
                        ? <SuccessResult score={score} total={questions?.length} />
                        : <FailedResult score={score} total={questions?.length} />
                }
                <div className='flex gap-4 py-14 justify-center'>
                    <Link
                        className=''
                        to={PublicRoutes.HOME} >
                        <button className='flex flex-col items-center justify-center h-14 aspect-square bg-ui-primary rounded-md'>
                            <HomeSimpleDoor className='w-6 h-6 mx-auto' />
                            <span className='text-xs'>Inicio</span>
                        </button>
                    </Link>
                    <Link
                        className=''
                        to={PublicRoutes.REVIEW} >
                        <button className='flex flex-col items-center justify-center h-14 aspect-square bg-ui-neutral-400 rounded-md border border-ui-neutral-200'>
                            <PageEdit className='w-6 h-6 mx-auto' />
                            <span className='text-xs'>Revisar</span>
                        </button>
                    </Link>
                </div>
            </div>
        </ScreenLayout>
    )
}
