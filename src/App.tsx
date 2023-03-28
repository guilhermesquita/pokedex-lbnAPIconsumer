import {BrowserRouter} from 'react-router-dom'
import './App.css'
import { GlobalContext } from './context/GlobalContext'
import { Router } from './routes/Routes'

function App() {

  const context:{} = {
    teste: String
  }

  return (
    <GlobalContext.Provider value={context}>
      <BrowserRouter>
          <Router/>
      </BrowserRouter>'
    </GlobalContext.Provider>
  )
}

export default App
