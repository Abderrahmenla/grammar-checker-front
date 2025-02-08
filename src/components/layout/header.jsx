"use client";

import Avatar from "@/components/ui/avatar";
import LogoutButton from "@/components/auth/logout-button";
import { useSession } from "next-auth/react";

const Header = () => {
  const { data: session } = useSession();
  console.log(session);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between px-4 mx-auto">
        <div className="flex items-center gap-2">
          <span className="text-xl font-semibold tracking-tight text-primary">
            Grammar
          </span>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3">
            <Avatar name={session?.user?.name} className="h-8 w-8" />
            <span className="text-sm font-medium hidden sm:inline-block">
              {session?.user?.name}
            </span>
          </div>

          <LogoutButton />
        </div>
      </div>
    </header>
  );
};

export default Header;
