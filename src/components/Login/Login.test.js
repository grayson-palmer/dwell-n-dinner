import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login';

describe('Login', () => {
  it('should render the component', () => {
    const wrapper = shallow(<Login />);

    expect(wrapper).toMatchSnapshot();
  });

  describe('handleChange', () => {
    it('should should be able to set name in state', () => {
      const wrapper = shallow(<Login />);
      const mockEvent = {
        target: {
          name: 'name',
          value: 'Maynard'
        }
      };

      wrapper.instance().handleChange(mockEvent);
      expect(wrapper.state('name')).toEqual('Maynard');
    });

    it('should be able to set email in state', () => {
      const wrapper = shallow(<Login />);
      const mockEvent = {
        target: {
          name: 'email',
          value: 'toolarmy@gmail.com'
        }
      };

      wrapper.instance().handleChange(mockEvent);
      expect(wrapper.state('email')).toEqual('toolarmy@gmail.com');
    });

    it('should be able to set reason in state', () => {
      const wrapper = shallow(<Login />);
      const mockEvent = {
        target: {
          name: 'reason',
          value: 'Vacation'
        }
      };

      wrapper.instance().handleChange(mockEvent);
      expect(wrapper.state('reason')).toEqual('Vacation');
    });
  });

  describe('loginUser', () => {
    it('should be able to login a user', () => {
      const mockSetUserInfo = jest.fn();
      const mockEvent = { preventDefault: jest.fn() };
      const wrapper = shallow(<Login setUserInfo={mockSetUserInfo} />);

      wrapper.instance().loginUser(mockEvent);
      expect(mockSetUserInfo).toHaveBeenCalledWith(wrapper.state());
    });
  });
});
