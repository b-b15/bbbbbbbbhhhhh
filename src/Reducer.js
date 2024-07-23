const Reducer = (state,action) => {
    if (action.type === "SET-LOADING") {
      return {
        ...state,
        isLoading: true
      }
    }
  
    if (action.type === "SET-DATA") {
      return {
        ...state,
        products: action.payload
      }
    }
  
        if (action.type === "SEt-ERROR") {
          return {
            ...state,
            isLoading: false,
            isError: true,
          };
  
  
    }
}
  
export default Reducer;