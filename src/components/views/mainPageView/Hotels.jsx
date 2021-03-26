import { CircularProgress, makeStyles } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useSearch } from '../../../hooks/useSearch'
import { HotelCard } from '../../HotelCard'
const useStyles = makeStyles((theme) => ({
  center: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    color: theme.palette.secondary.main,
  },
}))

export const Hotels = ({ match, location }) => {
  const classes = useStyles()
  const [hotels, search] = useSearch()
  const [loading, setLoading] = useState(false)
  let data = location.state ? location.state : { city: match.params.data }
  data = !data.startDate && data.city === 'Anywhere' ? '' : data
  useEffect(() => {
    search(data, setLoading)
  }, [])
  return (
    <div>
      {loading ? (
        <CircularProgress
          className={classes.center}
          style={{ width: '70px', height: '70px' }}
        />
      ) : hotels.hotels ? (
        <>
          <h1>{data.city ? data.city : ' Anywhere'}</h1>
          {hotels.hotels.map((hotel) => (
            <HotelCard hotel={hotel} />
          ))}
        </>
      ) : (
        <h1>No hotels found in {data.city}</h1>
      )}
    </div>
  )
}
