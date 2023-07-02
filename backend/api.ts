import express from 'express';
import cors from 'cors';
import * as appconfig from '../share/appconfig.json';
import { baseRouter } from './routes/baseRouter';

const app = express();
const port = appconfig.backendport;

app.use(cors());
app.use(express.json());

app.use('/', baseRouter);

app.listen(port, () => {
	console.log(`listening on port http://localhost:${port}`);
});