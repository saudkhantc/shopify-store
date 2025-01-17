export const dynamic = "force-dynamic"
import { getAllProducts } from "../shop/queries/get-product";
import { ProductCard } from "../components/product-card";

export default async function Home() {
  const products = await getAllProducts();
  return (
    <div className="flex flex-wrap justify-center gap-3">
      {products?.length > 0 && products?.map((item) => {
        return <ProductCard node={item} key={item.id} />;
      })}
    </div>
  );
}
