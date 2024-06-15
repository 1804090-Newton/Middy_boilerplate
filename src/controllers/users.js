import middy from '@middy/core';
import { responseHandlerMiddleware } from '../handlers/responseHandler';
import User from '../models/User';

const getUsersById = middy(async (event) => {
  const { id } = event.pathParameters;

  try {
    const user = await User.getById(id);

    if (user) {
      event.response.ok('User retrieved successfully', user);
    } else {
      event.response.notFound('User not found');
    }
  } catch (error) {
    console.error('Failed to retrieve user:', error);
    throw new Error('Failed to retrieve user');
  }
});

const createUser = middy(async (event) => {
  const userData = JSON.parse(event.body);

  try {
    const newUser = await User.createUser(userData);
    event.response.created('User created successfully', newUser);
  } catch (error) {
    console.error('Failed to create user:', error);
    throw new Error('Failed to create user');
  }
});

getUsersById.use(responseHandlerMiddleware());
createUser.use(responseHandlerMiddleware());

export { getUsersById, createUser };
