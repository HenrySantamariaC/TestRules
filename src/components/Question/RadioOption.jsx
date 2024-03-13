import { CheckCircleSolid } from 'iconoir-react'
import React from 'react'

export default function RadioOption(props) {
    const {option, value, response, handdleOption} = props
    return (
        <li >
            <label htmlFor={value} className="block relative">
                <input
                    id={value} type="radio"
                    name="test"
                    className="sr-only peer"
                    checked={value === response}
                    onChange={handdleOption}
                    value={value}
                />
                <div
                    className="w-full flex gap-x-3 items-start p-4 cursor-pointer rounded-lg border bg-slate-50 shadow-sm ring-ui-colors-primary peer-checked:ring-2 duration-200">
                    <div>
                        <p className="mt-1 text-sm text-gray-600 w-11/12">
                            {option}
                        </p>
                    </div>
                </div>
                <div className="absolute top-4 right-4 flex-none flex items-center justify-center w-4 h-4 rounded-full border peer-checked:bg-slate-50 peer-checked:text-ui-colors-primary duration-200">
                    <CheckCircleSolid />
                </div>
            </label>
        </li>
    )
}
