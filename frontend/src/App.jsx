import './App.css'
import { color } from './colors/color'
import NavBar from './components/NavBar'
import SplitScreen from './components/SplitScreen'


function App() {

  return (
    <div>
      <NavBar/>
      <div style={{paddingTop:'80px', backgroundColor:color[300], height:'100vh'}}>
      <SplitScreen/>
      </div>
    </div>
  )
}

export default App
