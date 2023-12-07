import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { addSameItem, addToCartDispatcher, deleteFromCartDispatcher, deleteSameItem } from './dispatchers';

export const actionsTypes = {
  addToCart: 'addToCart',
  deleteFromCart: 'deleteFromCart',
  addSameItem: 'addSameItem',
  deleteSameItem: 'deleteSameItem',
};

const initialState = {
  cart: [],
  totalAmount: 0,
  countOfCartItems: 0,
};

const storeDispatcher = (state = initialState, action) => {
  if (action.type === actionsTypes.addToCart) {
    return addToCartDispatcher(state, action);
  }
  if (action.type === actionsTypes.deleteFromCart) {
    return deleteFromCartDispatcher(state, action);
  }
  if (action.type === actionsTypes.addSameItem) {
    return addSameItem(state, action);
  }
  if (action.type === actionsTypes.deleteSameItem) {
    return deleteSameItem(state, action);
  }
  return state;
};

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, storeDispatcher);

const store = createStore(persistedReducer);
const persistor = persistStore(store);

export { store, persistor };
