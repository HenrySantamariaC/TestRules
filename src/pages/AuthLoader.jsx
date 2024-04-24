import { useEffect, useRef } from "react"
import { getRedirectResultGoogleProvider } from "../firebase"
import { useNavigate } from "react-router-dom"
import { useAuthContext } from "../providers/AuthProvider"
import LogoColorful from "../components/General/LogoColorful"
import { PublicRoutes } from "../router/routes"
import { sleep } from "../utilities/utilities"

export default function AuthLoader() {
    const { setAuthUser } = useAuthContext()
    const navigate = useNavigate()
    const timeoutId = useRef(null)

    const startPageLogin = async () => {
        const resultAuth = await getRedirectResultGoogleProvider()
        if (resultAuth === null) {
            timeoutId.current = await sleep(500)
            navigate(PublicRoutes.LOGIN)
            console.log('error')
            return
        } 
        if (resultAuth.user) {
            setAuthUser(resultAuth.user)
            navigate(PublicRoutes.HOME)
        } else {
            navigate(PublicRoutes.LOGIN)
        }
    }
    useEffect(() => {
        startPageLogin() 
        return () => {
            clearTimeout(timeoutId.current)
        }
    }, [])

    return (
        <div className="flex w-full h-dvh justify-center items-center">
            <div className="flex flex-col items-center justify-between gap-4">
                <LogoColorful className="w-14" />
                <div className="flex flex-row gap-2">
                    <div className="w-2 h-2 rounded-full bg-ui-primary animate-bounce [animation-delay:.7s]"></div>
                    <div className="w-2 h-2 rounded-full bg-ui-primary animate-bounce [animation-delay:.3s]"></div>
                    <div className="w-2 h-2 rounded-full bg-ui-primary animate-bounce [animation-delay:.7s]"></div>
                </div>
            </div>
        </div>
    )
}