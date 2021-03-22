import React, { useEffect } from 'react'
import { useSearch } from '../../../hooks/useSearch'

export const Hotels = ({ match, location }) => {
  const [hotels, search] = useSearch()
  const data = location.state ? location.state : { city: match.params.data }
  useEffect(() => {
    search(data)
  }, [])
  return (
    <div>
      {hotels.hotels && hotels.hotels.length > 0 ? (
        data.startDate ? (
          <h1>All free hotels in {data.city}</h1>
        ) : (
          <h1>All hotels in {data.city}</h1>
        )
      ) : (
        <h1>No hotels found in {data.city}</h1>
      )}
      {/* There must be loop with HotelCard */}
    </div>
  )
}
