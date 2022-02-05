import {Response, Request, Router, NextFunction} from 'express';

const router = Router();

router.get('/', (req: Request, res: Response,  next: NextFunction) => {
	res.send('soy la ruta get!');
});

router.post('/', (req: Request, res: Response, next: NextFunction) => {
	res.send('soy la ruta post!');
});
router.use('/', (req: Request, res: Response, next: NextFunction)=>{
	res.send('hello world =)')	
})

export default router;