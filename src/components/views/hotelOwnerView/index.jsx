import React, { useEffect } from 'react'
import { isHotelOwner, isHotelOwnerVerified } from '../../../utils'
import HotelOwnerPanel from './HotelOwnerPanel'
import '../../../content/css/hotelOwner.css'

export const HotelOwnerView = ({ location }) => {
  useEffect(() => {
    if (!isHotelOwner()) return (window.location.href = '/')
  }, [])

  return (
    <>
      {isHotelOwnerVerified() ? (
        <HotelOwnerPanel />
      ) : (
        <div className="owner-not-verified">
          <h2>You are not verified yet.</h2>
          <h3>Contact our help center at helpcenter@booking-clone.com</h3>
        </div>
      )}
    </>
  )
}
