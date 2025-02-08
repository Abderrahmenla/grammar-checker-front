import Button from "@/components/ui/button";
import { signOut } from "next-auth/react";

const LogoutButton = () => {
  const handleLogout = async () => {
    await signOut({ callbackUrl: "/" });
  };

  return (
    <Button variant="default" className={"px-4 py-2"} onClick={handleLogout}>
      Logout
    </Button>
  );
};

export default LogoutButton;
