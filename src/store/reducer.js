/**
 * Initial State
 */
const initialState = {
  isMenuOpen: false,
};

/**
 * Types
 */
export const OPEN_MENU = 'OPEN_MENU';


/**
 * Traitements
 */

/**
 * Reducer
 */
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case OPEN_MENU:
      return {
        ...state,
        isMenuOpen: true,
      };
    default:
      return state;
  }
};

/**
 * Action Creators
 */
export const openMenu = () => ({
  type: OPEN_MENU,
});




/**
 * Selectors
 */

/**
 * Export
 */
export default reducer;