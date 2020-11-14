import express from 'express';
import { Application } from 'express';
import "reflect-metadata";
import { useExpressServer } from "routing-controllers";
import cors from "cors";

const allowedOrigins = [
    'http://localhost:4200',
    'http://m2c2.s3-website.ap-south-1.amazonaws.com'
];
export class App {
    public app: Application;
    public port: number | string;

    constructor(appInit: { port: number | string; middleWares: any; controllers: any; }) {
        this.app = express();
        this.port = appInit.port;

        this.middlewares(appInit.middleWares);
        this.routes(appInit.controllers);
        this.addBasePath();
    }

    private middlewares(middleWares: { forEach: (arg0: (middleWare: any) => void) => void; }) {
        middleWares.forEach(middleWare => {
            this.app.use(middleWare)
        })

        this.app.use(cors({
            origin: function (origin, callback) {
                // allow requests with no origin 
                // (like mobile apps or curl requests)
                if (!origin) return callback(null, true);
                if (allowedOrigins.indexOf(origin) === -1) {
                    var msg = 'The CORS policy for this site does not ' +
                        'allow access from the specified Origin.';
                    return callback(new Error(msg), false);
                }
                return callback(null, true);
            }
        }));
    }

    private routes(controllers: any) {
        useExpressServer(this.app, {
            // register created express server in routing-controllers
            controllers // and configure it the way you need (controllers, validation, etc.)
        });
    }

    private addBasePath(): void {
        this.app.get('/', (req, res) => res.send('Welcome to M2C!'))
    }

    public listen() {
        this.app.listen(this.port, () => {
            console.log(`App listening on the http://localhost:${this.port} , server started`)
        })
    }
}