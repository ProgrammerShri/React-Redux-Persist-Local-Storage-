const initialState = {
  count: 0
};

const rootReducer = (state = initialState, action) => {
    console.log(initialState.count)
  switch (action.type) {

    case "INC":
      return {
        count: initialState.count++
      };

    case "DEC":
      return {
        count: initialState.count--
      };

    default:
      return state;
  }
};

export default rootReducer;
