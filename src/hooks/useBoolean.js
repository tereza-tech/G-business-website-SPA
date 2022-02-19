import { useState, useCallback } from "react";

export const useBoolean = () => {
  const [value, setValue] = useState(false);

  const toggle = useCallback(() => setValue((value) => !value), []);
  const setTrue = useCallback(() => setValue(true), []);
  const setFalse = useCallback(() => setValue(false), []);

  return [value, setTrue, setFalse, toggle];
};
