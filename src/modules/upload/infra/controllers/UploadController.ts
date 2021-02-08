import {Response, Request} from 'express'

export default class UploadController {
    public async create(req: Request, res: Response): Promise<Response>{
        return res.json({
            message:"Arquivo enviado.",
            fileName: req.file.filename
        })
    }
}
