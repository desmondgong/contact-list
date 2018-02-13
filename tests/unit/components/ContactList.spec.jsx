import React from 'react';
import { shallow, mount } from 'enzyme';
import ContactList from '../../../src/components/ContactList';
import TEST_CONTACTS_DATA from '../../test-data/contacts';

describe('<ContactList />', () => {
  const initialProps = {
    contacts: TEST_CONTACTS_DATA,
  };

  it('should render a ContactList', () => {
    const componentsWrapper = shallow(<ContactList {...initialProps} />);
    expect(componentsWrapper.find('.contact-list').length).toEqual(1);
    expect(componentsWrapper.find('.contact-list .item').length).toEqual(TEST_CONTACTS_DATA.length);
  });

  it('should open a bizcard', () => {
    const componentsWrapper = mount(<ContactList {...initialProps} />);
    componentsWrapper.find('.contact-list .item').first().simulate('click');
    expect(componentsWrapper.state('selectedContact')).toEqual(TEST_CONTACTS_DATA[0]);
    expect(componentsWrapper.state('open')).toEqual(true);
  });
});
