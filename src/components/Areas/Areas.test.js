import React from 'react';
import { shallow } from 'enzyme';
import Areas from './Areas';

describe('Areas', () => {
  it('should render the component', () => {
    const wrapper = shallow(
      <Areas
        areaDetails={[
          {
            name: 'River North',
            area: 'RiNo',
            location: 'location',
            about: 'blah, blah, blah'
          }
        ]}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
