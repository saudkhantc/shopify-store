import Image from "next/image";

export const ProductCard = ({ node: { id, title, description, images } }) => {
  
  return (
    <div>
      <div>
        {images.edges.map((img, index) => (
          <div className="relative w-44 h-44" key={index}>
            <Image src={img?.node?.src} fill />
          </div>
        ))}
      </div>
      <div>
        <h1>{title}</h1>
        <p>{description?.slice(0, 100)}...</p>
      </div>
    </div>
  );
};
