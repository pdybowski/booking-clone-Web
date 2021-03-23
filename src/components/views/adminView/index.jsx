import React from 'react'
import { isAdmin } from '../../../utils'
import { AdminMenu } from './AdminMenu'

export class AdminView extends React.Component {
  constructor(props) {
    super(props)

    this._init()
  }

  _init() {
    if (!isAdmin()) return (window.location.href = '/')
  }

  render() {
    return (
      <div>
        <AdminMenu />
      </div>
    )
  }
}
