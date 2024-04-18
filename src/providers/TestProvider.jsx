import React, { createContext, useContext, useState } from 'react'
import { getAllTests } from '../services/test.service'

const testContext = createContext()

export default function TestProvider(props) {
    const { children } = props

    const [ test, setTest] = useState([])
    
    const [ selectedTest, setSelectedTest] = useState({})

    const [ score , setScore ] = useState(0)

    const getTestList = async () => {
        const data = await getAllTests()
        setTest(data)
    }

    const changeSelectedTest = async (idCode) => {
        const data = test.find(({id}) => (id === idCode))
        setSelectedTest(data)
    }

    const updateScore = (value) => {
        setScore(value)
    }
    
    const dataProvider = {
        test,
        selectedTest,
        score,
        getTestList,
        changeSelectedTest,
        updateScore,
    }

    return (
        <testContext.Provider value={dataProvider}>
            {children}
        </testContext.Provider>
    )
}

export function useTestContext() {
    return useContext(testContext)
}