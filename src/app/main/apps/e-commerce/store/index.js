import { combineReducers } from '@reduxjs/toolkit';
import order from './orderSlice';
import orders from './ordersSlice';
import product from './productSlice';
import products from './productsSlice';
import benefit from './benefitSlice';
// import benefitReducer from './benefitSlice';

const reducer = combineReducers({
  products,
  product,
  orders,
  order,
  benefit
});

// const store = configureStore({
//     reducer:{benefit:benefitReducer.reducer}
// });

export default reducer;
