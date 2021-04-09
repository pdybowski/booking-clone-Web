import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import UserView from '../components/views/userView'
import { isUser } from '../utils'

const PrivateUserRoute = ({ ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        return isUser() ? <UserView {...props} /> : <Redirect to="/" />
      }}
    />
  )
}

const userRoutes = [
  <PrivateUserRoute path="/user" exact key="user-route" />,
  <PrivateUserRoute path="/user/changePassword" exact key="user-route" />,
]

export default userRoutes
