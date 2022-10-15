/**
 * Saving the key to the local storage
 * @param {string} key 
 * @param {string } value 
 */
export function save(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

/**
 * Loading the key from the Local Storage
 * @param {string} key 
 * @returns 
 */
export function load (key) {
try {
  const value = localStorage.getItem(key);
  return JSON.parse(value);
} catch {
  return null
}
}

// export function remove(key) {
//   localStorage.removeItem(key);
// }