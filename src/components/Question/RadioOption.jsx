import { CheckCircleSolid } from 'iconoir-react'
import React from 'react'

export default function RadioOption(props) {
    const {option, selected, handdleSelectedOption} = props
    return (
        <li >
            <label htmlFor={option.value} className="block relative">
                <input
                    id={option.value} type="radio"
                    name="test"
                    className="sr-only peer"
                    checked={option.value === selected}
                    onChange={handdleSelectedOption}
                    value={option.value}
                />
                <div
                    className="w-full flex gap-x-3 items-start p-4 cursor-pointer rounded-lg bg-ui-neutral-200 shadow-sm ring-ui-primary peer-checked:ring-2 peer-checked:bg-ui-neutral-400 duration-200">
                    <div className='w-11/12'>
                        <p className="mt-1 text-sm">
                            {option.description}
                        </p>
                    </div>
                </div>
                <div className="absolute top-4 right-4 flex-none flex items-center justify-center w-4 h-4 rounded-full peer-checked:bg-slate-50 peer-checked:text-ui-primary duration-200">
                    <CheckCircleSolid />
                </div>
            </label>
        </li>
    )
}
