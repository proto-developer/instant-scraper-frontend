"use client";
import { TextInput } from "@mantine/core";
import { useState } from "react";

type ScraperInputProps = {
  label?: string;
  placeholder?: string;
};

const SrcaperInput = ({ placeholder, label }: ScraperInputProps) => {
  const [inputValue, setInputValue] = useState("");
  return (
    <TextInput
      label={label}
      placeholder={placeholder}
      value={inputValue}
      onChange={(event) => setInputValue(event.currentTarget.value)}
    />
  );
};

export default SrcaperInput;
