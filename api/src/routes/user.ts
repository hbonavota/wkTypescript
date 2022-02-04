import {Response, Request, Router} from 'express';

router.get('/', (req: Request, res: Response) => {
	res.send('soy la ruta get!');
});

router.post('/', (req: Request, res: Response) => {
	res.send('soy la ruta post!');
});

export default router;