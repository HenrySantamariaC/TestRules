import axios from "axios"

const URL_DATA = '/db/tests.json'

export const getAllTests = async () => {
    let response = await axios.get(URL_DATA)
    let data = await response.data

    return data
}

export const getTestById = ( list, idCode ) => {
    return list.find(({id}) => (id === idCode))
}