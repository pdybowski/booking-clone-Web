import React from 'react'
import { Route } from 'react-router-dom'
import { HotelOwnerView } from '../components'

const hotelOwnerRoutes = [
  <Route
    path="/hotelOwner"
    component={(props) => <HotelOwnerView {...props} />}
    exact
    key="hotelOwner-route"
  />,
  <Route
    path="/hotelOwner/addHotel"
    component={(props) => <HotelOwnerView {...props} />}
    exact
    key="hotelOwner-route"
  />,
  <Route
    path="/hotelOwner/showAll"
    component={(props) => <HotelOwnerView {...props} />}
    exact
    key="hotelOwner-route"
  />,
]

export default hotelOwnerRoutes
