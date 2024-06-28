import { shopifyFetch } from "../shopify-api-service/shopify-api-fetch";
export async function getAllProducts() {
  try {
    const response = await shopifyFetch("products.json");
    return response?.data?.products;
  } catch (error) {
    console.error("Error:", error);
    return [];
  }
}
