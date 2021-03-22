import React from 'react'
import { Route } from 'react-router-dom'
import { NoMatch } from '../components/NoMatch'

const NoMatchRoute = [
  <Route path="*">
    <NoMatch />
  </Route>,
]

export default NoMatchRoute
