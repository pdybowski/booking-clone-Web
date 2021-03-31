export const handleRoomAdd = (room, validateError, successCb) => {
  if (!room.roomNumber) {
    return validateError('Room number in incorrect.')
  } else if (!room.description) {
    return validateError('Description is inncorect.')
  } else if (room.beds.single < 0) {
    return validateError('Single Beds count is incorrect.')
  } else if (room.beds.double < 0) {
    return validateError('Double Beds count is incorrect.')
  } else if (room.price < 10) {
    return validateError('Price is incorrect.')
  } else {
    successCb()
  }
}
