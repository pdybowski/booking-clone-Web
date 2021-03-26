import React, { useMemo, useState } from 'react'
import { COOKIE_TOKEN, HOTEL_OWNER_ROLE } from '../constants'
import { getUserInfo, removeCookie, isUserLoggedIn } from '../utils'
import { Login } from './Login'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import '../content/css/topSection.css'

export const TopSection = () => {
  const [userInfo, setUserInfo] = useState({})
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useMemo(() => {
    const isLogged = isUserLoggedIn()
    if (isLogged) {
      const data = getUserInfo()
      setUserInfo(data)
      setIsLoggedIn(true)
    }
  }, [])

  const logout = () => {
    localStorage.clear('userInfo')
    removeCookie(COOKIE_TOKEN)
    window.location.href = '/'
  }
  return (
    <div id="TopSection" className="topSectionContainer">
      <Grid container direction="row" justify="flex-start" alignItems="center">
        <a href="/" className="topSectionHeaderlink">
          Booking <span className="loginHeaderSpan">Clone</span>
        </a>
      </Grid>

      {isLoggedIn ? (
        <div className="loginUserInfo">
          Willkommen {userInfo.firstName} {userInfo.lastName} !
          <Button
            size="small"
            variant="contained"
            color="secondary"
            style={{ marginRight: '5%' }}
          >
            {userInfo.role === HOTEL_OWNER_ROLE ? 'Hotel Owner' : userInfo.role}{' '}
            panel
          </Button>
          <Button
            size="small"
            variant="contained"
            onClick={logout}
            color="secondary"
          >
            logout
          </Button>
        </div>
      ) : (
        <Grid
          container
          direction="row"
          justify="flex-end"
          alignItems="center"
          spacing={3}
          className="loginContainer"
        >
          <Grid item>
            <Login />
            <a href="#" className="loginForgotPassword loginLink">
              FORGOT PASSWORD
            </a>
          </Grid>
          <Grid item className="loginRegister">
            <a href="/register" className="loginLink">
              REGISTER
            </a>
          </Grid>
        </Grid>
      )}
    </div>
  )
}
