import { useState } from 'react';
import data from '../data/bii-c.json'

export default function useSelectQuestions() {
    const [questions, setQuestions] = useState([])

    let rawData = data
    let tempData = []

    function getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function getFirstTwentyQuestions() {
        for (let i = 0; i < 20; i++) {
            let index = getRandomNumber(0, (rawData.length - 41))

            rawData = rawData.filter((obj, idx) => {
                idx === index ? (tempData.push(obj)) : true
                return idx === index ? false : true
            })
        }
    }

    function getSecondTwentyQuestions() {
        for (let i = 0; i < 20; i++) {
            let index = getRandomNumber((rawData.length - 41), (rawData.length - 1))

            rawData = rawData.filter((obj, idx) => {
                idx === index ? (tempData.push(obj)) : true
                return idx === index ? false : true
            })
        }
    }
    
    function selectRandomQuestions() {
        rawData = data
        tempData = []
        getFirstTwentyQuestions()
        getSecondTwentyQuestions()
        setQuestions(tempData)
    }

    return {
        questions,
        selectRandomQuestions,
    }
}
