import { auth } from "@/lib/auth";
import SignInPage from "./components/login/authen"
import SignOutPage from "./components/login/signOut";
import { SessionWrapper } from "./components/sessionWrapper";

export default async function Login(){
  const session = await auth();
  const isAuthenticated = !!session?.user;

  return(
    <div>
        <SessionWrapper>
             {isAuthenticated ? <SignOutPage />: <SignInPage /> }
        </SessionWrapper>
    </div>
)
};
