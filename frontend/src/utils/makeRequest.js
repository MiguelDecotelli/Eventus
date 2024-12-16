import api from "../services/api";

/**
 * Makes an HTTP request using the given parameters.
 *
 * @param {string} url - The endpoint URL.
 * @param {string} method - The HTTP method (e.g., 'GET', 'POST', etc.).
 * @param {Object} [data] - Optional payload for the request (e.g., POST body).
 * @param {string} [token] - Optional Bearer token for authorization.
 * @returns {Promise<any>} - The response data or an error object.
 */
export async function makeRequest(url, method, data = undefined, token = undefined) {
  try {
    const headers = {
      "Content-Type": "application/json",
      ...(token && { Authorization: `Bearer ${token}` }), // Adds Authorization header if a token is provided.
    };

    const response = await api({
      url,
      method,
      headers,
      data,
    });

    return response.data;
  } catch (error) {
    // Handle HTTP errors explicitly
    if (error.response) {
      console.error("HTTP error:", error.response.data);
      throw new Error(`HTTP Error: ${error.response.status} - ${error.response.statusText}`);
    } else if (error.request) {
      console.error("No response received from server:", error.request);
      throw new Error("No response received from server. Please check your connection.");
    } else {
      console.error("Request setup error:", error.message);
      throw new Error("Error creating the request: " + error.message);
    }
  }
}
