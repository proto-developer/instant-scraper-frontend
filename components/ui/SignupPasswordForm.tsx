"use client";
import {
  Paper,
  PaperProps,
  PasswordInput,
  Stack,
  Image,
  Text,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { useRouter } from "next/navigation"; 
import { useSignupContext } from "@/components/context/SignupContext"; 


function SignupPasswordForm(props: PaperProps) {
  const router = useRouter(); // To navigate to the next step
  const { setPassword } = useSignupContext(); 

  const form = useForm({
    initialValues: {
      password: "",
      confirmPassword: "",
    },

    validate: {
      password: (val) =>
        val.length < 8 ||
        !/[A-Z]/.test(val) ||
        !/[a-z]/.test(val) ||
        !/[0-9]/.test(val) ||
        !/[^A-Za-z0-9]/.test(val)
          ? "Password must be at least 8 characters long, include uppercase, lowercase, a number, and a special character"
          : null,
      confirmPassword: (val, values) =>
        val !== values.password ? "Passwords do not match" : null,
    },
  });

  const handleSubmit = async (values: { password: string; confirmPassword: string }) => {
    // Ensure passwords match
    if (values.password !== values.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }
  
    setPassword(values.password)
      
    alert("Password set successfully!");
        
    router.push("/personal-details");
      
    
  };
  

  return (
    <Paper bg="none" radius="md" p="xl" {...props}>
      <p className="text-lg md:text-sm mb-[8%] text-white">Create a New Password</p>

      <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
        <Stack>
          {/* New Password Field */}
          <div
            style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              background: "#111315",
              borderRadius: "0.5rem",
              width: "100%",
            }}
            className="p-2 text-[16px] md:p-0"
          >
            <div
              style={{
                position: "relative",
                display: "flex",
                alignItems: "center",
                width: "100%",
              }}
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
                placeholder="New Password"
                value={form.values.password}
                onChange={(event) =>
                  form.setFieldValue("password", event.currentTarget.value)
                }
                radius="md"
                styles={{
                  root: { width: "100%" },
                  input: {
                    backgroundColor: "#111315",
                    border: "none",
                    color: "#fff",
                    paddingLeft: "10px",
                    marginLeft: "10px",
                    paddingRight: "15px",
                    width: "95%",
                  },
                }}
              />
            </div>
            {form.errors.password && (
              <Text color="red" size="sm" mt="sm">
                {form.errors.password}
              </Text>
            )}
          </div>

          {/* Confirm Password Field */}
          <div
            style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              background: "#111315",
              borderRadius: "0.5rem",
              width: "100%",
            }}
            className="p-2 text-[16px] md:p-0"
          >
            <div
              style={{
                position: "relative",
                display: "flex",
                alignItems: "center",
                width: "100%",
              }}
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
                placeholder="Confirm Password"
                value={form.values.confirmPassword}
                onChange={(event) =>
                  form.setFieldValue(
                    "confirmPassword",
                    event.currentTarget.value
                  )
                }
                radius="md"
                styles={{
                  root: { width: "100%" },
                  input: {
                    backgroundColor: "#111315",
                    border: "none",
                    color: "#fff",
                    paddingLeft: "10px",
                    marginLeft: "10px",
                    paddingRight: "15px",
                    width: "95%",
                  },
                }}
              />
            </div>
            {form.errors.confirmPassword && (
              <Text color="red" size="sm" mt="sm">
                {form.errors.confirmPassword}
              </Text>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="continueButton sm:w-full bg-gradient-to-r from-[#0A84FF] to-[#5E5CE6] text-white border-none p-2 text-[18px] md:p-1.5 md:text-[15px] rounded-full transition-colors duration-300 hover:from-[#5E5CE6] hover:to-[#0A84FF]"
          >
            Continue
          </button>
        </Stack>
      </form>
    </Paper>
  );
}

export default SignupPasswordForm;
