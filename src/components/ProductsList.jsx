import Product from "./Product";
import useProducts from "../hooks/useProducts";
import Loader from "./Loader";

function ProductsList() {
  const { products, isLoading } = useProducts();

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>
        {isLoading ? <Loader /> : (
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <Product product={product} key={product.id} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductsList;
