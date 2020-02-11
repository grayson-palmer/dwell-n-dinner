export const fetchArea = () => {
  return fetch('http://localhost:3001/api/v1/areas')
    .then(response => {
      if(!response.ok) {
        throw Error('Error while fetching')
      }
      return response.json()
    })
}

export const fetchAreaDetails = (area) => {
  return fetch(`http://localhost:3001${area.details}`)
  .then(response => {
    if(!response.ok) {
      throw Error('Error while fetching')
    }
    return response.json()
  })
}

export const fetchListings = () => {
  return fetch('http://localhost:3001/api/v1/listings')
  .then(response => {
    if(!response.ok) {
      throw Error('Error while fetching')
    }
    return response.json()
  })
}

export const fetchListingDetails = (id) => {
  return fetch(`http://localhost:3001/api/v1/listings/${id}`)
  .then(response => {
    if(!response.ok) {
      throw Error('Error while fetching')
    }
    return response.json()
  })
}