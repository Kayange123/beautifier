import { sanityClient } from "../../lib/sanity";

export const getProducts = async () => {
  const query = `*[_type == "product"]{
    _id,
    productTitle,
    slug,
    mainImage { asset->{ url }},
    bgImage { asset->{ url }},
    description,
    price,
    productType,
    categories[] ->{
      _id,
      title,
      mainImage { asset->{ url }},
    }
  }`;
  const posts = await sanityClient.fetch(query);
  return posts;
};
