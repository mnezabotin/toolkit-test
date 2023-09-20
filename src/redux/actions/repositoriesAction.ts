import * as types from '../types';

export const getRepositoriesRequest = (payload: any) => ({
  type: types.GET_REPOSITORIES_REQUEST,
  payload
});
