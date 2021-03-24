import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'

const useStyles = makeStyles((theme) => ({
  form: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}))

export const BasicInformationStep = ({ setName, setEmail, setPhoneNumber }) => {
  const classes = useStyles()

  return (
    <form className={classes.form} noValidate autoComplete="off">
      <TextField
        id="standard-basic"
        label="Name"
        onChange={(e) => setName(e.target.value)}
      />
      <TextField
        id="standard-basic"
        label="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        id="standard-number"
        type="number"
        label="Phone Number"
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
    </form>
  )
}
