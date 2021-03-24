import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import StepLabel from '@material-ui/core/StepLabel'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { RoomsStep, LocalizationStep, BasicInformationStep } from './steps'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}))

const getSteps = () => {
  return ['Basic information', 'Localization', 'Rooms']
}

const AddHotel = () => {
  const classes = useStyles()

  const [activeStep, setActiveStep] = useState(0)

  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [phoneNumber, setPhoneNumber] = useState()
  const [country, setCountry] = useState()
  const [city, setCity] = useState()
  const [zipCode, setZipCode] = useState()
  const [street, setStreet] = useState()
  const [buildingNumber, setBuildingNumber] = useState()

  const data = {
    name,
    email,
    phoneNumber,
    country,
    city,
    zipCode,
    street,
    buildingNumber,
  }

  const steps = getSteps()

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1)
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }

  const handleSubmit = () => {
    setActiveStep(0)
    console.log(data)
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
            setZipCode={setZipCode}
            setStreet={setStreet}
            setBuildingNumber={setBuildingNumber}
          />
        )
      case 2:
        return <RoomsStep />
      default:
        return 'Unknown stepIndex'
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
            <Button onClick={handleSubmit}>Submit And Restart</Button>
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
              <Button variant="contained" color="primary" onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default AddHotel
