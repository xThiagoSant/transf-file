import { Router } from 'express'

import uploadRoutes from '../../../../modules/upload/infra/routes'

const routes = Router();

routes.use('/file', uploadRoutes)

export default routes