import { ArrowLeft, Xmark } from 'iconoir-react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { PublicRoutes } from '../../router/routes'

export default function BackRouteButton(props) {
    const { isClose } = props
    const navigate = useNavigate()

    const handleClick = () => {
        isClose ? navigate(PublicRoutes.HOME) : navigate(-1)
    }

    return (
        <button className='p-1 hover:bg-ui-neutral-100/20 rounded-md' onClick={handleClick}>
            {isClose ? <Xmark className="w-6 h-6" /> : <ArrowLeft className="w-6 h-6" />}
        </button>
    )
}
