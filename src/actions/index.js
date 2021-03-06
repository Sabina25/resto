const menuLoaded = (newMenu) => {
  return {
    type: "MENU_LOADED",
    payload: newMenu,
  };
};

const menuRequsted = (newMenu) => {
  return {
    type: "MENU_REQUSTED",
  };
};

const menuError = () => {
  return {
    type: "MENU_ERROR",
  };
};

const addedToCart = (id) => {
  return {
    type: "ITEM_ADD_TO_CART",
    payload: id,
  };
};

const deleteFromCart = (id) => {
  return {
    type: "ITEM_REMOVE_FROM_CART",
    payload: id,
  };
};

export { menuLoaded, menuRequsted, menuError, addedToCart, deleteFromCart };
