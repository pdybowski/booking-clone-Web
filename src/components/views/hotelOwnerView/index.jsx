import React, { useEffect, useState } from 'react'
import { isHotelOwner, isHotelOwnerVerified } from '../../../utils'
import HotelOwnerPanel from './HotelOwnerPanel'

export const HotelOwnerView = ({ location }) => {
  useEffect(() => {
    if (!isHotelOwner()) return (window.location.href = '/')
  }, [])

  return (
    <>
      {isHotelOwnerVerified() ? <HotelOwnerPanel /> : 'U are not verified yet'}
    </>
  )
}
