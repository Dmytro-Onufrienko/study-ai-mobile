import { ApiRoutes } from "@config/ApiRoutes";
import { ISignInForm } from "@modules/auth/interfaces/ISignInForm";


export const signIn = (body: ISignInForm) => ({
  method: "POST",
  url: ApiRoutes.SIGN_IN,
  body,
});
