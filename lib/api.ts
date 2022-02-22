import { TPosts, TSlugs } from "../types/apiTypes";

async function fetchAPI() {
  try {
    const res = await fetch(API_URL);
    const json = await res.json();
    
    if (json.errors) {
      console.log(json.errors);
      throw new Error("Failed to fetch API");
    }
    return json;
  } catch (error) {
    console.log(error);
  }
}

export async function getAllPosts() {
  const data = await fetchAPI();
  return data;
}