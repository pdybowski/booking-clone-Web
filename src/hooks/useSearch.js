import { useState } from 'react'
import axios from 'axios'

export const useSearch = () => {
  const [hotels, setHotels] = useState([])

  const search = async ({ city, startDate, endDate, single, double }) => {
    const response = await axios.get(global.API_BASE_URL + 'api/hotels', {
      params: {
        city,
        // startDate: new Date(startDate).toISOString(),
        // endDate: new Date(startDate).toISOString(),
        // single,
        // double,
      },
    })

    setHotels(response.data)
  }

  return [hotels, search]
}
