import * as types from '../types';

const initState = {
  loading: false,
  data: undefined,
  error: undefined
}

export default function(state = initState, action: any) {
  switch (action.type) {
    case types.GET_REPOSITORIES_REQUEST:
      return {...state, loading: true};
    case types.GET_REPOSITORIES_SUCCESS:
      return {...state, loading: false, data: action.data, error: undefined};
    case types.GET_REPOSITORIES_ERROR:
      return {...state, loading: false, error: action.data, data: undefined};
    default:
      return state;
  }
}
