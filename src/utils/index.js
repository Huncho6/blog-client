export const storeToLocalStorage = (key, value) => {
    if (!value) return;
    localStorage.setItem(key, value); 
  };
  

export const getFromLocalStorage = (key) => {
  let value = localStorage.getItem(key);
  if (!value) {
    return null;
  } else {
    return value; 
  }
};

const token = getFromLocalStorage("token");
