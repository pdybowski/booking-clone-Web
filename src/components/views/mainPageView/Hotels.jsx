import React, { useEffect } from 'react'
import { useSearch } from '../../../hooks/useSearch'

export const Hotels = ({ match, location }) => {
  const [hotels, search] = useSearch()
  const data = location.state
  console.log(match)
  useEffect(() => {
    search(data)
  }, [])

  console.log(hotels)
  return <div>KURWA XD!!!!!</div>
}
