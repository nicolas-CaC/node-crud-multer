// export { middlewares as filesMiddleware } from "../files/files.middlewares.js";
// export { middlewares as routesMiddleware } from './routes.middlewares.js'
import { middlewares as files } from "../files/files.middlewares.js";
import { middlewares as routes } from './routes.middlewares.js'
import { middlewares as errors } from './errors.middlewares.js'

export const middlewares = {
    files,
    routes,
    errors
} 