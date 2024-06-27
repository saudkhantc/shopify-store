const endpoint = process.env.SHOPIFY_STORE_DOMAIN;
const key = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN;
import axios from 'axios';

export async function shopifyFetch() {
  try {
    const result = await axios({
      method: 'GET',
      url: endpoint,
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Access-Token': key,
      },
    });

    return {
      status: result.status,
      data: result.data,
    };
  } catch (error) {
    console.error("Error:", error);
    return {
      status: 500,
      error: "Error receiving data",
    };
  }
}
