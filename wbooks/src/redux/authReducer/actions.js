import { types } from '../types';

export function loginAuthAction(user) {
  return {
    type: types.login,
    payload: {
      user
    }
  };
}
export function logoutAuthAction() {
  return {
    type: types.logout
  };
}
