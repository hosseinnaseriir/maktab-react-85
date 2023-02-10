export const productsReducer = (state, action) => {
    switch (action.type) {
        case "ADD": return [...state, action.payload]
        case "DELETE": return state.filter(p => p.id !== action.payload)
        default: return state
    }
}
