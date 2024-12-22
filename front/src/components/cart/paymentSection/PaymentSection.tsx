const PaymentSection = () => {
  return (
    <div className="payment-section flex-2 bg-white rounded-lg p-5">
      <h2 className="text-xl mb-5">Payment details</h2>
      <form>
        <label htmlFor="card-type" className="text-sm mb-1 block">
          Card Type
        </label>
        <select
          id="card-type"
          className="p-2 mb-4 border border-gray-300 rounded"
        >
          <option value="mastercard">Mastercard</option>
          <option value="visa">Visa</option>
        </select>

        <label htmlFor="cardholder-name" className="text-sm mb-1 block">
          Cardholder Name
        </label>
        <input
          type="text"
          id="cardholder-name"
          placeholder="Nombre como en la tarjeta"
          className="p-2 mb-4 border border-gray-300 rounded w-full"
        />

        <label htmlFor="card-number" className="text-sm mb-1 block">
          Card Number
        </label>
        <input
          type="text"
          id="card-number"
          placeholder="XXXX XXXX XXXX XXXX"
          className="p-2 mb-4 border border-gray-300 rounded w-full"
        />

        <div className="expiry-cvv flex justify-between">
          <div className="flex-1 mr-2">
            <label htmlFor="expiry-date" className="text-sm mb-1 block">
              Expiry Date
            </label>
            <input
              type="text"
              id="expiry-date"
              placeholder="MM/AAAA"
              className="p-2 mb-4 border border-gray-300 rounded w-full"
            />
          </div>
          <div className="flex-1">
            <label htmlFor="cvv-number" className="text-sm mb-1 block">
              CVV
            </label>
            <input
              type="text"
              id="cvv-number"
              placeholder="xxx"
              className="p-2 mb-4 border border-gray-300 rounded w-full"
            />
          </div>
        </div>

        <button className=" bg-prim-cober text-white  font-semibold opacity-100 hover:bg-opacity-75 hover:bg-prim-green transition duration-300 py-3 w-full mt-5">
          Buy Now
        </button>
      </form>

      {/* Additional Options */}
      <button className="bg-sec-brown border border-gray-700 text-gray-700 py-2 w-full mt-3 hover:bg-opacity-75">
        Collect in Store
      </button>
      <button className=" bg-sec-brown border border-gray-700 text-gray-700 py-2 w-full mt-3 hover:bg-opacity-75">
        Gift Wrapping
      </button>

      {/* Price Summary */}
      <div className="price-summary mt-5">
        <p className="mb-1">Subtotal: $1,350</p>
        <p className="mb-1">Shipping: Free</p>
        <p className="font-bold">Total: $1,350</p>
      </div>
    </div>
  );
};
export default PaymentSection;
