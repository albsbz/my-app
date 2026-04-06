function QuantitySelector({ quantity, updateCartItemQuantity }) {
  return (
    <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 h-10 max-w-16">
      <input
        id="quantity"
        type="text"
        name="quantity"
        value={quantity}
        onChange={(e) => {
          const newQuantity = parseInt(e.target.value, 10);
          if (!isNaN(newQuantity)) {
            updateCartItemQuantity(newQuantity);
          }
        }}
        className="block min-w-0 grow p-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
      />
      <div className="grid shrink-0 grid-cols-1 focus-within:relative">
        <button
          type="button"
          className="flex h-5 items-center justify-center rounded-tl-md rounded-bl-md bg-gray-50 text-gray-600 hover:bg-gray-100 focus:outline-none   focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 pr-1"
          onClick={() => {
            updateCartItemQuantity(quantity + 1);
          }}
        >
          +
        </button>
        <button
          type="button"
          className=" flex h-5 items-center justify-center rounded-tl-md rounded-bl-md bg-gray-50 text-gray-600 hover:bg-gray-100 focus:outline-none  focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 pr-1"
          onClick={() => {
            updateCartItemQuantity(quantity - 1 > 0 ? quantity - 1 : 1);
          }}
        >
          -
        </button>
      </div>
    </div>
  );
}

export default QuantitySelector;
