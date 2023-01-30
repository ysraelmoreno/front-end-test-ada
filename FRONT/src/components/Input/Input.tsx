import {
  ChangeEvent,
  forwardRef,
  InputHTMLAttributes,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { useInputEssentials } from "../../hooks/useInputEssentials";
import { InputContainer, InputWrapper, Label, LabelContainer } from "./styles";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const Input = forwardRef(
  ({ label, onChange, defaultValue, ...props }: IInputProps, ref) => {
    const { isFilled, isFocused, setIsFilled, setIsFocused } =
      useInputEssentials();

    const inputRef = useRef<HTMLInputElement>(null);

    const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
      setIsFilled(!!event.target.value);

      if (!!onChange) {
        onChange(event);
      }
    }, []);

    useImperativeHandle(ref, () => inputRef.current, []);

    useEffect(() => {
      if (defaultValue) {
        setIsFilled(true);
      }
    }, [defaultValue]);

    return (
      <InputWrapper>
        <LabelContainer isFilled={isFilled} isFocused={isFocused}>
          <Label>{label}</Label>
        </LabelContainer>

        <InputContainer
          ref={inputRef}
          onChange={handleChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          defaultValue={defaultValue}
          {...props}
        />
      </InputWrapper>
    );
  }
);

export default Input;
