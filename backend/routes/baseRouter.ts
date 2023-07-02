import express from 'express';

export const baseRouter = express.Router();

baseRouter.get('/', (req: express.Request, res: express.Response) => {
	res.send('HTML-CSS-JavaScript Showcase BACKEND');
});