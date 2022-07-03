function WishReducer(state, action) {
  switch (action.type) {
    case "ADD_TO_WISHLIST":
      const exist = state.find((x) => x.id === action.payload.id);
      if (exist) {
        return state;
      } else return [...state, { ...action.payload }];
    case "REMOVE_FROM_WISHLIST":
      return state.filter((x) => x.id !== action.payload.id);
    case "REMOVE_GROUP":
      let updatedState = state;
      action.payload.map((x) => (updatedState = updatedState.filter((y) => y.id !== x.id)));
      return updatedState;
    default:
      return state;
  }
}

export default WishReducer;
