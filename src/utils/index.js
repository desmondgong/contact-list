import * as CONSTANTS from '../constants';

/**
 * [Basic search for filter contacts with filterValue, currently only searches
 * the following fields: name, email, company.name]
 * @param  {Array}  [contacts]      [contact list]
 * @param  {String} [filterValue]   [filterValue, if empty, return the whole array]
 * @return {Array}                  [return the filtered contact array]
 */
export const filterContacts = (contacts = [], filterValue = '') => {
  const upperFilter = filterValue.toUpperCase();
  return contacts.filter((contact) => {
    if (contact.name && contact.name.toUpperCase().indexOf(upperFilter) !== -1) {
      return true;
    }
    if (contact.email && contact.email.toUpperCase().indexOf(upperFilter) !== -1) {
      return true;
    }
    if (contact.company && contact.company.name
      && contact.company.name.toUpperCase().indexOf(upperFilter) !== -1) {
      return true;
    }
    return false;
  });
};

/**
 * [sort contacts by sortField, supported sortField are the following:
 *  id, name, email. All configured in /constants/index.js
 * ]
 * @param  {Array}  [filteredContacts]      [contact list]
 * @param  {[type]} [sortField]             [field sorted by.
 *                      should be one of the followings: id, name, email.
 *                              Otherwise, return the original array]
 * @return {Array}                          [sorted contact array]
 */
export const sortFilteredContacts =
  (filteredContacts = [], sortField = CONSTANTS.SORT_FIELD_ID) => {
    const sortedContacts = filteredContacts.slice();
    if (CONSTANTS.SORT_FIELDS.indexOf(sortField) === -1) {
      return filteredContacts;
    }
    sortedContacts.sort((a, b) => {
      if (a[sortField] < b[sortField]) {
        return -1;
      } else if (a[sortField] > b[sortField]) {
        return 1;
      }
      return 0;
    });
    return sortedContacts;
  };

/**
 * [Group the contacts with the start letter, return the summary report.]
 * @param  {Array}  [contacts]    [contact list]
 * @return {String}               [report in a string]
 */
export const summarizeContacts = (contacts = []) => {
  const map = {};
  contacts.forEach((contact) => {
    if (contact.name) {
      map[contact.name[0].toUpperCase()] = map[contact.name[0].toUpperCase()] || 0;
      map[contact.name[0].toUpperCase()] += 1;
    }
  });
  return JSON.stringify(map);
};
