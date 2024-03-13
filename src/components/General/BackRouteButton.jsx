import { PageLeft } from 'iconoir-react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function BackRouteButton() {
    const navigate = useNavigate()

    return (
        <button onClick={() => navigate(-1)}>
            <PageLeft width={32} height={32} />
        </button>
    )
}
