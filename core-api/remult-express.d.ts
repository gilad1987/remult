import * as express from 'express';
import { RemultServerCore, RemultServerOptions } from './server/expressBridge';
export declare function remultExpress(options?: RemultServerOptions<express.Request> & {
    bodyParser?: boolean;
    bodySizeLimit?: string;
}): RemultExpressServer;
export declare type RemultExpressServer = express.RequestHandler & RemultServerCore<express.Request> & {
    withRemult: (req: express.Request, res: express.Response, next: VoidFunction) => void;
};
