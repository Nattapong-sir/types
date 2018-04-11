import {Request, RequestHandler} from 'express'

declare class Cookie {
    secure?: boolean
    domain?: string
    expires?: Date
    httpOnly?: boolean
    maxAge?: number
    path?: string
    sameSite?: boolean | string
}

export declare class Options {
    secret?: string
    resave?: boolean
    saveUninitialized?: boolean
    cookie?: Cookie
    genid?: (req : Request) => string
    name?: string
    proxy?: boolean
    rolling?: boolean
    store?: any
}

export interface Session extends RequestHandler {
    constructor(data?: Object | null) : Session
    touch() : void
    resetMaxAge() : void
    save(cb: () => void): void
}

export interface RequestSession extends Request {
    session: any
}

export default function(options: Options) : Session
