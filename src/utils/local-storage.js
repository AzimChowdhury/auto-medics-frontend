export const setToLocalStorage = (key, token) => {
  if (!key || typeof window === "undefined") {
    return "";
  }
  return localStorage.setItem(key, token);
};

export const getFromLocalStorage = (key) => {
  if (!key || typeof window === "undefined") {
    return "";
  }
  return localStorage.getItem(key);
};


export const parser = async (data) => {
  const parsedData = await JSON.parse(data)
  return parsedData
}