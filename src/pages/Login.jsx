import { useNavigate } from 'react-router-dom'
import InputWithLabel from '../components/General/InputWithLabel'
import { loginWithEmailAndPassword, loginWithGoogleProvider } from '../firebase'
import { useAuthContext } from '../providers/AuthProvider'
import GoogleIcon from './../assets/SVG/google.svg'
import { PublicRoutes } from '../router/routes'
import { useEffect } from 'react'
import LogoColorful from '../components/General/LogoColorful'

export default function Login() {
    const { setAuthUser } = useAuthContext()
    const navigate = useNavigate()

    const handleSubmitLogin = async (evt) => {
        evt.preventDefault()
        const { email, password } = evt.target
        const userAuth = await loginWithEmailAndPassword(email.value, password.value)
        setAuthUser(userAuth)
        if (userAuth) navigate(PublicRoutes.HOME)
    }

    const handleLoginGoogle = async () => {
        const userAuth = await loginWithGoogleProvider()
        setAuthUser(userAuth)
        if (userAuth) navigate(PublicRoutes.HOME)
    }

    useEffect(() => {
        setAuthUser(null)
    }, [])


    return (
        <main className="w-full bg-ui-neutral-400 flex justify-center rounded-lg py-8 px-4">
            <div className="max-w-sm w-full space-y-5">
                <div className="text-center pb-8">
                    <LogoColorful className="w-14 mx-auto" />
                    <div className="mt-5">
                        <h3 className="text-2xl font-bold sm:text-3xl">Inicia sesión en tu cuenta</h3>
                    </div>
                </div>
                <form
                    onSubmit={handleSubmitLogin}
                    className="space-y-5"
                >
                    <InputWithLabel
                        label='Correo electrónico'
                        name='email'
                        type="email"
                        placeholder='example@simulatest.com'
                        required
                    />
                    <InputWithLabel
                        label='Contraseña'
                        name='password'
                        type="password"
                        placeholder='password'
                        required
                    />
                    <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-x-3">
                            <input type="checkbox" id="remember-me-checkbox" className="checkbox-item peer hidden" />
                            <label
                                htmlFor="remember-me-checkbox"
                                className="relative flex w-5 h-5 bg-white peer-checked:bg-ui-primary rounded-md border ring-offset-2 ring-ui-primary duration-150 peer-active:ring cursor-pointer after:absolute after:inset-x-0 after:top-[3px] after:m-auto after:w-1.5 after:h-2.5 after:border-r-2 after:border-b-2 after:border-white after:rotate-45"
                            >
                            </label>
                            <span>Recuérdeme</span>
                        </div>
                        <a href="/" className="text-center text-ui-primary hover:text-ui-primary/70">¿Olvidé mi contraseña?</a>
                    </div>
                    <button
                        className="w-full px-4 py-2 text-white font-medium bg-ui-primary hover:bg-ui-primary/70 active:bg-ui-primary rounded-lg duration-150"
                    >
                        Inicia sesión
                    </button>
                </form>
                <button
                    className="w-full flex items-center justify-center gap-x-3 py-2.5 border rounded-lg text-sm font-medium bg-ui-neutral-400 hover:bg-ui-neutral-200 duration-150 active:bg-ui-neutral-400"
                    onClick={handleLoginGoogle}
                    >
                    <img src={GoogleIcon} className='w-5' alt="google icon" />
                    Continuar con Google
                </button>
                <p className="text-center">¿No tienes una cuenta? <a href="/" className="font-medium text-ui-primary hover:text-ui-primary/70">Únete</a></p>
            </div>
        </main>
    )
}