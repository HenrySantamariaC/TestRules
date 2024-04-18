import React from 'react'

export default function ProgressQuestions(props) {
    const {currentProgress, totalQuestions} = props

    return (
        <div className='my-4'>
            <span id="ProgressLabel" className="sr-only">Loading</span>
            <span
                role="progressbar"
                aria-labelledby="ProgressLabel"
                aria-valuenow="75"
                className="block rounded-full bg-slate-50"
            >
                <span className="block h-3 rounded-full bg-ui-primary" style={{ width: `${((currentProgress + 1) / totalQuestions) * 100}%` }}></span>
            </span>
            <span className='block text-center mt-2 text-ui-primary'>{currentProgress + 1}/{totalQuestions}</span>
        </div>
    )
}
