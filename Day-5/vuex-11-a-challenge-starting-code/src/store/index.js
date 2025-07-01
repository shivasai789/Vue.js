import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      isAuthorized: false,
      products: [
        {
          id: 'p1',
          image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Books_HD_%288314929977%29.jpg/640px-Books_HD_%288314929977%29.jpg',
          title: 'Book Collection',
          description:
            'A collection of must-read books. All-time classics included!',
          price: 99.99,
        },
        {
          id: 'p2',
          image:
            'https://upload.wikimedia.org/wikipedia/en/thumb/c/c9/Tent_at_High_Shelf_Camp_cropped.jpg/640px-Tent_at_High_Shelf_Camp_cropped.jpg',
          title: 'Mountain Tent',
          description: 'A tent for the ambitious outdoor tourist.',
          price: 129.99,
        },
        {
          id: 'p3',
          image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/640px-Good_Food_Display_-_NCI_Visuals_Online.jpg',
          title: 'Food Box',
          description:
            'May be partially expired when it arrives but at least it is cheap!',
          price: 6.99,
        },
      ],
      cartItems: { items: [], total: 0, qty: 0 },
    };
  },
  mutations: {
    addToCart(state, payload) {
      const productInCartIndex = state.cartItems.items.findIndex(
        (ci) => ci.productId === payload.id
      );

      if (productInCartIndex >= 0) {
        state.cartItems.items[productInCartIndex].qty++;
      } else {
        const newItem = {
          productId: payload.id,
          title: payload.title,
          image: payload.image,
          price: payload.price,
          qty: 1,
        };
        state.cartItems.items.push(newItem);
      }
      state.cartItems.qty++;
      state.cartItems.total += payload.price;
    },
    removeCartItem(state, payload) {
      const productInCartIndex = state.cartItems.items.findIndex(
        (cartItem) => cartItem.productId === payload.prodId
      );
      const prodData = state.cartItems.items[productInCartIndex];
      state.cartItems.items.splice(productInCartIndex, 1);
      state.cartItems.qty -= prodData.qty;
      state.cartItems.total -= prodData.price * prodData.qty;
    },
    login(state) {
      state.isAuthorized = true;
    },
    logout(state) {
      state.isAuthorized = false;
    },
  },
  actions: {
    addItem(context, payload) {
      context.commit('addToCart', payload);
    },
    removeItem(context, payload) {
      context.commit('removeCartItem', payload);
    },
    login(context) {
      context.commit('login');
    },
    logout(context) {
      context.commit('logout');
    },
  },
  getters: {
    getProducts(state) {
      return state.products;
    },
    isLoggedIn(state) {
      return state.isAuthorized;
    },
    finalCartItems(state) {
      return state.cartItems.items;
    },
    cartTotal(state) {
      return state.cartItems.total.toFixed(2);
    },
    totalCartItems(state) {
      return state.cartItems.qty;
    },
  },
});

export default store;
