import axios from "axios"
import { getRandomNumber } from "../utilities/utilities"

const URL_DATA = '/db/bii-c.json'

function chooseRandomQuestionForList(allQuestionsList, testList, totalQuestions) {
    let tempList = allQuestionsList
    for (let i = 0; i < totalQuestions; i++) {
        let index = getRandomNumber(0, (tempList.length - 1))
        tempList = tempList.filter((obj, idx) => {
            idx === index ? (testList.push(obj)) : true
            return !(idx === index)
        })
    }
    return testList
}

export const getAllQuestions = async () => {
    let response = await axios.get(URL_DATA)
    let data = await response.data

    return data
}

export const getRandomQuestionList = async () => {
    let tempData = []
    const data = await getAllQuestions()
    tempData = chooseRandomQuestionForList(data.GENERALES, tempData, 5)
    tempData = chooseRandomQuestionForList(data.ESPECIFICAS, tempData, 5)
    return tempData
}