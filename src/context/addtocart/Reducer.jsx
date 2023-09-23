export const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            return {...state}
            break;
    
        default:
        return state;
    }
}