export const PublicRoutes = {
    HOME: '/',
    TEST: '/tests/:code',
    QUESTION: '/questions/:code',
    SCORE: '/score',
    REVIEW: '/review',
    AUTH_LOADING: '/auth-loading',
    LOGIN: '/login',
    SIGNUP: '/signup',
    RESET_PASSWORD: '/reset-password',
}

export const PrivateRoutes = {
    SETTINGS: '/settings',
    PROFILE: '/profile'
}

export const replaceParam = (path, param, value) => {
    return path.replace(param, value)
}