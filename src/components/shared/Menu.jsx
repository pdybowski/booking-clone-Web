import React from 'react'
import { MenuList, MenuItem } from '@material-ui/core'
import { Link, withRouter } from 'react-router-dom'

// EXAMPLE USAGE:

// import Menu from './shared/Menu'
// import { makeStyles } from '@material-ui/core/styles'

// const routes = [
//   {
//     location: '/',
//     name: 'Main Page',
//   },
//   {
//     location: '/register',
//     name: 'Register',
//   },
// ]

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: theme.palette.secondary.main,
//     outline: 'none',
//     padding: '0',
//     height: '2.8rem',
//   },
//   menuItem: {
//     color: '#fff',
//     height: '100%',
//   },
// }))

// const component = () => {
//   return <Menu menuItems={routes} useStyles={useStyles} />
// }

const Menu = (props) => {
  const {
    menuItems,
    location: { pathname },
    useStyles,
  } = props

  const classes = useStyles()

  return (
    <MenuList className={classes.root}>
      {menuItems.map(({ location, name }) => {
        return (
          <MenuItem
            component={Link}
            to={location}
            selected={location === pathname}
            className={classes.menuItem}
          >
            {name}
          </MenuItem>
        )
      })}
    </MenuList>
  )
}

export default withRouter(Menu)
