export const CONTACT_LIST_URL = (process.env.NODE_ENV === 'development') ?
  '/api/mock/contacts' :
  'http://jsonplaceholder.typicode.com/users';

export const SORT_FIELD_ID = 'id';
export const SORT_FIELD_NAME = 'name';
export const SORT_FIELD_EMAIL = 'email';
export const SORT_FIELDS = [SORT_FIELD_ID, SORT_FIELD_NAME, SORT_FIELD_EMAIL];
