import React from 'react';
import { shallow } from 'enzyme';
import Listings from './Listings';

describe('Listings', () => {
  it('should render the component', () => {
    const wrapper = shallow(
      <Listings
        listings={[
          {
            name: 'House_1',
            listing_id: '3',
            area_id: '590'
          }
        ]}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });
});
