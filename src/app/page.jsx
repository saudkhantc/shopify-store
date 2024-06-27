import { getAllProducts } from "../shop/queries/get-product";
import { ProductCard } from "../components/product-card";

export default async function Home() {
  const {
    body: {
      data: {
        products: { edges },
      },
    },
  } = await getAllProducts();


  return (
    <div className="flex gap-3">
      {edges?.map((item) => {
        return <ProductCard node={item.node} key={item.node.id} />;
      })}
    </div>
  );
}
