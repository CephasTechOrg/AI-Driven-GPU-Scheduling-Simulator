const BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL ?? "http://127.0.0.1:8000";

async function request(path: string, init?: RequestInit) {
  const res = await fetch(`${BASE_URL}${path}`, {
    cache: "no-store",
    ...init,
  });

  if (!res.ok) {
    throw new Error(`Request failed: ${res.status}`);
  }

  return res.json();
}

export async function fetchState() {
  return request("/state", { method: "GET" });
}

export async function setMode(mode: "fifo" | "smart") {
  return request(`/mode/${mode}`, { method: "POST" });
}

export async function resetSimulation() {
  return request("/reset", { method: "POST" });
}
