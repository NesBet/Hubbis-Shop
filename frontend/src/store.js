// Import modules
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import { productListReducer, productDetailsReducer, productDeleteReducer, productCreateReducer, productUpdateReducer, productCreateReviewReducer, topRatedProductReducer } from './redux/reducers/productReducers'

import { cartReducer } from './redux/reducers/cartReducers'

import { userLoginReducer, userRegisterReducer, userDetailsReducer, userUpdateProfileReducer, userListReducer, userDeleteReducer, userUpdateReducer } from './redux/reducers/userReducers'

import { orderCreateReducer, orderDetailsReducer, orderPayReducer, MyOrderListReducer, OrderListReducer, orderDeliverReducer, orderDeleteReducer } from './redux/reducers/orderReducers'


const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    productDelete: productDeleteReducer,
    productCreate: productCreateReducer,
    productUpdate: productUpdateReducer,
    productReviewCreate: productCreateReviewReducer,
    topProduct: topRatedProductReducer,
    
    cart: cartReducer,

    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userDetails: userDetailsReducer,
    usersList: userListReducer,
    updateProfile: userUpdateProfileReducer,
    userDelete: userDeleteReducer,
    userUpdate: userUpdateReducer,

    orderCreate: orderCreateReducer,
    orderDelete: orderDeleteReducer,
    orderDetails: orderDetailsReducer,
    orderPay: orderPayReducer,
    myOrderList: MyOrderListReducer,
    orderList: OrderListReducer,
    orderDeliver: orderDeliverReducer,
})

const cartItemsFromStorage = localStorage.getItem('cartItems') ?
    JSON.parse(localStorage.getItem('cartItems')) : []

const userInfoFromStorage = localStorage.getItem('userInfo') ?
    JSON.parse(localStorage.getItem('userInfo')) : null

const shippingAddressFromStorage = localStorage.getItem('shippingAddress') ?
    JSON.parse(localStorage.getItem('shippingAddress')) : {}

const initialState = {
    cart: {
        cartItems: cartItemsFromStorage,
        shippingAddress: shippingAddressFromStorage,
    },

    userLogin: { userInfo: userInfoFromStorage }
}

const middleWare = [thunk]

const store = createStore(reducer, initialState,
    composeWithDevTools(applyMiddleware(...middleWare)))


export default store;
