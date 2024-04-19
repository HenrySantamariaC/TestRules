export default function ScreenLayout(props) {
    const { children } = props
    return (
        <div className='min-h-dvh space-y-4 text-sm p-4'>
            {children}
        </div>
    )
}