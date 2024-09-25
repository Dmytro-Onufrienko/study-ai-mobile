import { ISignInForm } from "@modules/auth/interfaces/ISignInForm";

type IRequestBody = ISignInForm;

export const signUp = (body: IRequestBody) => ({
  method: "POST",
  url: "auth/sign-up",
  body,
});
