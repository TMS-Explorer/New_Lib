export const initialState = {
    books_taken: [],
    books_history:[],
    user: null
  };
  
  // Selector
//   export const getBasketTotal = (basket) => 
//     book?.reduce((amount, item) => item.price + amount, 0);
  
  const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
      default:
        return state;
    }
  };
  
  export default reducer;