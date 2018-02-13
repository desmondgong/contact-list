import * as Utils from '../../../src/utils';
import * as CONSTANTS from '../../../src/constants';
import TEST_DATA_ORIGINAL from '../../test-data/contacts';
import TEST_DATA_FILTER from '../../test-data/filterContacts';
import TEST_DATA_SORT from '../../test-data/sortContacts';

describe('Utils', () => {
  it('should filter contacts with filterValue', () => {
    expect(Utils.filterContacts(TEST_DATA_FILTER, 'User 1').length).toEqual(1);
    expect(Utils.filterContacts(TEST_DATA_FILTER, 'Org 1').length).toEqual(2);
    expect(Utils.filterContacts(TEST_DATA_FILTER, 'GMAIL').length).toEqual(4);
    expect(Utils.filterContacts(TEST_DATA_FILTER, 'gmail').length).toEqual(4);
    expect(Utils.filterContacts(TEST_DATA_FILTER, '').length).toEqual(4);
    expect(Utils.filterContacts().length).toEqual(0);
  });

  it('should sort contacts with supported sortField', () => {
    expect(Utils.sortFilteredContacts(TEST_DATA_SORT, CONSTANTS.SORT_FIELD_ID)[0])
      .toEqual(TEST_DATA_SORT[0]);
    expect(Utils.sortFilteredContacts(TEST_DATA_SORT, CONSTANTS.SORT_FIELD_NAME)[0])
      .toEqual(TEST_DATA_SORT[1]);
    expect(Utils.sortFilteredContacts(TEST_DATA_SORT, CONSTANTS.SORT_FIELD_EMAIL)[0])
      .toEqual(TEST_DATA_SORT[2]);
    expect(Utils.sortFilteredContacts(TEST_DATA_SORT)[0])
      .toEqual(TEST_DATA_SORT[0]);
    expect(Utils.sortFilteredContacts(TEST_DATA_SORT, 'unSupported'))
      .toEqual(TEST_DATA_SORT);
  });

  it('should report the summary of grouping contacts with first letter', () => {
    expect(Utils.summarizeContacts(TEST_DATA_ORIGINAL))
      .toEqual(JSON.stringify({ L: 1, E: 1, C: 3, P: 1, M: 1, K: 1, N: 1, G: 1 }));
    expect(Utils.summarizeContacts())
      .toEqual(JSON.stringify({}));
  });
});
