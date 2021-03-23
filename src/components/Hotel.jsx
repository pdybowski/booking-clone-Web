import React from 'react'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import Rating from '@material-ui/lab/Rating'
import HotelIcon from '@material-ui/icons/Hotel'

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
  img: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: '80%',
    height: 'auto',
    margin: '0 auto',
    padding: '.25rem',
    backgroundColor: '#fff',
    border: '1px solid #dee2e6',
  },
  grid: {
    position: 'relative',
  },
  rating: {
    fontSize: '19px',
    marginLeft: '5px',
  },
  hotelHeader: {
    fontSize: '22px',
  },
  icon: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '7em',
    height: '7em',
  },
}))

function Hotel(props) {
  const classes = useStyles()
  const hotel = props
  return (
    <div className={classes.root}>
      <Grid item xs={4} className={classes.grid}>
        <HotelIcon className={classes.icon} />
      </Grid>
      <Grid item xs={6}>
        <span className={classes.hotelHeader}>{hotel.name}</span>
        <Rating
          className={classes.rating}
          name="read-only"
          value={1}
          readOnly
        />
        <p>{hotel.localization.city}</p>
        <p>{hotel.description}</p>
      </Grid>
      <Grid item xs={2} container justify="flex-end" alignItems="flex-end">
        <Button variant="contained" color="primary">
          Pokaż
        </Button>
      </Grid>
    </div>
  )
}
export default Hotel
