// components/ClientLayout.tsx

"use client"; // Ensure this is a client component

import { SessionProvider } from "next-auth/react";
import { MantineProvider } from "@mantine/core";
import { UserProvider } from "@/components/context/UserContext";
import { SignupProvider } from "@/components/context/SignupContext";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <UserProvider>
        <SignupProvider>
          <MantineProvider>
            {children}
          </MantineProvider>
        </SignupProvider>
      </UserProvider>
    </SessionProvider>
  );
}
