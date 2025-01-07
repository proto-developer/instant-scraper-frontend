import { Input } from '@mantine/core';
import Image from 'next/image';

const InstructionInput = () => {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                backgroundColor: "#282829",
                borderRadius: "0.5rem",
                padding: "1%",
                paddingRight: "0.5%",
                border: "1px solid #ffffff",
                marginBottom: "2%",
            }}
        >
            <Input
                placeholder="Write your instruction"
                styles={{
                    input: {
                        backgroundColor: "transparent",
                        width: "395%",
                        color: "#FFF",
                        border: "none",
                        outline: "none",
                        padding: "2.5% 5%",
                    },
                }}
                sx={{
                    flex: 1,
                }}
            />
            <button
                style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                }}
            >
                <Image
                    src="/sendLogo.svg"
                    alt="input send button"
                    width={40}
                    height={10}
                />
            </button>
        </div>
    );
};

export default InstructionInput;
