'use client';

import { createContext, ReactNode, useContext } from 'react';

type EnvironmentContext = {
  SPANISH_EMAIL: string;
  FALLBACK_EMAIL: string;
};
export const EnvironmentContext = createContext<EnvironmentContext | null>(
  null
);

export function useEnvironment() {
  const context = useContext(EnvironmentContext);
  if (context == null)
    throw new Error('EnvironmentContext must be used within Provider');

  return context;
}
type EnvironmentProviderProps = {
  value: EnvironmentContext;
  children: ReactNode;
};
export function EnvironmentProvider({
  value,
  children,
}: EnvironmentProviderProps) {
  return (
    <EnvironmentContext.Provider value={value}>
      {children}
    </EnvironmentContext.Provider>
  );
}
