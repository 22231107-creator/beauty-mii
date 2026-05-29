import ProductCard from '../components/ProductCard';

const productsList =
 [{ id: 1, name: "Hydrating Cream", price: "$25.00", image: "https://images.unsplash.com/photo-1608248597481-496100c8c836?w=500" },
  { id: 2, name: "Vitamin C Serum", price: "$35.00", image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=500" },
  { id: 3, name: "Matte Lipstick", price: "$15.00", image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=500" },
  { id: 4, name: "Eyeshadow Palette", price: "$40.00", image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=500" }
];


function Products() {
  return (
    <>
      <h2 className="section-title">Best Sellers</h2>
      <div className="products-row">
        {productsList.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </>
  );
}

export default Products;