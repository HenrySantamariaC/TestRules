import { Navigate, Outlet } from "react-router-dom"
import { useAuthContext } from "../providers/AuthProvider"
import { PublicRoutes } from "../router/routes"

export default function AuthGuard() {
    const {user} = useAuthContext()

    return user ? <Outlet/> : <Navigate replace to={PublicRoutes.LOGIN} />
}