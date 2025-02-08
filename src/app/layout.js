import "./globals.css";

import AuthProvider from "@/components/auth/auth-provider";

export const metadata = {
  title: "Grammar Checker Test",
  description: "Grammar Checker Test",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>{children} </AuthProvider>
      </body>
    </html>
  );
}
