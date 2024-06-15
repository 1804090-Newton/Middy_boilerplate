import middy from '@middy/core';

const responseHandlerMiddleware = () => {
  return {
    before: (handler, next) => {
      handler.event.response = {
        ok: (message, data = {}) => {
          handler.response = {
            statusCode: 200,
            body: JSON.stringify({ message, data })
          };
        },

        created: (message, data = {}) => {
          handler.response = {
            statusCode: 201,
            body: JSON.stringify({ message, data })
          };
        },

        notFound: (message, data = {}) => {
          handler.response = {
            statusCode: 404,
            body: JSON.stringify({ message, data })
          };
        },

        badRequest: (message, data = {}) => {
          handler.response = {
            statusCode: 400,
            body: JSON.stringify({ message, data })
          };
        },

        internalError: (message, data = {}) => {
          handler.response = {
            statusCode: 500,
            body: JSON.stringify({ message, data })
          };
        }
      };

      next();
    }
  };
};

export { responseHandlerMiddleware };
