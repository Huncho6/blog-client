
import { getFromLocalStorage } from ".";

const jwt_decode = (await import("jwt-decode")).default;


export const checkIsAdmin = () => {
  const token = getFromLocalStorage("token");
  if (!token) return false;

  try {
    const decodedToken = jwt_decode(token);
    return decodedToken.role === "admin";
  } catch (error) {
    console.error("Invalid token:", error);
    return false;
  }
};


