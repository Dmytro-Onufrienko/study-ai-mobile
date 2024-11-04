import { NoAuthProvider } from "@modules/auth/providers";
import { SignUpPage } from "@modules/user/pages";


export default function SignUp() {
  return <NoAuthProvider><SignUpPage /></NoAuthProvider>
}

