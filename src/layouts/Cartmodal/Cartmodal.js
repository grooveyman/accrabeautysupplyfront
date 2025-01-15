import React from "react";
import Modal from "../../components/modal/Modal";
import { useContext } from "react";
import { ModalContext } from "../../context";
import XIcon from "../Header/components/XIcon";
import { Link } from "react-router-dom";
import image2 from "../../assets/images/cosm.png";
import image3 from "../../assets/images/hairagain.jpg";
import image4 from "../../assets/images/darkxlovely.jpg";
import image1 from "../../assets/images/art3.jpg";

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
  {
    id: 5,
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

const Cartmodal = () => {
  const { cartOpen, closeCart } = useContext(ModalContext);
  return (
    <Modal
      customstyle={`bg-gray-200 w-4/5 sm:w-6/12 lg:w-[35%] ${
        cartOpen
          ? "animate__animated animate__slideInRight"
          : "animate__animated animate__slideOutRight"
      } min-h-screen h-full fixed top-0 right-0 z-[1001] p-3 flex flex-col`}
      onClose={closeCart}
    >
      <div className="flex items-center justify-between border-b border-gray-200 h-[8%]">
        <h3 className="text-2xl font-black text-gray-600 max-w-44">My Bag</h3>
        <XIcon handleClick={closeCart} />
      </div>

      <div className="flex flex-col flex-1 h-[92%]">
        <div className="overflow-y-auto border-b h-[66%] border-gray-300">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex gap-3 py-3 border-t border-gray-300"
            >
              <img
                src={item.image}
                alt={item.name}
                className="h-20 w-20 object-cover rounded-md"
              />
              <div className="flex-1 flex justify-between lg:flex-row">
                <div className="flex-1 flex flex-col justify-between">
                  <h2 className="text-base font-semibold">{item.name}</h2>
                  <div className="flex justify-between">
                    <p className="text-gray-600">Qty 1</p>
                    <p className="text-gray-800">${item.price.toFixed(2)}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="border-t border-gray-200 h-[34%]">
          <div className="flex justify-between text-base font-medium text-gray-900 mt-3">
            <p>Subtotal</p>
            <p>$262.00</p>
          </div>
          <p className="mt-0.5 text-sm text-gray-500">
            Shipping and taxes calculated at checkout.
          </p>
          <div className="mt-4">
            <Link className="flex items-center justify-center rounded-md border border-transparent bg-slate-950 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-slate-900 mb-3">
              Checkout
            </Link>
            <div className="text-center">
              <Link className="font-medium text-slate-950 hover:text-slate-900" to={'/cart'} onClick={closeCart}>
                View Bag(full)
                <span aria-hidden="true"> &rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default Cartmodal;
