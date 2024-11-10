import { ApiRoutes } from "@config/ApiRoutes";
import { ISignInForm } from "@modules/auth/interfaces/ISignInForm";

type IRequestBody = ISignInForm;

export const signUp = (body: IRequestBody) => ({
  method: "POST",
  url: ApiRoutes.SIGN_UP,
  body,
});
