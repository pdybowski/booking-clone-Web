import { CircularProgress, makeStyles } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useSearch } from '../../../hooks/useSearch'
const useStyles = makeStyles((theme) => ({
  center: {
    position: 'absolute',
    top: '50%',
    left: '50%',
  },
}))

export const Hotels = ({ match, location }) => {
  const classes = useStyles()
  const [hotels, search] = useSearch()
  const [pending, setPending] = useState(true)
  const data = location.state ? location.state : { city: match.params.data }
  useEffect(() => {
    async function fetchData() {
      await search(data)
      setPending(false)
    }
    fetchData()
  }, [])
  return (
    <div>
      {pending ? (
        <CircularProgress
          className={classes.center}
          style={{ width: '70px', height: '70px' }}
        />
      ) : hotels.hotels && hotels.hotels.length > 0 ? (
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
