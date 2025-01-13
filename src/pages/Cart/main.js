import React from "react";
import image2 from "../../assets/images/cosm.png";
import image3 from "../../assets/images/hairagain.jpg";
import image4 from "../../assets/images/darkxlovely.jpg";
import image1 from "../../assets/images/art3.jpg";
import CustomSlider from "../../components/Slider";
import Decrementbtn from "../../components/Decrementbtn";
import Incrementbtn from "../../components/Incrementbtn";
import { useFetch } from "../../hooks";
import { Endpoints } from "../../services";
import Spinner from "../../components/Spinner";
// import Emptycart from "./components/Emptycart";

const cartItems = [
  {
    id: 1,
    name: "Basic Tee",
    image: image2,
    color: "Sienna",
    size: "Large",
    price: 32.0,
    inStock: true,
    quantity: 1,
    shippingTime: "In stock",
  },
  {
    id: 2,
    name: "Basic Tee",
    image: image3,
    color: "Black",
    size: "Large",
    price: 32.0,
    inStock: false,
    quantity: 1,
    shippingTime: "Ships in 3-4 weeks",
  },
  {
    id: 3,
    name: "Basic Tee",
    image: image1,
    color: "Sienna",
    size: "Large",
    price: 32.0,
    inStock: true,
    quantity: 1,
    shippingTime: "In stock",
  },
  {
    id: 4,
    name: "Basic Tee",
    image: image4,
    color: "Black",
    size: "Large",
    price: 32.0,
    inStock: false,
    quantity: 1,
    shippingTime: "Ships in 3-4 weeks",
  },
];

const ShoppingCart = () => {
    const { data: recommendedData, isLoading: isFetching } = useFetch(
      ["recommendedcart"],
      Endpoints.PRODUCTS2(8, 0)
    );
    const recommended = recommendedData?.results
  // console.log('this is cart')
  // const [cartItems, setCartItems] = useState([]);

  //   const handleQuantityChange = (id, value) => {
  //     setCartItems((prevItems) =>
  //       prevItems.map((item) =>
  //         item.id === id ? { ...item, quantity: value } : item
  //       )
  //     );
  //   };

  //   const handleRemoveItem = (id) => {
  //     setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  //   };

  //   const subtotal = cartItems.reduce(
  //     (acc, item) => acc + item.price * item.quantity,
  //     0
  //   );
  //   const shipping = 5.0;
  //   const tax = 8.32;
  //   const total = subtotal + shipping + tax;

  // return <Emptycart />

  return (
    <main>
      <section className="max-w-full py-4 px-4">
        <div className="max-w-7xl mx-auto">
          <div>
            <h3 className="mt-6 mb-4 font-bold text-2xl text-slate-950">
              My Bag (4)
            </h3>
          </div>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1">
              {cartItems.map((item) => (
                <div key={item.id} className="flex gap-4 py-4 md:py-8 border-y">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-20 w-20 md:w-44 md:h-44 object-cover rounded-md"
                  />
                  <div className="flex-1 flex flex-col justify-between lg:flex-row">
                    <div className="flex-1">
                      <h2 className="text-lg font-semibold">{item.name}</h2>
                      <p className="text-sm text-gray-500">{item.size}</p>
                      <p className="text-gray-800">${item.price.toFixed(2)}</p>
                    </div>
                    <div className="flex lg:justify-center mt-6 md:mt-0 space-x-4 lg:flex-1">
                      {/* Decrement Button */}
                      <button
                        className="flex items-center justify-center w-8 h-8 border rounded-full text-gray-600 hover:text-red-600 hover:bg-gray-100"
                        type="button"
                      >
                        <Decrementbtn />
                      </button>
                      <div className="text-xl font-medium text-gray-800">1</div>
                      {/* Increment Button */}
                      <button
                        className="flex items-center justify-center w-8 h-8 border rounded-full text-gray-600 hover:text-green-600 hover:bg-gray-100"
                        type="button"
                      >
                        <Incrementbtn />
                      </button>
                    </div>
                  </div>
                  <div className="text-right">
                    <button className="text-gray-500 hover:text-red-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="size-5"
                      >
                        <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="w-full md:sticky top-24 md:w-5/12 lg:w-1/3 p-6 border rounded-lg bg-gray-50 max-h-[360px]">
              <h2 className="text-xl font-bold mb-4">Order Summary</h2>
              <div className="flex justify-between border-b mb-2 py-2">
                <span className="text-base/7 text-gray-600">Subtotal</span>
                <span>$10.00</span>
              </div>
              <div className="flex justify-between border-b mb-2 py-2">
                <span className="text-base/7 text-gray-600">
                  Shipping estimate
                  {/* <span className="text-gray-500 cursor-pointer">?</span> */}
                </span>
                <span>$5.00</span>
              </div>
              <div className="flex justify-between border-b mb-2 py-2">
                <span className="text-base/7 text-gray-600">
                  Tax estimate
                  {/* <span className="text-gray-500 cursor-pointer">?</span> */}
                </span>
                <span>$1.00</span>
              </div>
              <div className="flex justify-between font-bold text-lg mb-6">
                <span>Order total</span>
                <span>$16.00</span>
              </div>
              <button className="w-full bg-slate-950 text-white py-3 rounded-lg hover:bg-slate-900 transition">
                Checkout
              </button>
            </div>
          </div>
          <div className="mb-4 mt-8">
            <h2 className="font-bold text-2xl md:text-3xl text-slate-950 text-center md:text-left">
              Recommended for you
            </h2>
          </div>
          {isFetching ? (
              <Spinner />
            ) : (
              <CustomSlider data={recommended} link="#" />)}
        </div>
      </section>
    </main>
  );
};

export default ShoppingCart;
