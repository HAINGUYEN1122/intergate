import { useState } from 'react';

export const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  return {
    value,
    setValue,
    reset: () => setValue(''),
    onChange: (event) => {
      setValue(event.target.value);
    },
  };
};

export const useCheckbox = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  return {
    value,
    setValue,
    reset: () => setValue(false),
    onChange: (event) => {
      setValue(event.target.checked);
    },
  };
};

export default useInput;
