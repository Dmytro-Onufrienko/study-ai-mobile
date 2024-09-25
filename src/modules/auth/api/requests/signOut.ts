import { IAuthTokens } from "@modules/auth/interfaces/IAuthTokens";

export const signOut = (body: Pick<IAuthTokens, 'refreshToken'>) => ({
  method: "POST",
  url: 'auth.sign-out',
  body,
});
