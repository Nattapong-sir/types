import {Session, Options} from 'express-session'
import {MongoClientOptions} from 'mongodb'

export class MongoDBStoreOptions {
    uri: string;
    databaseName: string;
    collection: string;
    connectionOptions?: MongoClientOptions;
}

declare interface CB {
    (error?: string) : void
} 

declare interface sessionFn {
    (options: Options) : Session
}

declare class MongoDBStore {
    constructor(options?: MongoDBStoreOptions)
    get : (id: any, cb: CB) => void
    destroy : (id: any, cb: CB) => void
    clear : (cb: CB) => void
    set : (id : any, session : Session, cb: CB) => void
    on : () => void
    once : () => void
}

declare function store(s : (Session | sessionFn)) : MongoDBStore
export default store
