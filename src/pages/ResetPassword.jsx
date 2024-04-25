import { useNavigate } from "react-router-dom";
import HeaderScreen from "../components/General/HeaderScreen";
import ScreenLayout from "../layouts/ScreenLayout";
import InputWithLabel from "../components/General/InputWithLabel";
import { resetPasswordWithEmail } from "../firebase";
import { PublicRoutes } from "../router/routes";

export default function ResetPassword() {
    const navigate = useNavigate()

    const handleResetPassword = async (evt) => {
        evt.preventDefault()
        const { email } = evt.target
        await resetPasswordWithEmail(email.value)
        navigate(PublicRoutes.LOGIN)
    }
    return (
        <ScreenLayout>
            <div className='flex flex-col h-[calc(100dvh-32px)]'>
                <HeaderScreen title="Restablecer contraseña" />
                <form
                    onSubmit={handleResetPassword}
                    className="space-y-10 flex flex-col grow"
                >
                    <div>
                        <label>Ingresa el correo electrónico asociado a tu cuenta y te enviaremos un correo electrónico con instrucciones para restablecer tu contraseña.</label>
                    </div>
                    <InputWithLabel
                        label='Correo electrónico'
                        name='email'
                        type="email"
                        placeholder='ejemplo@quizzly.page'
                        required
                    />
                    <button
                        type="submit"
                        className="w-full px-4 py-2 text-white font-medium bg-ui-primary hover:bg-ui-primary/70 active:bg-ui-primary rounded-lg duration-150"
                    >
                        Restablecer
                    </button>
                </form>
            </div>
        </ScreenLayout>
    )
}