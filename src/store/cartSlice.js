import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { items: [], totalQuantity: 0 },
  reducers: {
    addtoCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);

      if (existingItem) {
        existingItem.quantity += parseInt(newItem.quantity);
        existingItem.totalPrice +=
          parseFloat(existingItem.price) * parseInt(newItem.quantity);
      } else {
        state.items.push({
          id: newItem.id,
          title: newItem.title,
          quantity: parseInt(newItem.quantity),
          image: newItem.image,
          price: parseFloat(newItem.price),
          totalPrice: parseFloat(newItem.price) * parseInt(newItem.quantity),
        });
      }

      state.totalQuantity += parseInt(newItem.quantity);

      localStorage.setItem(
        "cart",
        JSON.stringify({
          items: state.items,
          totalQuantity: state.totalQuantity,
        })
      );
    },
    removeFromCart(state, action) {
      const itemid = action.payload;
      state.items = state.items.filter((item) => item.id !== itemid);
      state.totalQuantity = state.items.reduce((accumulator, currentItem) => {
        return accumulator + currentItem.quantity;
      }, 0);
      localStorage.setItem(
        "cart",
        JSON.stringify({
          items: state.items,
          totalQuantity: state.totalQuantity,
        })
      );
    },
    increaseCartItem(state, action) {
      const cartItemId = action.payload;
      let cartItem = state.items.find((item) => item.id === cartItemId);
      cartItem.quantity++;
      cartItem.totalPrice += parseFloat(cartItem.price);
      state.totalQuantity++

      localStorage.setItem(
        "cart",
        JSON.stringify({
          items: state.items,
          totalQuantity: state.totalQuantity,
        })
      );
    },
    decreaseCartItem(state, action) {
      const cartItemId = action.payload;
      const cartItem = state.items.find((item) => item.id === cartItemId);
      if (cartItem.quantity === 1){
        return;
      }
      cartItem.quantity--;
      cartItem.totalPrice -= parseFloat(cartItem.price);
      state.totalQuantity--;

      localStorage.setItem(
        "cart",
        JSON.stringify({
          items: state.items,
          totalQuantity: state.totalQuantity,
        })
      );
    },
    replaceCart(state, action) {
        const localStorageCart = action.payload;
        state.items = localStorageCart.items;
        state.totalQuantity = localStorageCart.totalQuantity;
    }
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
