import { load } from "../storage/index.mjs";

/**
 * Function to create the header for the API requests
 * Token is passed in from the LocalStorage
 * @returns headers 
 */

export function headers() {
  const token = load("token");
  return {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    }
}

/**
 * Function to authenticate Fetch
 * to the API call
 * @param {string} url 
 * @param {object} options 
 * @returns 
 */

export async function authFetch (url, options = {}) {
  return fetch (url, {
    ...options,
    headers: headers()
    })
}