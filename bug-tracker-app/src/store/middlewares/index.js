import { applyMiddleware } from 'redux';

import loggerMiddleware from './loggerMiddleware';
import asyncMiddleware from './asyncMiddleware';
import promiseMiddleware from './promiseMiddleware';

const rootMiddleware = applyMiddleware(loggerMiddleware, asyncMiddleware, promiseMiddleware);

export default rootMiddleware;
