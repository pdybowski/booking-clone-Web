export const menuItems = [
  {
    name: 'Hotels',
    location: '/hotelOwner',
    type: 'dropdown',
    dropdownItems: [
      {
        location: '/showAllMyHotels',
        name: 'Show All',
      },
      {
        location: '/editMyHotels',
        name: 'Edit Hotels',
      },
      {
        location: '/addMyHotel',
        name: 'Add Hotels',
      },
      {
        location: '/removeMyHotels',
        name: 'Remove Hotels',
      },
    ],
  },
  {
    location: '/',
    name: 'Reservations',
  },
]

export const classes = {
  navBar: 'bg-light',
}
