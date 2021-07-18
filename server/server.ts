// Rest API with TypeScript practice
import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';
import cors from 'cors';
import indexRouter from './routes/index.routes';
import userRouter from './routes/user.routes';

class Server {
    app: express.Application;

    constructor() {
        
        this.app = express();
        this.database();
        this.config();
        this.routes();
    }

    database() {
        const db = mongoose.connection;

        mongoose.connect('mongodb://localhost/rest-api', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: true,
            useCreateIndex: true
        });
        
        db.on('error', console.error.bind(console, 'conection error:'));
        db.once('open', () => {
            console.log('Database connected succesfully');
        });
    }

    config() {
        this.app.set('port', 3000);
        //Middlewares
        this.app.use(express.urlencoded({extended: false}));
        this.app.use(express.json());
        this.app.use(cors());
        this.app.use(morgan('combined'));
    }

    start() {
        this.app.listen(this.app.get('port'), () =>  {
            console.log('---- SERVER RUNNING ----');
        });
    }

    routes() {
        this.app.use(indexRouter);
        this.app.use('/api/user', userRouter);
    }
}

const server = new Server();

server.start();