"use client";

import {
  Divider,
  Group,
  Paper,
  PaperProps,
  Stack,
  TextInput,
  Image,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { useState,useEffect } from "react";
import { useRouter } from "next/navigation";
import { GoogleButton } from "./GoogleButton";
import { useSignupContext } from "@/components/context/SignupContext"; // Import SignupContext if applicable
import { signIn,useSession } from "next-auth/react";


function SignupEmailForm(props: PaperProps) {
  const [loading, setLoading] = useState(false); // Manage loading state
  const [error, setError] = useState<string | null>(null); // Manage error state
  const { setEmail } = useSignupContext(); // Access global signup context
  const router = useRouter(); // Use Next.js router for navigation
  const { data: session } = useSession();

  useEffect(() => {
    if (session?.user?.status === "success") {
      router.push("/"); // Redirect to the dashboard
    } else if (session?.user?.status) {
      console.error("Sign-in failed:", session.user.status);
      // Handle other statuses if needed
    }
  }, [session, router]);

  const form = useForm({
    initialValues: {
      email: "",
    },
    validate: {
      email: (val) =>
        /^\S+@\S+$/.test(val) ? null : "Invalid email address",
    },
  });

  const handleGoogleSignup = async () => {
    await signIn("google", {
      callbackUrl: "/",  
    }); 
  };

  const handleSubmit = async (values: typeof form.values) => {
    setLoading(true);
    setError(null);
  
    try {
      const response = await fetch("http://74.50.88.184:8002/api/users/check-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: values.email,
        }),
      });
  
      const data = await response.json();
  
      if (!response.ok) {
        // Check for specific error indicating email already exists
        if (data.message === "Email already exists") {
          setError("This email is already registered. Please use a different email.");
          return; // Prevent navigation to the next screen
        }
        throw new Error(data.message || "Something went wrong!");
      }
  
      // Save email to global state
      setEmail(values.email);
  
      // Navigate to the next step (OTP screen)
      router.push("/otp");
    } catch (err: any) {
      setError(err.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <Paper bg="none" radius="md" p="xl" {...props}>
      <p className="text-lg md:text-sm text-white">Sign up with Google</p>

      <Group grow mb="md" mt="md">
        <GoogleButton  onClick={handleGoogleSignup}/>
      </Group>

      <Divider color="grey" mt="lg" mb="lg" />

      <p className="text-lg md:text-sm text-white mb-4">
        Or continue with email address
      </p>

      <form onSubmit={form.onSubmit(handleSubmit)}>
        <Stack>
          <div
            style={{
              position: "relative",
              display: "flex",
              alignItems: "center",
              background: "#111315",
              borderRadius: "0.5rem",
              width: "95%",
            }}
            className="p-2 text-[16px] md:p-0"
          >
            <Image
              src="/email.svg"
              alt="Email Icon"
              height={20}
              width={20}
              style={{ position: "relative", left: 10 }}
            />

            <TextInput
              required
              placeholder="Your Email"
              value={form.values.email}
              onChange={(event) => {
                form.setFieldValue("email", event.currentTarget.value);
                setError("");
              }}
              styles={{
                root: { width: "100%" },
                input: {
                  backgroundColor: "#111315",
                  border: "none",
                  color: "#fff",
                  marginLeft: "15px",
                  paddingLeft: "10px",
                  width: "100%",
                },
              }}
            />
          </div>

          <button
            type="submit"
            className="continueButton sm:w-full  bg-gradient-to-r from-[#0A84FF] to-[#5E5CE6] text-white border-none p-2 text-[18px] md:p-1.5 md:text-[15px] rounded-full transition-colors duration-300 hover:from-[#5E5CE6] hover:to-[#0A84FF]"
            disabled={loading}
          >
            {loading ? "Loading..." : "Continue"}
          </button>
        </Stack>
        {(form.errors.email && <p className="text-red-500 text-sm mt-2">{form.errors.email} </p> )  || ( error && <p className="text-red-500 text-sm mt-2">{error}</p>) }
      </form>
    </Paper>
  );
}

export default SignupEmailForm;
