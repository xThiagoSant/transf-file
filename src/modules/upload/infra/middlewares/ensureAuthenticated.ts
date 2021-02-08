import {Response, Request, NextFunction} from 'express'
import { verify } from 'jsonwebtoken'

import authConfig from '../../../../config/auth'

interface ITokenPayload{
    iat:number
    exp:number
    sub:string
}

export default function ensureAuthenticated(
    req: Request, res: Response, next: NextFunction
): void{
    const {authorization, pub_key } = req.headers

    if (!authorization){
        throw new Error('JWT is missing')
    }

    if (!pub_key){
        throw new Error('public key is required')
    }

    const [, token] = authorization.split(' ')

    try {
        const decoded = verify(token, authConfig.jwt.secret)

        const { sub } = decoded as ITokenPayload
        console.log(sub)

        if(sub !== pub_key){
            throw new Error('JWT is incorrect.')
        }

        console.log('OK validou')
        return next()
    } catch (error) {
        throw new Error('Invalid JWT token')
    }
}