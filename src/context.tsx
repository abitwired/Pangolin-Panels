import { createContext, useContext, useReducer, useState } from "react";

export type AppContextType = {
  client: {
    status: "connected" | "connecting" | "disconnected" | "error";
    message?: string;
  };
  router: {
    current?: string;
  };
};

const initialState: AppContextType = {
  client: {
    status: "disconnected",
  },
  router: {},
};

export const AppContext = createContext(null);
export const AppDispatchContext = createContext(null);

export const useAppContext = () => useContext(AppContext);

/**
 * Reducer function to update the state based on the action
 * @param state  The current state
 * @param action The action to be performed
 * @returns The new state
 */
export function reducer(state: AppContextType, action: Action) {
  switch (action.type) {
    case ActionTypes.CLIENT_STATUS: {
      return {
        ...state,
        client: action.payload,
      };
    }
    default: {
      throw Error("Unknown action");
    }
  }
}

export function AppProvider({ children }: { children: React.ReactNode }) {
  const appContext = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={appContext}>{children}</AppContext.Provider>
  );
}

export enum ActionTypes {
  CLIENT_STATUS,
}

interface SetClientAction {
  type: ActionTypes.CLIENT_STATUS;
  payload: AppContextType["client"];
}

type Action = SetClientAction;
