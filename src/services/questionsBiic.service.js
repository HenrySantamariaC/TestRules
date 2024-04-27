import axios from "axios"
import { getRandomNumber } from "../utilities/utilities"

// const URL_DATA = '/db/bii-c.json'
const URL_DATA = import.meta.env.VITE_URL_API_DATA

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

export const fetchQuestions = async ( licenseCode ) => {
    const response = await axios.get(`${URL_DATA}?code=${licenseCode}`)
    const data = await response.data
    const questions = data.map((item) => ({
        PREGUNTA: item.question,
        IMAGEN: item.image,
        OPCIONES: item.listOptions,
        RESPUESTA: item.answer,
        FUNDAMENTO: item.foundation, 
    }))
    return questions
}

// {
//     "id": 2354,
//     "question": "¿ Qué color esta permitido para la luz direccional posterior en un vehículo de categoría L5?",
//     "listOptions": [
//         {
//             "value": "A",
//             "description": "A) Amarillo o Rojo"
//         },
//         {
//             "value": "B",
//             "description": "B) Amarillo o Naranja"
//         },
//         {
//             "value": "C",
//             "description": "C) Solo Amarillo"
//         },
//         {
//             "value": "D",
//             "description": "D) Blanco, Amarillo o Naranja"
//         }
//     ],
//     "foundation": "Anexo III del RNV",
//     "answer": "A"
// }

// {
//     "NUM": 1,
//     "MATERIA": "Materias generales",
//     "CLASE-CATEGORIA": "BIIA",
//     "TEMA": "Obligaciones del conductor en materia de tránsito terrestre",
//     "PREGUNTA": "Con respecto a las definiciones de acera y/o de calzada marque la respuesta correcta.",
//     "RESPUESTA": "b",
//     "FUNDAMENTO": "Artículo 2º del Código de Tránsito",
//     "SECCION": "GENERALES",
//     "OPCIONES": [
//       {
//         "value": "a",
//         "description": "a) Ambas son una parte de la vía y están destinadas a la circulación de vehículos"
//       },
//       {
//         "value": "b",
//         "description": "b) La calzada es una parte de la vía destinada a la circulación de vehículos y eventualmente al cruce de peatones y animales."
//       },
//       {
//         "value": "c",
//         "description": "c) Por lo general en la acera circulan vehículos"
//       },
//       {
//         "value": "d",
//         "description": "d) La acera es parte de la vía en la cual excepcionalmente pueden circular personas."
//       }
//     ]
//   },