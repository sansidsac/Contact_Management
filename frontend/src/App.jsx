import './App.css'
import { color } from './colors/color'
import NavBar from './components/NavBar'
import SplitScreen from './components/SplitScreen'
import LeftSideComp from './components/LeftSideComp'
import RightSideComp from './components/RightSideComp'

function App() {

  return (
    <div>
      <NavBar/>
      <div style={{paddingTop:'80px', backgroundColor:color[300], height:'100vh'}}>
      <SplitScreen leftWidth={1} rightWidth={3}>
            <LeftSideComp/>  
            <RightSideComp/>
          </SplitScreen>
      </div>
    </div>
  )
}

export default App
