import { CheckCircle } from 'iconoir-react'
import StarTruck from '../../assets/GIF/star-truck.gif'
export default function SuccessResult(props) {
    const { correctAnswers, totalQuestions } = props
    return (
        <div className="flex flex-col select-none">
            <span className='flex items-center gap-2 w-fit mx-auto my-4'>
                <CheckCircle className='w-8 h-8 text-ui-primary drop-shadow-lg' />
                <h2 className='text-3xl font-bold text-ui-primary m-auto'>¡Excelente!</h2>
            </span>
            <span className='text-center'>Tu puntuación es</span>
            <span className='text-center'>{correctAnswers}/{totalQuestions}</span>
            <img src={StarTruck} alt="Emoji reaction" className='m-auto w-1/2' />
        </div>
    )
}