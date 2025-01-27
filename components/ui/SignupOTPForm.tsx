"use client";

import {
  Paper,
  PaperProps,
  Stack,
  PinInput,
} from "@mantine/core";
import { useState } from "react";
import { useRouter } from "next/navigation"; 
import { useMediaQuery } from '@mantine/hooks';
import { useSignupContext } from "@/components/context/SignupContext"; 

function SignupOTPForm(props: PaperProps) {
  const [pin, setPin] = useState(""); // State to store the entered OTP
  const router = useRouter(); // To navigate to the next step
  const isMobile = useMediaQuery('(max-width: 768px)');
  const {email} = useSignupContext();
  const handlePinChange = (value: string) => {
    setPin(value); 
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    if (pin.length !== 4) {
      alert("Please enter a valid 4-digit code.");
      return;
    }
  
    try {
      // Replace with your actual API endpoint
      const response = await fetch("http://74.50.88.184:8002/api/users/verify-otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ otp: pin , email }),
      });
      
      console.log(response);
      
      if (!response.ok) {
        throw new Error("Failed to verify OTP");
      }
  
      const data = await response.json();
      console.log(data)
  
      if (data.message == "OTP verified successfully") {
        console.log("OTP verified successfully:", data);
        router.push("/password"); // Redirect on successful verification
      } else {
        alert("Invalid OTP. Please try again.");
      }
    } catch (error) {
      console.error("Error during OTP verification:", error);
      alert("An error occurred while verifying the OTP. Please try again.");
    }
  };
  

  return (
    <Paper bg="none" radius="md" p="xl" {...props}>
      <p className="text-lg md:text-sm text-white text-center">
        We just sent you a verification code. <br /> Check your inbox to get it.
      </p>

      <form onSubmit={handleSubmit}>
        <Stack align="center">
          {/* PinInput Field */}
          <div
              style={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <PinInput
              size="lg"
              type="number"
              value={pin} // Bind to state
              onChange={handlePinChange} // Update state on change
              placeholder="0"
              className="pin-input-container"
              length={4} // Define the length of the OTP
              gap={isMobile ? 25 : 12}
              styles={{
                input: {
                  background: "#272B30",
                  border: "none",
                  color: "#fff",
                  fontSize: "2rem",
                  margin: "60% 0%",
                  padding: "55% 0%",
                  textAlign: "center",
                  justifySelf:"center",
                },
              }}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="continueButton w-full 2xl:w-[80%] text-center justify-center justify-self-center  mt-[25%] lg:mt-[15%] bg-gradient-to-r from-[#0A84FF] to-[#5E5CE6] text-white border-none p-2 text-[18px] md:p-2 md:text-[15px] rounded-full transition-colors duration-300 hover:from-[#5E5CE6] hover:to-[#0A84FF]"
          >
            Continue
          </button>
        </Stack>
      </form>
    </Paper>
  );
}

export default SignupOTPForm;
