import { Dispatch, SetStateAction, useEffect, useState } from "react";

const useLocaleStorage = (
  key: string
): [string[], Dispatch<SetStateAction<string[]>>] => {
  const [value, setValue] = useState<string[]>(() => {
    const list = localStorage.getItem(key);
    if (!list) {
      return [];
    }
    return JSON.parse(list);
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};

export default useLocaleStorage;
