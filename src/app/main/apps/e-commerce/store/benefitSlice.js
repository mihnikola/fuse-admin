import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { initial } from 'lodash';
import { check } from 'prettier';
// import axios from 'axios';
// import FuseUtils from '@fuse/utils';

// export const getProduct = createAsyncThunk('eCommerceApp/product/getProduct', async (productId) => {
//   const response = await axios.get(`/api/ecommerce/products/${productId}`);
//   const data = await response.data;

//   return data === undefined ? null : data;
// });

// export const removeProduct = createAsyncThunk(
//   'eCommerceApp/product/removeProduct',
//   async (val, { dispatch, getState }) => {
//     const { id } = getState().eCommerceApp.product;
//     await axios.delete(`/api/ecommerce/products/${id}`);
//     return id;
//   }
// );

// export const saveProduct = createAsyncThunk(
//   'eCommerceApp/product/saveProduct',
//   async (productData, { dispatch, getState }) => {
//     const { id } = getState().eCommerceApp;

//     const response = await axios.put(`/api/ecommerce/products/${id}`, productData);

//     const data = await response.data;

//     return data;
//   }
// );
const initialState = {
    benefits: [
        { title: "Elektronika", offerNumber: '10 ponuda' },
        { title: "Zdravlje", offerNumber: '10 ponuda' },
        { title: "Sport", offerNumber: '5 ponuda' },
        { title: "Pokucstvo", offerNumber: '55 ponuda' },
        { title: "Garderoba", offerNumber: '7 ponuda' }
    ],
    companies: [
        {
            groupId: "2131", groupName: "Strucnjaci", companies: [
                { name: "Magnohrom", discount: "20% popusta", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
                { name: "Fabrika vagona", discount: "40%-60% popusta", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
                { name: "Rudnik Trepca", discount: "60%-60% popusta", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
                { name: "Gvozdjar Kraljevo", discount: "70%-20% popusta", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." }
            ]
        },
        {
            groupId: "2322", groupName: "Umetnici", companies: [
                { name: "Zorka Color", discount: "20% popusta", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
                { name: "Sreta Steta", discount: "40%-60% popusta", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
            ]
        },
    ],
    check: false
}
const benefitSlice = createSlice({
    //   name: 'eCommerceApp/product',
    name: 'benefit',
    initialState:{
        users:[],
    },
    reducers: {
        open(state) {
            state.check = true;
        },
        close(state) {
            state.check = false;
        },
        getUsers(state,action){
            state.users = action.payload;
        }
        // resetProduct: () => null,
        // newProduct: {
        //   reducer: (state, action) => action.payload,
        //     prepare: (event) => ({
        //     payload: {
        //       id: FuseUtils.generateGUID(),
        //       name: '',
        //       handle: '',
        //       description: '',
        //       categories: [],
        //       tags: [],
        //       images: [],
        //       priceTaxExcl: 0,
        //       priceTaxIncl: 0,
        //       taxRate: 0,
        //       comparedPrice: 0,
        //       quantity: 0,
        //       sku: '',
        //       width: '',
        //       height: '',
        //       depth: '',
        //       weight: '',
        //       extraShippingFee: 0,
        //       active: true,
        //     },
        //   }),
        // },
    },
    //   extraReducers: {
    //     [getProduct.fulfilled]: (state, action) => action.payload,
    //     [saveProduct.fulfilled]: (state, action) => action.payload,
    //     [removeProduct.fulfilled]: (state, action) => null,
    //   },
});

export const benefitActions = benefitSlice.actions;

// export const selectProduct = ({ eCommerceApp }) => eCommerceApp.product;

export default benefitSlice.reducer;
