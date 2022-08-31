import { createContext, useContext } from "react";
import observableStore from "./AppStore";

const store = {
    darkTheme: observableStore.darkTheme
};

export const StoreContext = createContext(store);

export const useStore = () => {
    return useContext(StoreContext) as typeof store;
}

export default store;