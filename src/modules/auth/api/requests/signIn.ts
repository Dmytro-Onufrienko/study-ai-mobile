import { ISignInForm } from "@modules/auth/interfaces/ISignInForm";


export const signIn = (body: ISignInForm) => ({
  method: "POST",
  url: "auth/sign-in",
  body,
});
