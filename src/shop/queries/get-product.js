import { shopifyFetch } from "../shopify-api-service/shopify-api-fetch";


export async function getAllProducts() {
  return shopifyFetch({
    query: `{
      products(first: 5) {
        edges {
          node {
            id
            title
            description
            images(first: 1) {
              edges {
                node {
                  src
                }
              }
            }
          }
        }
      }
    }`
  });
}
