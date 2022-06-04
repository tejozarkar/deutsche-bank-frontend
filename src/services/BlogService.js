export async function getBlogs() {
   const response = await fetch(`/blog`, {
      method: "GET",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${localStorage.getItem("jwt-token")}` },
   });
   return await response.json();
}

export async function getBlogHistory(id) {
   const response = await fetch(`/blog/history/${id}`, {
      method: "GET",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${localStorage.getItem("jwt-token")}` },
   });
   return await response.json();
}

export async function deleteBlog(id) {
   const response = await fetch(`/blog/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${localStorage.getItem("jwt-token")}` },
   });
   return await response.json();
}

export async function getMyBlogs() {
   const response = await fetch(`/blog/me`, {
      method: "GET",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${localStorage.getItem("jwt-token")}` },
   });
   return await response.json();
}

export async function getUnderReviewBlogs() {
   const response = await fetch(`/blog/status/under_review`, {
      method: "GET",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${localStorage.getItem("jwt-token")}` },
   });
   return await response.json();
}

export async function getBlog(id) {
   const response = await fetch(`/blog/details/${id}`, {
      method: "GET",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${localStorage.getItem("jwt-token")}` },
   });
   return await response.json();
}

export async function create(content) {
   const response = await fetch("/blog", {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${localStorage.getItem("jwt-token")}` },
      body: JSON.stringify(content),
   });
   return await response.json();
}

export async function edit(content) {
   const response = await fetch("/blog/edit", {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${localStorage.getItem("jwt-token")}` },
      body: JSON.stringify(content),
   });
   return await response.json();
}

export async function publish(id) {
   const response = await fetch(`/blog/status/published/${id}`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${localStorage.getItem("jwt-token")}` },
   });
   return await response.json();
}
