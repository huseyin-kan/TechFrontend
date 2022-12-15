import { searchFilter } from "../InitialValues/searchFilter";
import { SEARCH_FILTER } from "../Actions/searchAction";

const initialState = {
  searchFilter: searchFilter,
};

export default function searchReducer(state = initialState, { type, payload }) {
  switch (type) {
    case SEARCH_FILTER:
      state.searchFilter = payload;
      return {...state}

    default:
      return state;
  }
}
