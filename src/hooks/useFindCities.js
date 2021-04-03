import { useState } from 'react'
import { fetchData } from '../utils'

export const useFindCities = () => {
  const [cities, setCities] = useState([])
  const findCities = async (setPending) => {
    try {
      const cities = await fetchData(global.API_BASE_URL + 'api/cities', 'GET')
      setCities(cities)
      setPending(false)
    } catch (err) {
      alert(err)
    }
  }

  return [cities, findCities]
}
