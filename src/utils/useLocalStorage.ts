import { useEffect, useState } from "react";

type UseLocalStorage = (key: string, initialValue?: any) => [any, Function];

const useLocalStorage: UseLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    try {
      const item = localStorage.getItem(key);

      return item ? JSON.parse(item) : initialValue;
    } catch (err) {
      console.error("Error reading local storage", err);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (err) {
      throw err;
    }
  }, [key, value]);

  return [value, setValue];
};

export default useLocalStorage;
