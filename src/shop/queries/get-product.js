import { shopifyFetch } from "../shopify-api-service/shopify-api-fetch";


export async function getAllProducts() {
  try {
    const response = await shopifyFetch();
    if (response.status !== 200) {
      throw new Error('Error fetching products');
    }
    return response.data.products;
  } catch (error) {
    console.error("Error:", error);
    return [];
  }
}

// export async function getAllProducts() {
//   return shopifyFetch({
//     query: `{
//       products(first: 5) {
//         edges {
//           node {
//             id
//             title
//             description
//             images(first: 1) {
//               edges {
//                 node {
//                   src
//                 }
//               }
//             }
//           }
//         }
//       }
//     }`
//   });
// }
