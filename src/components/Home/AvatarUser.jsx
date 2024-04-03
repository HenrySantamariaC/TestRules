import { useNavigate } from "react-router-dom"
import { useAuthContext } from "../../providers/AuthProvider"
import { PrivateRoutes } from "../../router/routes"

export default function AvatarUser() {
    const { user } = useAuthContext()
    const navigate = useNavigate()

    const getAvatar = () => {
        if (user?.photoURL) { return user.photoURL }
        if (user?.displayName) { return `https://ui-avatars.com/api/?name=${user.displayName}&background=random&color=fff` }
        if (user?.email) { return `https://ui-avatars.com/api/?name=${user.email}&background=random&color=fff` }
        return `https://ui-avatars.com/api/?name=${'demo'}&background=random&color=fff`
    }

    return (
        <button className="w-8 h-8 outline-none rounded-full ring-offset-1 ring-ui-colors-neutral ring-2 hover:ring-ui-colors-primary"
            onClick={() => navigate(PrivateRoutes.PROFILE)}
        >
            <img
                src={getAvatar()}
                className="w-full h-full rounded-full"
            />
        </button>
    )
}