import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import SingleBedIcon from '@material-ui/icons/SingleBed'
import KingBedIcon from '@material-ui/icons/KingBed'
import EuroIcon from '@material-ui/icons/Euro'
import { Link } from 'react-router-dom'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles((theme) => ({
  icon: {
    position: 'relative',
    top: '6px',
    margin: '0 5px',
  },
  button: {
    position: 'relative',
    right: '-25%',
    margin: '5px',
  },
}))

export function RoomCard(room) {
  const classes = useStyles()
  return (
    <Grid container direction="column" justify="center" alignItems="center">
      <Grid container direction="row" justify="center" alignItems="center">
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
          to={`/hotels/${room.hotelId}/${room._id}/reservation`}
          className={`MuiButtonBase-root MuiButton-root MuiButton-contained makeStyles-button-22 MuiButton-containedPrimary ${classes.button}`}
        >
          reserve
        </Link>
      </Grid>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="flex-start"
      >
        <span>Room number: {room.roomNumber}</span>
        <p>
          Description: Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Exercitationem ut ab eos necessitatibus cum sunt nam, impedit ipsam
          nobis numquam!
        </p>
      </Grid>
    </Grid>
  )
}
