import * as CONSTANTS from '../constants';

/**
 * [filterContacts description]
 * @param  {Array}  [contacts=[]]    [description]
 * @param  {String} [filterValue=''] [description]
 * @return {[type]}                  [description]
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
 * [sortFilteredContacts description]
 * @param  {Array}  [filteredContacts=[]]               [description]
 * @param  {[type]} [sortField=CONSTANTS.SORT_FIELD_ID] [description]
 * @return {[type]}                                     [description]
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
 * [summlizeContacts description]
 * @param  {Array}  [contacts=[]] [description]
 * @return {[type]}               [description]
 */
export const summlizeContacts = (contacts = []) => {
  const map = {};
  contacts.forEach((contact) => {
    if (contact.name) {
      map[contact.name[0].toUpperCase()] = map[contact.name[0].toUpperCase()] || 0;
      map[contact.name[0].toUpperCase()] += 1;
    }
  });
  return JSON.stringify(map);
};
