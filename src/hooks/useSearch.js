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
        startDate,
        endDate,
        adults: adults ? adults : 1,
        children: children ? children : 0,
      }
    }

    const response = await axios.get(global.API_BASE_URL + 'api/hotels', {
      params: data,
    })

    setHotels(response.data)
  }

  return [hotels, search]
}
