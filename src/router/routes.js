export const PublicRoutes = {
    HOME: '/',
    TEST: '/tests/:id',
    QUESTION: '/questions/:testId',
    SCORE: '/score',
    REVIEW: '/review',
    LOGIN: '/login',
    SIGNUP: '/signup',
}

export const PrivateRoutes = {
    PROFILE: '/profile'
}

export const replaceParam = (path, param, value) => {
    return path.replace(param, value)
}