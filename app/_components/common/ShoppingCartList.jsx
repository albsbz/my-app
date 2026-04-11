import ShoppingCartItem from "./ShoppingCartItem";

function ShoppingCartList({ cart }) {
  return (
    <div className="flex flex-direction-column align-middle justify-center">
      <div className="mt-4 grid grid-cols-[minmax(0, 1fr)_minmax(0, 1fr)_minmax(0, 1fr)_minmax(0, 25px)] gap-4">
        {cart.length
          ? [...cart]
              .reverse()
              .map((product) => (
                <ShoppingCartItem key={product.id} product={product} />
              ))
          : "Empty cart"}
      </div>
    </div>
  );
}

export default ShoppingCartList;
