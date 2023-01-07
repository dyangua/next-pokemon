export const saveOnLocalStorage = (key: string, item: any) => {
  localStorage.setItem(key, item);
};

export const getFromLocalStorage = (key: string) => {
  return localStorage.getItem(key) || "[]";
};
