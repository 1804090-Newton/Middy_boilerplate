import { getUsersById, createUser } from '../controllers/users';

const routes = [
  {
    method: 'GET',
    path: '/users/{id}',
    handler: getUsersById
  },
  {
    method: 'POST',
    path: '/users',
    handler: createUser
  }
];

export default routes;
