import { Input } from '@mantine/core';
import Image from 'next/image';

const InstructionInput = () => {
    return (
        <div
            className='mb-3'
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
                
                width: "100%",
            }}
        >
            {/* Input Wrapper */}
            <div style={{ flex: 1 }}>
                

<input
  placeholder="Write your instruction"
  className="bg-[#282829] border-none focus:outline-none text-[14px] text-white  rounded-md  p-2 md:py-2 md:px-3.5 w-full"
/>

            </div>

            {/* Button */}
            <button
                style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    marginLeft: "0.5rem", // Adds space between Input and Button
                    padding: 0, 
                    marginBottom: 0,
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
