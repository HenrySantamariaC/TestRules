export const PATHROUTES = {
    HOME: '/',
    TEST: '/tests/:id',
    QUESTION: '/questions/:testId'
}

export const replaceParam = (path, param, value) => {
    return path.replace(param,value)
}