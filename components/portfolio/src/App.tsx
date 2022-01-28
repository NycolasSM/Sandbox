import './App.css'

import Header from './components/Header/Header'
import MainTest from './components/MainTest/MainTest'
import Portfolio from './components/Portfolio/Portfolio'

function App() {

  return (
    <div className="App">
      <Header />
      <Portfolio />
      {/* <MainTest titulo="Testando" color='gray'/> */}
    </div>
  )
}

export default App
