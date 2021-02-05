const initialState = {
  menu: [],
  loading: true,
  error: false,
  items: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "MENU_LOADED":
      return {
        ...state,
        menu: action.payload,
        loading: false,
        error: false,
      };
    case "MENU_REQUSTED":
      return {
        menu: state.menu,
        loading: true,
        error: false,
      };
    case "MENU_ERROR":
      return {
        ...state,
        menu: state.menu,
        loading: true,
        error: true,
      };
    case "ITEM_ADD_TO_CART":
      const id = action.payload;
      const item = state.menu.find((item) => item.id === id);
      const newItem = {
        title: item.title,
        price: item.price,
        url: item.url,
        id: item.id,
      };

      return {
        ...state,
        error: false,
        items: [newItem],
      };
    case "ITEM_REMOVE_FROM_CART":
      const idx = action.payload;
      const itemIndex = state.items.findIndex((item) => item.id === idx);

      return {
        ...state,
        items: [...state.items(0, itemIndex), ...state.items(itemIndex)],
      };
    default:
      return state;
  }
};

export default reducer;
