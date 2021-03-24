import React from 'react'
import { useEffect, useState } from 'react'
import { fetchData } from '../utils'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import LoadingIcon from '../content/LoadingIcon'
import { RoomCard } from './RoomCard'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '200px',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    backgroundColor: 'rgb(236 236 236)',
    margin: '5px',
    borderRadius: '5px',
    boxSizing: 'border-box',
    padding: '10px',
    '& > span': {
      margin: theme.spacing(2),
    },
  },
  header: {
    fontSize: '22px',
  },
}))

export function HotelMoreDetails(props) {
  const classes = useStyles()
  const [hotel, setHotel] = useState(null)
  const [loading, setLoading] = useState(true)

  const hotelId = props.match.params.id

  const getHotel = async () => {
    try {
      const hotel = await fetchData(
        global.API_BASE_URL + `api/hotels/${hotelId}`,
        'GET'
      )
      setHotel(hotel)
      setLoading(false)
    } catch (err) {}
  }

  useEffect(() => {
    getHotel()
  }, [])
  return loading ? (
    <Grid container direction="row" justify="center" alignItems="center">
      <LoadingIcon />
    </Grid>
  ) : (
    <Container maxWidth="lg">
      <div className={classes.root}>
        <Grid item xs={4}>
          <p className={classes.header}>{hotel.name}</p>
          <p>{hotel.localization.city}</p>
        </Grid>
        <Grid item xs={6}>
          {hotel.rooms.map((room) => {
            return <RoomCard {...room} hotelId={hotel._id} />
          })}
        </Grid>
      </div>
    </Container>
  )
}
