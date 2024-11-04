import { SignInPage } from "@modules/auth/pages";
import { NoAuthProvider } from "@modules/auth/providers";


export default function SignIn() {
  return <NoAuthProvider><SignInPage /></NoAuthProvider>
}

