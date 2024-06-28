import { shopifyFetch } from "../shopify-api-service/shopify-api-fetch";

export async function getAllProducts() {
  try {
    const response = await shopifyFetch("products.json");
    if (response.status !== 200) {
      throw new Error("Error fetching products");
    }
    return response.data.products;
  } catch (error) {
    console.error("Error:", error);
    return [];
  }
}
