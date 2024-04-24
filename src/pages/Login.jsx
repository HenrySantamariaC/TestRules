import { Link, useNavigate } from 'react-router-dom'
import { PublicRoutes } from '../router/routes'
import { useAuthContext } from '../providers/AuthProvider'
import { loginWithEmailAndPassword, loginWithRedirectGoogleProvider } from '../firebase'
import LogoColorful from '../components/General/LogoColorful'
import InputWithLabel from '../components/General/InputWithLabel'
import GoogleIcon from './../assets/SVG/google.svg'
import { Check } from 'iconoir-react'

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
        navigate(PublicRoutes.AUTH_LOADING, { replace: true })
        await loginWithRedirectGoogleProvider()
    }

    return (
        <main className="min-h-dvh flex justify-center py-8 px-4">
            <div className="max-w-sm w-full my-auto space-y-5">
                <div className="text-center pb-8">
                    <LogoColorful className="w-14 mx-auto" />
                    <div className="mt-5">
                        <h3 className="text-2xl font-bold sm:text-3xl">Inicio de sesión</h3>
                    </div>
                </div>
                <form
                    onSubmit={handleSubmitLogin}
                    className="space-y-6"
                >
                    <InputWithLabel
                        label='Correo electrónico'
                        name='email'
                        type="email"
                        placeholder='ejemplo@quizzly.page'
                        required
                    />
                    <InputWithLabel
                        label='Contraseña'
                        name='password'
                        type="password"
                        placeholder='********'
                        required
                    />
                    <div className="flex items-center gap-x-2">
                        <label
                            className="relative flex cursor-pointer items-center rounded-full"
                            htmlFor="remember-me"
                        >
                            <input
                                id="remember-me"
                                type="checkbox"
                                className="peer h-4 w-4 cursor-pointer appearance-none rounded border border-blue-gray-200 transition-all checked:border-ui-primary checked:bg-ui-primary"
                            />
                            <div className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 opacity-0 transition-opacity peer-checked:opacity-100">
                                <Check className="h-3 w-3" strokeWidth={4} />
                            </div>
                        </label>
                        <label
                            className="cursor-pointer text-sm mt-1 select-none"
                            htmlFor="remember-me"
                        >
                            Recuérdeme
                        </label>
                    </div>
                    <div className="flex items-center justify-center text-sm py-2">
                        <Link to={PublicRoutes.HOME} className="text-ui-primary font-bold hover:text-ui-primary/70">¿Olvidé mi contraseña?</Link>
                    </div>
                    <button
                        className="w-full px-4 py-2 text-white font-medium bg-ui-primary hover:bg-ui-primary/70 active:bg-ui-primary rounded-lg duration-150"
                    >
                        Inicia sesión
                    </button>
                </form>
                <button
                    className="w-full flex items-center justify-center gap-x-3 py-2.5 border rounded-md text-sm font-medium bg-ui-neutral-400 border-ui-neutral-200 hover:bg-ui-neutral-200 duration-150 active:bg-ui-neutral-400"
                    onClick={handleLoginGoogle}
                >
                    <img src={GoogleIcon} className='w-5' alt="google icon" />
                    Continuar con Google
                </button>
                <p className="text-center">¿No tienes una cuenta? <Link to={PublicRoutes.HOME} className="font-medium text-ui-primary hover:text-ui-primary/70">Únete</Link></p>
            </div>
        </main>
    )
}