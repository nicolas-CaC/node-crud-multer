const supportedTypes = ['image/jpeg', 'image/bmp', 'image/gif', 'image/jpg']

const checkSupportedTypes = (filetype) => {

    let isSupported = true

    for (let supportedType of supportedTypes)
        if (filetype === supportedType) {
            isSupported = false
            break
        }

    return isSupported
}



export const helpers = {
    checkSupportedTypes
}