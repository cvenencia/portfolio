import { useEffect, useState } from 'react';

type Reviver = (key: string, value: unknown) => unknown;
type InitialValue<T> = T extends () => unknown ? () => T : T;

function useStorage<T>(
  key: string,
  initialValue: InitialValue<T>,
  storageObject: Storage,
  reviver?: Reviver
) {
  const [value, setValue] = useState<T>(() => {
    const savedValue = storageObject.getItem(key);
    if (savedValue) return JSON.parse(savedValue, reviver);
    if (typeof initialValue === 'function') return initialValue();
    else return initialValue;
  });

  useEffect(() => {
    storageObject.setItem(key, JSON.stringify(value));
  }, [value, key, storageObject]);
  return [value, setValue] as const;
}

export function useLocalStorage<T>(
  key: string,
  initialValue: InitialValue<T>,
  reviver?: Reviver
) {
  return useStorage(key, initialValue, window.localStorage, reviver);
}

export function useSessionStorage<T>(
  key: string,
  initialValue: InitialValue<T>,
  reviver?: Reviver
) {
  return useStorage(key, initialValue, window.sessionStorage, reviver);
}
