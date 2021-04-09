import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { TextField, Button, Box } from '@material-ui/core'
import LoadingIcon from '../../shared/LoadingIcon'
import { COOKIE_TOKEN } from '../../../constants'
import { getCookieValue, getUserInfo } from '../../../utils/'
import { fetchData } from '../../../utils'
import useNotification from '../../../hooks/useNotification'

//TODO: figure out why chaning password doesnt work
//TODO: most likely its backend problem

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '70vh',
  },
  box: {
    padding: '2rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  marginTop: {
    marginTop: '2rem',
  },
}))

export const ChangePassword = () => {
  const classes = useStyles()
  const { openNotification } = useNotification()
  const [passwords, setPasswords] = useState({})
  const [isLoading, setIsLoading] = useState(false)

  const validatePasswords = () => {
    const { password, repeatedPassword } = passwords
    if (!password || !password) {
      openNotification('Passwords are not valid!', 'error')
      return false
    } else if (password !== repeatedPassword) {
      openNotification('Passwords are not the same!', 'error')
      return false
    } else if (password.length < 8) {
      openNotification(
        'Password should be at least 8 characters long!',
        'error'
      )
      return false
    }
  }

  const handlePasswordChange = async () => {
    try {
      if (validatePasswords() === false) return

      const token = getCookieValue(COOKIE_TOKEN)
      const userInfo = getUserInfo()

      const data = {
        password: passwords.password,
        userId: userInfo._id,
        token,
      }

      setIsLoading(true)
      await fetchData(
        global.API_BASE_URL + 'api/auth/resetPassword',
        'POST',
        data
      )
      setIsLoading(false)
      openNotification('Password has been changed!')
    } catch (ex) {
      openNotification(ex.message, 'error')
      setIsLoading(false)
    }
  }

  return (
    <div className={classes.root}>
      <Box borderRadius={5} boxShadow={3} className={classes.box}>
        <TextField
          type="password"
          label="New Password"
          onChange={(e) =>
            setPasswords((prev) => ({ ...prev, password: e.target.value }))
          }
        />
        <TextField
          className={classes.marginTop}
          type="password"
          label="Repeat Password"
          onChange={(e) =>
            setPasswords((prev) => ({
              ...prev,
              repeatedPassword: e.target.value,
            }))
          }
        />
        {isLoading ? (
          <LoadingIcon className={classes.marginTop} />
        ) : (
          <Button
            className={classes.marginTop}
            variant="contained"
            color="secondary"
            onClick={handlePasswordChange}
          >
            Change Password
          </Button>
        )}
      </Box>
    </div>
  )
}
