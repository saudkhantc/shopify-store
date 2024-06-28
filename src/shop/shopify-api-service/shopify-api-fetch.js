const endpoint = process.env.SHOPIFY_STORE_DOMAIN;
const key = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN;

export async function shopifyFetch(query) {
  try {
    const response = await fetch(endpoint + query, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Access-Token": key,
      },
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    return {
      status: response.status,
      data: data,
    };
  } catch (error) {
    console.error("Error:", error);
    return {
      status: 500,
      error: "Error receiving data",
    };
  }
}
