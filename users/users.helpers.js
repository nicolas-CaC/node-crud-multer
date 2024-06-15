const isSuccessfulOperation = (data) => {
    return data.affectedRows > 0
}


export const helpers = { isSuccessfulOperation }