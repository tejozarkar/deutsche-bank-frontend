export async function getSecurityQuestion(username) {
   const response = await fetch(`/users/security-question/${username}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
   });
   return await response.json();
}

export async function getMyDetails() {
   const response = await fetch(`/users/me`, {
      method: "GET",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${localStorage.getItem("jwt-token")}` },
   });
   return await response.json();
}

export async function login(content) {
   const response = await fetch("/users/authenticate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(content),
   });
   return await response.json();
}

export async function signup(content) {
   const response = await fetch("/users/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(content),
   });
   return await response.json();
}
