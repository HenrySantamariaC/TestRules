export default function Loader() {
    return (
        <div className="flex w-screen h-screen justify-center items-center">
            <div className="flex flex-row gap-2">
                <div className="w-4 h-4 rounded-full bg-ui-colors-primary animate-bounce [animation-delay:.7s]"></div>
                <div className="w-4 h-4 rounded-full bg-ui-colors-primary animate-bounce [animation-delay:.3s]"></div>
                <div className="w-4 h-4 rounded-full bg-ui-colors-primary animate-bounce [animation-delay:.7s]"></div>
            </div>
        </div>
    )
}