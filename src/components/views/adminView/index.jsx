import React from 'react'
import { isAdmin } from '../../../utils'
import { AdminMenu } from './AdminMenu'
import { HotelOwners } from './HotelOwners'
import { Reservations } from './Reservations'
import { Cities } from './Cities'
import { Users } from './Users'
import {
  ADMIN_PATHNAMES,
  usersColumns,
  adminStyles as useStyles,
} from '../../../constants'
import { WelcomePage } from './WelcomePage'
import { hotelOwnerColumns } from './hotelOwnerColumns'
import { Redirect } from 'react-router'

export class AdminView extends React.Component {
  constructor(props) {
    super(props)

    this.pathname = this.props.location ? this.props.location.pathname : null
  }

  handleRenderTable(path) {
    if (path === ADMIN_PATHNAMES.USERS)
      return <Users columns={usersColumns} useStyles={useStyles} />
    if (path === ADMIN_PATHNAMES.HOTELOWNERS)
      return <HotelOwners columns={hotelOwnerColumns} useStyles={useStyles} />
    if (path === ADMIN_PATHNAMES.CITIES) return <Cities useStyles={useStyles} />
    if (path === ADMIN_PATHNAMES.RESERVATIONS) return <Reservations />
    if (!path) return <WelcomePage useStyles={useStyles} />
  }
  render() {
    return (
      <div>
        {isAdmin() ? (
          <>
            <AdminMenu />
            {this.handleRenderTable(this.pathname)}
          </>
        ) : (
          <Redirect to="/" />
        )}
      </div>
    )
  }
}
