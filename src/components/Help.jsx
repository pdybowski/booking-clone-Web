import React from 'react'
import Grid from '@material-ui/core/Grid'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import FolderIcon from '@material-ui/icons/Folder'
import MailOutlineIcon from '@material-ui/icons/MailOutline'
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid'

export const Help = () => {
  return (
    <div className="helpContainer">
      <Grid container direction="column" justify="center" alignItems="center">
        <h1 className="helpHeader">Contact Us</h1>
        <List>
          <ListItem>
            <ListItemIcon>
              <MailOutlineIcon />
            </ListItemIcon>
            Email enquiries:{' '}
            <a href="mailto:booking@gmail.com">booking@gmail.com</a>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <PhoneAndroidIcon />
            </ListItemIcon>
            Phone number: 789-789-789
          </ListItem>
        </List>
      </Grid>
    </div>
  )
}
