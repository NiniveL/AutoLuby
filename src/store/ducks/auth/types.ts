/**
 * Action types
 */

export enum AuthTypes {
  AUTH_REQUEST = "@auth/AUTH_REQUEST",
  AUTH_SUCCESS = "@auth/AUTH_SUCCESS",
  AUTH_FAILURE = "@auth/AUTH_FAILURE",
}

/**
 * Data types
 */

export interface Auth {
  email: string;
  password: string;
}

export interface AuthResponse {
  email: string;
  password: string;
  token: string;
}

/**
 * State type
 */

export interface AuthState {
  readonly data: Auth;
  readonly loading: boolean;
  readonly error: boolean;
}
