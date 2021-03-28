import React from 'react'
import { Route } from 'react-router-dom'
import App from '../App'
import { HotelMoreDetails, Register, Hotels, NoMatch } from '../components'

const generalRoutes = [
  <Route exact path="/" component={() => <App />} key="app-route" />,
  <Route
    exact
    path="/register"
    component={() => <Register />}
    key="app-register"
  />,
  <Route
    path="/hotels/:data/:id"
    render={(props) => (
      <HotelMoreDetails
        hotelId={props.match.params.id}
        city={props.match.params.data}
        {...props}
      />
    )}
    key="app-hotelDetails"
  />,
  <Route
    path="/hotels/:data"
    render={(props) => <Hotels {...props} />}
    key="app-hotelsByCity"
  />,
  <Route path="*" key="NoMatch">
    <NoMatch />
  </Route>,
]

export default generalRoutes
