import { fetchArea, fetchAreaDetails, fetchListings, fetchListingDetails } from './apiCalls';

describe('fetchArea', () => {
  let mockResponse = [{
    area: "RiNo",
    details: '/api/v1/areas/590' 
  }]

  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockResponse)
      })
    })
  })

  it ('should call fetch with the correct URL', () => {
    fetchArea();
    expect(window.fetch).toHaveBeenCalledWith('http://localhost:3001/api/v1/areas')
  })

  it ('should return an array of areas', () => {
    fetchArea()
      .then(areas => expect(areas).toEqual(mockResponse))
  })

  it('should return an error', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false,
      })
    });
    
    expect(fetchArea()).rejects.toEqual(Error('Error while fetching'))
  });

  it('should return an error if the Promise rejects', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.reject(Error('Error while fetching'))
    })

    expect(fetchArea()).rejects.toEqual(Error('Error while fetching'))
  })
})

describe('fetchAreaDetails', () => {
  let mockInput = {
    area: "RiNo",
    details: '/api/v1/areas/590'
  }
  let mockResponse = [{
    id: 590,
    name: "River North",
    location: "North of Downtown Denver",
    about: "RiNo is a burgeoning area with new bars, restaurants and event spaces popping up all the time. Explore this thriving area of Denver today!",
    region_code: 6356834,
    quick_search: "o5kod9f5cqo0",
    listings: [
      '/api/v1/listings/3',
      '/api/v1/listings/44',
      '/api/v1/listings/221',
      '/api/v1/listings/744',
      '/api/v1/listings/90',
      '/api/v1/listings/310',
    ]
  }]

  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockResponse)
      })
    })
  })

  it ('should call fetch with the correct URL', () => {
    fetchAreaDetails(mockInput);
    expect(window.fetch).toHaveBeenCalledWith(`http://localhost:3001${mockInput.details}`)
  })

  it ('should return an array of area details', () => {
    fetchArea(mockInput)
      .then(areas => expect(areas).toEqual(mockResponse))
  })

  it('should return an error', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false,
      })
    });
    
    expect(fetchAreaDetails(mockInput)).rejects.toEqual(Error('Error while fetching'))
  });

  it('should return an error if the Promise rejects', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.reject(Error('Error while fetching'))
    })

    expect(fetchAreaDetails(mockInput)).rejects.toEqual(Error('Error while fetching'))
  })
})

describe('fetchListings', () => {
  let mockResponse = [{
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
  }]

  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockResponse)
      })
    })
  })

  it ('should call fetch with the correct URL', () => {
    fetchListings();
    expect(window.fetch).toHaveBeenCalledWith('http://localhost:3001/api/v1/listings')
  })

  it ('should return an array of listing details', () => {
    fetchListings()
      .then(listing => expect(listing).toEqual(mockResponse))
  })

  it('should return an error', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false,
      })
    });
    
    expect(fetchListings()).rejects.toEqual(Error('Error while fetching'))
  });

  it('should return an error if the Promise rejects', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.reject(Error('Error while fetching'))
    })

    expect(fetchListings()).rejects.toEqual(Error('Error while fetching'))
  })
})

describe('fetchListingDetails', () => {
  let mockInput = 3;
  let mockResponse = [{
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
  }]

  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockResponse)
      })
    })
  })

  it ('should call fetch with the correct URL', () => {
    fetchListingDetails(3);
    expect(window.fetch).toHaveBeenCalledWith(`http://localhost:3001/api/v1/listings/${mockInput}`)
  })

  it ('should return an array of listing details', () => {
    fetchListingDetails()
      .then(listing => expect(listing).toEqual(mockResponse))
  })

  it('should return an error', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false,
      })
    });
    
    expect(fetchListingDetails()).rejects.toEqual(Error('Error while fetching'))
  });

  it('should return an error if the Promise rejects', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.reject(Error('Error while fetching'))
    })

    expect(fetchListingDetails()).rejects.toEqual(Error('Error while fetching'))
  })
})