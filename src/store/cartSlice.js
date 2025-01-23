import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { items: [], totalQuantity: 0 },
  reducers: {
    addtoCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find(
        (item) =>
          item.prodcode === newItem.prodcode &&
          item.itemvariation.prodvarcode === newItem.variation.prodvarcode
      );

      if (existingItem) {
        existingItem.quantity += parseInt(newItem.quantity);
        existingItem.itemvariation.quantity += parseInt(newItem.quantity);
        existingItem.totalprice +=
          parseFloat(existingItem.price) * parseInt(newItem.quantity);
          existingItem.itemvariation.totalprice +=
          parseFloat(existingItem.price) * parseInt(newItem.quantity);
      } else {
        state.items.push({
          prodcode: newItem.prodcode,
          prodname: newItem.prodname,
          quantity: parseInt(newItem.quantity),
          itemvariation: {
            color: newItem.variation.color,
            size: newItem.variation.size,
            prodvarcode: newItem.variation.prodvarcode,
            quantity: parseInt(newItem.quantity),
            price: parseFloat(newItem.price),
            totalprice: parseFloat(newItem.price) * parseInt(newItem.quantity)
          },
          previmage: newItem.previewimage,
          price: parseFloat(newItem.price),
          totalprice: parseFloat(newItem.price) * parseInt(newItem.quantity),
        });
      }

      state.totalQuantity += parseInt(newItem.quantity);

      localStorage.setItem(
        "cartSupply",
        JSON.stringify({
          items: state.items,
          totalQuantity: state.totalQuantity,
        })
      );
    },
    removeFromCart(state, action) {
      const itemprodcode = action.payload.prodcode;
      const itemprodvariation = action.payload.prodvarcode;
      state.items = state.items.filter(
        (item) =>
          item.prodcode !== itemprodcode ||
          item.itemvariation.prodvarcode !== itemprodvariation
      );

      state.totalQuantity = state.items.reduce((accumulator, currentItem) => {
        return accumulator + currentItem.quantity;
      }, 0);
      localStorage.setItem(
        "cartSupply",
        JSON.stringify({
          items: state.items,
          totalQuantity: state.totalQuantity,
        })
      );
    },
    increaseCartItem(state, action) {
      const cartItemProdCode = action.payload.prodcode;
      const cartItemVariationCode = action.payload.prodvarcode;
      let cartItem = state.items.find(
        (item) =>
          item.prodcode === cartItemProdCode &&
          item.itemvariation.prodvarcode === cartItemVariationCode
      );
      cartItem.quantity++;
      cartItem.totalprice += parseFloat(cartItem.price);
      cartItem.itemvariation.quantity++;
      cartItem.itemvariation.totalprice += parseFloat(cartItem.price);
      state.totalQuantity++;

      localStorage.setItem(
        "cartSupply",
        JSON.stringify({
          items: state.items,
          totalQuantity: state.totalQuantity,
        })
      );
    },
    decreaseCartItem(state, action) {
      const cartItemProdCode = action.payload.prodcode;
      const cartItemVariationCode = action.payload.prodvarcode;
      let cartItem = state.items.find(
        (item) =>
          item.prodcode === cartItemProdCode &&
          item.itemvariation.prodvarcode === cartItemVariationCode
      );
      if (cartItem.quantity === 1) {
        return;
      }
      cartItem.quantity--;
      cartItem.totalprice -= parseFloat(cartItem.price);
      cartItem.itemvariation.quantity--;
      cartItem.itemvariation.totalprice -= parseFloat(cartItem.price);
      state.totalQuantity--;

      localStorage.setItem(
        "cartSupply",
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
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
