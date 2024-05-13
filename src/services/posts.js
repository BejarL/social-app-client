import { makeRequest } from "./makeRequest";

export function getPosts() {
  return makeRequest("/posts");
}

export function getPost(id) {
  return makeRequest(`/posts/${id}`);
}

export function createPost(data) {
  return makeRequest("/posts", {
    method: "POST",
    data,
    headers: { "Content-Type": "application/json" }
  })
}