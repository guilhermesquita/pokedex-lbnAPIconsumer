import {BrowserRouter} from 'react-router-dom'
import './App.css'
import { GlobalContext } from './context/GlobalContext'
import { Router } from './routes/Routes'
import { ChakraProvider } from '@chakra-ui/react'

function App() {

  const context:{} = {
    teste: String
  }

  return (
    <GlobalContext.Provider value={context}>
      <ChakraProvider>
        <BrowserRouter>
            <Router/>
        </BrowserRouter>
      </ChakraProvider>
    </GlobalContext.Provider>
  )
}

export default App
