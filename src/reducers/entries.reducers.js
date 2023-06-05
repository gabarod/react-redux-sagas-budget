import entriesTypes from "../actions/entries.actions";

const entriesReducer = (state = initialEntries, action) => {
  switch (action.type) {
    case entriesTypes.GET_ENTRIES:
      return state;
    case entriesTypes.POPULATE_ENTRIES:
      return action.payload;
    case entriesTypes.ADD_ENTRY:
      return state.concat({ ...action.payload });
    case entriesTypes.REMOVE_ENTRY:
      return state.filter((entry) => entry.id !== action.payload.id);
    case entriesTypes.POPULATE_ENTRY_DETAILS:
    case entriesTypes.UPDATE_ENTRY:
      console.log(action.payload);
      const newEntries = [...state];
      console.log(newEntries);
      const index = newEntries.findIndex(
        (entry) => entry.id === action.payload.id
      );
      newEntries[index] = { ...newEntries[index], ...action.payload.entry };
      console.log(newEntries[index]);
      return newEntries;
    default:
      return state;
  }
};

export default entriesReducer;

var initialEntries = [];
