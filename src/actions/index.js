import 'isomorphic-fetch';
import * as CONSTANTS from '../constants';
import * as ACTION_TYPES from '../constants/ActionTypes';
import * as MESSAGES from '../constants/Messages';
import * as Utils from '../utils';

export const setLoadingStatus = (isLoading = false) => ({
  type: ACTION_TYPES.LOADING_SET_STATUS,
  isLoading,
});

export const loadContacts = contacts => ({
  type: ACTION_TYPES.CONTACTS_LOAD_DATA,
  contacts,
});

export const setFilterContacts = contacts => ({
  type: ACTION_TYPES.CONTACTS_SET_FILTERED,
  contacts,
});

export const setNotification = message => ({
  type: ACTION_TYPES.NOTIFICATION_SET_MESSAGE,
  message,
});

export const filterContacts = filterValue => (dispatch, getState) => {
  const { contacts } = getState();
  dispatch(setFilterContacts(Utils.filterContacts(contacts, filterValue)));
};

export const sortFilteredContacts = sortField => (dispatch, getState) => {
  const { filteredContacts } = getState();
  dispatch(setFilterContacts(Utils.sortFilteredContacts(filteredContacts, sortField)));
};

export const fetchContacts = () => dispatch =>
  fetch(CONSTANTS.CONTACT_LIST_URL).then(res => new Promise((resolve, reject) => {
    const contentType = res.headers.get('content-type');
    if (res.status === 200 && contentType.includes('json')) {
      resolve(res.json());
    } else {
      reject(res);
    }
  })).then((json) => {
    dispatch(loadContacts(json));
    dispatch(setLoadingStatus(false));
  }, () => {
    dispatch(setNotification(MESSAGES.NOTIFICATION_FETCH_CONTACTS_FAILURE));
    dispatch(setLoadingStatus(false));
  });
