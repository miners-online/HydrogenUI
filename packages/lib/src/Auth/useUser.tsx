"use client";

import React, {
  createContext,
  useContext,
  useMemo,
  useState,
  ReactNode,
} from "react";
import { User } from "./user";

type UserContextValue = {
  user: User | null;
  setUser: (user: User | null) => void;
};

const UserContext = createContext<UserContextValue | undefined>(undefined);

export function UserProvider({
  initialUser = null,
  children,
}: {
  initialUser?: User | null;
  children: ReactNode;
}) {
  const [user, setUser] = useState<User | null>(initialUser);

  const value = useMemo(
    () => ({ user, setUser }),
    [user]
  );

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser(): UserContextValue {
  const ctx = useContext(UserContext);
  if (!ctx) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return ctx;
}
