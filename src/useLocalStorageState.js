import { useState, useEffect } from "react";

export function useLocalStorageState(initialState, keyname) {
  const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem(keyname);
    if (!storedValue) {
      return initialState;
    }
    return JSON.parse(storedValue);
  });

  useEffect(() => {
    localStorage.setItem(keyname, JSON.stringify(value));
  }, [value, keyname]);

  return [value, setValue];
}
