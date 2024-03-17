import React, { useEffect } from 'react'
import Category from './Category'
import { useTestContext } from '../../providers/TestProvider.jsx'

export default function ListCategory() {
    const {test, getTestList} = useTestContext()

    useEffect(() => {
        getTestList()
    }, [])
    

    return (
        <div className='flex flex-col gap-4'>
            {test?.map((item, index) => (
                <Category key={index} item={item} />
            ))}
        </div>
    )
}
