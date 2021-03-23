import React from 'react'
import { useEffect, useState } from 'react'
import { fetchData } from '../utils'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import SingleBedIcon from '@material-ui/icons/SingleBed'
import KingBedIcon from '@material-ui/icons/KingBed'
import EuroIcon from '@material-ui/icons/Euro'
import Container from '@material-ui/core/Container'
import Hotel from './Hotel'
import LoadingIcon from '../content/LoadingIcon'
import { Link } from 'react-router-dom'

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
  icon: {
    position: 'relative',
    top: '6px',
    margin: '0 5px',
  },
  button: {
    position: 'relative',
    right: '-10%',
  },
}))

export function HotelMoreDetails(props) {
  const classes = useStyles()
  const [hotel, setHotel] = useState(null)
  const [loading, setLoading] = useState(true)

  console.log(props)
  const hotelId = props.match.params.id

  const getHotel = async () => {
    const hotel = await fetchData(
      global.API_BASE_URL + `api/hotels/${hotelId}`,
      'GET'
    )
    setHotel(hotel)
    setLoading(false)
    console.log(hotel)
  }

  useEffect(() => {
    getHotel()
  }, [])

  return loading ? (
    <LoadingIcon />
  ) : (
    <Container maxWidth="lg">
      <div className={classes.root}>
        <Grid item xs={4}>
          <p>{hotel.name}</p>
          <p>{hotel.localization.city}</p>
        </Grid>
        <Grid item xs={6}>
          {hotel.rooms.map((room) => {
            return (
              <p>
                <span>
                  <SingleBedIcon className={classes.icon} /> Single bed:{' '}
                  <span>{room.beds.single} </span>
                </span>
                <span>
                  <KingBedIcon className={classes.icon} /> Double bed:{' '}
                  <span>{room.beds.double} </span>
                </span>
                <span>
                  <EuroIcon className={classes.icon} />
                  Price: {room.price}
                </span>
                <Link
                  to={`/hotels/${hotelId}/${room._id}/reservation`}
                  className={`MuiButtonBase-root MuiButton-root MuiButton-contained makeStyles-button-22 MuiButton-containedPrimary ${classes.button}`}
                >
                  reserve
                </Link>
              </p>
            )
          })}
        </Grid>
      </div>
    </Container>
  )
}
