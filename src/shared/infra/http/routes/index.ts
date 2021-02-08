import { Router } from 'express'

import uploadRoutes from '../../../../modules/upload/infra/routes'

const routes = Router();

routes.use('/upload', uploadRoutes)

export default routes