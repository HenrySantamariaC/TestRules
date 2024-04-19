export const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
export const divideDisplayName = (name = 'Demo') => {
    let fullName = name?.split(" ")

    if (fullName?.length < 2) return name
    return fullName?.slice(0, 2).join(" ")
}

export const getFormattedDate = () => {
    const date = new Date();
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    const formattedDate = date.toLocaleDateString('es-ES', options);
    return formattedDate;   
}

export const getGreetingMessage = () => {
    const currentHour = new Date().getHours();
    if (currentHour >= 5 && currentHour < 12) {
        return 'Buenos días';
    } else if (currentHour >= 12 && currentHour < 19) {
        return 'Buenas tardes';
    } else {
        return 'Buenas noches';
    }
}
