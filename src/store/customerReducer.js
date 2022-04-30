const ADD_CUSTOMER = 'ADD_CUSTOMER'
const ADD_MANY_CUSTOMER = 'ADD_MANY_CUSTOMER'
const REMOVE_CUSTOMER = 'REMOVE_CUSTOMER'

const defaultState = {
    customers: [],
}

export const customerReducer = (state = defaultState, action) => {
    switch (action.type){
        case ADD_MANY_CUSTOMER:
            return {...state,customers: [...state.customers,...action.payload]}
        case ADD_CUSTOMER:
            return {...state,customers: [...state.customers,action.payload]}
        case REMOVE_CUSTOMER:
            return {...state,customers:state.customers.filter(customer => customer.id !== action.payload)}
        default:
            return state;
    }
}
export const addCustomerAction = (customer) => {
    return{
        type: 'ADD_CUSTOMER',payload:customer
    }
}
export const addManyCustomerAction = (users) => {
    return{
        type: 'ADD_MANY_CUSTOMER',payload:users
    }
}
export  const removeCustomerAction = (customer) => {
    return {
        type:'REMOVE_CUSTOMER',payload:customer.id
    }
}