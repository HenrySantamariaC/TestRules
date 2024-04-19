import BackRouteButton from "./BackRouteButton"

export default function HeaderScreen(props) {
    const { children, title, isClose } = props
    return (
        <div className='flex justify-between items-center py-4'>
            <div className="flex gap-2 items-center">
                <BackRouteButton isClose={isClose} />
                <h2 className="text-lg font-bold">{title}</h2>
            </div>
            <div className='flex gap-2'>
                {children}
            </div>
        </div>
    )
}