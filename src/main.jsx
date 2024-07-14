import React from 'react'
import ReactDOM from 'react-dom/client'

import { ThemeProvider } from 'styled-components'
import { Header } from './Components/Header'

import theme from './styles/theme.js'

import GlobalStyles from './styles/global.js'
// import { AppRoutes } from './Routes/app.routes.jsx'

import { Home } from './Pages/Home/index.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={theme}>
    <GlobalStyles/>
    <Header/>
    <Home/>
  </ThemeProvider>
)
