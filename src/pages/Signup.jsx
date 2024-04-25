import { Link, useNavigate } from 'react-router-dom'
import { PublicRoutes } from '../router/routes'
import { useAuthContext } from '../providers/AuthProvider'
import { loginWithRedirectGoogleProvider, signupWithEmailAndPassword } from '../firebase'
import LogoColorful from '../components/General/LogoColorful'
import InputWithLabel from '../components/General/InputWithLabel'
import GoogleIcon from './../assets/SVG/google.svg'
import { Check } from 'iconoir-react'

export default function Signup() {
    const { setAuthUser } = useAuthContext()
    const navigate = useNavigate()

    const handleSubmitSignup = async (evt) => {
        evt.preventDefault()
        const { email, password } = evt.target
        const userAuth = await signupWithEmailAndPassword(email.value, password.value)
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
                        <h3 className="text-2xl font-bold sm:text-3xl">Registro de usuario</h3>
                    </div>
                </div>
                <form
                    onSubmit={handleSubmitSignup}
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
                    <button
                        className="w-full px-4 py-2 text-white font-medium bg-ui-primary hover:bg-ui-primary/70 active:bg-ui-primary rounded-lg duration-150"
                    >
                        Registrarse
                    </button>
                </form>
                <button
                    className="w-full flex items-center justify-center gap-x-3 py-2.5 border rounded-md text-sm font-medium bg-ui-neutral-400 border-ui-neutral-200 hover:bg-ui-neutral-200 duration-150 active:bg-ui-neutral-400"
                    onClick={handleLoginGoogle}
                >
                    <img src={GoogleIcon} className='w-5' alt="google icon" />
                    Continuar con Google
                </button>
                <p className="text-center">¿Ya tienes una cuenta? <Link to={PublicRoutes.LOGIN} className="font-medium text-ui-primary hover:text-ui-primary/70">Inicia sesión</Link></p>
            </div>
        </main>
    )
}