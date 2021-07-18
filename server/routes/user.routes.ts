import { Request, Response, Router } from 'express';
import User from '../models/User';

class User_Router {
    router: Router;

    constructor() {
        this.router = Router();
        this.routes();
    }

    async getUser(req: Request, res: Response): Promise <void> {
        const users = await User.find({});
        res.send(users);
    };

    async updateUser(req: Request, res: Response): Promise <void> {
        const { username } = req.params;
        const user = await User.findOneAndUpdate({username}, req.body, {new: true});
        res.send(user);
    }

    async deleteUserById(req: Request, res: Response): Promise <void> {
        await User.findByIdAndDelete(req.params.id);
        res.send('User deleted successfully');
    }

    async deleteUser(req: Request, res: Response): Promise <void> {
        await User.findOneAndDelete({username: req.params.username});
        res.send('user has been deleted successfully');
    }

    async createUser(req: Request, res: Response): Promise <void> {
        const newUser = await new User(req.body);
        await newUser.save();
        res.send({data: newUser});
    };

    routes() {
        this.router.get('/', this.getUser);
        this.router.post('/', this.createUser);
        this.router.delete('/id/:id', this.deleteUserById);
        this.router.delete('/:username', this.deleteUser);
        this.router.put('/:username', this.updateUser);
    }
}

const userRouter = new User_Router();

export default userRouter.router;