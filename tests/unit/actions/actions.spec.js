import 'isomorphic-fetch';
import fetchMock from 'fetch-mock';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '../../../src/actions';
import * as CONSTANTS from '../../../src/constants';
import * as ACTION_TYPES from '../../../src/constants/ActionTypes';
import * as MESSAGES from '../../../src/constants/Messages';
import { INITIAL_STATE } from '../../../src/reducers';
import TEST_CONTACTS_DATA from '../../test-data/contacts';

describe('actions', () => {
  const initialState = INITIAL_STATE;
  const mockStore = configureStore([thunk]);
  afterEach(() => {
    fetchMock.restore();
  });
  it('implements expected functions', () => {
    expect(actions.setLoadingStatus).toEqual(jasmine.any(Function));
    expect(actions.loadContacts).toEqual(jasmine.any(Function));
    expect(actions.setFilterContacts).toEqual(jasmine.any(Function));
    expect(actions.setNotification).toEqual(jasmine.any(Function));
    expect(actions.filterContacts).toEqual(jasmine.any(Function));
    expect(actions.sortFilteredContacts).toEqual(jasmine.any(Function));
    expect(actions.fetchContacts).toEqual(jasmine.any(Function));
  });

  it('should dispatch setFilterContacts when calling filterContacts', () => {
    const store = mockStore(initialState);
    store.dispatch(actions.filterContacts(''));
    const expectedActions = [{
      type: ACTION_TYPES.CONTACTS_SET_FILTERED,
      contacts: [],
    }];
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('should dispatch setFilterContacts when calling sortFilteredContacts', () => {
    const store = mockStore(initialState);
    store.dispatch(actions.sortFilteredContacts());
    const expectedActions = [{
      type: ACTION_TYPES.CONTACTS_SET_FILTERED,
      contacts: [],
    }];
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('should load contacts when fetch successfully', (done) => {
    const store = mockStore(initialState);
    fetchMock.mock(CONSTANTS.CONTACT_LIST_URL, {
      headers: { 'content-type': 'json' },
      body: JSON.stringify(TEST_CONTACTS_DATA),
    });
    store.dispatch(actions.fetchContacts()).then(() => {
      const expectedActions = [{
        type: ACTION_TYPES.CONTACTS_LOAD_DATA,
        contacts: TEST_CONTACTS_DATA,
      }, {
        type: ACTION_TYPES.LOADING_SET_STATUS,
        isLoading: false,
      }];
      expect(store.getActions()).toEqual(expectedActions);
      done();
    });
  });

  it('should set notification when failed to fetch.', (done) => {
    const store = mockStore(initialState);
    fetchMock.mock(CONSTANTS.CONTACT_LIST_URL, {
      status: 400,
      headers: { 'content-type': 'json' },
    });
    store.dispatch(actions.fetchContacts()).then(() => {
      const expectedActions = [{
        type: ACTION_TYPES.NOTIFICATION_SET_MESSAGE,
        message: MESSAGES.NOTIFICATION_FETCH_CONTACTS_FAILURE,
      }, {
        type: ACTION_TYPES.LOADING_SET_STATUS,
        isLoading: false,
      }];
      expect(store.getActions()).toEqual(expectedActions);
      done();
    });
  });
});
