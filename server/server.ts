// Rest API with TypeScript practice
import express from 'express';
import indexRouter from './routes/index.routes';


class Server {
    app: express.Application;

    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }

    config() {
        this.app.set('port', 3000);
    }

    start() {
        this.app.listen(this.app.get('port'), () =>  {
            console.log('server started');
        });
    }

    routes() {
        this.app.use(indexRouter);
    }
}

const server = new Server();

server.start();