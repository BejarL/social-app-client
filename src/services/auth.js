import { makeRequest } from "./makeRequest";

export async function loginUser({ email, password }) {
    return makeRequest("/auth/login", {
        method: "POST",
        data: { email, password },
        headers: { "Content-Type": "application/json" }
    });
}

export async function registerUser({ name, email, password }) {
    return makeRequest("/auth/register", {
        method: "POST",
        data: { name, email, password },
        headers: { "Content-Type": "application/json" }
    });
}

export async function logoutUser() {
    return makeRequest("/auth/logout", {
        method: "POST"
    });
}

export async function getCurrentUser() {
    return makeRequest("/auth/me");
}