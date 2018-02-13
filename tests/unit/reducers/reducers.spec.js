import * as ACTION_TYPES from '../../../src/constants/ActionTypes';
import Reducer, { INITIAL_STATE } from '../../../src/reducers';
import TEST_CONTACTS_DATA from '../../test-data/contacts';

describe('reducers', () => {
  const initialState = INITIAL_STATE;

  it('should do nothing if action name is not matched', () => {
    const action = { type: null };
    const state = Reducer(undefined, action);
    expect(state).toEqual(initialState);
  });

  it('handles action LOADING_SET_STATUS', () => {
    const action = {
      type: ACTION_TYPES.LOADING_SET_STATUS,
      isLoading: false,
    };
    const state = Reducer(initialState, action);
    expect(state.isLoading).toEqual(false);
  });

  it('handles action CONTACTS_LOAD_DATA', () => {
    const action = {
      type: ACTION_TYPES.CONTACTS_LOAD_DATA,
      contacts: TEST_CONTACTS_DATA,
      filteredContacts: TEST_CONTACTS_DATA,
    };
    const state = Reducer(initialState, action);
    expect(state.contacts).toEqual(TEST_CONTACTS_DATA);
    expect(state.filteredContacts).toEqual(TEST_CONTACTS_DATA);
  });

  it('handles action CONTACTS_SET_FILTERED', () => {
    const action = {
      type: ACTION_TYPES.CONTACTS_SET_FILTERED,
      contacts: TEST_CONTACTS_DATA,
    };
    const state = Reducer(initialState, action);
    expect(state.filteredContacts).toEqual(TEST_CONTACTS_DATA);
  });

  it('handles action NOTIFICATION_SET_MESSAGE', () => {
    const msg = 'warning';
    const action = {
      type: ACTION_TYPES.NOTIFICATION_SET_MESSAGE,
      message: msg,
    };
    const state = Reducer(initialState, action);
    expect(state.notification).toEqual(msg);
  });
});
