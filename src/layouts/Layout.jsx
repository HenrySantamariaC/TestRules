import React from 'react'
import { Outlet, ScrollRestoration } from 'react-router-dom';

export default function Layout() {
    return (
        <div className='bg-ui-colors-secondary min-h-screen text-slate-100 p-4'>
            <ScrollRestoration />
            <Outlet />
        </div>
    )
}
