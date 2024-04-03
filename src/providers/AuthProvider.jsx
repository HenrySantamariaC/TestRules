import { createContext, useContext, useState } from "react"

const authContext = createContext()

export default function AuthProvider(props) {
    const { children } = props
    const [user , setUser] = useState(null)

    const setAuthUser = (userData) => {
        setUser(userData)
    }

    const dataProvider = {
        user,
        setAuthUser
    }

    return (
        <authContext.Provider value={dataProvider}>
            {children}
        </authContext.Provider>
    )
}

export function useAuthContext() {
    return useContext(authContext)
}