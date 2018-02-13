import React from 'react';
import { mount } from 'enzyme';
import AdminReport from '../../../src/components/AdminReport';
import * as Utils from '../../../src/utils';
import TEST_CONTACTS_DATA from '../../test-data/contacts';

describe('<AdminReport />', () => {
  const initialProps = {
    contacts: TEST_CONTACTS_DATA,
  };

  it('should render a AdminReport', () => {
    const componentsWrapper = mount(<AdminReport {...initialProps} />);
    expect(componentsWrapper.find('.admin-report').length).toEqual(1);
    componentsWrapper.find('#report-btn').simulate('click');
    expect(componentsWrapper.find('.admin-summ').text()).toEqual(Utils.summarizeContacts(TEST_CONTACTS_DATA));
  });
});
