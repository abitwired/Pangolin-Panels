import { createContext, useReducer } from "react";
import { ContextBridge } from "electron";
import { CoreApi } from "@kubernetes/client-node";

export type AppContextType = {
  electron: ContextBridge;
  k8sApi: CoreApi | null;
};

const initialState: AppContextType = {
  electron: window.electron,
  k8sApi: null,
};

export const AppContext = createContext(null);

/**
 * Reducer function to update the state based on the action
 * @param state  The current state
 * @param action The action to be performed
 * @returns The new state
 */
function reducer(state: AppContextType, action: Action) {
  switch (action.type) {
    case ActionTypes.SET_K8S_API: {
      return { ...state, k8sApi: action.payload };
    }
    case ActionTypes.SET_ELECTRON: {
      return { ...state, electron: action.payload };
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

enum ActionTypes {
  SET_K8S_API = "setK8sApi",
  SET_ELECTRON = "setElectron",
}

interface SetK8sApiAction {
  type: ActionTypes.SET_K8S_API;
  payload: CoreApi;
}

interface SetElectronAction {
  type: ActionTypes.SET_ELECTRON;
  payload: ContextBridge;
}

type Action = SetK8sApiAction | SetElectronAction;
