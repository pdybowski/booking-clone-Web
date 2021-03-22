import { useState } from 'react'
import axios from 'axios'

export const useSearch = () => {
  const [hotels, setHotels] = useState([])

  const search = async ({ city, startDate, endDate, adults, children }) => {
    let data = {}
    if (!startDate || !endDate) {
      data = {
        city,
      }
    } else {
      data = {
        city,
        startDate: new Date(startDate).toISOString(),
        endDate: new Date(endDate).toISOString(),
        adults,
        children,
      }
    }

    try {
      const response = await axios.get(global.API_BASE_URL + 'api/hotels', {
        params: data,
      })

      setHotels(response.data)
    } catch (ex) {
      console.log(ex)
    }
  }

  return [hotels, search]
}