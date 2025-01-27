"use client";
import {
  Divider,
  Group,
  Paper,
  PaperProps,
  PasswordInput,
  Stack,
  TextInput,
  Image,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { useState } from "react";
import { useRouter } from "next/navigation"; // For redirecting the user
import { GoogleButton } from "./GoogleButton";
import { useUserContext } from "../context/UserContext"; // Import useUserContext
import { signIn } from "next-auth/react";
import axios from "axios";


function SignInForm(props: PaperProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { setUser, setToken } = useUserContext(); // Destructure context values
  const form = useForm({
    initialValues: {
      email: "",
      password: "",
    },

    validate: {
      email: (val) => (/^\S+@\S+$/.test(val) ? null : "Invalid email"),
      password: (val) =>
        val.length <= 6 ? "Password should include at least 6 characters" : null,
    },
  });

  const router = useRouter();

  const handleGoogleSignIn = async () => {
   
        await signIn("google", {
          callbackUrl: "/",  
        });

  };

  // const handleLogin = async (values: { email: string; password: string }) => {
  //   setLoading(true);
  //   setError("");
  
  //   try {
  //     // Call NextAuth's signIn function with the credentials provider
  //     const result = await signIn("credentials", {
  //       redirect: false, // Prevent automatic redirect
  //       email: values.email,
  //       password: values.password,
  //     });

  //     console.log(result)
  
  //     if (result?.error) {
  //       throw new Error(result.error || "Login failed. Please check your credentials.");
  //     }

      
  
  //     // Redirect to the homepage if login is successful
  //     router.push("/");
  //   } catch (err: any) {
  //     console.error(err);
  //     setError(err.message || "An unexpected error occurred.");
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const handleLogin = async (values: { email: string; password: string }) => {
    setLoading(true);
    setError("");

    try {
      const response = await axios.post(
        "http://74.50.88.184:8002/api/users/login",
        values, // Send `values` as the request body
        {
          withCredentials: true, 
          headers: {
            "Content-Type": "application/json", 
          },
        }
      );
      
      // await fetch("http://74.50.88.184:8002/api/users/login", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify(values),
      // });

      console.log(response)

      if (response.statusText != "OK") {
        throw new Error("Login failed. Please check your credentials.");
      }

      const data = await response.data;
      console.log("Login successful:", data);

      const { token, user } = data;


      // Set token and user in context
      setToken(token);
      setUser(user);

      console.log("token: ", token)


      // Store token and user in localStorage and cookies
      document.cookie = `auth_token=${token}; path=/; HttpOnly; Secure;`;
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem('authToken', token);


      // Redirect to the homepage
      setTimeout(() => {
        router.push("/");
      }, 2000); 
    } catch (err: any) {
      console.error(err);
      setError("Login failed. Please check your credentials.");
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <Paper bg="none" radius="md" p="xl" {...props}>
      <p className="text-xl md:text-sm text-white">Sign in with Google</p>

      <Group grow mb="md" mt="md">
        <GoogleButton onClick={ handleGoogleSignIn} />
      </Group>
      

      <Divider color="grey" mt="lg" mb="lg" />

      <p className="text-xl md:text-sm text-white mb-4">
        Or continue with email address
      </p>

      <form onSubmit={form.onSubmit(handleLogin)}>
        <Stack>
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
            <Image
              src="/email.svg"
              alt="email Icon"
              height={20}
              width={20}
              style={{ position: "relative", left: 10 }}
            />
            <TextInput
              required
              placeholder="Your Email"
              value={form.values.email}
              onChange={(event) =>
                form.setFieldValue("email", event.currentTarget.value)
              }
              error={form.errors.email && "Invalid email"}
              styles={{
                root: { width: "100%" },
                input: {
                  backgroundColor: "#111315",
                  border: "none",
                  color: "#fff",
                  marginLeft: "15px",
                  paddingLeft: "10px",
                  width: "90%",
                },
              }}
            />
          </div>

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
            <Image
              src="/password.svg"
              alt="password Icon"
              height={20}
              width={20}
              style={{ position: "relative", left: 10 }}
            />
            <PasswordInput
              required
              placeholder="Password"
              value={form.values.password}
              onChange={(event) =>
                form.setFieldValue("password", event.currentTarget.value)
              }
              styles={{
                root: { width: "100%" },
                input: {
                  backgroundColor: "#111315",
                  border: "none",
                  color: "#fff",
                  paddingLeft: "10px",
                  marginLeft: "15px",
                  width: "90%",
                },
              }}
            />
          </div>

          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className={`continueButton sm:w-full bg-gradient-to-r from-[#0A84FF] to-[#5E5CE6] text-white border-none p-3 text-[20px] md:p-1.5 md:text-[15px] rounded-full transition-colors duration-300 hover:from-[#5E5CE6] hover:to-[#0A84FF] ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {loading ? "Logging in..." : "Continue"}
          </button>

          <a
            href="/signup"
            className="text-[18px] md:text-[13px] text-center mt-3 md:mt-2 text-[#6F767E]"
          >
            Don't have an account? <b className="text-white"> Sign up</b>
          </a>
        </Stack>
      </form>
    </Paper>
  );
}

export default SignInForm;
