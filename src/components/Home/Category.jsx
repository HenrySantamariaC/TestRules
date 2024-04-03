import { NavArrowRight, PageEdit } from 'iconoir-react'
import React from 'react'
import { Link } from 'react-router-dom'
import { PublicRoutes, replaceParam } from './../../router/routes.js'

export default function Category(props) {
    const { item } = props

    return (
        <Link
            to={replaceParam(PublicRoutes.TEST, ':id', item.id)}
            className={`flex justify-between items-center w-full font-bold rounded-xl p-4 bg-ui-colors-neutral shadow-lg`}
        >
            <div className="flex justify-between items-center gap-4">
                <PageEdit className='text-ui-colors-primary' />
                <div>
                    <h3 className="text-lg font-medium text-slate-50">Categoría {item.categoria}</h3>

                    <div className="flow-root">
                        <div className="p-1 leading-none">
                            <span className="text-xs font-medium text-slate-300"> Clase {item.clase} </span>
                        </div>
                    </div>
                </div>
            </div>
            <NavArrowRight />
        </Link>
    )
}
