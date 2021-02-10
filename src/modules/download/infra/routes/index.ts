import { Router } from 'express'
import uploadConfig from '../../../../config/upload'
import ensureAuthenticated from '../../../../shared/middlewares/ensureAuthenticated'

const downloadRoutes = Router()

downloadRoutes.get('/', ensureAuthenticated, (req, res) => {
   const {fileName} = req.body
   console.log(fileName)
   res.download(uploadConfig.tmpFolder+'/'+fileName)
})

export default downloadRoutes
