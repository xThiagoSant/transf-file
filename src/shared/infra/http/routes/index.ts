import { Router } from 'express'

import uploadRoutes from '../../../../modules/upload/infra/routes'
import downloadRoutes from '../../../../modules/download/infra/routes'

const routes = Router();

routes.use('/upload', uploadRoutes)
routes.use('/download', downloadRoutes)

export default routes