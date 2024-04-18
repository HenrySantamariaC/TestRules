import { useAuthContext } from "../../providers/AuthProvider"

export default function AvatarUser(props) {
    const { user } = useAuthContext()

    const getAvatar = () => {
        if (user?.photoURL) { return user.photoURL }
        if (user?.displayName) { return `https://ui-avatars.com/api/?name=${user.displayName}&background=6457E3&color=fff&bold=true` }
        if (user?.email) { return `https://ui-avatars.com/api/?name=${user.email}&background=6457E3&color=fff&bold=true` }
        return `https://ui-avatars.com/api/?name=${'demo'}&background=6457E3&color=fff&bold=true`
    }

    return (
        <div {...props} >
            <img
                src={getAvatar()}
                className="w-full h-full rounded-full"
            />
        </div>
    )
}