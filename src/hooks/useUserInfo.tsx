import { UserContext } from "@/context";
import { useContext } from "react";

export const useUserInfo = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUserInfo must be used within an UserProvider');
  }
  return context;
};
