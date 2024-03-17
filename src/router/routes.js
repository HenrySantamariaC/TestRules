export const PATHROUTES = {
    HOME: '/',
    TEST: '/tests/:id',
    QUESTION: '/questions/:testId',
    ANSWERS: '/review-answers'
}

export const replaceParam = (path, param, value) => {
    return path.replace(param,value)
}