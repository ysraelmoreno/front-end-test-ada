import { TextareaHTMLAttributes, useEffect } from "react";
import { useInputEssentials } from "../../hooks/useInputEssentials";
import { TextAreaContainer, TextAreaLabel, TextAreaWrapper } from "./styles";

interface ITextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  id: string;
  label: string;
}

function TextArea({
  id,
  label,
  onChange,
  defaultValue,
  ...props
}: ITextAreaProps) {
  const { isFilled, isFocused, setIsFilled, setIsFocused } =
    useInputEssentials();

  useEffect(() => {
    if (defaultValue) {
      setIsFilled(true);
    }
  }, [defaultValue]);

  return (
    <TextAreaWrapper>
      <TextAreaLabel isFilled={isFilled} isFocused={isFocused} htmlFor={id}>
        {label}
      </TextAreaLabel>
      <TextAreaContainer
        onChange={(event) => {
          if (onChange) {
            onChange(event);
          }

          setIsFilled(!!event.target.value);
        }}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        id={id}
        defaultValue={defaultValue}
        {...props}
      ></TextAreaContainer>
    </TextAreaWrapper>
  );
}

export default TextArea;
