import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '15ch',
  },
  numberField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '10ch',
  },
}))

const SearchBar = ({ onSearchSubmit }) => {
  const classes = useStyles()

  const [city, setCity] = useState('')
  const [startDate, setStartDate] = useState('2021-07-01')
  const [endDate, setEndDate] = useState('2021-07-07')
  const [single, setSingle] = useState(2)
  const [double, setDouble] = useState(1)

  const data = {
    city,
    startDate,
    endDate,
    single,
    double,
  }

  const handleSearchSubmit = () => {
    console.log(data)
    onSearchSubmit(data)
  }

  return (
    <div className={classes.root}>
      <TextField
        id="standard"
        label="City"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <TextField
        id="date"
        label="Start Date"
        type="date"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
        id="date"
        label="End Date"
        type="date"
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
        id="standard-number"
        className={classes.numberField}
        label="Single beds"
        type="number"
        InputLabelProps={{
          shrink: true,
        }}
        value={single}
        onChange={(e) => setSingle(e.target.value)}
      />
      <TextField
        id="standard-number"
        className={classes.numberField}
        label="Double Beds"
        style={{ marginLeft: '.5rem' }}
        type="number"
        InputLabelProps={{
          shrink: true,
        }}
        value={double}
        onChange={(e) => setDouble(e.target.value)}
      />
      <Button
        variant="contained"
        color="primary"
        type="submit"
        style={{ marginLeft: '.5rem' }}
        onClick={handleSearchSubmit}
      >
        Search
      </Button>
    </div>
  )
}

export default SearchBar
