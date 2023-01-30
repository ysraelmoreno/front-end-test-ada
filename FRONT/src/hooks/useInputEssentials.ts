import { useState } from "react";

export const useInputEssentials = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  return { isFocused, setIsFocused, isFilled, setIsFilled };
};
