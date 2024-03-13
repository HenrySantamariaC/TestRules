import React from 'react'
import Category from './Category'
import useTests from '../../hooks/useTests.jsx'

export default function ListCategory() {
    const {getListTests} = useTests()

    return (
        <div className='flex flex-col gap-4'>
            {getListTests().map((item, index) => (
                <Category key={index} item={item} />
            ))}
        </div>
    )
}
