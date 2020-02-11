import React from 'react';
import { render } from '@testing-library/react';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
  let wrapper
  let mockUser
  let mockListing

  beforeEach(() => {
    wrapper = shallow(<App />);
    mockUser = {name: 'Bob', email: 'Bob@bob.ru', reason: 'Vacation'}
    mockListing = {
      listing_id: 3,
      area_id: 590,
      name: "Hip RiNo Party Spot",
      address: {
        street: "2250 Lawrence St",
        zip: "80205"
      },
      details: {
        neighborhood_id: 5124122,
        superhost: true,
        seller_source: "91jss1",
        beds: 3,
        baths: 2.5,
        cost_per_night: 420,
        features: [
          "hot tub",
          "espresso machine"
        ],
      },
      dev_id: "u4gh2j",
      area: "rino",
      db_connect: 834470
      }
  })

  it ('should store a favorite listings info into state', () => {
    const expected = {name: 'Bob', email: 'Bob@bob.ru', reason: 'Vacation'};
    wrapper.instance().setUserInfo(mockUser);
    expect(wrapper.state('user')).toEqual(expected)
  })

  it ('should add a listing to favorites', () => {
    const expected = [{ ...mockListing }]

    wrapper.instance().addToFavorites(mockListing);
    expect(wrapper.state('favorites')).toEqual(expected)
  })

  it ('should remove a favorite listings info from state', () => {
    const expected1 = [{ ...mockListing }]
    const expected2 = [[]];

    wrapper.instance().addToFavorites(mockListing);
    expect(wrapper.state('favorites')).toEqual(expected1);
    wrapper.instance().removeFromFavorites(mockListing);
    expect(wrapper.state('favorites')).toEqual(expected2);
  })
})
