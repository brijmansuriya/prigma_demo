import express from 'express'
import AuthRouter  from './routes/auth';
import {validate,ValidationError, Joi} from 'express-validation';
// import { value body, value validationResult } from 'express-validator';

const app = express();
const cors = require('cors');

app.use(express.json())
app.use('/auth',AuthRouter)

export = app