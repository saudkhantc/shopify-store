export const ProductCard = ({ node }) => {
  const { title, id } = node;
  return (
    <div className="flex flex-col  items-center p-5 max-w-[400px] border rounded-md mt-5">
      <h1>Product Id : {id}</h1>
      <h1>Product Title : {title}</h1>
    </div>
  );
};
