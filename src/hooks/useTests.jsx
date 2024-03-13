import { useState } from 'react'
import { tests } from '../data/Tests.js'

export default function useTests() {
    const [test, setTest] = useState({})

    const getListTests = () => {
        return tests
    }

    const getTestById = (idCode) => {
        let result = tests.find(({id}) => (id === idCode))
        setTest(result)
    }
    
    return {
        test,
        getListTests,
        getTestById,
    }
}
