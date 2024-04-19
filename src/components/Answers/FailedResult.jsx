import { GraphUp } from 'iconoir-react'
import DizzyFace from '../../assets/GIF/dizzy-face.gif'
export default function FailedResult(props) {
    const { score, total } = props
    return (
        <div className="flex flex-col select-none">
            <div className={`flex items-end bg-[url('assets/PNG/bg-disapproved.png')] bg-contain w-full h-full aspect-video`}>
                <img src={DizzyFace} alt="Emoji reaction" className='mx-auto w-2/5' />
            </div>
            <span className='flex items-center gap-2 w-fit mx-auto my-4'>
                <h2 className='text-3xl font-bold uppercase m-auto'>Oh no ... 💥</h2>
            </span>
            <span className="flex items-center my-4">
                <span className="flex-1 border-t-2 border-dashed border-ui-primary"></span>
                <span className="shrink-0 px-6 bg-ui-primary text-lg font-bold py-2 rounded-md">{score}/{total}</span>
                <span className="flex-1 border-t-2 border-dashed border-ui-primary"></span>
            </span>
            <p className='text-sm text-center w-4/5 mx-auto'>
                No te preocupes, ¡a todos nos pasa!
            </p>
            <p className='text-sm text-center w-4/5 mx-auto'>
                Repasa los temas en los que tuviste dificultades 
                y vuelve a intentarlo. ¡Confía en que lo lograrás! 💪.
            </p>
        </div>
    )
}