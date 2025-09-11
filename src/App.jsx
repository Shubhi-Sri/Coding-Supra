import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import NavBar from "./component/NavBar/NavBar"
import Home from "./component/Home/Home";
import Learn from "./component/Learn/Learn";
import Dsa from "./component/Learn/DSA/DSA";
import PlacementPrep from "./component/Placement-Prep/Placement-Prep";
import ResourceList from "./component/Resources/ResourceList";
import About from "./component/About/About";
function App() {
  

  return (
    <>
      <NavBar/>
      <Home/>
      <Learn/>
      <Dsa/>
      <PlacementPrep/>
      <ResourceList/>
      <About/>

    </>
  )
}

export default App;
