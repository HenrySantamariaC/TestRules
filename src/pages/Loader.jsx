import LogoColorful from "../components/General/LogoColorful"

export default function Loader() {
    return (
        <div className="flex w-screen h-screen justify-center items-center">
            <div className="flex flex-col items-center justify-between gap-4">
                <LogoColorful className="w-14"/>
                <div className="flex flex-row gap-2">
                    <div className="w-2 h-2 rounded-full bg-ui-primary animate-bounce [animation-delay:.7s]"></div>
                    <div className="w-2 h-2 rounded-full bg-ui-primary animate-bounce [animation-delay:.3s]"></div>
                    <div className="w-2 h-2 rounded-full bg-ui-primary animate-bounce [animation-delay:.7s]"></div>
                </div>
            </div>
        </div>
    )
}