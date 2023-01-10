import { useEffect, useState } from "react";

export function useLocaleStorage<T>(
  key: string,
  initialValue: T
): [T, (value: T) => void] {
  const [searchTerm, setSearchTerm] = useState<T>(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(searchTerm));
  }, [searchTerm]);

  return [searchTerm, setSearchTerm];
}
