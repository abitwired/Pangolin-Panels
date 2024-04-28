import { createContext, useReducer } from "react";

export type AppContextType = {
  k8s: {
    client: {
      status: "connected" | "connecting" | "disconnected";
    };
  };
};

const initialState: AppContextType = {
  k8s: {
    client: {
      status: "disconnected",
    },
  },
};

export const AppContext = createContext(null);
export const AppDispatchContext = createContext(null);

/**
 * Reducer function to update the state based on the action
 * @param state  The current state
 * @param action The action to be performed
 * @returns The new state
 */
export function reducer(state: AppContextType, action: Action) {
  switch (action.type) {
    case ActionTypes.K8S_CLIENT_STATUS: {
      return {
        ...state,
        k8s: {
          client: {
            status: action.payload,
          },
        },
      };
    }
    default: {
      throw Error("Unknown action");
    }
  }
}

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [appContext] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={appContext}>{children}</AppContext.Provider>
  );
}

export enum ActionTypes {
  K8S_CLIENT_STATUS,
}

interface SetK8sApiAction {
  type: ActionTypes.K8S_CLIENT_STATUS;
  payload: AppContextType["k8s"]["client"]["status"];
}

type Action = SetK8sApiAction;
