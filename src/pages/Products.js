import ProductCard from '../components/ProductCard';

const productsList = [
  { id: 1, name: "Hydrating Cream", price: "$25.00", image: "/images/skincare1.jpg" },
  { id: 2, name: "Vitamin C Serum", price: "$35.00", image: "/images/skincare2.jpg" },
  { id: 3, name: "Matte Lipstick", price: "$15.00", image: "/images/makeup1.jpg" },
  { id: 4, name: "Eyeshadow Palette", price: "$40.00", image: "/images/makeup2.jpg" }
];

function Products() {
  return (
    <>
      <h2 className="section-title">Best Sellers</h2>
      <div className="products-row">
        {productsList.map(product => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </>
  );
}

export default Products;