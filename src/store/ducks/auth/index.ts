import {Reducer} from 'redux';
import {Auth, AuthState, AuthTypes} from './types';

const INITIAL_STATE: AuthState = {
  data: {} as Auth,
  loading: false,
  error: false,
};

const reducer: Reducer<AuthState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AuthTypes.AUTH_REQUEST:
      return {...state, loading: true};
    case AuthTypes.AUTH_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.pyload.data,
      };
    case AuthTypes.AUTH_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
        data: {} as Auth,
      };
    default:
      return state;
  }
};

export default reducer;
