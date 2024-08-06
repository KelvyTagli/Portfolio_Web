import React from 'react'
import ReactDOM from 'react-dom/client'

import { ThemeProvider } from 'styled-components'
import {Header}  from './Components/Header'

import theme from './styles/theme.js'

import GlobalStyles from './styles/global.js'

import {Home} from '../src/Pages/Home'
import {About} from '../src/Pages/About'
import {Portfolio} from '../src/Pages/Portfolio'
import { Contact } from './Pages/Contact/index.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <ThemeProvider theme={theme}>
        <GlobalStyles/>
        <Header/>
        <Home/>
        <About/>
        <Portfolio/>
        <Contact/>
    </ThemeProvider>
  </React.StrictMode>
)
