const API_URL: string =
  // process.env.WP_API_URL || 
  "https://jsonplaceholder.typicode.com/posts";

async function fetchAPI() {
  const res = await fetch(API_URL);
  const json = await res.json();

  //error handling
  if (json.errors) {
    console.log(json.errors);
    throw new Error("Failed to fetch API");
  }
  return json;
}

export async function getAllPosts() {
  const data = await fetchAPI();
  return data;
}
