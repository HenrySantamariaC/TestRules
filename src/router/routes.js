export const PublicRoutes = {
    HOME: '/',
    TEST: '/tests/:id',
    QUESTION: '/questions/:testId',
    SCORE: '/score',
    REVIEW: '/review',
    AUTH_LOADING: '/auth-loading',
    LOGIN: '/login',
    SIGNUP: '/signup',
}

export const PrivateRoutes = {
    SETTINGS: '/settings',
    PROFILE: '/profile'
}

export const replaceParam = (path, param, value) => {
    return path.replace(param, value)
}