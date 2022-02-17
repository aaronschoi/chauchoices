import { TPosts, TSlugs } from "../types/apiTypes";

const URL: string = process.env.API_URL || "none";

const fetchAPI = async (param: string) => {
  const res = await fetch(`${URL}/${param}`);
  const json = await res.json();

  if (json.errors) {
    console.log(json.errors);
    throw new Error(`fetching ${param} failed to fetch`);
  }
  return json;
};

export const getPosts = async () : Promise<TPosts> => fetchAPI("posts");

export const getSlugs = async () : Promise<TSlugs> => fetchAPI("slugs");
