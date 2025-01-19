"use client";
import {
  Anchor,
  Button,
  Checkbox,
  Divider,
  Group,
  Paper,
  PaperProps,
  PasswordInput,
  Stack,
  Text,
  TextInput,
  Image,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { upperFirst, useToggle } from "@mantine/hooks";
import { GoogleButton } from "./GoogleButton";
import { useState } from "react";

function AuthenticationForm(props: PaperProps) {
  const [type, toggle] = useToggle(["login", "register"]);
  const [loading, setLoading] = useState(false); // Manage loading state
  const [error, setError] = useState<string | null>(null); // Manage error state

  const form = useForm({
    initialValues: {
      email: "",
      password: "",
      terms: true,
    },

    validate: {
      email: (val) =>
        /^\S+@\S+$/.test(val) ? null : "Invalid email",
    },
  });

  const handleSubmit = async (values: typeof form.values) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("http://74.50.88.184:8001/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: values.email,
          password: values.password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong!");
      }

      alert("Signup successful!");
      form.reset();
    } catch (err: any) {
      setError(err.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Paper bg="none" radius="md" p="xl" {...props}>
      <p className="text-lg md:text-sm text-white">Sign in with Google</p>

      <Group grow mb="md" mt="md">
        <GoogleButton />
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
              radius="md"
              styles={{
                root: {
                  width: "100%",
                },
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

          <button
            type="submit"
            className="continueButton sm:w-full bg-gradient-to-r from-[#0A84FF] to-[#5E5CE6] text-white border-none p-2 text-[18px] md:p-1.5 md:text-[15px] rounded-full transition-colors duration-300 hover:from-[#5E5CE6] hover:to-[#0A84FF]"
            disabled={loading}
          >
            {loading ? "Loading..." : "Continue"}
          </button>
        </Stack>
        {error && (
          <p className="text-red-500 text-sm mt-2">{error}</p>
        )}
      </form>
    </Paper>
  );
}

export default AuthenticationForm;
