import React from 'react'
import { Route } from 'react-router-dom'
import { AdminView } from '../components'
import {
  HotelOwners,
  Reservations,
  Users,
} from '../components/views/adminView/index'

const adminRoutes = [
  <Route
    path="/admin"
    component={() => <AdminView />}
    exact
    key="admin-route"
  />,
  <Route
    path="/admin/users"
    component={() => <Users />}
    exact
    key="admin-route"
  />,
  <Route
    path="/admin/hotelowners"
    component={() => <HotelOwners />}
    exact
    key="admin-route"
  />,
  <Route
    path="/admin/reservations"
    component={() => <Reservations />}
    exact
    key="admin-route"
  />,
]

export default adminRoutes
