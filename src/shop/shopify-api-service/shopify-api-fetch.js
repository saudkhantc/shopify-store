const endpoint = process.env.SHOPIFY_STORE_DOMAIN;
const key = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN;


export async function shopifyFetch({ query, variables }) {
  try {
    const body = JSON.stringify({ query, variables }); 

    const result = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Storefront-Access-Token": key,
      },
      body,
    });

    return {
      status: result.status,
      body: await result.json(),
    };
  } catch (error) {
    console.error("Error:", error);
    return {
      status: 500,
      error: "Error receiving data",
    };
  }
}

