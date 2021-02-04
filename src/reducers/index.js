const initialState = {
  manu: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "MENU_LOADED":
      return {
        menu: action.playload,
      };
    default:
      return state;
  }
};

export default reducer;
