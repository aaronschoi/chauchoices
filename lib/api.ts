import { TPosts, TSlugs } from "../types/apiTypes";

const SLUGS: string = process.env.SLUGS_URL || "none";

export const getSlugs = async () : Promise<TSlugs> => {
  const res = await fetch("https://0opqa2sj4b.execute-api.us-west-1.amazonaws.com/chauchoisays/");
  const json = await res.json();
  console.log(json)

  if (json.errors) {
    console.log(json.errors);
    throw new Error(`slugs failed to fetch`);
  }
  return json;
};
