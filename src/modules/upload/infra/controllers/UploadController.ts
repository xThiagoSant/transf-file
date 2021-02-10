import {Response, Request} from 'express'

export default class UploadController {
    public async create(req: Request, res: Response): Promise<Response>{
        try {
            console.log(req.file.filename)
            return res.json({
                message:"Arquivo enviado."    
            })
        } catch (error) {
            console.log(error)
            return res.json({error})
        }
    }
}
