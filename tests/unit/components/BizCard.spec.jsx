import React from 'react';
import { mount } from 'enzyme';
import BizCard from '../../../src/components/BizCard';
import TEST_CONTACTS_DATA from '../../test-data/contacts';

describe('<BizCard />', () => {
  const contact = TEST_CONTACTS_DATA[0];
  const initialProps = {
    contact,
  };

  it('should render a BizCard', () => {
    const componentsWrapper = mount(<BizCard {...initialProps} />);
    expect(componentsWrapper.find('.bizcard .name').text()).toEqual(contact.name);
    expect(componentsWrapper.find('.bizcard .company').text()).toEqual(contact.company.name);
    expect(componentsWrapper.find('.bizcard .contact').text()).toEqual(`${contact.phone} | ${contact.email}`);
    expect(componentsWrapper.find('.bizcard .address').text())
      .toEqual(`${contact.address.suite}, ${contact.address.street}, ${contact.address.city}`);
  });
});
