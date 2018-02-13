import React from 'react';
import { mount } from 'enzyme';
import { AppCom } from '../../../src/containers/App';

describe('<App />', () => {
  const initialProps = {
    contacts: [],
    filteredContacts: [],
    isLoading: false,
    notification: '',
    loadContacts: () => {},
    searchContacts: () => {},
    sortContacts: () => {},
  };

  it('should render a main page.', () => {
    spyOn(initialProps, 'loadContacts');
    const componentsWrapper = mount(<AppCom {...initialProps} />);
    expect(componentsWrapper.find('div.main-content').length).toEqual(1);
    expect(initialProps.loadContacts).toHaveBeenCalled();
  });
});
