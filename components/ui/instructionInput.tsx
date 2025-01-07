import { Input } from '@mantine/core';
import Image from 'next/image';

const InstructionInput = () => {
    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "#282829",
                borderRadius: "0.5rem",
                paddingTop: "1%",
                paddingBottom: "1%",
                paddingLeft: "1%",
                paddingRight: "0.5%", // Explicit padding for each side
                border: "1px solid #ffffff",
                marginBottom: "2%",
                width: "100%", // Ensures full-width container
            }}
        >
            {/* Input Wrapper */}
            <div style={{ flex: 1 }}>
                <Input
                    placeholder="Write your instruction"
                    styles={{
                        input: {
                            backgroundColor: "transparent",
                            color: "#FFF",
                            border: "none",
                            outline: "none",
                            paddingTop: "10px",
                            paddingBottom: "10px",
                            paddingLeft: "12px",
                            paddingRight: "12px", // Explicit padding for consistency
                            width: "100%", // Full width within wrapper
                        },
                    }}
                />
            </div>

            {/* Button */}
            <button
                style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    marginLeft: "1rem", // Adds space between Input and Button
                    padding: 0, // Avoid extra spacing around the button
                }}
            >
                <Image
                    src="/sendLogo.svg"
                    alt="input send button"
                    width={40}
                    height={40}
                />
            </button>
        </div>
    );
};

export default InstructionInput;
