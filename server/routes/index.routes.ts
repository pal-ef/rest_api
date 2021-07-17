import {Request, Response, Router} from 'express';

class MainRouter {
    router: Router;

    constructor() {
        this.router = Router();
        this.routes();
    }

    routes() {
        this.router.get('/', (req: Request, res: Response) => {
            res.send('Welcome to PROTOTYPE API! please use /api/*');
        });
    }
}

const indexRouter = new MainRouter();

export default indexRouter.router;