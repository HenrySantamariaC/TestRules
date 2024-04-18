import { NavArrowLeft } from 'iconoir-react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function BackRouteButton(props) {
    const {label} = props
    const navigate = useNavigate()

    return (
        <button className='flex items-center gap-2' onClick={() => navigate(-1)}>
            <NavArrowLeft className='w-6 h-6' />
            {label}
        </button>
    )
}
