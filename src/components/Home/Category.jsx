import { NavArrowRight, PageEdit } from 'iconoir-react'
import React from 'react'
import { Link } from 'react-router-dom'
import { PublicRoutes, replaceParam } from './../../router/routes.js'

export default function Category(props) {
    const { item } = props

    return (
        <Link
            to={replaceParam(PublicRoutes.TEST, ':id', item.id)}
            className={`flex justify-between items-center w-full rounded-md p-4 bg-ui-neutral-400 border border-ui-neutral-200`}
        >
            <div className="flex justify-between items-center gap-4">
                <PageEdit className='text-ui-primary' />
                <div>
                    <h3 className="text-lg font-medium text-secondary">Categoría {item.categoria}</h3>

                    <div className="flow-root">
                        <div className="p-1 leading-none">
                            <span className="text-xs font-medium text-ui-neutral-100"> Clase {item.clase} </span>
                        </div>
                    </div>
                </div>
            </div>
            <NavArrowRight />
        </Link>
    )
}
