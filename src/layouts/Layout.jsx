import React from 'react'
import { Outlet, ScrollRestoration } from 'react-router-dom';
import { AppProvider } from '../providers/AppProvider';

export default function Layout() {
    return (
        <AppProvider>
            <div className='min-h-screen md:w-[640px] mx-auto text-slate-100 p-4'>
                <ScrollRestoration />
                <Outlet />
            </div>
        </AppProvider>
    )
}
