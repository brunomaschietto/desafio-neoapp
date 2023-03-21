import React from 'react'
import GlobalState from './contexts/GlobalState'
import { GlobalStyled } from '../GlobalStyled'
import Router from './routes/Router'
import { GlobalContext } from './contexts/GlobalContext'

const App = () => {
  const context = GlobalState()

  return (
    <GlobalContext.Provider value={context}>
      <Router />
    </GlobalContext.Provider>
  )
}

export default App