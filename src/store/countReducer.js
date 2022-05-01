const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'

const defaultState = {
    count:0
}
export const countReducer = (state = defaultState, action) => {
    switch(action.type){
        case INCREMENT:
            return {
                ...state,
                count: state.count + 1,
            }
        case DECREMENT:
            return {
                ...state,
                count: state.count - 1,
            }
        default:
            return state;
    }
}
export const incrementAction = () => {
    return {
        type:'INCREMENT'
    }
}
export const decrementAction = () => {
    return {
        type:'DECREMENT'
    }
}