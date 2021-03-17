import React from 'react'
import { TextField, CircularProgress } from '@material-ui/core'
import { fetchData, saveCookie } from '../utils'
import { COOKIE_TOKEN, HOTEL_OWNER_ROLE, USER_ROLE } from '../constants'
import {
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  FormControlLabel,
  Checkbox,
  Grid,
  Button,
} from '@material-ui/core'
import '../content/css/register.css'

export class Register extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      form: {
        email: '',
        password: '',
        repeatPassword: '',
        firstName: '',
        lastName: '',
        role: 'user',
        phoneNumber: '',
        isSmsAllowed: false,
      },
      registering: false,
    }

    this.register.bind(this)
    this.handleEmailChange.bind(this)
    this.handlePasswordChange.bind(this)
    this.handleRepeatPasswordChange.bind(this)
    this.handleFirstNameChange.bind(this)
    this.handleLastNameChange.bind(this)
    this.handleRoleChange.bind(this)
    this.handlePhoneNumberChange.bind(this)
    this.handlePhoneNumberCheckboxChange.bind(this)
  }

  async register(e) {
    e.preventDefault()
    this.setState({ registering: true })

    try {
      const { token } = await fetchData(
        global.API_BASE_URL + 'api/auth/register',
        'POST',
        this.state.form
      )

      const cookieOpt = {
        cname: COOKIE_TOKEN,
        cvalue: token,
        expiredHours: 1,
      }

      saveCookie(cookieOpt)
      window.location.href = '/'

      this.setState({ registering: false })
    } catch (err) {
      alert(err.message)

      this.setState({ registering: false })
    }
  }

  handleEmailChange(e) {
    this.setState({ form: { ...this.state.form, email: e.target.value } })
  }

  handlePasswordChange(e) {
    this.setState({ form: { ...this.state.form, password: e.target.value } })
  }

  handleRepeatPasswordChange(e) {
    this.setState({
      form: { ...this.state.form, repeatPassword: e.target.value },
    })
  }

  handleFirstNameChange(e) {
    this.setState({ form: { ...this.state.form, firstName: e.target.value } })
  }

  handleLastNameChange(e) {
    this.setState({ form: { ...this.state.form, lastName: e.target.value } })
  }

  handleRoleChange(e) {
    this.setState({ form: { ...this.state.form, role: e.target.value } })
  }

  handlePhoneNumberChange(e) {
    this.setState({ form: { ...this.state.form, phoneNumber: e.target.value } })
  }

  handlePhoneNumberCheckboxChange(e) {
    this.setState({
      form: { ...this.state.form, isSmsAllowed: e.target.checked },
    })
  }

  render() {
    return (
      <form
        id="Register"
        onSubmit={(e) => this.register(e)}
        autoComplete="on"
        className="register-form"
      >
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          spacing={3}
        >
          <Grid item xs={12} sm={6}>
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="center"
              spacing={3}
            >
              <Grid item xs={12}>
                <TextField
                  id="outlined-basic"
                  label="Login"
                  type="email"
                  variant="outlined"
                  onChange={(e) => this.handleEmailChange(e)}
                  noValidate
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="outlined-basic"
                  label="Password"
                  type="password"
                  variant="outlined"
                  onChange={(e) => this.handlePasswordChange(e)}
                  noValidate
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="outlined-basic"
                  label="Repeat Password"
                  type="password"
                  variant="outlined"
                  onChange={(e) => this.handleRepeatPasswordChange(e)}
                  noValidate
                  required
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="center"
              spacing={3}
            >
              <Grid item xs={12}>
                <TextField
                  id="outlined-basic"
                  label="First Name"
                  variant="outlined"
                  onChange={(e) => this.handleFirstNameChange(e)}
                  noValidate
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="outlined-basic"
                  label="Last Name"
                  variant="outlined"
                  onChange={(e) => this.handleLastNameChange(e)}
                  noValidate
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl>
                  <InputLabel id="demo-simple-select-label">Role</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={this.state.form.role}
                    onChange={(e) => this.handleRoleChange(e)}
                  >
                    <MenuItem value={USER_ROLE}>User</MenuItem>
                    <MenuItem value={HOTEL_OWNER_ROLE}>Hotel Owner</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="center"
              spacing={3}
            >
              <Grid item xs={12}>
                {this.state.form.isSmsAllowed ? (
                  <TextField
                    id="outlined-basic"
                    type="tel"
                    label="Phone Number"
                    variant="outlined"
                    onChange={(e) => this.handlePhoneNumberChange(e)}
                    noValidate
                    required
                  />
                ) : (
                  <TextField
                    id="outlined-basic"
                    type="tel"
                    label="Phone Number"
                    variant="outlined"
                    onChange={(e) => this.handlePhoneNumberChange(e)}
                    noValidate
                  />
                )}
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={this.state.form.isSmsAllowed}
                      onChange={(e) => this.handlePhoneNumberCheckboxChange(e)}
                      inputProps={{ 'aria-label': 'primary checkbox' }}
                    />
                  }
                  label="Allow SMS"
                />
              </Grid>
            </Grid>
          </Grid>

          {!this.state.registering ? (
            <Grid item xs={12} sm={6}>
              <Grid
                container
                direction="column"
                justify="flex-end"
                alignItems="center"
              >
                <Button variant="contained" color="primary" type="submit">
                  Register
                </Button>
              </Grid>
            </Grid>
          ) : (
            <Grid item xs={12} sm={6}>
              <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
              >
                <CircularProgress />
              </Grid>
            </Grid>
          )}
        </Grid>
      </form>
    )
  }
}
