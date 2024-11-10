import { ApiRoutes } from "@config/ApiRoutes";
import { IAuthTokens } from "@modules/auth/interfaces/IAuthTokens";

export const signOut = (body: Pick<IAuthTokens, 'refreshToken'>) => ({
  method: "POST",
  url: ApiRoutes.SIGN_OUT,
  body,
});
