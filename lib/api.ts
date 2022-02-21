const API_URL : string = process.env.MAIN_URL || "none";

async function fetchAPI() {
  const res = await fetch(API_URL);
  const json = await res.json();
  console.log(json)

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
