import express from "express";
import cors from "cors";
import "reflect-metadata";
import { useExpressServer } from "routing-controllers";

import errorMiddleware from './middleware/error.middleware';
import { TmdbWrapperController } from './controllers/tmdb-wrapper.controller';


const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(process.cwd() + "/client/dist"));
const allowedOrigins = [
    'http://localhost:4200',
    'http://m2c2.s3-website.ap-south-1.amazonaws.com'
];
app.use(cors({
    origin: function (origin, callback) {
        // allow requests with no origin 
        // (like mobile apps or curl requests)
        if (!origin) return callback(null, true);
        /*  if (allowedOrigins.indexOf(origin) === -1) {
             var msg = 'The CORS policy for this site does not ' +
                 'allow access from the specified Origin.';
             return callback(new Error(msg), false);
         } */
        return callback(null, true);
    }
}));

useExpressServer(app, {
    defaultErrorHandler: false,
    // register created express server in routing-controllers
    controllers: [TmdbWrapperController] // and configure it the way you need (controllers, validation, etc.)
});

app.use(errorMiddleware);

app.get('/', (req, res) => {
    res.sendFile(process.cwd() + "/client/dist/index.html")
});

app.on('listening', function () {
    console.log('ok, server is running');
});

app.listen(port, () => {
    console.log('server started', port);
});
