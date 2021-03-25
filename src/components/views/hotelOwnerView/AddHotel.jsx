import React, { useState } from 'react'
import { fetchData } from '../../../utils/'
import { makeStyles } from '@material-ui/core/styles'
import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import StepLabel from '@material-ui/core/StepLabel'
import Button from '@material-ui/core/Button'
import Snackbar from '@material-ui/core/Snackbar'
import MuiAlert from '@material-ui/lab/Alert'
import Typography from '@material-ui/core/Typography'
import { RoomsStep, LocalizationStep, BasicInformationStep } from './steps'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: 'auto',
    marginTop: '3rem',
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}))

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />
}

const getSteps = () => {
  return ['Basic information', 'Localization', 'Rooms']
}

const AddHotel = () => {
  const classes = useStyles()

  const [errorMsg, setErrorMsg] = useState()
  const [alertOpen, setAlertOpen] = useState(false)
  const [successOpen, setSuccessOpen] = useState(false)

  const [activeStep, setActiveStep] = useState(0)

  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [phoneNumber, setPhoneNumber] = useState()
  const [country, setCountry] = useState()
  const [city, setCity] = useState()
  const [zipcode, setZipcode] = useState()
  const [street, setStreet] = useState()
  const [buildingNumber, setBuildingNumber] = useState()
  const [rooms, setRooms] = useState([])

  const data = {
    name,
    email,
    phoneNumber,
    localization: { country, city, zipcode, street, buildingNumber },
    rooms,
  }

  const steps = getSteps()

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }

    setAlertOpen(false)
    setSuccessOpen(false)
  }

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1)
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }

  const restart = () => {
    setName()
    setEmail()
    setPhoneNumber()
    setCountry()
    setCity()
    setZipcode()
    setStreet()
    setBuildingNumber()
    setRooms([])
    setActiveStep(0)
  }

  const handleSubmit = async () => {
    try {
      await fetchData(
        global.API_BASE_URL + 'api/hotelOwner/hotels',
        'POST',
        data
      )
      setSuccessOpen(true)
    } catch (ex) {
      alert(ex)
    }
  }

  const getStepContent = (stepIndex) => {
    switch (stepIndex) {
      case 0:
        return (
          <BasicInformationStep
            setName={setName}
            setEmail={setEmail}
            setPhoneNumber={setPhoneNumber}
          />
        )
      case 1:
        return (
          <LocalizationStep
            setCountry={setCountry}
            setCity={setCity}
            setZipcode={setZipcode}
            setStreet={setStreet}
            setBuildingNumber={setBuildingNumber}
          />
        )
      case 2:
        return <RoomsStep setRooms={setRooms} />
      default:
        return 'Unknown stepIndex'
    }
  }

  const getValidationFunction = () => {
    switch (activeStep) {
      case 0:
        if (!name) {
          setErrorMsg('Name is incorrect')
          setAlertOpen(true)
          return false
        }
        if (email) {
          const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          const isValidEmail = re.test(String(email).toLowerCase())
          if (!isValidEmail) {
            setErrorMsg('Email is incorrect.')
            setAlertOpen(true)
            return false
          }
        }
        if (!phoneNumber || phoneNumber.toString().length !== 9) {
          setErrorMsg('Phone number is incorrect.')
          setAlertOpen(true)
          return false
        }
        handleNext()
        break
      case 1:
        if (!country) {
          setErrorMsg('Country is incorrect.')
          setAlertOpen(true)
          return false
        }
        if (!city) {
          setErrorMsg('City is incorrect.')
          setAlertOpen(true)
          return false
        }
        if (!zipcode) {
          setErrorMsg('Zip code is incorrect.')
          setAlertOpen(true)
          return false
        }
        if (!street) {
          setErrorMsg('Street is incorrect.')
          setAlertOpen(true)
          return false
        }
        if (!buildingNumber) {
          setErrorMsg('Building number is incorrect.')
          setAlertOpen(true)
          return false
        }
        handleNext()
        break
      case 2:
        if (rooms.length < 1) {
          setErrorMsg('You should provide at least 1 room.')
          setAlertOpen(true)
          return false
        }
        handleNext()
        break
      default:
        return
    }
  }

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography className={classes.instructions}>
              All steps completed
            </Typography>
            <Button onClick={handleSubmit}>Submit</Button>
            <Button onClick={restart}>Restart</Button>
          </div>
        ) : (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography className={classes.instructions}>
              {getStepContent(activeStep)}
            </Typography>
            <div>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}
              >
                Back
              </Button>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                value="BasicInformation"
                onClick={getValidationFunction}
              >
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </div>
          </div>
        )}
      </div>
      <Snackbar open={alertOpen} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error">
          {errorMsg}
        </Alert>
      </Snackbar>
      <Snackbar
        open={successOpen}
        autoHideDuration={3000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="success">
          Hotel has been added
        </Alert>
      </Snackbar>
    </div>
  )
}

export default AddHotel
