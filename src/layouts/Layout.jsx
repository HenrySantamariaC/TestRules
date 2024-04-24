import { Outlet, ScrollRestoration } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { useAuthContext } from '../providers/AuthProvider';
import { useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

export default function Layout() {
    const { setAuthUser } = useAuthContext()

    useEffect(() => {
        const auth = getAuth()
        const unregisterAuthObserver = onAuthStateChanged(auth, (user) => {
            setAuthUser(user)
        })
        return () => unregisterAuthObserver()
    }, [])

    return (
        <div className='min-h-screen md:w-[640px] mx-auto text-ui-secondary '>
            <Toaster
                toastOptions={{
                    className: '!bg-ui-neutral-400 border !border-ui-neutral-200 !text-ui-secondary',
                }}
            />
            <ScrollRestoration />
            <Outlet />
        </div>
    )
}
