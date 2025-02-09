"use client";

import { createFavStore } from "@/Stores/favstore";
import {
  type ReactNode,
  createContext,
  useRef,
  useContext,
  useEffect,
} from "react";
import { useStore } from "zustand";
import { getFavFromLocal } from "@/utils";

export type FavStoreApi = ReturnType<typeof createFavStore>;

export const FavStoreContext = createContext<FavStoreApi | undefined>(
  undefined
);

export interface FavStoreProviderProps {
  children: ReactNode;
}

export const FavStoreProvider = ({ children }: FavStoreProviderProps) => {
  const storeRef = useRef<FavStoreApi>(null);

  if (!storeRef.current) {
    storeRef.current = createFavStore();
  }

  return (
    <FavStoreContext.Provider value={storeRef.current!}>
      <SetInitialState />
      {children}
    </FavStoreContext.Provider>
  );
};

export const useFavStore = <T,>(selector: (store: FavStore) => T): T => {
  const favStoreContext = useContext(FavStoreContext);

  if (!favStoreContext) {
    throw new Error(`useFavStore must be used within FavStoreProvider`);
  }

  return useStore(favStoreContext, selector);
};

function SetInitialState() {
  const { setInitial } = useFavStore((state) => state);

  useEffect(() => {
    setInitial(getFavFromLocal());
  }, []);
  return null;
}
