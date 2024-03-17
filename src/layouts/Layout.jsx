import React from 'react'
import { Outlet, ScrollRestoration } from 'react-router-dom';
import { AppProvider } from '../providers/AppProvider';

export default function Layout() {
    return (
        <AppProvider>
            <div className='bg-ui-colors-secondary min-h-screen text-slate-100 p-4'>
                <ScrollRestoration />
                <Outlet />
            </div>
        </AppProvider>
    )
}
