import LoginForm from "@/components/auth/login-form";
import RegisterForm from "@/components/auth/register-form";

import { cn } from "@/utils/cn";

export default async function Home({ searchParams }) {
  const { type } = await searchParams;
  const isRegister = type === "register";

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="flex gap-4 mb-6">
        <a
          href="/"
          className={cn(
            "text-sm font-medium text-muted-foreground",
            !isRegister && "text-primary"
          )}
        >
          Login
        </a>
        <a
          href="/?type=register"
          className={cn(
            "text-sm font-medium text-muted-foreground",
            isRegister && "text-primary"
          )}
        >
          Register
        </a>
      </div>

      {isRegister ? <RegisterForm /> : <LoginForm />}
    </div>
  );
}
