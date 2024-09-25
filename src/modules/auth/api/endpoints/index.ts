import { IAuthTokens, ISignInForm } from '@modules/auth/interfaces';

import { signIn, signOut, signUp } from '../requests';
import { internalApi } from 'store/api';

const authApi = internalApi.injectEndpoints({
  endpoints: build => ({
    logIn: build.mutation<IAuthTokens, ISignInForm>({
      query: signIn,
    }),

    logOut: build.mutation<void, Pick<IAuthTokens, 'refreshToken'>>({
      query: signOut,
    }),

    register: build.mutation<IAuthTokens, ISignInForm>({
      query: signUp,
    }),
  }),
});

export const { useLogInMutation, useLogOutMutation, useRegisterMutation } = authApi;
