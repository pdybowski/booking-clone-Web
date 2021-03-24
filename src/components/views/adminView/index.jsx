import React from 'react'
import { isAdmin } from '../../../utils'
import { AdminMenu } from './AdminMenu'
import { HotelOwners } from './HotelOwners'
import { Reservations } from './Reservations'
import { Users } from './Users'
import { PATHNAMES } from '../../../constants'

export class AdminView extends React.Component {
  constructor(props) {
    super(props)

    this._init()
    this.pathname = this.props.location ? this.props.location.pathname : null
  }

  _init() {
    if (!isAdmin()) return (window.location.href = '/')
  }

  handleRenderTable(path) {
    if (path === PATHNAMES.USERS) return <Users />
    if (path === PATHNAMES.HOTELOWNERS) return <HotelOwners />
    if (path === PATHNAMES.RESERVATIONS) return <Reservations />
    if (!path) return
  }
  render() {
    return (
      <div>
        <AdminMenu />
        {this.handleRenderTable(this.pathname)}
      </div>
    )
  }
}
