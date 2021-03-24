import { CircularProgress, makeStyles } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { COOKIE_TOKEN } from '../../../constants'
import { getCookieValue } from '../../../utils'
import { Table } from '../../shared/Table'

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  {
    field: 'phoneNumber',
    headerName: 'Phone Number',
    width: 200,
  },
  { field: 'email', headerName: 'Email', width: 130 },
]

const useStyles = makeStyles((theme) => ({
  center: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    color: theme.palette.secondary.main,
  },
  centerItems: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '70vh',
  },
}))

export const Users = () => {
  const [selectedRows, setSelectedRows] = useState([])
  const [users, setUsers] = useState([])
  const [pending, setPending] = useState(true)
  const classes = useStyles()

  const getUsers = async () => {
    try {
      const promise = await fetch(global.API_BASE_URL + 'api/admin/users', {
        method: 'GET',
        headers: { 'X-Auth-token': getCookieValue(COOKIE_TOKEN) },
      })
      const data = await promise.json()
      setUsers(
        data.map((field, index) => {
          return {
            id: index + 1,
            firstName: field.firstName,
            lastName: field.lastName,
            phoneNumber: field.phoneNumber,
            email: field.email,
          }
        })
      )
      setPending(false)
    } catch (err) {
      console.log(err)
    }
  }
  useEffect(() => {
    getUsers()
  }, [])
  return (
    <div className={classes.centerItems}>
      {!pending ? (
        <Table
          rows={users}
          columns={columns}
          height="500px"
          width="50%"
          pageSize={5}
          setSelectedRows={setSelectedRows}
          selectedRows={selectedRows}
        />
      ) : (
        <CircularProgress
          className={classes.center}
          style={{ width: '70px', height: '70px' }}
        />
      )}
      {console.log(users)}
    </div>
  )
}
