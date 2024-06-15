import middy from '@middy/core';
import httpRouterHandler from '@middy/http-router';
import routes from './routes/router';
import { errorHandlerMiddleware } from './handlers/errorHandler';
import { responseHandlerMiddleware } from './handlers/responseHandler';

const routerHandler = httpRouterHandler(routes);

routerHandler.use(errorHandlerMiddleware());
routerHandler.use(responseHandlerMiddleware());

export const handler = routerHandler;
