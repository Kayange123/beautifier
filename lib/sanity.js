import { createClient, groq } from "@sanity/client";

export const sanityClient = createClient({
  projectId: "cg7ljmi5",
  dataset: "production",
  useCdn: true,
  apiVersion: "2023-07-04",
});
