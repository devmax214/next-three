export function localStorageAvailable() {
  try {
    const key = "localstorage_available_test_key";
    window.localStorage.setItem(key, key);
    window.localStorage.removeItem(key);
    return true;
  } catch (error) {
    return false;
  }
}

export function localStorageGetItem(key: string, defaultValue = "") {
  const storageAvailable = localStorageAvailable();

  let value;

  if (storageAvailable) {
    value = localStorage.getItem(key) || defaultValue;
  }

  return value;
}
