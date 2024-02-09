import { useEffect } from "react";

export function useKey(key, action) {
  useEffect(() => {
    const esc = (e) => {
      if (e.code.toLowerCase() === key.toLowerCase()) {
        action();
      }
    };
    document.addEventListener("keydown", esc);

    return () => {
      document.removeEventListener("keydown", esc);
    };
  }, [action, key]);
}
