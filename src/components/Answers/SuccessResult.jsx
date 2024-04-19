import StarTruck from '../../assets/GIF/star-truck.gif'
import Fondo from '../../assets/PNG/bg-approved.png'
export default function SuccessResult(props) {
    const { score, total } = props
    return (
        <div className="flex flex-col select-none">
            <div className={`flex items-end bg-[url('assets/PNG/bg-approved.png')] bg-contain w-full max-w-md mx-auto aspect-video`}>
                <img src={StarTruck} alt="Emoji reaction" className='mx-auto w-2/5' />
            </div>
            <span className='flex items-center gap-2 w-fit mx-auto my-4'>
                <h2 className='text-3xl font-bold uppercase m-auto'>Excelente 🎉</h2>
            </span>
            <span className="flex items-center my-4">
                <span className="flex-1 border-t-2 border-dashed border-ui-primary"></span>
                <span className="shrink-0 px-6 bg-ui-primary text-lg font-bold py-2 rounded-md">{score}/{total}</span>
                <span className="flex-1 border-t-2 border-dashed border-ui-primary"></span>
            </span>
            <p className='text-sm text-center w-4/5 mx-auto'>
                ¡Eres un conductor ejemplar!
            </p>
            <p className='text-sm text-center w-4/5 mx-auto'>
                Tu conocimiento de las reglas de tránsito
                te ayudará a mantenerte seguro en las calles 😎.
            </p>
        </div>
    )
}