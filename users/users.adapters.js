import User from "../models/User.js"


const parseUser = (data) => {
    const { name, age } = data
    const user = new User(name, parseInt(age))
    return user
}



export const adapters = {
    parseUser
}