import React from "react";
import styled from "styled-components";

const InputTextArea = styled.textarea`
  border-radius: 1rem;
  border: 1px solid #333;
  outline: none;
  padding: 2rem;
  font-family: var(--primary-font);
  width: 100%;
`;

const TextArea = ({ value, setValue, rows, placeholder, readOnly }) => {
  return (
    <InputTextArea
      readOnly={readOnly || false}
      rows={rows || 5}
      placeholder={placeholder || "placeholder"}
      onChange={(e) => setValue(e.target.value)}
      value={value}
    />
  );
};

export default TextArea;
