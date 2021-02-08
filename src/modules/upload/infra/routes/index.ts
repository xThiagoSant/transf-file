import { Router } from 'express'
import multer from 'multer'
import uploadConfig from '../../../../config/upload'

import UpdateController from '../controllers/UploadController'
import ensureAuthenticated from '../middlewares/ensureAuthenticated'

const uploadRoutes = Router()
const updateController = new UpdateController()
const fileUpload = multer(uploadConfig.multer)

uploadRoutes.patch(
    '/upload',
    ensureAuthenticated,
    fileUpload.single('uploadFile'),
    updateController.create
)

export default uploadRoutes
