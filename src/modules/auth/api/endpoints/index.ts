import { IAuthTokens, ISignInForm } from '@modules/auth/interfaces';

import { signIn, signOut, signUp } from '../requests';
import { internalApi } from 'store/api';

const authApi = internalApi.injectEndpoints({
  endpoints: build => ({
    signIn: build.mutation<IAuthTokens, ISignInForm>({
      query: signIn,
    }),

    signOut: build.mutation<void, Pick<IAuthTokens, 'refreshToken'>>({
      query: signOut,
    }),

    signUp: build.mutation<IAuthTokens, ISignInForm>({
      query: signUp,
    }),
  }),
});

export const { useSignInMutation, useSignOutMutation, useSignUpMutation } = authApi;