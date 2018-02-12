import * as ACTION_TYPES from '../constants/ActionTypes';

export const INITIAL_STATE = {
  contacts: [],
  filteredContacts: [],
  isLoading: true,
  notification: '',
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ACTION_TYPES.LOADING_SET_STATUS:
      return {
        ...state,
        isLoading: action.isLoading,
      };
    case ACTION_TYPES.CONTACTS_LOAD_DATA:
      return {
        ...state,
        contacts: action.contacts,
        filteredContacts: action.contacts,
      };
    case ACTION_TYPES.CONTACTS_SET_FILTERED:
      return {
        ...state,
        filteredContacts: action.contacts,
      };
    case ACTION_TYPES.NOTIFICATION_SET_MESSAGE:
      return {
        ...state,
        notification: action.message,
      };
    default:
      return state;
  }
};
