import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import './core/bootstrap'

import reportWebVitals from './reportWebVitals'
import generalRoutes from './routes/general'
import adminRoutes from './routes/admin'
import hotelOwnerRoutes from './routes/hotelOwner'
import userRoutes from './routes/user'
import { TopSection, Hotel } from './components'
import { loadUserInfo, getCookieValue } from './utils'
import { COOKIE_TOKEN } from './constants'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#31a3be',
      contrastText: '#fff',
    },
    secondary: {
      main: '#ebb15f',
      contrastText: '#000',
    },
  },
})

/* *********************** INFO *********************** */
/*
 * use API_BASE_URL variable to declare basic ul
 * example: fetchData(`${API_BASE_URL}api/.....`, body)
 *
 * run "npm start" to work on local DB (recommended)
 * run "npm run serve:prod" to work on prudction DB
 *
 * general routes file has an example of how should
 * route array look like
 *
 * *********************** INFO *********************** */

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <TopSection />
        <Hotel />

        {/* GENERAL ROUTES */}
        {generalRoutes}

        {/* ADMIN ROUTES */}
        {adminRoutes}

        {/* USER ROUTES */}
        {userRoutes}

        {/* HOTEL OWNER ROUTES */}
        {hotelOwnerRoutes}
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
