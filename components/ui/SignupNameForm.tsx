"use client";

import {
  Paper,
  PaperProps,
  Stack,
  TextInput,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSignupContext } from "@/components/context/SignupContext"; 
import { useUserContext } from "../context/UserContext"; // Import useUserContext

interface User {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
}

function SignupNameForm(props: PaperProps) {
  const [loading, setLoading] = useState(false); // Manage loading state
  const [error, setError] = useState<string | null>(null); // Manage error state
  const { email, password , setFirstName , setLastName} = useSignupContext(); // Access global signup context
  const { setUser, setToken } = useUserContext(); // Destructure context values
  const router = useRouter(); // Use Next.js router for navigation

  const form = useForm({
    initialValues: {
      firstName: "",
      lastName: "",
    },
    validate: {
      firstName: (val) => (val.trim() ? null : "First name is required"),
    },
  });

  const handleSubmit = async (values: typeof form.values) => {
    setError(null);
    setLoading(true);

    setFirstName(values.firstName);
    setLastName(values.lastName);
  
    try {
      // Gather all information from the global state
      const signupData = {
        email: email, // Retrieved from global state
        password: password, // Retrieved from global state
        firstName: values.firstName,
        lastName: values.lastName,
      };
  
      // Call the register API
      const response = await fetch("http://74.50.88.184:8002/api/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(signupData),
      });
  
      const data = await response.json();
  
      if (!response.ok) {
        throw new Error(data.message || "Registration failed. Please try again.");
      }

  
      // Redirect user to the next screen or dashboard
      router.push("/"); // Or any next step after registration
    } catch (err: any) {
      setError(err.message || "An unexpected error occurred during registration.");
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <Paper bg="none" radius="md" p="xl" {...props}>
      <p className="text-lg md:text-sm mb-[8%] text-white">
        Enter your Name
      </p>

      <form onSubmit={form.onSubmit(handleSubmit)}>
        <Stack>
          {/* First Name Field */}
          <div
            style={{
              position: "relative",
              display: "flex",
              alignItems: "center",
              background: "#111315",
              borderRadius: "0.5rem",
              width: "100%",
            }}
            className="p-2 text-[16px] md:p-0"
          >
            <TextInput
              required
              placeholder="First Name"
              value={form.values.firstName}
              onChange={(event) =>
                form.setFieldValue("firstName", event.currentTarget.value)
              }
              error={form.errors.firstName}
              radius="md"
              styles={{
                root: {
                  width: "100%",
                },
                input: {
                  backgroundColor: "#111315",
                  border: "none",
                  color: "#fff",
                  paddingLeft: "10px",
                  paddingRight: "15px",
                  width: "95%",
                },
              }}
            />
          </div>

          {/* Last Name Field */}
          <div
            style={{
              position: "relative",
              display: "flex",
              alignItems: "center",
              background: "#111315",
              borderRadius: "0.5rem",
              width: "100%",
            }}
            className="p-2 text-[16px] md:p-0"
          >
            <TextInput
              required
              placeholder="Last Name"
              value={form.values.lastName}
              onChange={(event) =>
                form.setFieldValue("lastName", event.currentTarget.value)
              }
              radius="md"
              styles={{
                root: {
                  width: "100%",
                },
                input: {
                  backgroundColor: "#111315",
                  border: "none",
                  color: "#fff",
                  paddingLeft: "10px",
                  paddingRight: "15px",
                  width: "95%",
                },
              }}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="continueButton w-full  bg-gradient-to-r from-[#0A84FF] to-[#5E5CE6] text-white border-none p-2 text-[18px] md:p-1.5 md:text-[15px] rounded-full transition-colors duration-300 hover:from-[#5E5CE6] hover:to-[#0A84FF]"
            disabled={loading}
          >
            {loading ? "Loading..." : "Continue"}
          </button>
        </Stack>
        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
      </form>
    </Paper>
  );
}

export default SignupNameForm;
