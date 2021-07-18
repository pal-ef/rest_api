import { Request, Response, Router } from 'express';

class User_Router {
    router: Router;

    constructor() {
        this.router = Router();
        this.routes();
    }

    getUser(req: Request, res: Response) {
        res.send('accesed getuser route');
    };

    routes() {
        this.router.get('/', this.getUser);
    }
}

const userRouter = new User_Router();

export default userRouter.router;