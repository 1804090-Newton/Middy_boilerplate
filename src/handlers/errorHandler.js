import { httpErrorHandler } from '@middy/http-error-handler';

const errorHandlerMiddleware = () => {
  return httpErrorHandler();
};

export { errorHandlerMiddleware };
