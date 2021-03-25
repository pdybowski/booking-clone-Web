import React, { useMemo, useState } from 'react'
import { COOKIE_TOKEN } from '../constants'
import { getUserInfo, removeCookie } from '../utils'
import { Login } from './Login'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import { isUserLoggedIn } from '../utils'
import '../content/css/topSection.css'
import { HOTEL_OWNER_ROLE } from '../constants'

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
    <div id="TopSection" className="top-section-container">
      <Grid
        container
        justify="space-between"
        alignItems="center"
        style={{
          height: '15vh',
        }}
      >
        <Grid item xs={3}>
          <a href="/" className="loginHeader">
            Booking <span className="loginHeaderSpan">Clone</span>
          </a>
        </Grid>
        <Grid item xs={3}>
          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="center"
          >
            {isLoggedIn ? (
              <div className="loginUserInfo">
                Willkommen {userInfo.firstName} {userInfo.lastName} !
              </div>
            ) : (
              <Login />
            )}
          </Grid>
          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="center"
          >
            {isLoggedIn ? (
              <Grid
                container
                direction="row"
                justify="flex-start"
                alignItems="center"
              >
                <Button
                  size="small"
                  variant="contained"
                  color="secondary"
                  style={{ marginRight: '5%' }}
                >
                  {userInfo.role === HOTEL_OWNER_ROLE
                    ? 'Hotel Owner'
                    : userInfo.role}{' '}
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
              </Grid>
            ) : (
              <Grid
                container
                direction="row"
                justify="flex-start"
                alignItems="center"
              >
                <a href="#" className="loginForgotPassword loginLink">
                  FORGOT PASSWORD
                </a>
                <a href="#" className="loginRegister loginLink">
                  REGISTER
                </a>
              </Grid>
            )}
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}
