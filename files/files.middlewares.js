import multer from 'multer'
import { helpers } from './files.helpers.js'


const storage = multer.diskStorage({

    filename: (req, file, cb) => {
        // console.log('req.body filen:', req.body)
        // console.log('file filename:', file)
        const { name } = req.body
        const filename = `${name}_${file.originalname}`
        cb(null, filename)
    },

    destination: (_, file, cb) => {

        // supportedTypes.forEach(supportedType => {
        //     if (file.mimetype === supportedType)
        //         return cb('No soportamos este archivo')
        // })

        const isSupported = helpers.checkSupportedTypes(file.mimetype)

        isSupported
            ? cb(null, 'public/uploads/')
            : cb('No soportamos este archivo')
    }
})


const uploadImage = multer({ storage })


export const middlewares = {
    uploadImage
}