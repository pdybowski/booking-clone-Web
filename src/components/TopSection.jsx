import React, { useMemo, useState } from 'react'
import { COOKIE_TOKEN } from '../constants'
import { getCookieValue, getUserInfo } from '../utils'
import { Login } from './Login'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'

export const TopSection = () => {
  const [userInfo, setUserInfo] = useState({})
  console.log(userInfo)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useMemo(() => {
    const token = getCookieValue(COOKIE_TOKEN)
    if (token) {
      const data = getUserInfo()
      if (data) {
        setUserInfo(data)
        setIsLoggedIn(true)
      }
    }
  }, [])

  return (
    <div id="TopSection" style={{ height: '15vh', paddingTop: '5px' }}>
      <Container fixed>
        <Grid container spacing={3} justify="space-between" alignItems="center">
          <Grid item xs={7}>
            <div>Booking Clone</div>
          </Grid>
          <Grid item xs={5}>
            <Grid
              container
              direction="row"
              justify="flex-end"
              alignItems="center"
            >
              {isLoggedIn ? (
                <div>
                  Willkommen {userInfo.firstName} {userInfo.lastName} !
                </div>
              ) : (
                <Login />
              )}
            </Grid>
            <Grid
              container
              direction="row"
              justify="flex-end"
              alignItems="center"
            >
              {isLoggedIn ? (
                <div>
                  <Button size="small" variant="contained">
                    {userInfo.role} panel
                  </Button>
                  <Button size="small" variant="contained">
                    logout
                  </Button>
                </div>
              ) : (
                <Grid
                  container
                  direction="row"
                  justify="space-evenly"
                  alignItems="center"
                >
                  <Button size="small" variant="contained">
                    forgot password
                  </Button>
                  <Button size="small" variant="contained">
                    register
                  </Button>
                </Grid>
              )}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}
