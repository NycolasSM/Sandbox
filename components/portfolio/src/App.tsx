import './App.css'

import Header from './components/Header/Header'
import EditableTitle from './components/EditableTitle/EditableTitle'
import MainTest from './components/MainTest/MainTest'
import PortfolioHeader from './components/PortfolioHeader/PortfolioHeader'

function App() {

  return (
    <div className="App">
      <Header />
      <PortfolioHeader />
      {/* <MainTest titulo="Testando" color='gray'/> */}
      {/* <EditableTitle /> */}
    </div>
  )
}

export default App
