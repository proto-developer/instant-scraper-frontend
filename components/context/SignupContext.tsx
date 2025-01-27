"use client";

import { createContext, useContext, useState } from "react";

interface SignupContextType {
  email: string;
  setEmail: (email: string) => void;
  password: string;
  setPassword: (password: string) => void;
  firstName: string;
  setFirstName: (name: string) => void;
  lastName: string;
  setLastName: (name: string) => void;
  signupStep: number; // New state to track the current step
  setSignupStep: (step: number) => void;
}

const SignupContext = createContext<SignupContextType | undefined>(undefined);

export const SignupProvider = ({ children }: { children: React.ReactNode }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [signupStep, setSignupStep] = useState(1); // Default step is 1 (Email input)

  return (
    <SignupContext.Provider
      value={{
        email,
        setEmail,
        password,
        setPassword,
        firstName,
        setFirstName,
        lastName,
        setLastName,
        signupStep,
        setSignupStep,
      }}
    >
      {children}
    </SignupContext.Provider>
  );
};

export const useSignupContext = () => {
  const context = useContext(SignupContext);
  if (!context) {
    throw new Error("useSignupContext must be used within a SignupProvider");
  }
  return context;
};
