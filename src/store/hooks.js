import Context from "./Context";
import { useContext } from "react";

export const useStore = () => {
  // return useContext(Context);
  const [state, dispatch] = useContext(Context);
  return [state, dispatch];
};
