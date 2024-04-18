import React, { useEffect } from 'react'
import Category from './Category'
import { useTestContext } from '../../providers/TestProvider.jsx'
import Divider from '../General/Divider.jsx'

export default function ListCategory() {
    const { test, getTestList } = useTestContext()

    useEffect(() => {
        getTestList()
    }, [])


    return (
        <>
            <Divider>Evaluaciones disponibles</Divider>
            <div className='flex flex-col gap-4'>
                {test?.map((item, index) => (
                    <Category key={index} item={item} />
                ))}
            </div>
        </>
    )
}
